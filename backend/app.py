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

@app.route("/", methods=["GET"])
def home():
    return """
    <html>
        <head>
            <title>NoPoint Backend</title>
            <style>
                body { font-family: Arial, sans-serif; background: #f8f9fa; color: #222; margin: 40px; }
                .container { max-width: 600px; margin: auto; background: #fff; padding: 32px 40px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.07); }
                h1 { color: #0070f3; }
                code { background: #f1f1f1; padding: 2px 6px; border-radius: 4px; }
                a { color: #0070f3; text-decoration: none; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>NoPoint Backend</h1>
                <p>Welcome! Use the <a href="https://no-point.vercel.app/docs" target="_blank"><code>API docs</code></a> to execute code.</p>
            </div>
        </body>
    </html>
    """

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
