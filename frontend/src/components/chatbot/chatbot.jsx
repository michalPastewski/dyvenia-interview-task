import { useState } from 'react';
import ChatbotInput from './chatbotInput';
import MessageSection from './messageSection';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = { name: 'user', message: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    try {
      const response = await fetch('http://0.0.0.0:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { name: 'bot', message: data.response },
        ]);
        setInputValue('');
      }
    } catch (error) {
      console.error('Failed to fetch from API:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const isActive = inputValue.trim() !== '';

  return (
    <aside className="flex flex-col border-r border-gray-200 w-80 bg-gray-50 min-w-1/3">
      <h2 className="py-2 pl-4 font-semibold text-left border-b border-gray-300 p-l-4 h-[47px]">
        AI Assistant
      </h2>
      <MessageSection messages={messages} />
      <ChatbotInput
        value={inputValue}
        onChange={handleInputChange}
        handleSend={handleSend}
        activateButton={isActive}
      />
    </aside>
  );
}
