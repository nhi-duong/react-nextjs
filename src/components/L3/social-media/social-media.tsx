import IconFB from "@/components/L1/icons/icon-facebook";
import IconTwitter from "@/components/L1/icons/icon-twitter";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="pr-16 flex mt-4 sm:justify-center sm:mt-0 ">
      <Link href="#" className="text-gray-500 hover:text-gray-900 ">
        <IconFB />
      </Link>
      <Link
        href="#"
        className=" text-gray-500 hover:text-gray-900 dark:hover:text-white "
      >
        <IconTwitter />
      </Link>
    </div>
  );
}
