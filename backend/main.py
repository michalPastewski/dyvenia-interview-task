from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from sse_starlette.sse import EventSourceResponse
import asyncio
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"status": "ok"}

@app.post("/chat")
async def chat():
    # Symulacja odpowiedzi chatbota
    # Będziemy to rozbudowywać o SSE
    return {"response": "Hello from your AI Chatbot!"}

@app.post("/execute")
async def execute_code():
    # Mockowa odpowiedź dla wykonania kodu
    return {"output": "Code executed."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)