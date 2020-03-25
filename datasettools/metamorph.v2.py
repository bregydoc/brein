#!/usr/bin/python3
import os
import pandas as pd
from sqlalchemy import create_engine

# Program to convert csv_s on dataframes and write in a MySQL database

DATASET_DIR = "." # root dir

def processcsv(db: any , filename: str):
    frame = pd.read_csv(filename)
    name = filename.replace(".csv", "").replace("_", " ")
    name = ''.join(x for x in name.title() if not x.isspace())
    # relative path
    frame.to_sql(name, con=db, if_exists="replace")

def resolve_entities(db, root_dir: str):
    for _, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".csv"):
                processcsv(db, file)

user: str|None = os.environ.get("MYSQL_USER")
password str|None = os.environ.get("MYSQL_PASSWORD")
host str|None = os.environ.get("MYSQL_HOST") # sqldb.minsky.cc
database str|None = os.environ.get("MYSQL_DATABASE")

uri = "mysql+mysqldb://{0}:{1}@{2}/{3}".format(user, password, host, database)
engine = create_engine(uri, echo=False)
resolve_entities(engine, DATASET_DIR)

# dbfilename = "database.sql"
# engine = create_engine("sqlite:///" + dbfilename, echo=False)
# resolve_entities(engine, DATASET_DIR)