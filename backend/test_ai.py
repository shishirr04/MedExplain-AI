from services.ai_service import explain_medical_report

sample_report = """
Hemoglobin: 10.5 g/dL
Normal: 12-16 g/dL

Vitamin D: 18 ng/mL
Normal: 30-100 ng/mL
"""

result = explain_medical_report(sample_report)

print(result)