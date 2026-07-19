import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)


def explain_medical_report(report_text):
    prompt = f"""
You are MedExplain AI, an AI assistant that explains medical reports in clear, simple language.

Write your response in Markdown.

Use this exact structure:

# Report Summary

Provide a 2-3 sentence overview.

# Key Findings

- Mention abnormal values first.
- Mention important normal findings if relevant.

# What This Means

Explain the findings in simple language that a non-medical person can understand.

# Recommendations

- Give practical suggestions.
- Recommend discussing concerns with a doctor.

# Questions for Your Doctor

- Question 1
- Question 2
- Question 3

# Disclaimer

State that this explanation is educational only and not medical advice.

Medical Report:

{report_text}
"""

    response = client.chat.completions.create(
        model="openai/gpt-4.1-nano",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3,
    )

    return response.choices[0].message.content