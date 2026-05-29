"use client"

import { useState } from "react"

type Product = {
  name: string
  price: number
}

export default function Home() {

  const [lang, setLang] = useState<"es" | "en">("es")

  const phone = "19715714880"

  const texts = {
    es: {
      subtitle: "Moda moderna para mujer y hombre — visita nuestra tienda física",
      categories: "Categorías",
      products: "Productos disponibles",
      visit: "Visítanos en YFlow",
      whatsapp: "Preguntar por WhatsApp"
    },
    en: {
      subtitle: "Modern fashion for men and women — visit our physical store",
      categories: "Categories",
      products: "Available products",
      visit: "Visit us at YFlow",
      whatsapp: "Ask on WhatsApp"
    }
  }

  const products: Product[] = [
    { name: "Bolso Luxury", price: 45 },
    { name: "Vestido Elegante", price: 60 },
    { name: "Sneakers Urban", price: 80 },
    { name: "Sandalias Summer", price: 35 }
  ]

  const sendWhatsApp = (product: Product) => {
    const message = `Hola, quiero información de: ${product.name} - $${product.price}`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-5 border-b">

        <h1 className="text-2xl font-bold">YFlow</h1>

        <div className="flex gap-3 items-center">

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="border px-3 py-1 rounded text-sm"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-black text-white px-4 py-2 rounded-full text-sm"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-5xl font-bold">YFlow Fashion</h2>

        <p className="text-gray-600 mt-3 text-lg">
          {texts[lang].subtitle}
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="px-10 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          {texts[lang].categories}
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["👗 Mujer", "👕 Hombre", "👜 Accesorios", "👟 Calzado"].map((c) => (
            <div key={c} className="border p-5 rounded-xl">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-10 py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          {texts[lang].products}
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {products.map((p, i) => (
            <div key={i} className="bg-white shadow rounded-xl p-4">

              <div className="h-40 bg-gray-200 rounded mb-3"></div>

              <h3 className="font-bold">{p.name}</h3>
              <p className="text-gray-600">${p.price}</p>

              <p className="text-green-600 text-sm mb-3">
                Disponible en tienda
              </p>

              <button
                onClick={() => sendWhatsApp(p)}
                className="w-full bg-green-600 text-white py-2 rounded"
              >
                {texts[lang].whatsapp}
              </button>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">
          {texts[lang].visit}
        </h2>

        <p className="text-gray-600 mt-2">
          Moda real, sin envíos — compra en tienda física
        </p>

        <a
          href={`https://wa.me/${phone}`}
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full"
        >
          WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-8">
        <p className="font-bold">YFlow</p>
        <p className="text-sm text-gray-400">
          Moda presencial — tienda física
        </p>
      </footer>

    </main>
  )
}