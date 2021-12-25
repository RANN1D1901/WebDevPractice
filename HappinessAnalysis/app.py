from flask import Flask
import pymongo
from pymongo import MongoClient
import pandas as pd
import json

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello World!"