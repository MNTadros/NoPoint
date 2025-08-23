from flask import Flask, request, jsonify
from flask_cors import CORS
from Interpreter import Interpreter
import io
import sys

app = Flask(__name__)
CORS(app, origins=["https://no-point.vercel.app"])

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"})

@app.route('/run', methods=['POST'])
def run_code():
    code = request.json.get('code', '')

    buffer = io.StringIO()
    sys_stdout = sys.stdout
    sys.stdout = buffer
    try:
        interpreter = Interpreter()
        interpreter.run_esolang(code)
        output = buffer.getvalue()
    except Exception as e:
        output = f"Error: {str(e)}"
    finally:
        sys.stdout = sys_stdout

    return jsonify({'output': output})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
