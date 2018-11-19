from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config

engine = create_engine(config.database_uri)

def get_bars():
    with engine.connect() as connection:
        rs = connection.execute("SELECT * FROM bars;")
        return [dict(row) for row in rs]

def get_bar(name):
    with engine.connect() as connection:
        query = sql.text("SELECT * FROM bars WHERE name = :name;")
        rs = connection.execute(query, name=name)
        result = rs.first()
        if(result is None):
            return None
        return dict(result)

def get_largest_spenders(name):
        with engine.connect() as connection:
                query = sql.text("SELECT DISTINCT(payer), SUM(total) as total FROM transactions \
                WHERE seller=:name GROUP BY(payer) ORDER BY total DESC;")
                rs = connection.execute(query, name=name)
                results = [dict(row) for row in rs]
                for r in results:
                        r['total'] = float(r['total'])
                return results

def get_popular_beers(name):
        with engine.connect() as connection:
                query = sql.text("SELECT DISTINCT(bought), COUNT(*) AS count FROM transactions \
                WHERE seller=:name AND \
                bought IN (SELECT name FROM items WHERE category='BEER') GROUP BY bought ORDER BY count DESC;")
                rs = connection.execute(query, name=name)
                return [dict(row) for row in rs]

def get_popular_manufacturers(name):
        with engine.connect() as connection:
                query = sql.text("SELECT DISTINCT(manufacturer), COUNT(*) as count FROM transactions, items \
                WHERE seller=:name AND manufacturer IS NOT NULL AND \
                bought=name GROUP BY(manufacturer) ORDER BY(count) DESC;")
                rs = connection.execute(query, name=name)
                return [dict(row) for row in rs]

def get_transactions_for_bar(name):
        with engine.connect() as connection:
                query = sql.text("SELECT * FROM transactions WHERE seller=:name;")
                rs = connection.execute(query, name=name)
                results = [dict(row) for row in rs]
                for r in results:
                        r['total'] = float(r['total'])
                return results

def get_drinkers():
        with engine.connect() as connection:
                query = sql.text("SELECT * FROM drinkers;")
                rs = connection.execute(query)
                return [dict(row) for row in rs]

def get_drinker(drinkerFirstName, drinkerLastName):
        with engine.connect() as connection:
                query = sql.text("SELECT * FROM drinkers WHERE firstName=:drinkerFirstName AND lastName=:drinkerLastName;")
                rs = connection.execute(query, drinkerFirstName=drinkerFirstName, drinkerLastName=drinkerLastName)
                result = rs.first()
                if(result is None):
                        return None
                return dict(result)

def get_drinker_items(name):
        with engine.connect() as connection:
                query = sql.text("SELECT DISTINCT(bought), COUNT(*) as count FROM transactions \
                WHERE payer=:name AND bought IN (SELECT name FROM items WHERE category='BEER') \
                GROUP BY(bought) ORDER BY (COUNT) DESC;")
                rs = connection.execute(query, name=name)
                return [dict(row) for row in rs]

def get_drinker_total_by_day(name, day):
        with engine.connect() as connection:
                query = sql.text("SELECT seller, SUM(total) as sum FROM transactions WHERE payer=:name AND issued LIKE CONCAT(:day, '%') GROUP BY (seller) ORDER BY (sum) DESC;")
                rs = connection.execute(query, name=name, day=day)
                results = [dict(row) for row in rs]
                for r in results:
                        r['sum'] = float(r['sum'])
                return (results)

def get_transactions_by_drinker(name):
        with engine.connect() as connection:
                query = sql.text("SELECT * FROM transactions WHERE payer=:name;")
                rs = connection.execute(query, name=name)
                results = [dict(row) for row in rs]
                for r in results:
                        r['total'] = float(r['total'])
                return results

def get_beers():
        with engine.connect() as connection:
                query = sql.text("SELECT * FROM items WHERE category='BEER';")
                rs = connection.execute(query)
                return [dict(row) for row in rs]

def get_beer(name):
        with engine.connect() as connection:
                query = sql.text("SELECT * FROM items WHERE name=:name AND category='BEER';")
                rs = connection.execute(query, name=name)
                result = rs.first()
                if(result is None):
                        return None
                return dict(result)

def get_sells_most(name):
        with engine.connect() as connection:
                query = sql.text("SELECT DISTINCT(seller), COUNT(*) as count FROM transactions \
                WHERE bought=:name GROUP BY(seller) ORDER BY(count) DESC;")
                rs = connection.execute(query, name=name)
                return [dict(row) for row in rs]

def get_consumers(name):
        with engine.connect() as connection:
                query = sql.text("SELECT DISTINCT(payer), COUNT(*) as count FROM transactions \
                WHERE bought=:name GROUP BY(payer) ORDER BY (count) DESC;")
                rs = connection.execute(query, name=name)
                return [dict(row) for row in rs]

def get_transactions_by_beer(name):
        with engine.connect() as connection:
                query = sql.text("SELECT * FROM transactions WHERE bought=:name;")
                rs = connection.execute(query, name=name)
                results = [dict(row) for row in rs]
                for r in results:
                        r['total'] = float(r['total'])
                return results

def get_item_categories():
        with engine.connect() as connection:
                query = sql.text("SELECT DISTINCT(category) as category FROM items;")
                rs = connection.execute(query)
                return [dict(row) for row in rs]

def get_items(bar, category):
        with engine.connect() as connection:
                query = sql.text("SELECT name FROM items WHERE category=:category AND name IN (SELECT DISTINCT(item) FROM sells WHERE bar=:bar);")
                rs = connection.execute(query, bar=bar, category=category)
                return [dict(row) for row in rs]

def get_item_price(bar, item):
        with engine.connect() as connection:
                query = sql.text("SELECT price FROM sells WHERE bar=:bar AND item=:item LIMIT 1;")
                rs = connection.execute(query, bar=bar, item=item)
                result = rs.first()
                if(result is None):
                        return None
                result = dict(result)
                result['price'] = float(result['price'])
                return dict(result)

def get_drinkers_by_city(name):
        with engine.connect() as connection:
                query = sql.text("SELECT firstName, lastName FROM drinkers WHERE city=(SELECT b.city FROM bars b WHERE b.name=:name LIMIT 1);")
                rs = connection.execute(query, name=name)
                return [dict(row) for row in rs]

def add_transaction(transactionId, seller, payer, bought, quantity, total, issued):
        with engine.connect() as connection:
                query = sql.text("INSERT INTO transactions VALUES (:transactionId, :seller, :payer, :bought, :quantity, :total, :issued);")
                rs = connection.execute(query, transactionId=transactionId, seller=seller, payer=payer, bought=bought, quantity=quantity, total=total, issued=issued)
                return dict(rs.first())

def query(qstr):
        with engine.connect() as connection:
                rs = connection.execute(qstr[1:-1])
                results = [dict(row) for row in rs]
                # print(results)
                for r in results:
                        for key in r.keys():
                                if(is_float(r.get(key))):
                                        r[key] = float(r.get(key))
                return results

def is_float(s):
        if(str(s).isdigit()):
                return False
        try:
                float(s)
                return True
        except ValueError:
                return False
        