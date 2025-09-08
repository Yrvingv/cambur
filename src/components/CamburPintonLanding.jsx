import React, { useState } from "react"
import { motion } from "framer-motion"

// Landing page "Cambur Pintón" — comida artesanal saludable (con VIDEO) y Poppins
// - Stack: React + Tailwind + framer-motion (microanimaciones suaves)
// - CTA único de conversión: WhatsApp +54 9 381 359 4194
// - Video integrado en sección "Nuestro Producto" (sin autoplay, con póster)
// - Tipografía global Poppins (400/600/800)
// -----------------------------------------------------------------------------
// PRODUCCIÓN — coloca estos archivos en tu proyecto:
// 1) /public/media/NUESTRO PRODUCTO.mp4          (tu video)
// 2) /public/media/cocina-poster.jpg             (portada del video, sin texto)
// 3) index.html → añade las fuentes y metatags SEO/OG que te dejo al final
// -----------------------------------------------------------------------------
// Helper para construir rutas que funcionen en GitHub Pages (/cambur/)
const media = (file) => `${import.meta.env.BASE_URL}media/${encodeURIComponent(file)}`;

// Reemplazo del componente Logo (usa BASE_URL para que funcione en GitHub Pages)
function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2 select-none">
      <img
        src={media("logo-cambur.svg")}  // public/media/logo-cambur.svg
        alt="Cambur Pintón"
        className="h-14 w-auto"
        loading="eager"
        decoding="async"
      />
      <span className="font-extrabold tracking-tight text-xl md:text-2xl">Cambur Pintón</span>
    </a>
  );
}



function TagBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-400 bg-emerald-50/80 px-3 py-1 text-[0.8rem] font-medium text-emerald-700">
      {children}
    </span>
  )
}

function CTAButton({ href = "#", children, className = "", ariaLabel }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold shadow-sm ring-1 ring-emerald-300/60 bg-emerald-400/90 hover:bg-emerald-400 active:bg-emerald-500 text-stone-900 transition " +
        className
      }
    >
      {children}
    </a>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <div className="mb-3">
          <TagBadge>{eyebrow}</TagBadge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-stone-600">{subtitle}</p>
      )}
    </div>
  )
}

function ProductCard({ name, desc, price = "Consultar", tag }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-3xl border border-stone-200/70 bg-white/90 p-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] backdrop-blur-sm"
    >
      {tag && (
        <div className="absolute -top-3 -right-3">
          <TagBadge>{tag}</TagBadge>
        </div>
      )}
      <h3 className="text-xl font-bold tracking-tight">{name}</h3>
      <p className="mt-2 text-stone-600">{desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-extrabold text-stone-800">{price}</span>
        <CTAButton href="https://wa.me/5493813594194" className="!px-4 !py-2 text-sm" ariaLabel="Pedir por WhatsApp">
          Pedir por WhatsApp
        </CTAButton>
      </div>
    </motion.div>
  )
}

