export default function PageTitle({ label, children }) {
  return (
    <div className="mb-10 text-center">
      {label && (
        <span className="text-sm font-semibold uppercase tracking-widest text-sky-500">
          {label}
        </span>
      )}
      <h1 className="mt-2 text-3xl font-extrabold text-blue-700 sm:text-4xl">
        {children}
      </h1>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-sky-400" />
    </div>
  );
}
