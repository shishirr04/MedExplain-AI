from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from models.db import db
from routes.upload import upload_bp
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

app.register_blueprint(upload_bp)

@app.route("/")
def home():
    return {
        "status": "success",
        "message": "Welcome to MedExplain AI Backend 🚀"
    }

@app.route("/health")
def health():
    return {
        "status": "healthy",
        "secret_key": os.getenv("SECRET_KEY")
    }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))