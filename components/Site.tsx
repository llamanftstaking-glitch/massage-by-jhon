"use client";

import Image from "next/image";
import { useState } from "react";
import { t, buildWaLink, type Lang, PHONE_DISPLAY, INSTAGRAM, WHATSAPP_NUMBER } from "@/lib/i18n";
import Reveal from "./Reveal";
import {
  WhatsAppIcon,
  InstagramIcon,
  LeafIcon,
  DumbbellIcon,
  HandsIcon,
  SparkleIcon,
  WaveIcon,
  TableIcon,
  PinIcon,
  CheckIcon,
  ArrowRightIcon,
  RollerIcon,
  ShieldCheckIcon,
  DropletIcon,
} from "./Icons";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SERVICES = [
  { key: "relax", Icon: WaveIcon },
  { key: "sport", Icon: DumbbellIcon },
  { key: "thera", Icon: HandsIcon },
  { key: "reduc", Icon: SparkleIcon },
  { key: "drain", Icon: DropletIcon },
  { key: "madero", Icon: RollerIcon },
  { key: "train", Icon: LeafIcon },
] as const;

export default function Site() {
  const [lang, setLang] = useState<Lang>("es");
  const T = (key: string) => t(key, lang);

  return (
    <div className="min-h-screen">
      <Nav lang={lang} setLang={setLang} T={T} />
      <Hero T={T} />
      <Services T={T} lang={lang} />
      <HomeService T={T} />
      <Credentials T={T} />
      <About T={T} />
      <Testimonials T={T} />
      <BookingWizard T={T} lang={lang} />
      <Footer T={T} />
      <FloatingWhatsApp T={T} lang={lang} />
    </div>
  );
}

