const names = ['james', 'jimmy', 'jorah'];

export default function Home() {
  return (
    <div className="mx-auto my-16 flex max-w-sm flex-col flex-wrap items-start gap-4 rounded-xl bg-secondary p-4">
      <h1 className="text-3xl font-semibold">Welcome!</h1>
      {names.map((name) => (
        <button className="rounded-xl bg-blue-500 p-4 font-medium text-white hover:opacity-80 active:bg-white">
          By {name} now!
        </button>
      ))}
    </div>
  );
}
