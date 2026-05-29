"use client"

import { useState, useMemo } from "react"

type Product = {
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
}

export default function Home() {

  const [lang, setLang] = useState("es")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Todos")
  const [sort, setSort] = useState("none")

  const phone = "19715714880"

  const texts = {
    es: {
      subtitle: "Moda moderna para mujer y hombre",
      search: "Buscar producto...",
      all: "Todos",
      featured: "🔥 Más vendidos",
      whatsapp: "Preguntar por WhatsApp"
    },
    en: {
      subtitle: "Modern fashion for men and women",
      search: "Search product...",
      all: "All",
      featured: "🔥 Best sellers",
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
      featured: true
    },
    {
      name: "Bolso Dorado",
      description: "Bolso dorado elegante.",
      price: 50,
      image: "/bolso-dorado.jpg",
      category: "Mujer",
      featured: true
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
      category: "Calzado"
    },
    {
      name: "Sneakers Azul",
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

  const categories = ["Todos", "Mujer", "Hombre", "Calzado"]

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

    if (sort === "low") {
      list = [...list].sort((a, b) => a.price - b.price)
    }

    if (sort === "high") {
      list = [...list].sort((a, b) => b.price - a.price)
    }

    return list
  }, [search, category, sort])

  const featured = products.filter(p => p.featured)

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

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-3 border rounded"
        >
          <option value="none">Orden</option>
          <option value="low">Precio: bajo</option>
          <option value="high">Precio: alto</option>
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

      {/* PRODUCTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

        {filteredProducts.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">

            <img src={p.image} className="h-64 w-full object-cover" />

            <div className="p-4">

              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {p.category}
              </span>

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