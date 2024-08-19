export default function CaptionTop({title}: {title: string}) {
  return (
    <div className="caption">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="mt-4">
        <span className="text-base font-normal text-gray-500 ">
        {title}
        </span>
      </div>
    </div>
  );
}
