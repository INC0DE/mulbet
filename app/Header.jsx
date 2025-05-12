"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "MULBET" },
    { href: "/Events", label: "EVENTOS" },
    { href: "/Music", label: "MÚSICA" },
    { href: "/Contact", label: "CONTACTO" },
  ];
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed w-full top-0 z-50 bg-white dark:bg-black shadow-md transition-colors duration-300"
      isBlurred={false}
      shouldHideOnScroll
    >
      <div className="w-full flex justify-center">
        <NavbarMenuToggle
           onClick={() => setIsMenuOpen(prev => !prev)}
           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
           className="sm:hidden"
        />
        <NavbarContent
          className="hidden sm:flex gap-14 items-center"
          justify="center"
        >
          {navLinks.map(({ href, label }) => (
            <NavbarItem key={href}>
              <Link
                href={href}
                className={`text-white font-bold tracking-wide px-1 transition duration-200 border-b-2 ${
                  pathname === href
                    ? "border-purple"
                    : "border-transparent hover:border-purple"
                }`}
              >
                {label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>

      <NavbarMenu>
        {navLinks.map(({ href, label }) => (
          <NavbarMenuItem key={href}>
            <Link
              href={href}
              className={`block w-full text-white font-bold tracking-wide px-1 py-2 border-b-2 transition duration-200 ${
                pathname === href
                  ? "border-purple"
                  : "border-transparent hover:border-purple"
              }`}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
