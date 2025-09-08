export default function OutputSection({ data }) {
  return (
    <section className="mx-1 max-h-2/5">
      <div className="flex justify-between">
        <h2 className="w-32 pt-1 font-semibold text-center text-gray-600 bg-gray-100 rounded-t-sm texttext-lg">
          Output
        </h2>
      </div>
      <div className="p-4 overflow-auto font-mono text-sm bg-white border-4 border-gray-100 min-h-56">
        <pre className="whitespace-pre-wrap">{data}</pre>
      </div>
    </section>
  );
}
