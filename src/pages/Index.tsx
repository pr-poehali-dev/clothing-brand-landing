import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/b3ff9782-fdd1-4e94-9063-63c58c4e7087.jpg";
const HERO_MODEL_IMAGE = "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/97b22331-9a80-4274-ac73-12481b46cd33.jpg";
const ABOUT_IMAGE = "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/bb68429f-7825-48a0-948e-e96f241fec9a.jpg";

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
            className="flex items-center gap-3 font-cormorant text-4xl tracking-[0.3em] font-light"
            style={{ color: "var(--gold)" }}
          >
            <img src="https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/27b6846a-0237-4a1a-8fc3-1026a6139825.png" alt="Финиста" className="h-14 w-14 object-contain" style={{ mixBlendMode: "multiply" }} />
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
      <section className="min-h-screen grid md:grid-cols-2" style={{ paddingTop: "80px" }}>
        {/* Левая часть — текст */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-20"
          style={{ backgroundColor: "var(--site-bg)" }}
        >
          <p
            className="font-cormorant italic text-xl md:text-2xl font-light tracking-widest mb-10 animate-fade-in opacity-0 delay-400"
            style={{ color: "var(--site-muted)", animationFillMode: "forwards" }}
          >
            Тихая роскошь из 100% шёлка
          </p>
          <div className="animate-fade-in-up opacity-0 delay-700" style={{ animationFillMode: "forwards" }}>
            <button className="btn-gold" onClick={() => scrollTo("#catalog")}>
              <span>Смотреть каталог</span>
            </button>
          </div>
        </div>

        {/* Правая часть — фото */}
        <div className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
          <img
            src={HERO_MODEL_IMAGE}
            alt="Финиста — шёлковые изделия"
            className="w-full h-full object-cover object-center animate-scale-in opacity-0"
            style={{ animationFillMode: "forwards" }}
          />
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

            </div>

            <div className="flex flex-col justify-center">
              <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-8" style={{ color: "var(--site-text)" }}>
                О бренде
              </h2>
              <p className="font-montserrat text-base leading-relaxed mb-4" style={{ color: "var(--site-muted)", fontWeight: 400 }}>
                Финиста — петербургский бренд, воспевающий эстетику натурального итальянского шелка. В наших лимитированных коллекциях лаконичность кроя встречается с безупречным вниманием к деталям, предлагая вам индивидуальный подход даже в готовых решениях.
              </p>
              <p className="font-montserrat text-base leading-relaxed mb-4" style={{ color: "var(--site-muted)", fontWeight: 400 }}>
                Мы создаем моду, опираясь на два формата взаимодействия:
              </p>
              <div className="mb-4 pl-4 border-l" style={{ borderColor: "var(--gold)" }}>
                <p className="font-montserrat text-sm font-medium mb-1" style={{ color: "var(--site-text)" }}>Готовые изделия</p>
                <p className="font-montserrat text-base leading-relaxed" style={{ color: "var(--site-muted)", fontWeight: 400 }}>
                  Вы можете выбрать и приобрести понравившуюся модель из нашего наличия. Мы всегда готовы проконсультировать вас по актуальному ассортименту и размерам.
                </p>
              </div>
              <div className="mb-6 pl-4 border-l" style={{ borderColor: "var(--gold)" }}>
                <p className="font-montserrat text-sm font-medium mb-1" style={{ color: "var(--site-text)" }}>Эксклюзивный пошив</p>
                <p className="font-montserrat text-base leading-relaxed" style={{ color: "var(--site-muted)", fontWeight: 400 }}>
                  Если вы хотите создать нечто уникальное, мы предлагаем формат индивидуальной работы. Вы выбираете премиальную ткань из нашей коллекции и желаемую модель, а мы уточняем все параметры и воплощаем изделие, созданное специально для вас.
                </p>
              </div>
              <p className="font-montserrat text-base leading-relaxed mb-10" style={{ color: "var(--site-muted)", fontWeight: 400 }}>
                Тщательный отбор лучших итальянских материалов, выверенный крой и внимание к каждому шву позволяют нам достигать совершенства в каждом изделии. Выбирая «Финисту», вы выбираете образ, созданный с душой и безупречным вкусом.
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
                <p className="font-montserrat text-base leading-relaxed pt-2" style={{ color: "var(--site-text)", fontWeight: 400 }}>{item.title}</p>
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
              <p className="font-montserrat text-sm leading-relaxed" style={{ color: "var(--site-muted)", fontWeight: 500 }}>
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
              { label: "Instagram", value: "@finista.studio", href: "https://www.instagram.com/finista.studio?igsh=empzNWoyejRocXU1" },
              { label: "Telegram", value: "@finista_studio", href: "https://t.me/finista_studio" },
              { label: "Max", value: "@finista_studio", href: "https://t.me/finista_studio" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <p className="font-montserrat text-xs tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>
                  {item.label}:
                </p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-cormorant text-xl font-light tracking-wide hover:opacity-70 transition-opacity" style={{ color: "var(--site-text)" }}>
                  {item.value}
                </a>
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