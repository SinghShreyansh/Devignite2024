import requests

api_key = "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"

headers = {
    "Authorization": f"Bearer {api_key}",
}

response = requests.get("https://api.openai.com/v1/status", headers=headers)

if response.status_code == 200:
    print("API key is valid and working.")
else:
    print("API key may be expired or invalid. Check your key and try again.")
