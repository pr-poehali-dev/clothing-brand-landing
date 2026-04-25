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

const CATALOG_ITEMS = [
  { title: "Бомбер «Птицы»", description: "Приталенный к низу незаметными защипами, воротник-стойка, клепки и изящная вышивка.\n\n100% шерсть, подклад: купра 100%", price: "35 000 ₽", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/80f288c6-b72e-47bb-b2ea-bd22d10e6b02.JPG", gallery: ["https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/2b6399dd-4a4f-48a4-8e1b-c41894de4cf9.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/8c64df00-91fb-411c-8233-6090d553f019.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/13ee398f-04d5-492a-b30c-c540db993e44.JPEG"] },
  { title: "Бомбер из Твида", description: "Приталенный к низу незаметными защипами, воротник-стойка, клепки и контрастная натуральная подкладка, обеспечивающая тепло, мягкость и комфорт.\n\nСостав: 80% вискоза, 20% искусственные волокна для формы и фактуры\nПодклад: 100% вискоза", price: "35 000 ₽", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/626241f8-7296-4256-95b4-53ed9fd60b75.JPEG", gallery: ["https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/ecba9880-7a43-47af-bb6d-0135d13a9d30.JPEG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/8805b51e-7a41-4222-aae5-9ed11f90f419.JPEG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/c1b60b1a-5241-49bc-84bd-4a4fb5cfa12c.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/5e747171-6c11-43d6-a741-da9191f6a850.JPG"] },
  { title: "Ватник-кимоно со стеклярусом", description: "Король коллекции, аукционная ткань.\nЭлегантный и утонченный верх для особенных выходов. Контрастная подкладка Тиффани.\n\nСостав: 70% льна, 30% шелка\nПодклад: 100% шелк", price: "65 000 ₽", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/86fead8b-baae-46ea-a18f-6ad4434bcaac.JPEG", gallery: ["https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/47bc8223-32a5-41a3-93b9-044951736505.JPEG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/c9b502ba-5e38-44d7-86e4-d7d775e6cda5.JPEG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/50404120-383c-4a3f-a64c-a92e0fad36ba.JPEG"] },
  { title: "Костюм с топом «Пейсли»", description: "Свободные брюки на резинке с карманами, топ на резинках с открытыми плечами и вставками из белого полупрозрачного шелка.\n\nНежная, струящаяся ткань с изысканным орнаментом.\n\n100% натуральный шелк", price: "42 000 ₽", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/7e9b03a7-11b4-4abe-a203-e54f807d4438.PNG", gallery: ["https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/e401e0fc-8574-4b6d-b820-25a86e40a131.JPEG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/c0aa67de-c547-491c-bc55-8cd5fc6bf1c1.JPEG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/05729328-8fbb-4559-b154-33c750918f6d.JPEG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/108af233-4534-42b1-abb4-3709b6ad7e18.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/344c4ed7-8e5b-42a2-b089-253a2e6a0168.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/e906a2de-998d-40de-8b6e-074d9359d3e9.JPG"] },
  { title: "Костюм-кимоно «Леопард»", description: "Свободные брюки на резинке с карманами и кимоно с поясом. Выразительный принт и идеальный баланс между петербургской сдержанностью и итальянским гедонизмом.\n\nСостав: 100% вискоза", price: "18 000 ₽", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/65f9f76d-51e5-4fb4-94cf-47fee15b1607.JPG", gallery: ["https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/e1083284-767a-4ee5-adb9-28c0ca69fdde.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/4e7936c7-8455-40c8-aa57-fdd6aca69f0d.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/751017c4-7fc8-43dd-a455-30615902399e.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/4b6bf9c1-3eb3-4a9b-834a-e5f402ba35b7.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/6352c6b1-c930-42d5-811a-23ed3bdfadad.JPG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/de6c2df6-7fa2-410d-b715-412aace337a8.JPEG"] },
  { title: "Костюм-кимоно «Тигры»", description: "Свободные брюки на резинке с карманами и кимоно с поясом.\nТигры — про характер, уверенность и энергию. Образ, который невозможно не заметить.\n\n100% натуральный шелк", price: "48 000 ₽", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/4ae7cf2e-fca9-443c-a147-58af6e61da6e.JPEG", gallery: ["https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/e83a99ad-e07b-4a41-807f-8341dccab51e.jpg", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/21d26b0f-5f06-48d6-b2c0-06fc17a29e00.jpg", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/5596a934-c82f-44b1-a857-902335abd983.JPEG", "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/bucket/f8bb1a11-338f-4ba1-8ec2-1a720e6ae362.JPEG"] },
  { title: "Платье с воланами", description: "Описание появится позже.", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/17db0d59-2f3a-4451-b66a-32aaf2d2449f.jpg", gallery: [] },
  { title: "Платье с открытой спиной «Волна»", description: "Описание появится позже.", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/6809e445-f2fd-407a-8755-3b7ee2ec4592.jpg", gallery: [] },
  { title: "Платье-кимоно", description: "Описание появится позже.", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/65390da3-ff64-45b2-9ffc-0cf8a99925f1.jpg", gallery: [] },
  { title: "Платье-кимоно короткое «Кошки»", description: "Описание появится позже.", img: "https://cdn.poehali.dev/projects/c1fcd3a1-4d01-4e07-8386-e5875083c9b5/files/0ce25d88-546b-4031-b84d-b263f6db179d.jpg", gallery: [] },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedItem, setSelectedItem] = useState<typeof CATALOG_ITEMS[0] | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);

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
                onClick={() => { setSelectedItem(item); setActivePhoto(0); }}
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
                <p className="font-montserrat text-sm leading-loose pt-2" style={{ color: "var(--site-text)", fontWeight: 300 }}>{item.title}</p>
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

      {/* МОДАЛЬНОЕ ОКНО ИЗДЕЛИЯ */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: "var(--site-bg)", border: "1px solid rgba(181,144,58,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-60"
              onClick={() => setSelectedItem(null)}
              style={{ color: "var(--site-text)" }}
            >
              <Icon name="X" size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Левая часть — фото */}
              <div className="md:w-1/2 flex-shrink-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={[selectedItem.img, ...selectedItem.gallery][activePhoto]}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  {[selectedItem.img, ...selectedItem.gallery].length > 1 && (
                    <>
                      <button
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-70"
                        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                        onClick={() => setActivePhoto(i => (i - 1 + [selectedItem.img, ...selectedItem.gallery].length) % [selectedItem.img, ...selectedItem.gallery].length)}
                      >
                        <Icon name="ChevronLeft" size={18} style={{ color: "#fff" }} />
                      </button>
                      <button
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-70"
                        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
                        onClick={() => setActivePhoto(i => (i + 1) % [selectedItem.img, ...selectedItem.gallery].length)}
                      >
                        <Icon name="ChevronRight" size={18} style={{ color: "#fff" }} />
                      </button>
                    </>
                  )}
                </div>
                {selectedItem.gallery.length > 0 && (
                  <div className="flex gap-2 p-3 overflow-x-auto">
                    {[selectedItem.img, ...selectedItem.gallery].map((photo, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-14 h-14 overflow-hidden cursor-pointer"
                        style={{ border: i === activePhoto ? "1px solid var(--gold)" : "1px solid rgba(181,144,58,0.2)" }}
                        onClick={() => setActivePhoto(i)}
                      >
                        <img src={photo} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Правая часть — информация */}
              <div className="md:w-1/2 flex flex-col justify-center p-8 gap-6">
                <div>
                  <div className="gold-line mb-6" style={{ marginLeft: 0 }} />
                  <h3 className="font-cormorant text-3xl font-light mb-4" style={{ color: "var(--site-text)" }}>
                    {selectedItem.title}
                  </h3>
                  <p className="font-montserrat text-sm leading-loose font-light whitespace-pre-line" style={{ color: "var(--site-muted)" }}>
                    {selectedItem.description}
                  </p>
                </div>
                {"price" in selectedItem && selectedItem.price && (
                  <p className="font-cormorant text-2xl font-light" style={{ color: "var(--gold)" }}>
                    {selectedItem.price as string}
                  </p>
                )}
                <a
                  href="https://t.me/finista_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center font-montserrat text-xs tracking-[0.2em] uppercase py-3 px-6 transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "var(--gold)", color: "#1a1a1a" }}
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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