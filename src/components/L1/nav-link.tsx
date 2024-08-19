import Link from "next/link";

type PropsType = {
  name: string;
  href: string;
};

export default function NavLinkItem(props: PropsType) {
  const { name, href } = props;
  return (
    <Link
      href={href}
      className="block py-2 px-3 text-gray-600 rounded md:p-0"
      aria-current="page"
    >
      {name}
    </Link>
  );
}
