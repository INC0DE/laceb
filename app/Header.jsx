"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

const Header = () => {
  const [pathname, setPathname] = useState("");
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (route) => currentPath === route;

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  //Menu Tel//

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { item: "Inicio", href: "/" },
    {
      item: "Calibracion",
      href: "/Services/Calibracion",
    },
    {
      item: "Mantenimiento",
      href: "/Services/Mantenimiento",
    },
    { item: "Nosotros", href: "/Us" },
    { item: "Contacto", href: "/Contact" },
  ];

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand>
        <Image
          src="/LACEB.png"
          alt="herolaceb"
          width={180}
          height={100}
          priority
        />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="/"
            className={`text-gray hover:text-green transition-colors ${
              isActive("/") ? "text-green font-semibold" : ""
            }`}
          >
            Inicio
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent text-gray hover:text-green transition-colors ${
                  currentPath.startsWith("/Services")
                    ? "text-green font-semibold"
                    : ""
                }`}
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Servicios
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="Servicios"
            className={{
              base: "gap-2 text-gray hover:text-green transition-colors",
            }}
          >
            <DropdownItem
              key="Mantenimiento"
              href="/Services/Mantenimiento"
              className={
                currentPath === "/Services/Mantenimiento"
                  ? "text-green font-semibold"
                  : ""
              }
            >
              Mantenimiento
            </DropdownItem>
            <DropdownItem
              key="Calibracion"
              href="/Services/Calibracion"
              className={
                currentPath === "/Services/Calibracion"
                  ? "text-green font-semibold"
                  : ""
              }
            >
              Calibración
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            href="/Us"
            className={`text-gray hover:text-green transition-colors ${
              isActive("/Us") ? "text-green font-semibold" : ""
            }`}
          >
            Nosotros
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/Contact"
            className={`text-gray hover:text-green transition-colors ${
              isActive("/Contact") ? "text-green font-semibold" : ""
            }`}
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem>
          <Image
            src="/assets/emacredition.png"
            alt="herolaceb"
            width={150}
            height={100}
            priority
          />
        </NavbarItem>
      </NavbarContent>

      {typeof window !== "undefined" && (
        <NavbarMenu className="sm:hidden bg-white shadow-lg rounded-lg p-4">
          {menuItems.map(({ item, services, href }, index) => (
            <NavbarMenuItem key={`${href}-${index}`}>
              <Link
                href={href}
                className="block w-full rounded-lg transition-all duration-300 hover:bg-green"
              >
                <div className="p-6 border border-gray rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                  <p className="text-3xl font-semibold text-blue">{item}</p>
                </div>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
};

export default Header;
