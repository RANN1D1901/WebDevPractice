from flask import Flask, request, jsonify
import pymongo
from pymongo import MongoClient
import pandas as pd
import json

app = Flask(__name__)
client = MongoClient("localhost", 27017, maxPoolSize = 50)
print(client)
DB = client["HappinessReport"]
print(DB)
@app.route("/")
def index():
    return "This is Home!"
@app.route("/hello")
def hello():
    return "Hello Docker At last working"
@app.route("/upload")
def uploadCSV():
    filePath = request.args.get('path',type = str)
    df = pd.read_csv(filePath)
    data = df.to_dict('recors')
    
    collection = DB[filePath]
    collection.insert_many(data)
    return("Added Data to database")
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port= 8000)