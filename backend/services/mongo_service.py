from models.db import reports_collection


def save_report(filename, extracted_text, ai_explanation):
    report = {
        "filename": filename,
        "extracted_text": extracted_text,
        "ai_explanation": ai_explanation
    }

    result = reports_collection.insert_one(report)

    return str(result.inserted_id)