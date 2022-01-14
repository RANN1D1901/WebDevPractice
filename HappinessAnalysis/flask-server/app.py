from flask import Flask, request, jsonify
import pymongo
from pymongo import MongoClient
import pandas as pd
import json

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
DB = client["HappinessReport"]

@app.route("/")
def index():
    return "Hi Connected"
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
@app.route("/post")
def post():
    import datetime
    post = {"author": "Mike",
        "text": "My first blog post!",
        "tags": ["mongodb", "python", "pymongo"],
        "date": datetime.datetime.utcnow()}
    posts = DB.posts
    post_id = posts.insert_one(post).inserted_id
    return(post_id)
    
@app.route("/files")
def allFiles():
    print(DB)
    collection = DB['2019.csv']
    return (collection)
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port= 8000)