import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/b3ff9782-fdd1-4e94-9063-63c58c4e7087.jpg";
const ABOUT_IMAGE = "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/d57d7118-39eb-4775-b452-8f955a2b2d43.jpg";
const GALLERY_IMAGE = "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/0c05be5c-027e-4813-b692-505f9f5e407b.jpg";

const NAV_ITEMS = [
  { label: "О бренде", href: "#about" },
  { label: "Изделия", href: "#catalog" },
  { label: "Ткани", href: "#fabrics" },
  { label: "Упаковка", href: "#packaging" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#contacts" },
];

const CATALOG_ITEMS = [
  { id: 1, src: HERO_IMAGE, title: "Осенняя коллекция", year: "2024" },
  { id: 2, src: ABOUT_IMAGE, title: "Вечерние образы", year: "2024" },
  { id: 3, src: GALLERY_IMAGE, title: "Классическая линия", year: "2024" },
  { id: 4, src: HERO_IMAGE, title: "Капсула «Ноуар»", year: "2025" },
  { id: 5, src: GALLERY_IMAGE, title: "Atelier Edition", year: "2025" },
  { id: 6, src: ABOUT_IMAGE, title: "Зимний показ", year: "2025" },
];

const FABRICS = [
  { name: "Кашемир Лоро Пиана", origin: "Италия", weight: "280 г/м²", color: "#c8bfa8" },
  { name: "Шёлк Dupioni", origin: "Франция", weight: "120 г/м²", color: "#d4c5a9" },
  { name: "Шерсть Zegna", origin: "Италия", weight: "320 г/м²", color: "#8a7d6b" },
  { name: "Органза", origin: "Япония", weight: "60 г/м²", color: "#ede8de" },
  { name: "Бархат", origin: "Франция", weight: "400 г/м²", color: "#4a3f35" },
  { name: "Лён премиум", origin: "Бельгия", weight: "200 г/м²", color: "#c2b99a" },
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
    <div className="min-h-screen" style={{ backgroundColor: "var(--deep-black)", color: "var(--cream)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(13,11,8,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
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
            FINISTA
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
            style={{ backgroundColor: "rgba(13,11,8,0.98)", borderTop: "1px solid rgba(201,168,76,0.1)" }}
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
          style={{ background: "linear-gradient(to bottom, rgba(13,11,8,0.55) 0%, rgba(13,11,8,0.35) 50%, rgba(13,11,8,0.88) 100%)" }}
        />
        <div className="relative z-10 text-center px-6">
          <h1
            className="font-cormorant text-7xl md:text-9xl font-light tracking-[0.12em] leading-none mb-4 animate-fade-in-up opacity-0 delay-200"
            style={{ color: "var(--cream)", animationFillMode: "forwards" }}
          >
            Финиста
          </h1>
          <div
            className="gold-line mx-auto mb-6 animate-fade-in opacity-0 delay-400"
            style={{ width: "80px", animationFillMode: "forwards" }}
          />
          <p
            className="font-cormorant italic text-xl md:text-2xl font-light tracking-widest animate-fade-in-up opacity-0 delay-500"
            style={{ color: "var(--cream)", animationFillMode: "forwards" }}
          >
            Искусство быть безупречным
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
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full border"
                style={{ borderColor: "rgba(201,168,76,0.2)" }}
              />
              <img
                src={ABOUT_IMAGE}
                alt="О бренде FINISTA"
                className="w-full h-[600px] object-cover relative z-10"
              />
              <div
                className="absolute bottom-6 right-6 z-20 px-5 py-4"
                style={{ backgroundColor: "var(--deep-black)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <p className="font-cormorant text-3xl font-light" style={{ color: "var(--gold)" }}>2018</p>
                <p className="font-montserrat text-[0.6rem] tracking-[0.2em] uppercase mt-1" style={{ color: "var(--cream)", opacity: 0.6 }}>Основан в Москве</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
                О бренде
              </p>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6" style={{ color: "var(--cream)" }}>
                Каждая деталь —<br />
                <em>произведение искусства</em>
              </h2>
              <div className="gold-line mb-8" />
              <p className="font-montserrat text-sm leading-relaxed mb-6" style={{ color: "rgba(240,234,214,0.7)", fontWeight: 300 }}>
                FINISTA — это больше, чем одежда. Это философия утончённости, воплощённая в каждом стежке. Мы создаём вещи для тех, кто ценит подлинное качество и не нуждается в том, чтобы об этом громко говорить.
              </p>
              <p className="font-montserrat text-sm leading-relaxed mb-10" style={{ color: "rgba(240,234,214,0.7)", fontWeight: 300 }}>
                Ателье основано в 2018 году в Москве. Каждый предмет создаётся вручную из тканей премиальных европейских домов. Тираж ограничен.
              </p>

              <div className="flex gap-12">
                {[["300+", "Изделий создано"], ["47", "Тканей в работе"], ["100%", "Ручная работа"]].map(([num, label]) => (
                  <div key={label}>
                    <p className="font-cormorant text-4xl font-light" style={{ color: "var(--gold)" }}>{num}</p>
                    <p className="font-montserrat text-[0.6rem] tracking-[0.15em] uppercase mt-1" style={{ color: "rgba(240,234,214,0.5)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. КАТАЛОГ ИЗДЕЛИЙ */}
      <section id="catalog" className="py-24 px-6" style={{ backgroundColor: "var(--warm-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Изделия
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--cream)" }}>
              Изделия
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CATALOG_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item cursor-pointer"
                style={{ aspectRatio: index % 3 === 1 ? "3/4" : "4/5" }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="gallery-overlay" />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{ zIndex: 2 }}
                >
                  <p className="font-cormorant text-xl font-light" style={{ color: "var(--cream)" }}>{item.title}</p>
                  <p className="font-montserrat text-[0.6rem] tracking-widest" style={{ color: "var(--gold)" }}>{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. КАТАЛОГ ТКАНЕЙ */}
      <section id="fabrics" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Ткани
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--cream)" }}>
              Материалы
            </h2>
            <div className="gold-line mx-auto mt-6 mb-6" />
            <p className="font-montserrat text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(240,234,214,0.6)", fontWeight: 300 }}>
              Работаем только с проверенными европейскими поставщиками премиального сырья
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
            {FABRICS.map((fabric) => (
              <div
                key={fabric.name}
                className="flex items-center gap-6 p-8 group transition-colors duration-300"
                style={{ backgroundColor: "var(--warm-dark)" }}
              >
                <div
                  className="w-14 h-14 flex-shrink-0 border"
                  style={{ backgroundColor: fabric.color, borderColor: "rgba(201,168,76,0.2)" }}
                />
                <div>
                  <p className="font-cormorant text-lg font-light mb-1" style={{ color: "var(--cream)" }}>{fabric.name}</p>
                  <p className="font-montserrat text-[0.6rem] tracking-[0.2em] uppercase mb-1" style={{ color: "var(--gold)" }}>{fabric.origin}</p>
                  <p className="font-montserrat text-[0.6rem]" style={{ color: "rgba(240,234,214,0.4)" }}>{fabric.weight}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-montserrat text-xs leading-relaxed" style={{ color: "rgba(240,234,214,0.5)", fontWeight: 300 }}>
              Полный каталог тканей доступен при персональной консультации · 47 позиций в ассортименте
            </p>
          </div>
        </div>
      </section>

      {/* 4. УПАКОВКА */}
      <section id="packaging" className="py-32 px-6" style={{ backgroundColor: "var(--warm-dark)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Упаковка
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--cream)" }}>
              Первое впечатление
            </h2>
            <div className="gold-line mx-auto mt-6 mb-6" />
            <p className="font-montserrat text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(240,234,214,0.6)", fontWeight: 300 }}>
              Упаковка — это часть изделия. Мы уделяем ей столько же внимания, сколько каждому стежку
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img
              src={GALLERY_IMAGE}
              alt="Упаковка FINISTA"
              className="w-full h-[480px] object-cover"
              style={{ border: "1px solid rgba(201,168,76,0.15)" }}
            />
            <div className="flex flex-col gap-10">
              {[
                { icon: "Box", title: "Фирменная коробка", desc: "Жёсткий картон с тиснением логотипа золотом. Закрывается на магнитный замок." },
                { icon: "Feather", title: "Шёлковая бумага", desc: "Каждое изделие бережно обёрнуто в шёлковую бумагу с ароматом бренда." },
                { icon: "Stamp", title: "Восковая печать", desc: "Личная печать мастера — знак подлинности и ручного исполнения." },
                { icon: "Gift", title: "Готово к подарку", desc: "Упаковка не требует дополнительного оформления — идеальна с первой секунды." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-6">
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center border"
                    style={{ borderColor: "rgba(201,168,76,0.3)" }}
                  >
                    <Icon name={item.icon} fallback="Package" size={16} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-light mb-2" style={{ color: "var(--cream)" }}>{item.title}</h3>
                    <p className="font-montserrat text-xs leading-relaxed" style={{ color: "rgba(240,234,214,0.55)", fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ДОСТАВКА */}
      <section id="delivery" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Доставка
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--cream)" }}>
              Белые перчатки
            </h2>
            <div className="gold-line mx-auto mt-6 mb-6" />
            <p className="font-montserrat text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(240,234,214,0.6)", fontWeight: 300 }}>
              Мы относимся к каждому заказу как к произведению искусства — от упаковки до вручения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
            {[
              {
                icon: "Truck",
                title: "Доставка по Москве",
                desc: "Курьерская доставка по Москве — от 24 часов. Передаём изделие лично в руки.",
              },
              {
                icon: "Map",
                title: "По всей России",
                desc: "Доставка по всей России за 2–5 рабочих дней. Трек-номер на каждый заказ.",
              },
              {
                icon: "Globe",
                title: "Международная отправка",
                desc: "Доставляем в Европу, ОАЭ, Азию. Сроки и условия уточняйте при заказе.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center p-10 group transition-colors duration-300"
                style={{ backgroundColor: "var(--warm-dark)" }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 border"
                  style={{ borderColor: "rgba(201,168,76,0.3)" }}
                >
                  <Icon name={card.icon} fallback="Truck" size={22} />
                </div>
                <h3 className="font-cormorant text-xl font-light mb-4" style={{ color: "var(--cream)" }}>
                  {card.title}
                </h3>
                <p className="font-montserrat text-xs leading-relaxed" style={{ color: "rgba(240,234,214,0.55)", fontWeight: 300 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. КОНТАКТЫ */}
      <section id="contacts" className="py-32 px-6" style={{ backgroundColor: "var(--warm-dark)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Контакты
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-4" style={{ color: "var(--cream)" }}>
            Свяжитесь с нами
          </h2>
          <div className="gold-line mx-auto mb-10" />
          <p className="font-montserrat text-sm leading-relaxed mb-14" style={{ color: "rgba(240,234,214,0.6)", fontWeight: 300 }}>
            Для персональных консультаций и индивидуальных заказов
          </p>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { icon: "Mail", label: "Почта", value: "hello@finista.ru" },
              { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
              { icon: "MapPin", label: "Адрес", value: "Москва, ул. Пречистенка, 1" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center border"
                  style={{ borderColor: "rgba(201,168,76,0.25)" }}
                >
                  <Icon name={item.icon} fallback="Mail" size={16} />
                </div>
                <p className="font-montserrat text-[0.6rem] tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>
                  {item.label}
                </p>
                <p className="font-montserrat text-sm font-light" style={{ color: "var(--cream)" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div
            className="p-10"
            style={{ border: "1px solid rgba(201,168,76,0.15)", backgroundColor: "rgba(201,168,76,0.02)" }}
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-5 py-4 bg-transparent font-montserrat text-sm outline-none"
                style={{
                  borderBottom: "1px solid rgba(201,168,76,0.3)",
                  color: "var(--cream)",
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 bg-transparent font-montserrat text-sm outline-none"
                style={{
                  borderBottom: "1px solid rgba(201,168,76,0.3)",
                  color: "var(--cream)",
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                }}
              />
            </div>
            <textarea
              rows={4}
              placeholder="Ваше сообщение"
              className="w-full px-5 py-4 bg-transparent font-montserrat text-sm outline-none resize-none mb-8"
              style={{
                borderBottom: "1px solid rgba(201,168,76,0.3)",
                color: "var(--cream)",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            />
            <button className="btn-gold">
              <span>Отправить сообщение</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-xl tracking-[0.3em]" style={{ color: "var(--gold)" }}>FINISTA</p>
          <p className="font-montserrat text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "rgba(240,234,214,0.3)" }}>
            © 2025 FINISTA. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Telegram"].map((social) => (
              <button
                key={social}
                className="font-montserrat text-[0.6rem] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-gold"
                style={{ color: "rgba(240,234,214,0.4)" }}
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}