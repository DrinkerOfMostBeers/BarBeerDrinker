from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
from sqlalchemy import exc
import json

from BarBeerDrinker import database

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

@app.route("/api/bar", methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route("/api/bar/<name>", methods=["GET"])
def get_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified")
        bar = database.get_bar(name)
        if(bar is None):
            return make_response("No bar found with the given name", 404)
        return jsonify(bar, get_largest_spenders(name), get_popular_beers(name), get_popular_manufacturers(name), get_all_transactions_for(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

def get_largest_spenders(name):
    return database.get_largest_spenders(name)

def get_popular_beers(name):
    return database.get_popular_beers(name)

def get_popular_manufacturers(name):
    return database.get_popular_manufacturers(name)

def get_all_transactions_for(name):
    return database.get_transactions_for_bar(name)

@app.route("/api/drinker", methods=["GET"])
def get_drinkers():
    return jsonify(database.get_drinkers())

@app.route("/api/drinker/<name>", methods=["GET"])
def get_drinker(name):
    try:
        if name is None:
            raise ValueError("Drinker name wasn't specified")
        firstName = name[0:name.index(' ')]
        lastName = name[name.index(' ') + 1:]
        drinker = database.get_drinker(firstName, lastName)
        if(drinker is None):
            return make_response("No drinker found with the given name", 404)
        drinkerItems = get_drinker_items(name)
        drinkerTotals = get_drinker_total_by_day(name, "MTWRFSU")
        return jsonify(drinker, drinkerItems, drinkerTotals)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

def get_drinker_items(name):
    return database.get_drinker_items(name)

def get_drinker_total_by_day(name, day):
    if len(day) == 0:
        return []
    curr = database.get_drinker_total_by_day(name, day[0:1])
    return  [curr] + get_drinker_total_by_day(name, day[1:])

@app.route("/api/drinker/<name>/transactions", methods=["GET"])
def get_transactions_by_drinker(name):
    try:
        if name is None:
            raise ValueError("Drinker name wasn't specified")
        firstName = name[0:name.index(' ')]
        lastName = name[name.index(' ') + 1:]
        transactions = database.get_transactions_by_drinker(firstName + ' ' + lastName)
        if(transactions is None):
            return make_response("No drinker found with the given name", 404)
        return jsonify(transactions)
    except ValueError as e:
         return make_response(str(e), 400)
    except Exception as e:
         return make_response(str(e), 500)

@app.route("/api/beer", methods=["GET"])
def get_beers():
    return jsonify(database.get_beers())

@app.route("/api/beer/<name>", methods=["GET"])
def get_beer(name):
    try:
        if (name is None):
            raise ValueError("Beer name wasn't specified")
        beer = database.get_beer(name)
        if(beer is None):
            return make_response("No beer found with the given name", 404)
        return jsonify(beer, get_sells_most(name), get_consumers(name), get_transactions_by_beer(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

def get_sells_most(name):
    return database.get_sells_most(name)

def get_consumers(name):
    return database.get_consumers(name)

def get_transactions_by_beer(name):
    return database.get_transactions_by_beer(name)

@app.route("/api/<bar>/items/<category>", methods=["GET"])
def get_items(bar, category):
    try:
        if(bar is None):
            raise ValueError("Bar wasn't specified")
        if(category is None):
            raise ValueError("Category wasn't specified")
        items = database.get_items(bar, category)
        if(items is None):
            return make_response("No items found in the database", 404)
        return jsonify(items)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/categories", methods=["GET"])
def get_categories():
    try:
        categories = database.get_item_categories()
        if(categories is None):
            return make_response("No categories found in the items table", 404)
        return jsonify(categories)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/bar/<name>/drinkers", methods=["GET"])
def get_drinkers_by_city(name):
    try:
        if(name is None):
            raise ValueError("Bar name not specified")
        drinkers = database.get_drinkers_by_city(name)
        if(drinkers is None):
            return make_response("No drinkers were found living in the same city", 404)
        return jsonify(drinkers)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/<bar>/<item>/get_item_price", methods=["GET"])
def get_item_price(bar, item):
    try:
        if(bar is None):
            raise ValueError("Bar name not specified")
        if(item is None or item == "null"):
            raise ValueError("Item name not specified")
        price = database.get_item_price(bar, item)
        if(price is None):
            return make_response("No price found for " + item + " at " + bar, 404)
        return jsonify(price)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/add_transaction", methods=["POST"])
def add_transaction():
    body = json.loads(request.data)
    formData = body[1]
    transactionId = formData['transactionId']
    seller = body[0]
    payer = formData['payer']
    total = body[3]
    issued = body[2]
    response = None
    for item in formData['itemsArray']:
        try:
            response = database.add_transaction(transactionId, seller, payer, item['name'], item['quantity'], total, issued)
        except exc.IntegrityError as e:
            if(str(e.__cause__).find("Column 'seller' cannot be null") != -1):
                response = "Violates Assertion 2: Transaction can't be issued when the bar isn't open"
            else:
                response = "Violates Constraint: " + str(e.__cause__)
        except Exception as e:
            response = str(e.__cause__)

    return jsonify(response)

@app.route("/api/query", methods=["POST"])
def query():
    query = str(request.data)[1:]
    response = None
    try:
        if(query is None):
            raise ValueError("Query not specified")
        response = database.query(query)
    except exc.IntegrityError as e:
        cause = str(e.__cause__)
        if(cause.find("Column 'bar' cannot be null") != -1):
            response = "Violates Assertion 1: Drinker can't frequent a bar in a different city"
        elif(cause.find("Column 'seller' cannot be null") != -1):               
            response = "Violates Assertion 2: Transaction can't be issued when the bar isn't open"
        elif(cause.find("Column 'item' cannot be null") != -1):
            response = "Violates Assertion 3: For every two beers, one must be expensive in all bars"
        else:
            response = "Violates Constraint: " + str(e.__cause__)
    except Exception as e:
            response = str(e.__cause__)

    return jsonify(response)
        