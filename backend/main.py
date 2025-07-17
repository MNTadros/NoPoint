from fastapi import FastAPI, Request
from fastapi.responses import PlainTextResponse
from Interpreter import Interpreter

app = FastAPI()

@app.post("/run")
async def run_code(request: Request):
    data = await request.json()
    code = data.get("code", "")
    interpreter = Interpreter()
    import io, sys
    old_stdout = sys.stdout
    sys.stdout = mystdout = io.StringIO()
    interpreter.run_esolang(code)
    sys.stdout = old_stdout
    return PlainTextResponse(mystdout.getvalue())

# CORS for Vercel frontend
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://no-point-git-master-mnts-projects.vercel.app/"],  # Change to your Vercel domain for production
    allow_methods=["*"],
    allow_headers=["*"],
)
