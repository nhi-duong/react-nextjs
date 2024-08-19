import Logo from "@/components/L1/logo/logo";
import CopyRight from "@/components/L3/copyright/copy-right";
import SocialMedia from "../social-media/social-media";
import { TypeFooterMenu } from "@/types/menu";
import FooterMenu from "./footer-menu";

export default function Footer() {
  const footerMenus: TypeFooterMenu[] = [
    {
      caption: "Explore",
      subItems: [
        { name: "Design features", href: "/design" },
        { name: "Prototyping", href: "/prototyping" },
        { name: "Design systems", href: "/design" },
        { name: "Pricing", href: "/pricing" },
        { name: "Security", href: "/security" },
      ],
    },
    {
      caption: "Resources",
      subItems: [
        { name: "Best practices", href: "/best practices" },
        { name: "Support", href: "/support" },
        { name: "Developers", href: "/developers" },
        { name: "Learn design", href: "/design" },
        { name: "Releases", href: "/releases" },
      ],
    },
    {
      caption: "Community",
      subItems: [
        { name: "Discussion Forums", href: "/ community" },
        { name: "Code of Conduct", href: "/community" },
        { name: "Community Resources", href: "/community" },
        { name: "Contributing", href: "/community" },
        { name: "Concurrent Mode", href: "/community" },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="pt-20"></hr>
        <Logo />
        <div className="mb-6 md:mb-0"></div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 pl-56 ">
          {footerMenus.map((item, idx) => (
            <FooterMenu
              key={idx}
              caption={item.caption}
              subItems={item.subItems}
            />
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <CopyRight />
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}
