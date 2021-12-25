from flask import Flask, request, jsonify
import pymongo
from pymongo import MongoClient
import pandas as pd
import json

app = Flask(__name__)
client = MongoClient("localhost", 27017, maxPoolSize = 50)
DB = client["HappinessReport"]
@app.route("/")
def index():
    return "This is Home!"

@app.route("/upload")
def uploadCSV():
    filePath = request.args.get('path',type = str)
    df = pd.read_csv(filePath)
    data = df.to_dict('recors')
    
    collection = DB[filePath]
    collection.insert_many(data)
    return("Added Data to database")
    
    