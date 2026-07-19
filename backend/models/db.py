from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

# Test the connection
client.admin.command("ping")
print("✅ MongoDB Connected Successfully!")

# Create/use database
db = client["medexplain"]

# Create/use collection
reports_collection = db["reports"]