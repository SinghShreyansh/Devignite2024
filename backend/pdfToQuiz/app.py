from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import asyncio
from quizz_generator import generate_quizz
from ui_utils import transform
import os
from PyPDF2 import PdfReader


# Load the environment variables
load_dotenv()

# Set the environment variable
os.environ["OPENAI_API_KEY"] = "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" # Add your OpenAI API key here

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = '../uploads/'

# function to convert pdf to quiz
async def txt_to_quizz(content):

    quizz = await generate_quizz(content)
    if quizz is not None:
        transformed_quizz = transform(quizz[0])
        return transformed_quizz

    return ''

# Function to convert PDF text to quiz from text array variable
def pdf_to_quizz(texts):
    all_questions = []
    # for text in texts:
    all_questions.extend(asyncio.run(txt_to_quizz(texts[0])))
    print(all_questions)
    return all_questions

# Route to extract text from a PDF and convert it to a quiz
@app.route('/extract-text', methods=['POST'])
def extract_text_from_pdf():
    # Check if a file is uploaded
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    print(file)

    # filename = 'notes.pdf'

    # # Construct the full path to the file
    # file_path = '../uploads/notes.pdf'


    # # Check if the file exists
    # if not os.path.isfile(file_path):
    #     return jsonify({'error': 'File not found'})

    # Check if the file is a PDF
    if file.filename.endswith('.pdf'):
        try:
            pdf_reader = PdfReader(file)
            texts = [page.extract_text() for page in pdf_reader.pages]
            quiz = pdf_to_quizz(texts)
            print(len(quiz))
            return jsonify({'quiz': quiz})
        except Exception as e:
            return jsonify({'error': str(e)})
    else:
        return jsonify({'error': 'File is not a PDF'})

if __name__ == "__main__":
    app.run(debug=True)