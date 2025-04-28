import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";

const menuItems = [
  { item: "Inicio", id: 1, href: "/" },
  { item: "Servicios", id: 2, href: "/Services" },
  { item: "Nosotros", id: 3, href: "/Us" },
  { item: "Contacto", id: 4, href: "/Contact" },
];

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          src="/LACEB.png"
          alt="herolaceb"
          width={170}
          height={100}
          priority
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-1 xl:gap-4" justify="center">
        {menuItems.map((link, href) => (
          <NavbarItem key={link.id}>
            <Link href={link.href} className="text-gray">
              {link.item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Image
            src="/assets/emacredition.png"
            alt="herolaceb"
            width={150}
            height={100}
            priority
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
