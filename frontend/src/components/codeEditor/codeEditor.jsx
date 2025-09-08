import { useState } from 'react';
import EditorHeader from './editorHeader';
import Editor from './editorSection';
import OutputSection from './outputSection';

export default function CodeEditor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('Waiting for run code...');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('python');

  const handleRunCode = async () => {
    setLoading(true);
    setOutput('Running code...');

    try {
      const response = await fetch('http://0.0.0.0:8000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (response.ok) {
        setOutput(data.output || 'No output.');
      } else {
        setOutput(`Error: ${data.detail || 'An unknown error occurred.'}`);
      }
    } catch (error) {
      console.error('Failed to fetch from API:', error);
      setOutput(
        'Failed to connect to the API. Please check the server status.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col flex-1 w-2/3 h-full overflow-auto bg-white">
      <EditorHeader language={language} setLanguage={setLanguage} />
      <section className="relative m-2 overflow-scroll h-2/3">
        <Editor initialLang={language} onChange={setCode} />
        <button
          className="p-1 rounded-sm text-[#9484e3] hover:bg-[#13c0d1] hover:border-[#13c0d1] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#9484e3] disabled:bg-gray-400 disabled:cursor-not-allowed font-bold border border-[#9484e3] w-30 button_transition absolute right-2 bottom-2"
          onClick={handleRunCode}
          disabled={loading}>
          {loading ? 'Running...' : 'Run Code'}
        </button>
      </section>
      <OutputSection data={output} />
    </section>
  );
}
