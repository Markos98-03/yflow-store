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
      products: "Productos",
      whatsapp: "Preguntar por WhatsApp"
    },
    en: {
      subtitle: "Modern fashion for men and women",
      products: "Products",
      whatsapp: "Ask on WhatsApp"
    }
  }

  const products: Product[] = [

    // ================= MUJER =================
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
      name: "Bolso Beige",
      description: "Bolso beige combinable con todo outfit.",
      price: 50,
      image: "/bolso-beige.jpg",
      category: "Mujer"
    },
    {
      name: "Bolso Rosado",
      description: "Bolso rosado moderno juvenil.",
      price: 50,
      image: "/bolso-rosado.jpg",
      category: "Mujer"
    },
    {
      name: "Bolso Blanco",
      description: "Bolso blanco elegante.",
      price: 50,
      image: "/bolso-blanco.jpg",
      category: "Mujer"
    },

    // ================= CALZADO =================
    {
      name: "Sandalias Bi-color",
      description: "Sandalias cómodas para uso diario.",
      price: 45,
      image: "/sandalias-bi-color.jpg",
      category: "Calzado"
    },
    {
      name: "Sandalias Verdes",
      description: "Sandalias verdes frescas y cómodas.",
      price: 45,
      image: "/sandalias-verdes.jpg",
      category: "Calzado"
    },
    {
      name: "Sneakers Blanco/Azul",
      description: "Tenis urbanos modernos.",
      price: 80,
      image: "/tenis-blanco-azul.jpg",
      category: "Calzado"
    },

    // ================= ACCESORIOS =================
    {
      name: "Cartera Negra",
      description: "Cartera elegante negra.",
      price: 70,
      image: "/cartera-negra.jpg",
      category: "Accesorios"
    },
    {
      name: "Cartera Beige",
      description: "Cartera beige elegante.",
      price: 70,
      image: "/cartera-beige.jpg",
      category: "Accesorios"
    },

    // ================= HOMBRE =================
    {
      name: "Jeans Hombre Negro",
      description: "Jeans negro slim moderno.",
      price: 60,
      image: "/jeans-negro.jpg",
      category: "Hombre"
    },
    {
      name: "Jeans Hombre Azul",
      description: "Jeans azul clásico.",
      price: 60,
      image: "/jeans-azul.jpg",
      category: "Hombre"
    }
  ]

  const sendWhatsApp = (product: Product) => {
    const message =
`Hola, quiero información:

Producto: ${product.name}
Categoría: ${product.category}
Precio: $${product.price}`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <main className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <header className="bg-white flex justify-between p-5 border-b">
        <h1 className="text-2xl font-bold">YFlow</h1>

        <div className="flex gap-3">
          <button onClick={() => setLang(lang === "es" ? "en" : "es")}>
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a href={`https://wa.me/${phone}`}>
            WhatsApp
          </a>
        </div>
      </header>

      {/* TITULO */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold">YFlow Fashion</h2>
        <p>{texts[lang].subtitle}</p>
      </div>

      {/* PRODUCTOS */}
      <div className="grid md:grid-cols-3 gap-6 p-6">

        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow">

            <img src={p.image} className="h-64 w-full object-cover" />

            <div className="p-4">

              <p className="text-sm text-gray-500">{p.category}</p>

              <h3 className="font-bold text-lg">{p.name}</h3>

              <p className="text-gray-600 text-sm">{p.description}</p>

              <p className="font-bold text-xl mt-2">${p.price}</p>

              <button
                onClick={() => sendWhatsApp(p)}
                className="bg-green-600 text-white w-full mt-3 py-2 rounded"
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