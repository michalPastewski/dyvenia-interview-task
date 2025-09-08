# Interview Task

This is a UI prototype for AI chatbot assistant.

Project created using the following tools and libraries:
- Vite - react
- RadixUI
- MirroCode
- TailwildCSS

## Run project:

1. Clone repo:

```
git clone git@github.com:michalPastewski/dyvenia-interview-task.git
```

2. Start the backend to receive mocked responses from the server.
   - from root of the project go to backend folder
   ```
   cd backend
   ``` 
   - all this command to run server
   ```
   pip install -r requirements.txt.
then
   uvicorn main:app --reload --host="0.0.0.0" --port=8000
   ```

3. Launch the application
   - from root of the project go to the frontend file
   ```
   cd frontend
   ```
   - install dependencies and run the dev environment:
   ```
   npm install
   npm run dev
   ```
4. Open teh application =>  http://localhost:5173/ 
 
<br>
<br>
<br>

>NOTE:
>
> In this project, I was guided by my personal sense of aesthetics and UI intuition. To emphasise certain elements (buttons, AI output), I used the colour scheme presented on the website www.dywenia.com to maintain stylistic consistency.
>
> I encourage you to test the functionality and
also recommend checking out the application in offline mode. 
