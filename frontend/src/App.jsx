import './App.css';
import Chatbot from './components/chatbot/chatbot';
import CodeEditor from './components/codeEditor/codeEditor';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="px-2 pt-2 flex flex-col h-screen bg-[#9484e3]">
      <Header />
      <main className="flex flex-1 overflow-hidden rounded-b-md">
        <Chatbot />
        <CodeEditor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
