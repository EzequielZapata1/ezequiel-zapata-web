import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  DoorOpen,
  Grid2X2,
  Layers3,
  MapPin,
  Menu,
  Minus,
  PaintRoller,
  Plus,
  Waves,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  displayPhone,
  projects,
  services,
  siteMedia,
  whatsappMessages,
  whatsappUrl,
  type Project,
} from "./data/site";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Contacto", href: "#contacto" },
];

const serviceIcons: Record<(typeof services)[number]["id"], LucideIcon> = {
  construccion: Building2,
  revoques: Layers3,
  pisos: Grid2X2,
  piletas: Waves,
  instalaciones: DoorOpen,
  refacciones: PaintRoller,
};

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.2 11.5a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.3-4.4a8.2 8.2 0 1 1 15.4-4.1Z" />
      <path d="M8.6 8.1c-.3.3-.5.8-.5 1.3 0 1.5 2.4 4.5 4.9 5.5 1.1.5 2.1.7 2.8.3l.8-.9-2.3-1.1-.9 1c-1.4-.6-2.6-1.7-3.3-3.1l1-1-1.2-2.3-1.3.3Z" />
    </svg>
  );
}

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  message: string;
  ariaLabel?: string;
};

function WhatsAppLink({ children, className, message, ariaLabel }: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      className={className}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function SectionKicker({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return (
    <div className={`section-kicker${light ? " section-kicker--light" : ""}`}>
      <span className="section-kicker__number">{number}</span>
      <span className="section-kicker__line" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      <header className={`site-header${scrolled || menuOpen ? " site-header--solid" : ""}`}>
        <div className="site-header__inner page-container">
          <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)} aria-label="Ezequiel Zapata, ir al inicio">
            <span className="brand__mark" aria-hidden="true">EZ<span /></span>
            <span className="brand__text">
              <strong>EZEQUIEL ZAPATA</strong>
              <small>CONSTRUCCIÓN Y ALBAÑILERÍA</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <WhatsAppLink className="header-contact" message={whatsappMessages.quote}>
            Pedir presupuesto <ArrowUpRight size={17} strokeWidth={1.8} />
          </WhatsAppLink>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? "Cerrar" : "Menú"}</span>
            {menuOpen ? <X size={24} strokeWidth={1.6} /> : <Menu size={24} strokeWidth={1.6} />}
          </button>
        </div>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        aria-label="Navegación móvil"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-nav__inner page-container">
          <div className="mobile-nav__links">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{item.label}<ArrowUpRight size={20} strokeWidth={1.6} />
              </a>
            ))}
          </div>
          <div className="mobile-nav__bottom">
            <WhatsAppLink className="button button--accent" message={whatsappMessages.quote}>
              Pedir presupuesto <ArrowUpRight size={19} />
            </WhatsAppLink>
            <p>Villa Constitución y alrededores</p>
          </div>
        </div>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__architecture">
          <span className="hero__architecture-outline" />
          <span className="hero__architecture-beam hero__architecture-beam--one" />
          <span className="hero__architecture-beam hero__architecture-beam--two" />
          <span className="hero__architecture-beam hero__architecture-beam--three" />
          <span className="hero__architecture-column hero__architecture-column--one" />
          <span className="hero__architecture-column hero__architecture-column--two" />
          <span className="hero__architecture-column hero__architecture-column--three" />
          <span className="hero__architecture-diagonal" />
        </div>
        {siteMedia.hero && (
          <img
            className="hero__photo"
            src={siteMedia.hero}
            alt="Trabajo de construcción realizado por Ezequiel Zapata"
            fetchPriority="high"
            decoding="async"
          />
        )}
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__inner page-container">
        <div className="hero__content">
          <p className="hero__eyebrow hero-enter hero-enter--one">
            <span aria-hidden="true" /> CONSTRUCCIÓN · ALBAÑILERÍA · REFACCIONES
          </p>
          <h1 className="hero__name hero-enter hero-enter--two">
            <span>Ezequiel</span>
            <span>Zapata<span className="hero__period">.</span></span>
          </h1>
          <div className="hero__statement hero-enter hero-enter--three">
            <h2 id="hero-title">Construimos y transformamos tus espacios.</h2>
            <p>
              Soluciones en albañilería, construcción y remodelación. Casi 10 años de experiencia
              trabajando con compromiso y dedicación en cada proyecto.
            </p>
            <div className="hero__actions">
              <WhatsAppLink className="button button--accent" message={whatsappMessages.general}>
                Consultar por WhatsApp <ArrowUpRight size={20} strokeWidth={1.8} />
              </WhatsAppLink>
              <a className="button button--outline-light" href="#trabajos">
                Ver trabajos <ArrowDown size={19} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero__location hero-enter hero-enter--four">
          <MapPin size={17} strokeWidth={1.7} aria-hidden="true" />
          Villa Constitución y alrededores
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-space" id="sobre-mi" aria-labelledby="about-title">
      <div className="page-container about__grid">
        <div className="about__visual" data-reveal>
          {siteMedia.about ? (
            <img
              src={siteMedia.about}
              alt="Ezequiel Zapata con casco y ropa de trabajo en una obra"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="about__graphic" aria-hidden="true">
              <span className="about__graphic-grid" />
              <span className="about__graphic-outline" />
              <span className="about__graphic-letter">EZ<span>.</span></span>
            </div>
          )}
          <div className="about__visual-caption">
            <span>EZEQUIEL ZAPATA</span>
            <span>OFICIO Y DEDICACIÓN</span>
          </div>
        </div>

        <div className="about__content" data-reveal>
          <SectionKicker number="01">Sobre mí</SectionKicker>
          <h2 className="section-title" id="about-title">Experiencia que se construye con cada proyecto<span className="accent-dot">.</span></h2>
          <div className="about__copy">
            <p className="about__lead">Soy Ezequiel Zapata, trabajador independiente dedicado a la construcción y la albañilería.</p>
            <p>Cuento con casi 10 años de experiencia realizando trabajos de construcción, refacciones y terminaciones.</p>
            <p>Me especializo en diferentes etapas de obra, desde estructuras y levantamiento de paredes hasta colocación de pisos, revestimientos y terminaciones.</p>
            <p>Mi objetivo es ofrecer un trabajo responsable, prolijo y adaptado a las necesidades de cada cliente.</p>
          </div>
          <a className="text-link" href="#servicios">Conocé mis servicios <ArrowUpRight size={19} strokeWidth={1.8} /></a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [openService, setOpenService] = useState<string | null>(services[0].id);

  return (
    <section className="services section-space" id="servicios" aria-labelledby="services-title">
      <div className="page-container">
        <div className="section-heading" data-reveal>
          <div>
            <SectionKicker number="02">Servicios</SectionKicker>
            <h2 className="section-title" id="services-title">Soluciones para cada etapa de tu obra<span className="accent-dot">.</span></h2>
          </div>
          <p>Trabajos de construcción, albañilería y remodelación, desde la estructura hasta los detalles finales.</p>
        </div>

        <div className="service-list" data-reveal>
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id];
            const isOpen = openService === service.id;
            return (
              <article className={`service-row${isOpen ? " service-row--open" : ""}`} key={service.id}>
                <h3>
                  <button
                    className="service-row__toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${service.id}`}
                    onClick={() => setOpenService(isOpen ? null : service.id)}
                  >
                    <span className="service-row__number">0{index + 1}</span>
                    <span className="service-row__icon"><Icon size={25} strokeWidth={1.35} aria-hidden="true" /></span>
                    <span className="service-row__title">{service.title}</span>
                    <span className="service-row__plus" aria-hidden="true">
                      {isOpen ? <Minus size={22} strokeWidth={1.5} /> : <Plus size={22} strokeWidth={1.5} />}
                    </span>
                  </button>
                </h3>
                <div className="service-row__panel" id={`service-panel-${service.id}`} hidden={!isOpen}>
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <WhatsAppLink
                    className="text-link service-row__link"
                    message={`Hola Ezequiel, vi tu página web y quisiera consultarte por ${service.title.toLowerCase()}.`}
                  >
                    Consultar por este servicio <ArrowUpRight size={19} strokeWidth={1.8} />
                  </WhatsAppLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Lightbox({
  items,
  index,
  onIndexChange,
  onClose,
}: {
  items: Project[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [showBefore, setShowBefore] = useState(false);
  const project = items[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => setShowBefore(false), [index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onIndexChange((index + 1) % items.length);
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, items.length, onIndexChange]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={`Fotografía: ${project.title}`}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="lightbox__content">
        <div className="lightbox__top">
          <span>TRABAJOS REALIZADOS <span className="lightbox__count">/ {String(index + 1).padStart(2, "0")} DE {String(items.length).padStart(2, "0")}</span></span>
          <button className="lightbox__close" type="button" onClick={onClose} aria-label="Cerrar fotografía"><X size={24} /></button>
        </div>
        <div className="lightbox__stage">
          <img
            src={showBefore && project.beforeImage ? project.beforeImage : project.image}
            alt={showBefore && project.beforeAlt ? project.beforeAlt : project.alt}
            decoding="async"
          />
          {items.length > 1 && (
            <>
              <button
                className="lightbox__arrow lightbox__arrow--previous"
                type="button"
                aria-label="Fotografía anterior"
                onClick={() => onIndexChange((index - 1 + items.length) % items.length)}
              ><ArrowLeft size={22} /></button>
              <button
                className="lightbox__arrow lightbox__arrow--next"
                type="button"
                aria-label="Fotografía siguiente"
                onClick={() => onIndexChange((index + 1) % items.length)}
              ><ArrowRight size={22} /></button>
            </>
          )}
        </div>
        <div className="lightbox__bottom">
          <div><span>{project.category}</span><strong>{project.title}</strong></div>
          {project.beforeImage && (
            <div className="lightbox__compare" aria-label="Comparar el antes y el después">
              <button type="button" className={showBefore ? "is-active" : ""} onClick={() => setShowBefore(true)}>Antes</button>
              <button type="button" className={!showBefore ? "is-active" : ""} onClick={() => setShowBefore(false)}>Después</button>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

function Portfolio() {
  const [category, setCategory] = useState("Todos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const categories = useMemo(() => ["Todos", ...new Set(projects.map((project) => project.category))], []);
  const visibleProjects = useMemo(
    () => category === "Todos" ? projects : projects.filter((project) => project.category === category),
    [category],
  );

  return (
    <section className="portfolio section-space" id="trabajos" aria-labelledby="portfolio-title">
      <div className="page-container">
        <div className="section-heading section-heading--light" data-reveal>
          <div>
            <SectionKicker number="03" light>Trabajos</SectionKicker>
            <h2 className="section-title" id="portfolio-title">Trabajos realizados<span className="accent-dot">.</span></h2>
          </div>
          <p>Cada proyecto refleja el compromiso y la dedicación puestos en cada detalle.</p>
        </div>

        {projects.length > 0 ? (
          <>
            <div className="portfolio__filters" role="group" aria-label="Filtrar trabajos por categoría" data-reveal>
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? "is-active" : ""}
                  aria-pressed={category === item}
                  onClick={() => { setCategory(item); setSelectedIndex(null); }}
                >{item}</button>
              ))}
            </div>
            <div className="gallery-grid" data-reveal>
              {visibleProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  className={`gallery-item gallery-item--${project.layout}`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Ampliar fotografía: ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 65vw"
                  />
                  <span className="gallery-item__shade" />
                  <span className="gallery-item__info"><small>{project.category}{project.beforeImage ? " · Antes / Después" : ""}</small><strong>{project.title}</strong></span>
                  <span className="gallery-item__open" aria-hidden="true"><ArrowUpRight size={22} strokeWidth={1.6} /></span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="portfolio-empty" data-reveal>
            <div className="portfolio-empty__frame portfolio-empty__frame--main">
              <span className="portfolio-empty__index">01 / REGISTRO DE OBRA</span>
              <div className="portfolio-empty__copy">
                <span className="portfolio-empty__cross" aria-hidden="true">+</span>
                <h3>Las obras hablan<br />por sí solas.</h3>
                <p>Las fotografías reales de los trabajos se incorporarán aquí próximamente.</p>
              </div>
              <span className="portfolio-empty__corner" aria-hidden="true" />
            </div>
            <div className="portfolio-empty__frame portfolio-empty__frame--small">
              <span className="portfolio-empty__index">02 / FOTOGRAFÍA REAL</span>
              <span className="portfolio-empty__cross" aria-hidden="true">+</span>
              <span className="portfolio-empty__note">ESPACIO PARA PROYECTOS</span>
            </div>
            <div className="portfolio-empty__frame portfolio-empty__frame--small">
              <span className="portfolio-empty__index">03 / FOTOGRAFÍA REAL</span>
              <span className="portfolio-empty__cross" aria-hidden="true">+</span>
              <span className="portfolio-empty__note">ESPACIO PARA PROYECTOS</span>
            </div>
          </div>
        )}
      </div>
      {selectedIndex !== null && visibleProjects.length > 0 && (
        <Lightbox
          items={visibleProjects}
          index={selectedIndex}
          onIndexChange={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}

function Experience() {
  const commitments = [
    "Atención directa y personalizada",
    "Trabajos de construcción y refacción",
    "Diferentes especialidades en albañilería",
    "Villa Constitución y alrededores",
  ];

  return (
    <section className="experience section-space" aria-labelledby="experience-title">
      <div className="page-container">
        <div data-reveal>
          <SectionKicker number="04">Experiencia y confianza</SectionKicker>
          <h2 className="section-title" id="experience-title">Compromiso y experiencia en cada trabajo<span className="accent-dot">.</span></h2>
        </div>
        <div className="experience__body" data-reveal>
          <div className="experience__years" aria-label="Casi 10 años de experiencia">
            <span className="experience__almost">CASI</span>
            <strong>10</strong>
            <span className="experience__years-label">AÑOS DE<br />EXPERIENCIA</span>
          </div>
          <div className="experience__list">
            {commitments.map((item, index) => (
              <div className="experience__item" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
                <ArrowUpRight size={20} strokeWidth={1.3} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="page-container cta-section__inner" data-reveal>
        <div>
          <span className="cta-section__eyebrow">HABLEMOS DE TU IDEA</span>
          <h2 id="cta-title">¿Tenés un proyecto en mente<span>?</span></h2>
        </div>
        <div className="cta-section__bottom">
          <p>Contame qué necesitás hacer. Contactame directamente por WhatsApp y conversemos sobre tu próximo proyecto.</p>
          <WhatsAppLink className="button button--dark" message={whatsappMessages.project}>
            Hablar por WhatsApp <ArrowUpRight size={21} strokeWidth={1.8} />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-space" id="contacto" aria-labelledby="contact-title">
      <div className="page-container contact__grid">
        <div data-reveal>
          <SectionKicker number="05">Contacto</SectionKicker>
          <h2 className="section-title" id="contact-title">Estamos para ayudarte con tu próximo proyecto<span className="accent-dot">.</span></h2>
        </div>
        <div className="contact__details" data-reveal>
          <div className="contact__block">
            <span className="contact__label">CONTACTO DIRECTO</span>
            <h3>Ezequiel Zapata</h3>
            <p>Construcción y albañilería.</p>
            <p>Villa Constitución y alrededores.</p>
          </div>
          <div className="contact__block contact__block--phone">
            <span className="contact__label">WHATSAPP</span>
            <WhatsAppLink className="contact__phone" message={whatsappMessages.general}>
              {displayPhone} <ArrowUpRight size={24} strokeWidth={1.4} />
            </WhatsAppLink>
          </div>
          <WhatsAppLink className="button button--accent" message={whatsappMessages.general}>
            Escribir por WhatsApp <ArrowUpRight size={20} strokeWidth={1.8} />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page-container">
        <div className="footer__main">
          <div className="footer__identity">
            <a href="#inicio" className="footer__name">Ezequiel<br />Zapata<span>.</span></a>
            <p>Construcción · Albañilería · Refacciones</p>
          </div>
          <div className="footer__information">
            <div><span>ZONA DE TRABAJO</span><p>Villa Constitución<br />y alrededores.</p></div>
            <div><span>CONTACTO</span><WhatsAppLink message={whatsappMessages.general}>WhatsApp: {displayPhone}</WhatsAppLink></div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Construyendo y transformando espacios con experiencia y compromiso.</p>
          <a href="#inicio">Volver arriba <ArrowUpRight size={16} strokeWidth={1.8} /></a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ hidden }: { hidden: boolean }) {
  return (
    <WhatsAppLink
      className={`floating-whatsapp${hidden ? " floating-whatsapp--hidden" : ""}`}
      message={whatsappMessages.general}
      ariaLabel="Contactar a Ezequiel por WhatsApp"
    >
      <WhatsAppIcon size={25} />
      <span>Hablemos</span>
    </WhatsAppLink>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -45px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="contenido">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp hidden={menuOpen} />
    </>
  );
}