function VideoSection() {
  const waMsg = encodeURIComponent(
    "Hola Cambur Pintón 👋 Acabo de ver el video y quiero pedir arepas/hamburguesas/salsas. ¿Me pasás opciones y precio?"
  );
  return (
    <section id="nuestro-producto" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <SectionTitle
        eyebrow="Nuestro Producto"
        title="Qué ofrecemos, cómo lo preparamos y cómo pedir"
        subtitle="Mirá el video y hacé tu pedido al instante por WhatsApp."
      />

      <div className="mt-8 grid gap-8 md:grid-cols-5">
        {/* Columna del VIDEO */}
        <div className="md:col-span-3">
          {/* Contenedor para reducir el ancho visible del video */}
          <div className="mx-auto max-w-[480px] md:max-w-[520px]">
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]">
              {/* Ubicá tu archivo en /public/media/NUESTRO PRODUCTO.mp4 y el poster en /public/media/cocina-poster.jpg */}
              <video
                className="w-full h-auto"
                controls
                preload="none"
                playsInline
                poster="/media/cocina-poster.jpg"
                aria-label="Video: nuestra propuesta de comida artesanal saludable"
              >
                <source src={`${import.meta.env.BASE_URL}media/NUESTRO PRODUCTO.mp4`} type="video/mp4" /><source/>
                Tu navegador no soporta video HTML5.
              </video>
            </div>
            <p className="mt-3 text-sm text-stone-600">Envíos Lun–Sáb 9:00–19:00 · Zona: Tucumán</p>
          </div>
        </div>

        {/* Columna de bullets + CTA */}
        <div className="md:col-span-2 self-center">
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start gap-3"><span>✅</span> Arepas al vacío (sin TACC), listas para freezer o plancha.</li>
            <li className="flex items-start gap-3"><span>✅</span> Hamburguesas saludables congeladas, cocción rápida.</li>
            <li className="flex items-start gap-3"><span>✅</span> Salsas caseras, ingredientes reales y sin colorantes.</li>
          </ul>
          <CTAButton
            href={`https://wa.me/5493813594194?text=${waMsg}`}
            className="mt-6"
            ariaLabel="Enviar mensaje por WhatsApp tras ver el video"
          >
            Quiero pedir ahora
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default function CamburPintonLanding() {
  const [open, setOpen] = useState(false)

  const menu = [
    { id: "inicio", label: "Inicio" },
    { id: "nuestro-producto", label: "Video" },
    { id: "menu", label: "Menú" },
    { id: "beneficios", label: "Beneficios" },
    { id: "testimonios", label: "Testimonios" },
    { id: "contacto", label: "Contacto" },
  ]

  return (
    <div
      className="scroll-smooth bg-gradient-to-b from-emerald-50 via-lime-50 to-amber-50 text-stone-900"
      style={{ fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" }}
    >
      {/* Carga rápida de Poppins (poner esto en index.html para prod). Aquí solo se ilustra: */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');`}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-6">
              {menu.map((m) => (
                <a key={m.id} href={`#${m.id}`} className="text-[0.95rem] font-medium text-stone-700 hover:text-stone-950">
                  {m.label}
                </a>
              ))}
              <CTAButton href="https://wa.me/5493813594194" ariaLabel="Hacer pedido por WhatsApp">Pedir ahora</CTAButton>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 text-stone-700"
              onClick={() => setOpen((s) => !s)}
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>
          {open && (
            <div className="md:hidden mt-3 grid gap-2">
              {menu.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 bg-stone-100/80"
                >
                  {m.label}
                </a>
              ))}
              <CTAButton href="https://wa.me/5493813594194" className="w-full" ariaLabel="Hacer pedido por WhatsApp">
                Pedir ahora
              </CTAButton>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-200 via-lime-200 to-amber-200 blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-200 via-emerald-100 to-lime-200 blur-3xl opacity-70" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <TagBadge>Comida artesanal saludable</TagBadge>
            <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Sin vueltas: rico, real y práctico
            </h1>
            <p className="mt-4 text-lg text-stone-700 md:max-w-[56ch]">
              Arepas al vacío (sin TACC), hamburguesas saludables para freezer y salsas caseras. Hecho en casa, con ingredientes reales.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CTAButton href="#nuestro-producto" ariaLabel="Ir a ver el video">Ver video</CTAButton>
              <CTAButton href="https://wa.me/5493813594194" className="!bg-stone-900 !text-white !ring-stone-300" ariaLabel="Hacer pedido por WhatsApp">
                Hacer pedido por WhatsApp
              </CTAButton>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-stone-600">
              <li className="flex items-center gap-2">✅ Arepas sin TACC</li>
              <li className="flex items-center gap-2">✅ Freezer-friendly</li>
              <li className="flex items-center gap-2">✅ Ingredientes reales</li>
              <li className="flex items-center gap-2">✅ Envíos en Tucumán</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ rotate: -2, opacity: 0, scale: 0.95 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="aspect-[4/5] w-full  rotate-[5deg] scale-105 overflow-hidden rounded-[2rem] border border-emerald-200 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.25)]">
              <img
                src={`${import.meta.env.BASE_URL}media/hero.png`}
                alt="Arepas y hamburguesas saludables, listas para calentar"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO */}
      <VideoSection />

      {/* MENÚ */}
      <section id="menu" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionTitle
          eyebrow="Menú estrella"
          title="Primeras líneas de producto"
          subtitle="Podés combinarlas en pedidos semanales o para eventos."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ProductCard
            name="Arepas tradicionales (sin TACC)"
            desc="Envasadas al vacío. Ideales para freezer; plancha o horno en minutos."
            price="Consultar"
            tag="Estrella"
          />
          <ProductCard
            name="Hamburguesas saludables (freezer)"
            desc="De pollo/res/mixtas. Textura casera, cocción rápida, sin colorantes."
            price="Consultar"
            tag="Próximamente"
          />
          <ProductCard
            name="Salsas caseras"
            desc="Criolla, ajo, guasacaca. Ingredientes reales; perfectas para acompañar."
            price="Consultar"
            tag="Próximamente"
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-stone-600">
          <TagBadge>Pedidos al por mayor</TagBadge>
          <span>·</span>
          <TagBadge>Opciones sin TACC</TagBadge>
          <span>·</span>
          <TagBadge>Eventos y catering</TagBadge>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionTitle
          eyebrow="Beneficios reales"
          title="Por qué elegir comida artesanal saludable"
          subtitle="Más simple de lo que creés: mejor sabor, control de ingredientes y practicidad."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[{
            t: "Sin TACC (arepas)",
            d: "Una opción noble para celiacos o quienes evitan harinas con gluten."
          },{
            t: "Freezer-friendly",
            d: "Batch cooking inteligente: resolvés comidas sin perder calidad."
          },{
            t: "Ingredientes reales",
            d: "Cocina honesta: sin colorantes y con sabor de casa."
          }].map((b, i) => (
            <motion.div
              key={i}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]"
            >
              <div className="text-3xl">✨</div>
              <h3 className="mt-3 text-xl font-bold">{b.t}</h3>
              <p className="mt-2 text-stone-600">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionTitle
          eyebrow="La gente lo dice"
          title="Testimonios que importan"
          subtitle="Clientes que resuelven su semana con sabor y practicidad."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[{
            q: "Las arepas al vacío me salvan el desayuno: 5 minutos y quedan perfectas.",
            a: "Lucía · San Miguel",
          },{
            q: "Las hamburguesas del freezer tienen textura casera, no parecen de fábrica.",
            a: "Agustín · Yerba Buena",
          },{
            q: "La guasacaca es un viaje. Se nota que usan ingredientes de verdad.",
            a: "Caro · Tafí Viejo",
          }].map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl border border-stone-200 bg-white p-6 text-stone-700 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]"
            >
              “{t.q}”
              <footer className="mt-3 text-sm text-stone-500">{t.a}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionTitle
          eyebrow="Contacto y redes"
          title="Hablemos por WhatsApp"
          subtitle="Pedidos, dudas y combos para eventos."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]">
            <h3 className="text-lg font-bold">Mensaje rápido</h3>
            <p className="mt-2 text-sm text-stone-600">Se abrirá WhatsApp con un mensaje prellenado.</p>
            <div className="mt-4">
              <CTAButton
                href={
                  "https://wa.me/5493813594194?text=" +
                  encodeURIComponent("Hola Cambur Pintón 👋 Quiero hacer un pedido.")
                }
                ariaLabel="Escribir por WhatsApp"
              >
                Escribir por WhatsApp
              </CTAButton>
            </div>
            <div className="mt-6 text-sm text-stone-600">
              <p>Horario: Lun–Sáb, 9:00–19:00</p>
              <p>Zona de reparto: Tucumán</p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg font-bold">Seguinos</h3>

              <div className="flex items-center gap-5">
                {/* Instagram */}
                <a
                  href="https://instagram.com/camburpinton5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-stone-200 hover:bg-stone-100 text-stone-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61579434990193"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-stone-200 hover:bg-stone-100 text-stone-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                    <path d="M13 10h3.5l-.5 3H13v9h-3v-9H7v-3h3V8.5C10 6 11.5 4 15 4c1 0 2 .1 2 .1V7h-1.7C13.9 7 13 7.8 13 9.3V10z"/>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:cambur.pinton.mia@gmail.com"
                  aria-label="Email"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-stone-200 hover:bg-stone-100 text-stone-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                    <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.2l9 5.3 9-5.3V7H3zm18 10V9.3l-8.4 5a2 2 0 0 1-2.2 0L2 9.3V17h19z"/>
                  </svg>
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200/70 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <Logo />
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} Cambur Pintón · Hecho con cariño y cocina honesta @ YRVING VIERA </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#menu" className="hover:underline">Menú</a>
            <a href="#beneficios" className="hover:underline">Beneficios</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/5493813594194"
        className="fixed bottom-5 right-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 ring-8 ring-emerald-400/20 shadow-xl hover:scale-105 active:scale-95 transition"
        aria-label="Contactar por WhatsApp"
        title="WhatsApp"
      >
        🟢
      </a>

      {/* --- METATAGS (copiar en index.html dentro de <head>) ------------------
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
      <title>Cambur Pintón – Comida artesanal saludable en Tucumán</title>
      <meta name="description" content="Arepas sin TACC al vacío, hamburguesas saludables para freezer y salsas caseras. Mirá el video y pedí por WhatsApp." />
      <meta property="og:title" content="Cambur Pintón – Comida artesanal saludable en Tucumán" />
      <meta property="og:description" content="Qué ofrecemos, cómo lo preparamos y cómo pedir. Video + pedido por WhatsApp." />
      <meta property="og:image" content="/media/cocina-poster.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cambur Pintón – Comida artesanal saludable en Tucumán" />
      <meta name="twitter:description" content="Video del producto + pedido por WhatsApp." />
      <meta name="twitter:image" content="/media/cocina-poster.jpg" />
      ---------------------------------------------------------------------- */}
    </div>
  )
}
