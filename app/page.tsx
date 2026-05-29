"use client"

import { useState } from "react"

type Product = {
  name: string
  description: string
  price: number
  image: string
  category: string
}

export default function Home() {

  const [lang, setLang] = useState("es")

  const phone = "19715714880"

  const texts = {
    es: {
      subtitle: "Moda moderna para mujer y hombre",
      whatsapp: "Preguntar por WhatsApp"
    },
    en: {
      subtitle: "Modern fashion for men and women",
      whatsapp: "Ask on WhatsApp"
    }
  }

  const products: Product[] = [
    {
      name: "Bolso Negro",
      description: "Bolso elegante color negro, perfecto para cualquier ocasión.",
      price: 50,
      image: "/bolso-negro.jpg",
      category: "Mujer"
    },
    {
      name: "Bolso Dorado",
      description: "Bolso dorado elegante y moderno.",
      price: 50,
      image: "/bolso-dorado.jpg",
      category: "Mujer"
    },
    {
      name: "Bolso Marrón",
      description: "Bolso marrón clásico para uso diario.",
      price: 50,
      image: "/bolso-marron.jpg",
      category: "Mujer"
    },
    {
      name: "Sandalias Bi-color",
      description: "Sandalias cómodas para uso diario.",
      price: 45,
      image: "/sandalias-bi-color.jpg",
      category: "Calzado"
    },
    {
      name: "Sneakers Blanco/Azul",
      description: "Tenis urbanos modernos.",
      price: 80,
      image: "/tenis-blanco-azul.jpg",
      category: "Calzado"
    },
    {
      name: "Jeans Hombre Negro",
      description: "Jeans negro slim moderno.",
      price: 60,
      image: "/jeans-negro.jpg",
      category: "Hombre"
    }
  ]

  const sendWhatsApp = (product: Product) => {

    const message =
`🛍️ *Hola! quiero este producto:*

👕 Producto: ${product.name}
📂 Categoría: ${product.category}
💰 Precio: $${product.price}

¿Está disponible?`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <main className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <header className="bg-white flex justify-between items-center p-5 border-b sticky top-0 z-10">
        <h1 className="text-2xl font-bold tracking-tight">YFlow</h1>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-1 border rounded"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* TITULO */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold tracking-tight">
          YFlow Fashion
        </h2>
        <p className="text-gray-600 mt-2">
          {texts[lang].subtitle}
        </p>
      </div>

      {/* PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >

            <img
              src={p.image}
              className="h-64 w-full object-cover hover:scale-105 transition duration-300"
            />

            <div className="p-4">

              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {p.category}
              </span>

              <h3 className="font-bold text-lg mt-2">
                {p.name}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {p.description}
              </p>

              <p className="font-bold text-xl mt-3">
                ${p.price}
              </p>

              <button
                onClick={() => sendWhatsApp(p)}
                className="bg-black text-white w-full mt-4 py-3 rounded-xl hover:bg-gray-800 transition"
              >
                {texts[lang].whatsapp}
              </button>

            </div>
          </div>
        ))}

      </div>

    </main>
  )
}