import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "./data";

interface NavbarProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function Navbar({ activeSection, menuOpen, setMenuOpen, scrollTo }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: "rgba(255,255,255,0.97)",
        borderBottom: "1px solid rgba(181,144,58,0.15)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollTo("#about"); }}
          className="flex items-center gap-3 font-cormorant text-4xl tracking-[0.3em] font-light"
          style={{ color: "var(--gold)" }}
        >
          <img src="https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/27b6846a-0237-4a1a-8fc3-1026a6139825.png" alt="Финиста" className="h-14 w-14 object-contain" style={{ mixBlendMode: "multiply", isolation: "isolate" }} />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className="nav-link"
              style={{ color: activeSection === item.href.replace("#", "") ? "var(--gold)" : undefined }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden"
          style={{ color: "var(--gold)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden px-8 pb-6 flex flex-col gap-5"
          style={{ backgroundColor: "rgba(240,238,233,0.98)", borderTop: "1px solid rgba(181,144,58,0.15)" }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
