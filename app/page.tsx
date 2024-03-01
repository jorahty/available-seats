const names = ['james', 'jimmy', 'jorah'];

export default function Home() {
  return (
    <div className="max-w-sm mx-auto my-16 bg-zinc-800 p-4 rounded-xl flex gap-4 flex-wrap flex-col items-start">
      <h1 className="text-3xl font-semibold">Welcome!</h1>
      {names.map((name) => (
        <button className="bg-blue-500 p-4 rounded-xl font-medium hover:opacity-80 active:bg-white">
          By {name} now!
        </button>
      ))}
    </div>
  );
}