function Nav({ lang, setLang, T }: { lang: Lang; setLang: (l: Lang) => void; T: (k: string) => string }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-sand-50/90 backdrop-blur border-b border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl sm:text-2xl text-forest-800">
          Massage <span className="italic">by</span> Jhon
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-600">
          <a href="#servicios" className="hover:text-forest-800 transition-colors">{T("nav.services")}</a>
          <a href="#domicilio" className="hover:text-forest-800 transition-colors">{T("nav.homeService")}</a>
          <a href="#credenciales" className="hover:text-forest-800 transition-colors">{T("nav.credentials")}</a>
          <a href="#jhon" className="hover:text-forest-800 transition-colors">{T("nav.about")}</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs font-bold tracking-wide border border-sand-200 rounded-full px-3 py-1.5 text-ink-600 hover:border-forest-800 hover:text-forest-800 transition-colors cursor-pointer"
            aria-label="Switch language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#reservar"
            className="hidden sm:inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-900 text-white text-sm font-semibold rounded-full px-4 py-2 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            {T("nav.book")}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ T }: { T: (k: string) => string }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 10%, rgba(74,107,93,0.12), transparent), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(198,107,78,0.10), transparent)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="animate-fade-up text-clay-500 font-bold text-sm tracking-widest uppercase mb-4">
              {T("hero.kicker")}
            </p>
            <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink-900 mb-6">
              {T("hero.title1")}
              <br />
              <span className="text-forest-800 italic">{T("hero.title2")}</span>
            </h1>
            <p className="animate-fade-up delay-200 text-ink-600 text-lg leading-relaxed mb-8 max-w-xl">
              {T("hero.sub")}
            </p>
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#reservar"
                className="inline-flex items-center justify-center gap-2 bg-forest-800 hover:bg-forest-900 text-white font-bold rounded-full px-7 py-3.5 text-base transition-all hover:scale-[1.02] shadow-lg shadow-forest-800/20"
              >
                <WhatsAppIcon />
                {T("hero.cta")}
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-sand-200 hover:border-forest-800 text-ink-900 font-semibold rounded-full px-7 py-3.5 text-base transition-colors"
              >
                {T("hero.cta2")}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="animate-fade-up delay-300 flex flex-wrap gap-2">
              {["hero.badge4", "hero.badge1", "hero.badge2", "hero.badge3"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 bg-white border border-sand-200 rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-600"
                >
                  <CheckIcon className="w-4 h-4 text-sage-600" />
                  {T(b)}
                </span>
              ))}
            </div>
          </div>
          <div className="animate-fade-up delay-200 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest-900/15 aspect-[4/5] max-w-md mx-auto">
              <Image
                src={`${BP}/images/hero-table.jpg`}
                alt="Camilla profesional de masaje lista para la sesión"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 flex items-center gap-3">
                <span className="shrink-0 w-10 h-10 rounded-full bg-forest-800 text-white flex items-center justify-center">
                  <TableIcon className="w-5 h-5" />
                </span>
                <div className="text-sm">
                  <p className="font-bold text-ink-900">{T("hero.badge1")}</p>
                  <p className="text-ink-600">{T("hero.badge2")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ T, lang }: { T: (k: string) => string; lang: Lang }) {
  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <p className="text-clay-500 font-bold text-sm tracking-widest uppercase mb-3">{T("services.kicker")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-900 mb-4">{T("services.title")}</h2>
          <p className="text-ink-600 text-lg max-w-2xl mx-auto">{T("services.sub")}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ key, Icon }, i) => {
            const name = T(`svc.${key}.name`);
            const waMsg = `${t("wa.greeting", lang)} ${t("wa.service", lang)}: ${name}.`;
            return (
              <Reveal key={key} delay={i * 80}>
                <div className="group h-full bg-sand-50 border border-sand-200 rounded-3xl p-7 hover:border-sage-600 hover:shadow-xl hover:shadow-forest-900/5 transition-all">
                  <span className="inline-flex w-12 h-12 rounded-2xl bg-forest-800/10 text-forest-800 items-center justify-center mb-5 group-hover:bg-forest-800 group-hover:text-white transition-colors">
                    <Icon />
                  </span>
                  <h3 className="font-display text-xl text-ink-900 mb-2">{name}</h3>
                  <p className="text-ink-600 leading-relaxed mb-5">{T(`svc.${key}.desc`)}</p>
                  <a
                    href={buildWaLink(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-forest-800 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {T("svc.book")}
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            );
          })}
          <Reveal delay={SERVICES.length * 80}>
            <a
              href="#reservar"
              className="flex h-full flex-col items-center justify-center text-center bg-forest-800 hover:bg-forest-900 rounded-3xl p-7 transition-colors group"
            >
              <span className="inline-flex w-12 h-12 rounded-2xl bg-white/15 text-white items-center justify-center mb-5">
                <WhatsAppIcon />
              </span>
              <h3 className="font-display text-xl text-white mb-2">{T("wiz.title")}</h3>
              <p className="text-white/70 text-sm mb-4">{T("wiz.sub")}</p>
              <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                {T("nav.book")}
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HomeService({ T }: { T: (k: string) => string }) {
  const steps = [1, 2, 3] as const;
  return (
    <section id="domicilio" className="py-16 sm:py-24 bg-forest-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 90% 20%, #c66b4e, transparent), radial-gradient(ellipse 40% 50% at 5% 90%, #4a6b5d, transparent)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <p className="text-clay-500 font-bold text-sm tracking-widest uppercase mb-3">{T("home.kicker")}</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-5">{T("home.title")}</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">{T("home.p1")}</p>
            </Reveal>
            <div className="space-y-6">
              {steps.map((n, i) => (
                <Reveal key={n} delay={i * 100}>
                  <div className="flex gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white font-display text-lg flex items-center justify-center">
                      {n}
                    </span>
                    <div>
                      <h3 className="text-white font-bold mb-1">{T(`home.step${n}.t`)}</h3>
                      <p className="text-white/60 leading-relaxed">{T(`home.step${n}.d`)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={350}>
              <div className="mt-10 flex flex-wrap gap-2">
                <p className="inline-flex items-center gap-2 text-white/80 text-sm font-medium bg-white/5 border border-white/15 rounded-full px-4 py-2">
                  <PinIcon className="w-4 h-4 text-clay-500" />
                  {T("home.area")}
                </p>
                <p className="inline-flex items-center gap-2 text-white/80 text-sm font-medium bg-white/5 border border-white/15 rounded-full px-4 py-2">
                  <CheckIcon className="w-4 h-4 text-clay-500" />
                  {T("home.price")}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <Image
                src={`${BP}/images/work-session.jpg`}
                alt="Jhon dando un masaje terapéutico en camilla profesional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Credentials({ T }: { T: (k: string) => string }) {
  const bullets = ["cred.b0", "cred.b1", "cred.b2", "cred.b3", "cred.b4"];
  return (
    <section id="credenciales" className="py-16 sm:py-24 bg-sand-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative max-w-md mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-forest-900/15 border border-sand-200 bg-white">
                <Image
                  src={`${BP}/images/license.jpg`}
                  alt="Licencia de Estética del Departamento de Estado de Nueva York de Jhon Rivas"
                  width={1080}
                  height={781}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-1 sm:-right-8 w-32 sm:w-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-3">
                <Image
                  src={`${BP}/images/wood-tools.jpg`}
                  alt="Herramientas profesionales de maderoterapia"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-12 pr-32 sm:pr-36 text-ink-600 text-sm italic">{T("cred.caption")}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-clay-500 font-bold text-sm tracking-widest uppercase mb-3">{T("cred.kicker")}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-900 mb-5">{T("cred.title")}</h2>
            <p className="text-ink-600 text-lg leading-relaxed mb-8">{T("cred.p1")}</p>
            <ul className="space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-forest-800/10 text-forest-800 flex items-center justify-center">
                    <ShieldCheckIcon className="w-4 h-4" />
                  </span>
                  <span className="text-ink-900 font-medium">{T(b)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function About({ T }: { T: (k: string) => string }) {
  return (
    <section id="jhon" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <Reveal className="md:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square max-w-sm mx-auto">
              <Image
                src={`${BP}/images/jhon-portrait.jpg`}
                alt="Jhon Rivas Aiken sonriendo frente al mar"
                fill
                className="object-cover object-[45%_30%]"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-3">
            <p className="text-clay-500 font-bold text-sm tracking-widest uppercase mb-3">{T("about.kicker")}</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink-900 mb-5">{T("about.title")}</h2>
            <p className="text-ink-600 text-lg leading-relaxed mb-6">{T("about.p1")}</p>
            <blockquote className="border-l-4 border-clay-500 pl-5 font-display text-xl text-forest-800 italic mb-7">
              {T("about.q")}
            </blockquote>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-600 hover:text-forest-800 font-semibold transition-colors"
            >
              <InstagramIcon />
              @johns_aiken
            </a>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { src: "jhon-smile.jpg", alt: "Jhon Rivas Aiken sonriendo" },
              { src: "jhon-arrival.jpg", alt: "Jhon llegando a un servicio a domicilio con su equipo" },
              { src: "jhon-palms.jpg", alt: "Jhon Rivas Aiken al aire libre entre palmeras" },
              { src: "face-massage.jpg", alt: "Jhon Rivas Aiken dando un masaje facial" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative rounded-2xl overflow-hidden aspect-square shadow-md">
                <Image src={`${BP}/images/${src}`} alt={alt} fill className="object-cover" sizes="(min-width: 640px) 25vw, 50vw" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials({ T }: { T: (k: string) => string }) {
  const items = [
    { q: "testi.q1", a: "testi.a1", Icon: WhatsAppIcon },
    { q: "testi.q2", a: "testi.a2", Icon: InstagramIcon },
  ];
  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <p className="text-clay-500 font-bold text-sm tracking-widest uppercase mb-3">{T("testi.kicker")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-900 mb-4">{T("testi.title")}</h2>
          <p className="text-ink-600 text-lg max-w-2xl mx-auto">{T("testi.sub")}</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map(({ q, a, Icon }, i) => (
            <Reveal key={q} delay={i * 100}>
              <figure className="h-full bg-sand-50 border border-sand-200 rounded-3xl p-7 sm:p-8 flex flex-col">
                <span className="font-display text-5xl text-clay-500 leading-none mb-4" aria-hidden="true">
                  “
                </span>
                <blockquote className="text-ink-900 text-lg leading-relaxed italic flex-1">{T(q)}</blockquote>
                <figcaption className="mt-6 flex items-center gap-2 text-ink-600 font-semibold text-sm">
                  <span className="inline-flex w-8 h-8 rounded-full bg-forest-800/10 text-forest-800 items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </span>
                  {T(a)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingWizard({ T, lang }: { T: (k: string) => string; lang: Lang }) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [zone, setZone] = useState("");
  const [notes, setNotes] = useState("");

  const dayNames =
    lang === "es"
      ? ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
      : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const times = ["wiz.morning", "wiz.afternoon", "wiz.evening", "wiz.late"];

  const canNext = step === 0 ? !!service : step === 1 ? !!day && !!time : !!name.trim() && !!zone.trim();

  const waMessage = [
    t("wa.greeting", lang),
    `${t("wa.service", lang)}: ${service}`,
    `${t("wa.day", lang)}: ${day}`,
    `${t("wa.time", lang)}: ${time}`,
    `${t("wa.name", lang)}: ${name.trim()}`,
    `${t("wa.zone", lang)}: ${zone.trim()}`,
    notes.trim() ? `${t("wa.note", lang)}: ${notes.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const stepLabels = ["wiz.step1", "wiz.step2", "wiz.step3"];

  const optionBtn = (selected: boolean) =>
    `w-full text-left rounded-2xl border-2 px-5 py-4 font-semibold transition-all cursor-pointer ${
      selected
        ? "border-forest-800 bg-forest-800 text-white shadow-lg shadow-forest-800/20"
        : "border-sand-200 bg-white text-ink-900 hover:border-sage-600"
    }`;

  return (
    <section id="reservar" className="py-16 sm:py-24 bg-sand-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10">
          <p className="text-clay-500 font-bold text-sm tracking-widest uppercase mb-3">{T("wiz.kicker")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-900 mb-4">{T("wiz.title")}</h2>
          <p className="text-ink-600 text-lg">{T("wiz.sub")}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="bg-white rounded-3xl shadow-xl shadow-forest-900/5 border border-sand-200 overflow-hidden">
            {/* Progress */}
            <div className="flex border-b border-sand-200">
              {stepLabels.map((s, i) => (
                <div
                  key={s}
                  className={`flex-1 py-4 text-center text-xs sm:text-sm font-bold transition-colors ${
                    i === step
                      ? "bg-forest-800 text-white"
                      : i < step
                        ? "bg-sage-600/15 text-sage-700"
                        : "bg-white text-ink-600/50"
                  }`}
                >
                  <span className="hidden sm:inline">{i + 1}. </span>
                  {T(s)}
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-9">
              {step === 0 && (
                <div>
                  <h3 className="font-display text-2xl text-ink-900 mb-6">{T("wiz.q1")}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {SERVICES.map(({ key }) => {
                      const nm = T(`svc.${key}.name`);
                      return (
                        <button key={key} onClick={() => setService(nm)} className={optionBtn(service === nm)}>
                          {nm}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 className="font-display text-2xl text-ink-900 mb-6">{T("wiz.q2")}</h3>
                  <p className="font-bold text-sm text-ink-600 uppercase tracking-wide mb-3">{T("wiz.day")}</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-7">
                    {dayNames.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDay(d)}
                        className={`rounded-xl border-2 px-2 py-3 text-sm font-semibold transition-all cursor-pointer ${
                          day === d
                            ? "border-forest-800 bg-forest-800 text-white"
                            : "border-sand-200 bg-white text-ink-900 hover:border-sage-600"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  <p className="font-bold text-sm text-ink-600 uppercase tracking-wide mb-3">{T("wiz.time")}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {times.map((tk) => {
                      const label = T(tk);
                      return (
                        <button key={tk} onClick={() => setTime(label)} className={optionBtn(time === label)}>
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="font-display text-2xl text-ink-900 mb-6">{T("wiz.q3")}</h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block font-bold text-sm text-ink-600 uppercase tracking-wide mb-2">
                        {T("wiz.name")}
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={T("wiz.namePh")}
                        className="w-full rounded-2xl border-2 border-sand-200 px-5 py-4 text-lg focus:border-forest-800 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-sm text-ink-600 uppercase tracking-wide mb-2">
                        {T("wiz.zone")}
                      </label>
                      <input
                        value={zone}
                        onChange={(e) => setZone(e.target.value)}
                        placeholder={T("wiz.zonePh")}
                        className="w-full rounded-2xl border-2 border-sand-200 px-5 py-4 text-lg focus:border-forest-800 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-sm text-ink-600 uppercase tracking-wide mb-2">
                        {T("wiz.notes")}
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={T("wiz.notesPh")}
                        rows={2}
                        className="w-full rounded-2xl border-2 border-sand-200 px-5 py-4 text-lg focus:border-forest-800 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="flex items-center justify-between mt-9">
                {step > 0 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="font-semibold text-ink-600 hover:text-ink-900 transition-colors cursor-pointer px-2 py-3"
                  >
                    ← {T("wiz.back")}
                  </button>
                ) : (
                  <span />
                )}
                {step < 2 ? (
                  <button
                    onClick={() => canNext && setStep(step + 1)}
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-900 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-full px-7 py-3.5 transition-all cursor-pointer"
                  >
                    {T("wiz.next")}
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={canNext ? buildWaLink(waMessage) : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-disabled={!canNext}
                    className={`inline-flex items-center gap-2 font-bold rounded-full px-7 py-3.5 transition-all ${
                      canNext
                        ? "bg-[#25D366] hover:bg-[#1fb355] text-white shadow-lg shadow-[#25D366]/30 hover:scale-[1.02]"
                        : "bg-sand-200 text-ink-600/40 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <WhatsAppIcon />
                    {T("wiz.send")}
                  </a>
                )}
              </div>
            </div>
          </div>
          <p className="text-center text-ink-600 text-sm mt-5">{T("wiz.disclaimer")}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ T }: { T: (k: string) => string }) {
  return (
    <footer className="bg-forest-900 text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-10">
          <div>
            <p className="font-display text-2xl text-white mb-2">
              Massage <span className="italic">by</span> Jhon
            </p>
            <p className="max-w-xs leading-relaxed">{T("footer.tagline")}</p>
          </div>
          <div>
            <p className="font-bold text-white uppercase tracking-wide text-sm mb-3">{T("footer.contact")}</p>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                @johns_aiken
              </a>
              <p className="flex items-center gap-2">
                <PinIcon className="w-4 h-4" />
                New York City
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-sm space-y-1.5">
          <p className="flex items-center gap-2">
            <ShieldCheckIcon className="w-4 h-4 shrink-0" />
            {T("footer.license")}
          </p>
          <p>
            © {new Date().getFullYear()} Massage by Jhon. {T("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ T, lang }: { T: (k: string) => string; lang: Lang }) {
  return (
    <a
      href={buildWaLink(t("wa.greeting", lang))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={T("float.label")}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1fb355] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 transition-all hover:scale-110"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
