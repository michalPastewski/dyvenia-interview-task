import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function WarningAlert({ info }) {
  return (
    <div className="absolute flex items-center w-1/2 gap-2 p-2 px-1 translate-x-1/2 bg-yellow-100 border border-yellow-500 rounded-sm right-1/2">
      <ExclamationTriangleIcon className="w-8 h-8 pl-2 text-xl text-yellow-500" />
      <p className="py-1 text-yellow-700">{info}</p>
    </div>
  );
}
