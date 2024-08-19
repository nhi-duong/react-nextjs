export default function Title({ title }: { title: string }) {
  return (
    <div className=" text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate">
      {title}
    </div>
  );
}
