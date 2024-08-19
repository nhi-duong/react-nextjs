export default function CaptionBot({title}: {title: string}) {
  return (
    <div className="container mt-16  mb-10">
      <h2 className="text-3xl   from-neutral-700 font-semibold">
      {title}
      </h2>
      <span className="text-gray-500">
      {title}
      </span>
    </div>
  );
}
