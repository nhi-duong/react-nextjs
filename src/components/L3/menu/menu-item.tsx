import NavLinkItem from "@/components/L1/nav-link";
import { TypeMenu } from "@/types/menu";

type PropsType = {
  item: TypeMenu;
};
export default function MenuItem(props: PropsType) {
  const { item } = props;

  return (
    <li>
      <NavLinkItem name={item.name} href={item.href} />
    </li>
  );
}
