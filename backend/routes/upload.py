from flask import Blueprint, request, jsonify
import os
from services.pdf_service import extract_text_from_pdf
from services.ai_service import explain_medical_report
from services.mongo_service import save_report
from models.db import reports_collection
from bson import ObjectId

upload_bp = Blueprint("upload", __name__)

UPLOAD_FOLDER = "uploads"


@upload_bp.route("/upload", methods=["POST"])
def upload_file():

    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    extracted_text = extract_text_from_pdf(file_path)

    ai_explanation = explain_medical_report(extracted_text)

    report_id = save_report(
        file.filename,
        extracted_text,
        ai_explanation
    )

    return jsonify({
        "status": "Success",
        "report_id": report_id,
        "filename": file.filename,
        "extracted_text": extracted_text,
        "ai_explanation": ai_explanation
    })


@upload_bp.route("/history", methods=["GET"])
def get_history():

    reports = []

    cursor = reports_collection.find().sort("_id", -1)

    for report in cursor:

        reports.append({
            "id": str(report["_id"]),
            "filename": report["filename"],
            "ai_explanation": report["ai_explanation"]
        })

    return jsonify(reports)