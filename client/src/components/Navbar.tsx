import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Consultoría", href: "https://www.coolhuntingg.com", external: true },
    { name: "Formación", href: "https://www.coolhuntinguniversity.com", external: true },
    { name: "Autor", href: "/autor", external: false },
    { name: "Speaker", href: "/#speaker", external: false },
    { name: "Contacto", href: "#contacto", external: false, isAnchor: true },
  ];

  const scrollToContact = (event?: MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    setIsOpen(false);
    const target = document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#contacto";
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-primary">
          MSO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ) : link.isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                onClick={scrollToContact}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href}>
                <span className={cn(
                  "text-sm font-medium transition-colors cursor-pointer",
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}>
                  {link.name}
                </span>
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ) : link.isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                onClick={scrollToContact}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                <span className={cn(
                  "text-base font-medium transition-colors cursor-pointer",
                  location === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}>
                  {link.name}
                </span>
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
}
