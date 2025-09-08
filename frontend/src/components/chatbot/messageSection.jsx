import { useEffect, useRef } from 'react';

export default function MessageSection({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <section className="flex-1 mx-2 mt-2 overflow-y-auto rounded-md">
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
            className={`w-7/12 m-2 mb-4 border rounded-md ${messageStyle} bg-white`}>
            <p className="px-2 py-1 text-xs font-semibold text-gray-400">
              {message.name}:
            </p>
            <p className="px-2 py-2 text-left">{message.message}</p>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </section>
  );
}
