import './App.css';
import Chatbot from './components/chatbot/chatbot';
import CodeEditor from './components/codeEditor/codeEditor';
import Footer from './components/footer';
import Header from './components/header';
import { useApiStatus } from './context/apiStatus';
import WarningAlert from './components/warningAlert';

function App() {
  const { isOnline } = useApiStatus();
  return (
    <div className="px-2 pt-2 flex flex-col h-screen bg-[#9484e3]">
      <Header />
      <main className="flex flex-1 overflow-hidden rounded-b-md">
        <Chatbot />
        <CodeEditor />
        {!isOnline && (
          <WarningAlert info={'Before you start check the internet connection.'} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
