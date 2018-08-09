# coding=utf-8

from datetime import datetime
from sqlalchemy import create_engine, Column, String, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import psycopg2

DATABASE_URL = os.environ['DATABASE_URL']

conn = psycopg2.connect(DATABASE_URL, sslmode='require')
# engine = create_engine('postgres://vpasvplweihqcc:c55d15b4c08f459f10e6a7d2ce6bcc1f82b062ba3f1467946c3a43ce58a38d7b@ec2-23-21-166-148.compute-1.amazonaws.com:5432/d24mvkca272k80')
Session = sessionmaker(bind=conn)

Base = declarative_base()


class Entity():
    id = Column(Integer, primary_key=True)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    last_updated_by = Column(String)

    def __init__(self, created_by):
        self.created_at = datetime.now()
        self.updated_at = datetime.now()
        self.last_updated_by = created_by
