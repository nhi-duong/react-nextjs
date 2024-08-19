import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="https://flowbite.com/" className="flex items-center pb-6">
      <Image
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8 me-3 w-8"
        alt="FlowBite Logo"
        width={32}
        height={32}
      />
    </Link>
  );
}
