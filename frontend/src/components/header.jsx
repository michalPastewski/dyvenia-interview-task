import { useApiStatus } from '../context/apiStatus';

export default function Header() {
  const { isOnline, loading } = useApiStatus();

  return (
    <header className="flex items-center justify-between h-16 bg-gray-50 shadow-md px-4 border-b border-[#9484e3] rounded-t-md">
      <h1 className="text-2xl font-semibold text-gray-800 font-poppins">
        Code snippet chat
      </h1>

      <div className="flex items-center space-x-2">
        {loading ? (
          <>
            <span className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-700">Offline</span>
          </>
        ) : (
          <>
            <span
              className={`w-3 h-3 rounded-full ${
                isOnline ? 'bg-green-500' : 'bg-red-500'
              } ${!isOnline && 'animate-pulse'}`}></span>
            <span className="text-sm text-gray-700">
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </>
        )}
      </div>
    </header>
  );
}
