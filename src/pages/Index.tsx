import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/b3ff9782-fdd1-4e94-9063-63c58c4e7087.jpg";
const ABOUT_IMAGE = "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/d57d7118-39eb-4775-b452-8f955a2b2d43.jpg";

const NAV_ITEMS = [
  { label: "О бренде", href: "#about" },
  { label: "Изделия", href: "#catalog" },
  { label: "Ткани", href: "#fabrics" },
  { label: "Упаковка", href: "#packaging" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["about", "catalog", "fabrics", "packaging", "delivery", "contacts"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--site-bg)", color: "var(--site-text)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(240,238,233,0.96)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(181,144,58,0.2)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollTo("#about"); }}
            className="font-cormorant text-2xl tracking-[0.3em] font-light"
            style={{ color: "var(--gold)" }}
          >
            Финиста
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

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(30,34,40,0.45) 0%, rgba(30,34,40,0.25) 50%, rgba(30,34,40,0.72) 100%)" }}
        />
        <div className="relative z-10 text-center px-6">
          <h1
            className="font-cormorant text-7xl md:text-9xl font-light tracking-[0.12em] leading-none mb-4 animate-fade-in-up opacity-0 delay-200"
            style={{ color: "#f0eee9", animationFillMode: "forwards" }}
          >
            Финиста
          </h1>
          <div
            className="gold-line mx-auto mb-6 animate-fade-in opacity-0 delay-400"
            style={{ width: "80px", animationFillMode: "forwards" }}
          />
          <p
            className="font-cormorant italic text-xl md:text-2xl font-light tracking-widest animate-fade-in-up opacity-0 delay-500"
            style={{ color: "rgba(240,238,233,0.85)", animationFillMode: "forwards" }}
          >
            Тихая роскошь из 100% шёлка
          </p>
          <div className="mt-12 animate-fade-in-up opacity-0 delay-700" style={{ animationFillMode: "forwards" }}>
            <button className="btn-gold" onClick={() => scrollTo("#catalog")}>
              <span>Смотреть каталог</span>
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-700"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="font-montserrat text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>Scroll</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </div>
      </section>

      {/* 1. О БРЕНДЕ */}
      <section id="about" className="py-32 px-6" style={{ backgroundColor: "var(--site-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full border"
                style={{ borderColor: "var(--site-accent)" }}
              />
              <img
                src={ABOUT_IMAGE}
                alt="О бренде Финиста"
                className="w-full h-[600px] object-cover relative z-10"
              />
              <div
                className="absolute bottom-6 right-6 z-20 px-5 py-4"
                style={{ backgroundColor: "var(--site-section)", border: "1px solid rgba(181,144,58,0.35)" }}
              >
                <p className="font-cormorant text-3xl font-light" style={{ color: "var(--gold)" }}>2018</p>
                <p className="font-montserrat text-[0.6rem] tracking-[0.2em] uppercase mt-1" style={{ color: "var(--site-text)", opacity: 0.6 }}>Основан в Петербурге с любовью к благородным тканям</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                О бренде
              </p>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6" style={{ color: "var(--site-text)" }}>
                Каждая деталь —<br />
                <em>произведение искусства</em>
              </h2>
              <div className="gold-line mb-8" />
              <p className="font-montserrat text-sm leading-relaxed mb-4" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                Финиста — петербургский бренд, воспевающий эстетику натурального итальянского шелка. В наших лимитированных коллекциях лаконичность кроя встречается с безупречным вниманием к деталям, предлагая вам индивидуальный подход в готовых решениях.
              </p>
              <p className="font-montserrat text-sm leading-relaxed mb-4" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                Мы глубоко погружаемся в каждый этап создания: тщательно отбираем лучшие премиальные ткани из Италии, годами выверяем идеальный крой и воплощаем задуманное в изящных, самодостаточных моделях.
              </p>
              <p className="font-montserrat text-sm leading-relaxed mb-4" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                Выбирая сочетание безупречного материала и продуманного силуэта, вы получаете по-настоящему эксклюзивный образ.
              </p>
              <p className="font-montserrat text-sm leading-relaxed mb-10" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                Ознакомьтесь с нашей текущей коллекцией — каждое изделие доступно к покупке. Пожалуйста, уточняйте наличие интересующих вас моделей у наших консультантов.
              </p>

              <div className="flex gap-12">
                {[["100%", "Натуральные ткани"], ["100%", "Ручная работа"]].map(([num, label]) => (
                  <div key={label}>
                    <p className="font-cormorant text-4xl font-light" style={{ color: "var(--gold)" }}>{num}</p>
                    <p className="font-montserrat text-[0.6rem] tracking-[0.15em] uppercase mt-1" style={{ color: "var(--site-muted)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ИЗДЕЛИЯ */}
      <section id="catalog" className="py-24 px-6" style={{ backgroundColor: "var(--site-section)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--site-text)" }}>
              Изделия
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>
        </div>
      </section>

      {/* 3. ТКАНИ */}
      <section id="fabrics" className="py-32 px-6" style={{ backgroundColor: "var(--site-bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--site-text)" }}>
              Ткани
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>
        </div>
      </section>

      {/* 4. УПАКОВКА */}
      <section id="packaging" className="py-32 px-6" style={{ backgroundColor: "var(--site-section)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--site-text)" }}>
              Упаковка
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="flex flex-col gap-8 max-w-xl mx-auto">
            {[
              { icon: "Box", title: "Коробка из плотного белого картона" },
              { icon: "Feather", title: "Шуршащая декоративная бумага тишью" },
              { icon: "ShoppingBag", title: "Мягкий и приятный на ощупь мешочек с логотипом из хлопкового муслина" },
              { icon: "Sparkles", title: "Карта Таро с предсказанием" },
              { icon: "Gift", title: "Готово к подарку. Идеальна с первой секунды." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-6">
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center border"
                  style={{ borderColor: "rgba(181,144,58,0.35)" }}
                >
                  <Icon name={item.icon} fallback="Package" size={16} style={{ color: "var(--gold)" }} />
                </div>
                <p className="font-montserrat text-sm leading-relaxed pt-2" style={{ color: "var(--site-text)", fontWeight: 300 }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ДОСТАВКА */}
      <section id="delivery" className="py-32 px-6" style={{ backgroundColor: "var(--site-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--site-text)" }}>
              Доставка
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="max-w-sm mx-auto">
            <div
              className="flex flex-col items-center text-center p-10"
              style={{ backgroundColor: "var(--site-bg)", border: "1px solid var(--site-accent)" }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center mb-6 border"
                style={{ borderColor: "rgba(181,144,58,0.35)" }}
              >
                <Icon name="Map" fallback="Truck" size={22} style={{ color: "var(--gold)" }} />
              </div>
              <h3 className="font-cormorant text-xl font-light mb-4" style={{ color: "var(--site-text)" }}>
                По всей России
              </h3>
              <p className="font-montserrat text-xs leading-relaxed" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                Доставка по всей России за 2–5 рабочих дней. Трек-номер на каждый заказ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. КОНТАКТЫ */}
      <section id="contacts" className="py-32 px-6" style={{ backgroundColor: "var(--site-section)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-4" style={{ color: "var(--site-text)" }}>
            Контакты
          </h2>
          <div className="gold-line mx-auto mb-10" />

          <div className="flex flex-col items-center gap-6">
            {[
              { label: "Инстаграм", value: "@finista.studio" },
              { label: "Telegram", value: "@finista_studio" },
              { label: "Max", value: "@finista_studio" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <p className="font-montserrat text-xs tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>
                  {item.label}:
                </p>
                <p className="font-montserrat text-sm font-light" style={{ color: "var(--site-text)" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--site-accent)", backgroundColor: "var(--site-section)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="font-montserrat text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "var(--site-muted)" }}>
            © 2026 Финиста. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}