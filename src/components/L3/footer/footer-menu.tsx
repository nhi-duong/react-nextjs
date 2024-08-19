import NavLinkItem from "@/components/L1/nav-link";
import { TypeMenu } from "@/types/menu";

type PropsType = {
  caption: string;
  subItems: TypeMenu[];
};

export default function FooterMenu(props: PropsType) {
  const { caption, subItems } = props;

  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {caption}
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {subItems.map((item, idx) => (
          <li key={idx} className="mb-2 last:mb-0  ">
            <NavLinkItem name={item.name} href={item.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}
