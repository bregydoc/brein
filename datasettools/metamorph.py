#!/usr/bin/python3
import os
import csv
import ast
import datetime
from dateutil import parser as date_parser
from typing import Dict, List, Tuple

STRICT = False
SAMPLES = 3
DATASET_DIR = "."

# !!!!!!!!!!!   WARNING  !!!!!!!!!!!!
# DON'T USE THAT, USE metamorph.v2.py
#

def test_type(val: any) -> type:
    t: type = None
    try:
        t = type(ast.literal_eval(val))
    except:
        try:
            time = date_parser.parse(val)
            if not time == None:
                t = datetime.datetime
        except:
            t = str
    return t


def process_csv(csv_file: str) -> Tuple[str, Dict[str, type]]:
    with open(csv_file, 'r') as file:
        rows = csv.reader(file)
        samp = SAMPLES
        types = {}
        header = []
        for row in rows:
            # print(row)  # print only the header and (samp - 1) samples
            if samp == SAMPLES:
                header = row
                for f in header:
                    types[f] = None
                samp -= 1
                continue
            if samp < 1:
                name = csv_file.replace(".csv", "").replace("_", " ")
                name = ''.join(x for x in name.title() if not x.isspace())
                return name, types
            # do everything
            for i, field in enumerate(row):
                t = test_type(field)  # type inference
                if types[header[i]] == None:
                    types[header[i]] = t
                    continue
                if types[header[i]] != t:
                    if STRICT:
                        raise "Inconsistence type, if you want to evade that, set STRICT as false"
                    else:
                        types[header[i]] = str
            samp -= 1


def resolve_entities(root_dir: str) -> List[Tuple[str, Dict[str, type]]]:
    entities: List[Tuple[str, Dict[str, type]]] = []
    for _, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".csv"):
                types = process_csv(file)
                entities.append(types)
    return entities


ents = resolve_entities(DATASET_DIR)
for name, ent in ents:
    print(name)
    for param in list(ent.keys()):
        print(ent[param])

# DEPRECATED, BREGY IS SO STUPID
# PLEASE USE metamorph.v2.py
