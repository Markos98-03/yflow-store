"use client"

import { useState } from "react"

type Product = {
  name: string
  description: string
  price: number
  image: string
  category: string
  colors: string[]
  sizes: string[]
}

export default function Home() {

  const [lang, setLang] = useState<"es" | "en">("es")

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

  // ======================================
  // AQUI AGREGAS TUS PRODUCTOS
  // ======================================

  const products: Product[] = [

    {
      name: "Conjunto de bolso y zandalias",
      description: "bolso de mano elegante a juego con zandalias ideal para fiestas y eventos",
      price: 60,
      image: "/bolsoconjunto.jpg",
      category: "Mujer",
      colors: ["Negro", " Dorado" "Marron" "Beige" "Rosado" "Rojo", "Blanco"],
      sizes: ["37", "38", "39"]
    },

    {
      name: "Zandalias",
      description: "Sandalias modernas y cómodas, ideales para el verano y uso diario. Diseño ligero que combina con cualquier outfit.",
      price: 45,
      image: "/zandalias.jpg",
      category: "Calzado",
      colors: ["Negro", "Beige", "Verde", "Azul"],
      sizes: ["37", "38", "39"]
    },

    {
      name: "Sneakers Urban",
      description: "Tenis modernos cómodos y urbanos",
      price: 80,
      image: "/tenis.jpg",
      category: "Calzado",
      colors: ["Blanco y Azul", "Blanco y Amarillo" "Blanco y Verde"],
      sizes: ["39", "40", "41", "42"]
    },

   {
  name: "Juegos de Carteras"
  description: "Juego de carteras con diseño elegante y versátil. Perfectas para complementar cualquier outfit, con varios tamaños para diferentes usos diarios.",
  price: 0,
  image: "/carteras.jpg",
  category: "Accesorios",
  colors: ["Beige", "Gris", "Blanco","Rosado", "Negro"],
  sizes: [""]
},

  {
    name: "Pantalon y camiseta de Hombre",
    description: "Jeans de mezclilla con corte moderno, cómodos y duraderos. Perfectos para un look casual o urbano en cualquier ocasión.",
    price: 60,
    image: "/jeanshombre.jpg",
    category: "Hombre",
    colors: ["Negro", "Rojo", "Blanco"],
    sizes: ["M", "L", "XL"]
  },


  ]

  // ======================================
  // WHATSAPP
  // ======================================

  const sendWhatsApp = (product: Product) => {

    const message =
`Hola, quiero información de:

Producto: ${product.name}

Precio: $${product.price}

Colores: ${product.colors.join(", ")}

Tamaños: ${product.sizes.join(", ")}`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (

    <main className="bg-gray-100 min-h-screen text-black">

      {/* NAVBAR */}
      <header className="bg-white border-b px-8 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          YFlow
        </h1>

        <div className="flex gap-3">

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="border px-3 py-1 rounded"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a
            href={`https://wa.me/${phone}`}
            className="bg-black text-white px-5 py-2 rounded-full"
          >
            WhatsApp
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="text-center py-20 bg-white">

        <h2 className="text-5xl font-bold mb-4">
          YFlow Fashion
        </h2>

        <p className="text-gray-600 text-lg">
          {texts[lang].subtitle}
        </p>

      </section>

      {/* PRODUCTOS */}
      <section className="px-8 py-14">

        <h2 className="text-4xl font-bold text-center mb-12">
          {texts[lang].products}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((product, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              {/* IMAGEN */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />

              {/* INFO */}
              <div className="p-5">

                <p className="text-sm text-gray-500 mb-1">
                  {product.category}
                </p>

                <h3 className="text-2xl font-bold">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {product.description}
                </p>

                <p className="mt-3 text-sm">
                  <span className="font-bold">
                    Colores:
                  </span>{" "}
                  {product.colors.join(", ")}
                </p>

                <p className="text-sm mt-1">
                  <span className="font-bold">
                    Tamaños:
                  </span>{" "}
                  {product.sizes.join(", ")}
                </p>

                <p className="text-3xl font-bold mt-5">
                  ${product.price}
                </p>

                <button
                  onClick={() => sendWhatsApp(product)}
                  className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
                >
                  {texts[lang].whatsapp}
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>

  )
}