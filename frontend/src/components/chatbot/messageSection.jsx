import { useEffect, useRef } from 'react';

export default function MessageSection({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex-1 mx-2 mt-2 overflow-y-auto bg-white rounded-md">
      {messages.length === 0 && (
        <div className="w-10/12 p-4 m-auto mt-12 text-gray-500 rounded-md bg-gray-50">
          No messages yet.
        </div>
      )}

      {messages.map((message, index) => {
        const messageStyle =
          message.name === 'user' ? 'user_message' : 'bot_message';

        return (
          <div
            key={index}
            className={`w-10/12 m-2 mb-4 border rounded-md ${messageStyle}`}>
            <p className="px-2 py-1 text-xs font-semibold text-left text-gray-400">
              {message.name}:
            </p>
            <p className="py-2 pb-2">{message.message}</p>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
