export type Lang = "es" | "en";

export const WHATSAPP_NUMBER = "16469057287";
export const PHONE_DISPLAY = "646-905-7287";
export const INSTAGRAM = "https://www.instagram.com/johns_aiken";

type Dict = Record<string, { es: string; en: string }>;

export const dict: Dict = {
  // Nav
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.pricing": { es: "Precios", en: "Pricing" },
  "nav.homeService": { es: "A Domicilio", en: "Home Service" },
  "nav.about": { es: "Sobre Jhon", en: "About Jhon" },
  "nav.credentials": { es: "Credenciales", en: "Credentials" },
  "nav.book": { es: "Reservar", en: "Book Now" },

  // Hero
  "hero.kicker": { es: "Masaje profesional a domicilio en NYC", en: "Professional home-service massage in NYC" },
  "hero.title1": { es: "Relájate.", en: "Relax." },
  "hero.title2": { es: "Jhon lleva la camilla.", en: "Jhon brings the table." },
  "hero.sub": {
    es: "Masaje terapéutico, deportivo, reductivo, drenaje y relajación en la comodidad de tu casa. Disponible 24/7, camilla profesional incluida. Reserva por WhatsApp en menos de un minuto.",
    en: "Therapeutic, sports, reductive, drainage and relaxation massage in the comfort of your home. Available 24/7, professional table included. Book on WhatsApp in under a minute.",
  },
  "hero.cta": { es: "Reservar por WhatsApp", en: "Book on WhatsApp" },
  "hero.cta2": { es: "Ver servicios", en: "See services" },
  "hero.badge1": { es: "Camilla incluida", en: "Table included" },
  "hero.badge2": { es: "Servicio a domicilio", en: "Home service" },
  "hero.badge3": { es: "Español / English", en: "English / Español" },
  "hero.badge4": { es: "Disponible 24/7", en: "Available 24/7" },
  "hero.badge5": { es: "$100 la hora", en: "$100 per hour" },

  // Services
  "services.kicker": { es: "Servicios", en: "Services" },
  "services.title": { es: "Todo tipo de masaje profesional", en: "Every type of professional massage" },
  "services.sub": {
    es: "Cada sesión se adapta a lo que tu cuerpo necesita ese día.",
    en: "Every session adapts to what your body needs that day.",
  },
  "svc.relax.name": { es: "Masaje de Relajación", en: "Relaxation Massage" },
  "svc.relax.desc": {
    es: "Presión suave y ritmo lento para soltar el estrés del día y descansar mejor.",
    en: "Gentle pressure and slow rhythm to release daily stress and sleep better.",
  },
  "svc.sport.name": { es: "Masaje Deportivo", en: "Sports Massage" },
  "svc.sport.desc": {
    es: "Trabajo profundo en músculos cargados. Ideal antes o después de entrenar.",
    en: "Deep work on tight muscles. Ideal before or after training.",
  },
  "svc.thera.name": { es: "Masaje Terapéutico", en: "Therapeutic Massage" },
  "svc.thera.desc": {
    es: "Enfocado en dolor de espalda, cuello y hombros. Alivio donde más lo necesitas.",
    en: "Focused on back, neck and shoulder pain. Relief where you need it most.",
  },
  "svc.reduc.name": { es: "Masaje Reductivo", en: "Reductive Massage" },
  "svc.reduc.desc": {
    es: "Técnica firme y constante que ayuda a moldear y activar la circulación.",
    en: "Firm, consistent technique that helps sculpt and boost circulation.",
  },
  "svc.drain.name": { es: "Drenaje Linfático", en: "Lymphatic Drainage" },
  "svc.drain.desc": {
    es: "Masaje suave que ayuda a eliminar líquidos y desinflamar. En sesiones sueltas o paquetes de 10, 15 o 20.",
    en: "Gentle massage that helps release fluids and reduce swelling. Single sessions or packages of 10, 15 or 20.",
  },
  "svc.madero.name": { es: "Maderoterapia", en: "Wood Therapy" },
  "svc.madero.desc": {
    es: "Herramientas de madera profesionales para tonificar, drenar y moldear el cuerpo.",
    en: "Professional wood tools to tone, drain and sculpt the body.",
  },
  "svc.train.name": { es: "Entrenamiento Personal", en: "Personal Training" },
  "svc.train.desc": {
    es: "Jhon también es entrenador personal. Pregunta por planes de entrenamiento.",
    en: "Jhon is also a personal trainer. Ask about training plans.",
  },
  "svc.book": { es: "Reservar este servicio", en: "Book this service" },

  // Pricing
  "price.kicker": { es: "Precios", en: "Pricing" },
  "price.title": { es: "Un precio claro, sin sorpresas", en: "One clear price, no surprises" },
  "price.sub": {
    es: "Trabajo 24/7. Una hora completa de masaje, al mismo precio en cualquier lugar.",
    en: "Working 24/7. A full hour of massage, at the same price wherever you are.",
  },
  "price.per": { es: "por sesión de una hora", en: "per one-hour session" },
  "price.always": { es: "Disponible 24/7 — todos los días", en: "Available 24/7 — every day" },
  "price.b1": {
    es: "Mismo precio sin importar el lugar — a domicilio en toda la ciudad",
    en: "Same price no matter the location — home service across the city",
  },
  "price.b2": {
    es: "Todo tipo de masaje y terapias: relajación, reductores, drenaje y más",
    en: "Every type of massage and therapy: relaxation, reductive, drainage and more",
  },
  "price.b3": {
    es: "Paquetes de 10, 15 o 20 sesiones para tratamientos completos",
    en: "Packages of 10, 15 or 20 sessions for full treatments",
  },
  "price.b4": {
    es: "Dedicación, respeto y seriedad en cada servicio",
    en: "Dedication, respect and professionalism in every service",
  },
  "price.note": {
    es: "Las propinas nunca son obligatorias — pero siempre se agradecen.",
    en: "Tips are never required — but always appreciated.",
  },
  "price.cta": { es: "Reservar mi hora", en: "Book my session" },

  // Home service
  "home.kicker": { es: "Servicio a domicilio", en: "Home service" },
  "home.title": { es: "El spa llega a tu puerta", en: "The spa comes to your door" },
  "home.p1": {
    es: "No tienes que moverte. Jhon llega a tu casa con camilla profesional, sábanas limpias y aceites — solo necesitas un espacio tranquilo.",
    en: "You don't have to go anywhere. Jhon arrives at your home with a professional table, clean sheets and oils — all you need is a quiet space.",
  },
  "home.step1.t": { es: "Reserva por WhatsApp", en: "Book on WhatsApp" },
  "home.step1.d": {
    es: "Elige tu servicio y horario. Respuesta rápida, sin apps ni pagos por adelantado.",
    en: "Pick your service and time. Fast reply, no apps, no prepayment.",
  },
  "home.step2.t": { es: "Jhon llega con todo", en: "Jhon arrives with everything" },
  "home.step2.d": {
    es: "Camilla profesional, sábanas y aceites incluidos. Montaje en minutos.",
    en: "Professional table, sheets and oils included. Set up in minutes.",
  },
  "home.step3.t": { es: "Relájate y disfruta", en: "Relax and enjoy" },
  "home.step3.d": {
    es: "Tu sesión completa sin tráfico, sin sala de espera, sin prisa.",
    en: "Your full session with no traffic, no waiting room, no rush.",
  },
  "home.area": {
    es: "Sirviendo Washington Heights y toda la ciudad de Nueva York",
    en: "Serving Washington Heights and all of New York City",
  },
  "home.price": {
    es: "Mismo precio a cualquier lugar — $100 la hora",
    en: "Same price anywhere — $100 per hour",
  },

  // Credentials
  "cred.kicker": { es: "Credenciales", en: "Credentials" },
  "cred.title": { es: "Profesional con licencia", en: "Licensed professional" },
  "cred.p1": {
    es: "Jhon está licenciado en Estética por el Departamento de Estado de Nueva York. Formación real, herramientas profesionales y más de 15 años de práctica — no es improvisación.",
    en: "Jhon is licensed in Esthetics by the New York State Department of State. Real training, professional tools and more than 15 years of practice — nothing improvised.",
  },
  "cred.b0": { es: "Más de 15 años en el servicio", en: "More than 15 years in the service" },
  "cred.b1": { es: "Licencia del Estado de Nueva York — Estética", en: "New York State license — Esthetics" },
  "cred.b2": { es: "Licencia No. AEE-22-04669, vigente hasta 2026", en: "License No. AEE-22-04669, valid through 2026" },
  "cred.b3": { es: "Camilla, sábanas limpias y aceites profesionales", en: "Table, clean sheets and professional oils" },
  "cred.b4": { es: "Herramientas de maderoterapia certificadas", en: "Certified wood-therapy tools" },
  "cred.caption": { es: "Licencia exhibida en cada sesión", en: "License displayed at every session" },

  // About
  "about.kicker": { es: "Sobre Jhon", en: "About Jhon" },
  "about.title": { es: "Manos con experiencia", en: "Experienced hands" },
  "about.p1": {
    es: "Jhon Rivas Aiken es masajista y entrenador personal en Nueva York, con más de 15 años en el servicio. Cada sesión llega con camilla, técnica, dedicación, respeto y seriedad — a la hora que lo necesites, 24/7.",
    en: "Jhon Rivas Aiken is a massage therapist and personal trainer in New York with more than 15 years in the service. Every session comes with a proper table, technique, dedication, respect and professionalism — whenever you need it, 24/7.",
  },
  "about.q": {
    es: "“Mi meta es simple: que te levantes de la camilla sintiéndote nuevo.”",
    en: "“My goal is simple: you get up from the table feeling brand new.”",
  },

  // Wizard
  "wiz.kicker": { es: "Reserva fácil", en: "Easy booking" },
  "wiz.title": { es: "Reserva tu sesión", en: "Book your session" },
  "wiz.sub": {
    es: "Tres pasos y tu cita sale directo al WhatsApp de Jhon. Sin pagos en línea.",
    en: "Three steps and your request goes straight to Jhon's WhatsApp. No online payment.",
  },
  "wiz.step1": { es: "Servicio", en: "Service" },
  "wiz.step2": { es: "Día y hora", en: "Day & time" },
  "wiz.step3": { es: "Tus datos", en: "Your info" },
  "wiz.q1": { es: "¿Qué servicio deseas?", en: "Which service would you like?" },
  "wiz.q2": { es: "¿Cuándo te gustaría tu sesión?", en: "When would you like your session?" },
  "wiz.day": { es: "Día preferido", en: "Preferred day" },
  "wiz.time": { es: "Hora preferida", en: "Preferred time" },
  "wiz.morning": { es: "Mañana (9am – 12pm)", en: "Morning (9am – 12pm)" },
  "wiz.afternoon": { es: "Tarde (12pm – 5pm)", en: "Afternoon (12pm – 5pm)" },
  "wiz.evening": { es: "Noche (5pm – 9pm)", en: "Evening (5pm – 9pm)" },
  "wiz.late": { es: "Otra hora — disponible 24/7", en: "Other time — available 24/7" },
  "wiz.q3": { es: "Últimos detalles", en: "Last details" },
  "wiz.name": { es: "Tu nombre", en: "Your name" },
  "wiz.namePh": { es: "Ej: María", en: "E.g.: Maria" },
  "wiz.zone": { es: "Tu zona o vecindario", en: "Your area or neighborhood" },
  "wiz.zonePh": { es: "Ej: Washington Heights", en: "E.g.: Washington Heights" },
  "wiz.notes": { es: "Nota para Jhon (opcional)", en: "Note for Jhon (optional)" },
  "wiz.notesPh": { es: "Ej: dolor de espalda baja", en: "E.g.: lower back pain" },
  "wiz.back": { es: "Atrás", en: "Back" },
  "wiz.next": { es: "Siguiente", en: "Next" },
  "wiz.send": { es: "Enviar por WhatsApp", en: "Send on WhatsApp" },
  "wiz.disclaimer": {
    es: "Se abre WhatsApp con tu mensaje listo — solo presiona enviar. Jhon confirma horario y precio contigo.",
    en: "WhatsApp opens with your message ready — just press send. Jhon confirms time and price with you.",
  },

  // WhatsApp message template
  "wa.greeting": { es: "Hola Jhon, quiero reservar una sesión.", en: "Hi Jhon, I'd like to book a session." },
  "wa.service": { es: "Servicio", en: "Service" },
  "wa.day": { es: "Día", en: "Day" },
  "wa.time": { es: "Hora", en: "Time" },
  "wa.name": { es: "Nombre", en: "Name" },
  "wa.zone": { es: "Zona", en: "Area" },
  "wa.note": { es: "Nota", en: "Note" },

  // Footer
  "footer.tagline": {
    es: "Masaje profesional a domicilio con camilla incluida. Disponible 24/7 en Nueva York — $100 la hora.",
    en: "Professional home-service massage, table included. Available 24/7 in New York City — $100 per hour.",
  },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.license": {
    es: "Licenciado en Estética — Depto. de Estado de NY, Lic. AEE-22-04669",
    en: "Licensed in Esthetics — NY Dept. of State, Lic. AEE-22-04669",
  },
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
  "float.label": { es: "Reservar por WhatsApp", en: "Book on WhatsApp" },
};

export function t(key: string, lang: Lang): string {
  return dict[key]?.[lang] ?? key;
}

export function buildWaLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
