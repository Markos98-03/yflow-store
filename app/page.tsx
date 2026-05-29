"use client"

import { useState, useMemo } from "react"

type Product = {
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
  isNew?: boolean
  isOffer?: boolean
}

export default function Home() {

  const [lang, setLang] = useState("es")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Todos")
  const [showAll, setShowAll] = useState(false)

  const phone = "19715714880"

  const texts = {
    es: {
      subtitle: "Moda moderna para mujer y hombre",
      search: "Buscar producto...",
      all: "Todos",
      featured: "🔥 Más vendidos",
      new: "Nuevo",
      offer: "Oferta",
      showAll: "Ver todo",
      whatsapp: "Preguntar por WhatsApp"
    },
    en: {
      subtitle: "Modern fashion for men and women",
      search: "Search product...",
      all: "All",
      featured: "🔥 Best sellers",
      new: "New",
      offer: "Sale",
      showAll: "View all",
      whatsapp: "Ask on WhatsApp"
    }
  }

  const products: Product[] = [
    {
      name: "Bolso Negro",
      description: "Bolso elegante color negro.",
      price: 50,
      image: "/bolso-negro.jpg",
      category: "Mujer",
      featured: true,
      isNew: true
    },
    {
      name: "Bolso Dorado",
      description: "Bolso dorado elegante.",
      price: 50,
      image: "/bolso-dorado.jpg",
      category: "Mujer",
      featured: true,
      isOffer: true
    },
    {
      name: "Bolso Marrón",
      description: "Bolso clásico marrón.",
      price: 50,
      image: "/bolso-marron.jpg",
      category: "Mujer"
    },
    {
      name: "Sandalias Verdes",
      description: "Sandalias cómodas.",
      price: 45,
      image: "/sandalias-verdes.jpg",
      category: "Calzado",
      isNew: true
    },
    {
      name: "Sneakers ",
      description: "Tenis urbanos.",
      price: 80,
      image: "/tenis-blanco-azul.jpg",
      category: "Calzado",
      featured: true
    },
    {
      name: "Jeans Negro",
      description: "Jeans slim fit.",
      price: 60,
      image: "/jeans-negro.jpg",
      category: "Hombre"
    }
  ]

  const sendWhatsApp = (product: Product) => {

    const message =
`🛍️ Hola! quiero este producto:

👕 Producto: ${product.name}
📂 Categoría: ${product.category}
💰 Precio: $${product.price}

¿Está disponible?`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  const filteredProducts = useMemo(() => {
    let list = products

    if (category !== "Todos") {
      list = list.filter(p => p.category === category)
    }

    if (search) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (!showAll) {
      list = list.slice(0, 6)
    }

    return list
  }, [search, category, showAll])

  const featured = products
    .filter(p => p.featured)
    .sort((a, b) => b.price - a.price)

  const categories = ["Todos", "Mujer", "Hombre", "Calzado"]

  return (
    <main className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <header className="bg-white flex justify-between items-center p-5 border-b sticky top-0 z-10">
        <h1 className="text-2xl font-bold">YFlow</h1>

        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="px-3 py-1 border rounded"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </header>

      {/* TITULO */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold">YFlow Fashion</h2>
        <p className="text-gray-600">{texts[lang].subtitle}</p>
      </div>

      {/* BUSCADOR */}
      <div className="flex flex-col md:flex-row gap-3 p-4 justify-center">

        <input
          type="text"
          placeholder={texts[lang].search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded w-full md:w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border rounded"
        >
          {categories.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* MÁS VENDIDOS */}
      <div className="px-6">
        <h3 className="text-xl font-bold mb-3">🔥 {texts[lang].featured}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <img src={p.image} className="h-40 w-full object-cover rounded" />
              <p className="font-bold mt-2">{p.name}</p>
              <p className="text-gray-600">${p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTÓN VER TODO */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          {showAll ? "Ocultar" : texts[lang].showAll}
        </button>
      </div>

      {/* PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

        {filteredProducts.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">

            <img src={p.image} className="h-64 w-full object-cover" />

            <div className="p-4">

              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {p.category}
                </span>

                {p.isNew && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                    {texts[lang].new}
                  </span>
                )}

                {p.isOffer && (
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                    {texts[lang].offer}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-lg mt-2">{p.name}</h3>

              <p className="text-gray-600 text-sm">{p.description}</p>

              <p className="font-bold text-xl mt-2">${p.price}</p>

              <button
                onClick={() => sendWhatsApp(p)}
                className="bg-black text-white w-full mt-3 py-3 rounded-xl"
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