import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import Navbar from "./Navbar";
import CatalogModal from "./CatalogModal";
import { HERO_MODEL_IMAGE, ABOUT_IMAGE, CATALOG_ITEMS, FABRIC_ITEMS } from "./data";

function FabricCard({ fabric }: { fabric: { name: string; imgs: string[] } }) {
  const [idx, setIdx] = useState(0);
  if (fabric.imgs.length === 0) return null;
  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative overflow-hidden aspect-square cursor-pointer group"
        onClick={() => fabric.imgs.length > 1 && setIdx((i) => (i + 1) % fabric.imgs.length)}
      >
        <img
          src={fabric.imgs[idx]}
          alt={fabric.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {fabric.imgs.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {fabric.imgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ backgroundColor: i === idx ? "var(--gold)" : "rgba(255,255,255,0.5)" }}
              />
            ))}
          </div>
        )}
      </div>
      <p className="font-montserrat text-xs text-center leading-snug tracking-wide" style={{ color: "var(--site-text)", fontWeight: 300 }}>
        {fabric.name}
      </p>
    </div>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedItem, setSelectedItem] = useState<typeof CATALOG_ITEMS[0] | null>(null);

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

      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      {/* HERO */}
      <section className="min-h-screen grid md:grid-cols-2" style={{ paddingTop: "80px" }}>
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
            <div className="flex flex-col justify-center">
              <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-8" style={{ color: "var(--site-text)" }}>
                О бренде
              </h2>
              <p className="font-montserrat text-sm leading-loose mb-4" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                Финиста — петербургский бренд, воспевающий эстетику натурального итальянского шелка.
              </p>
              <p className="font-montserrat text-sm leading-loose mb-4" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                Мы создаем моду, опираясь на два формата взаимодействия:
              </p>
              <div className="mb-4 pl-4 border-l" style={{ borderColor: "var(--gold)" }}>
                <p className="font-montserrat text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "var(--site-text)", fontWeight: 400 }}>Готовые изделия</p>
                <p className="font-montserrat text-sm leading-loose" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                  Вы можете выбрать и приобрести понравившуюся модель из нашего наличия. Мы всегда готовы проконсультировать вас по актуальному ассортименту и размерам.
                </p>
              </div>
              <div className="mb-6 pl-4 border-l" style={{ borderColor: "var(--gold)" }}>
                <p className="font-montserrat text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "var(--site-text)", fontWeight: 400 }}>Эксклюзивный пошив</p>
                <p className="font-montserrat text-sm leading-loose" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
                  Если вы цените уникальность, мы предлагаем оформить персональный заказ. Вы выбираете ткань и модель из нашей коллекции, а мы создаём изделие по уже отработанным лекалам, адаптируя его под ваши индивидуальные параметры.
                </p>
              </div>
              <p className="font-montserrat text-sm leading-loose mb-10" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
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

            <div className="relative">
              <div
                className="absolute -top-4 -right-4 w-full h-full border"
                style={{ borderColor: "var(--site-accent)" }}
              />
              <img
                src={ABOUT_IMAGE}
                alt="О бренде Финиста"
                className="w-full h-[600px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ИЗДЕЛИЯ */}
      <section id="catalog" className="py-24 px-6" style={{ backgroundColor: "var(--site-section)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--site-text)" }}>
              Изделия
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {CATALOG_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-3 cursor-pointer"
                onClick={() => { setSelectedItem(item); }}
              >
                <div className="overflow-hidden aspect-[3/4]" style={{ border: "1px solid rgba(181,144,58,0.2)" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-montserrat text-xs leading-snug tracking-wide" style={{ color: "var(--site-text)", fontWeight: 300 }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ТКАНИ */}
      <section id="fabrics" className="py-32 px-6" style={{ backgroundColor: "var(--site-bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl md:text-6xl font-light" style={{ color: "var(--site-text)" }}>
              Ткани
            </h2>
            <div className="gold-line mx-auto mt-6" />
            <p className="font-montserrat text-sm mt-8 max-w-xl mx-auto" style={{ color: "var(--site-text)", fontWeight: 300, opacity: 0.7 }}>
              100% натуральный шёлк
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {FABRIC_ITEMS.map((fabric) => (
              <FabricCard key={fabric.name} fabric={fabric} />
            ))}
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

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex flex-col gap-8 flex-1">
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
                  <p className="font-montserrat text-sm leading-loose pt-2" style={{ color: "var(--site-text)", fontWeight: 300 }}>{item.title}</p>
                </div>
              ))}
            </div>
            <div className="flex-1 w-full">
              <video
                src="https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/IMG_2757.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-sm object-cover"
                style={{ maxHeight: "560px" }}
              />
            </div>
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
              <p className="font-montserrat text-sm leading-loose" style={{ color: "var(--site-muted)", fontWeight: 300 }}>
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
              { label: "Max", value: "@finista_studio", href: "https://max.ru/join/lu6ttwYNRpSyQPnwHIyG6CXm0J_F5zkJr3-gg3qphpY" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <p className="font-montserrat text-xs tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>
                  {item.label}:
                </p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-montserrat text-sm font-light tracking-wide hover:opacity-70 transition-opacity" style={{ color: "var(--site-text)" }}>
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CatalogModal selectedItem={selectedItem} onClose={() => setSelectedItem(null)} />

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