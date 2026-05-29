"use client"

import { useState, useMemo } from "react"

type Product = {
  name: string
  description: string
  price: number
  image: string
  category: string
}

export default function Home() {

  const [lang, setLang] = useState("es")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Todos")

  const phone = "19715714880"

  const texts = {
    es: {
      subtitle: "Moda moderna para mujer y hombre",
      search: "Buscar producto...",
      whatsapp: "Preguntar por WhatsApp"
    },
    en: {
      subtitle: "Modern fashion for men and women",
      search: "Search product...",
      whatsapp: "Ask on WhatsApp"
    }
  }

  // ================= PRODUCTOS COMPLETOS =================
  const products: Product[] = [

    // ================= BOLSOS =================
    { name: "Bolso Negro", description: "Bolso elegante negro.", price: 50, image: "/bolso-negro.jpg", category: "Mujer" },
    { name: "Bolso Dorado", description: "Bolso dorado moderno.", price: 50, image: "/bolso-dorado.jpg", category: "Mujer" },
    { name: "Bolso Marrón", description: "Bolso marrón clásico.", price: 50, image: "/bolso-marron.jpg", category: "Mujer" },
    { name: "Bolso Beige", description: "Bolso beige elegante.", price: 50, image: "/bolso-beige.jpg", category: "Mujer" },
    { name: "Bolso Rosado", description: "Bolso rosado juvenil.", price: 50, image: "/bolso-rosado.jpg", category: "Mujer" },
    { name: "Bolso Blanco", description: "Bolso blanco elegante.", price: 50, image: "/bolso-blanco.jpg", category: "Mujer" },

    { name: "Bolso Conjunto", description: "Conjunto de bolso elegante.", price: 60, image: "/bolsoconjunto.jpg", category: "Mujer" },
    { name: "Bolso Conjunto 1", description: "Conjunto de bolso moderno.", price: 60, image: "/bolsoconjunto1.jpg", category: "Mujer" },

    // ================= CARTERAS =================
    { name: "Cartera Negra", description: "Cartera elegante negra.", price: 70, image: "/cartera-negra.jpg", category: "Accesorios" },
    { name: "Cartera Beige", description: "Cartera beige elegante.", price: 70, image: "/cartera-beige.jpg", category: "Accesorios" },
    { name: "Cartera Blanca", description: "Cartera blanca moderna.", price: 70, image: "/cartera-blanca.jpg", category: "Accesorios" },
    { name: "Cartera Brown", description: "Cartera marrón clásica.", price: 70, image: "/cartera-brown.jpg", category: "Accesorios" },
    { name: "Cartera Gris", description: "Cartera gris elegante.", price: 70, image: "/cartera-gris.jpg", category: "Accesorios" },
    { name: "Cartera LV", description: "Cartera estilo lujo.", price: 90, image: "/cartera-lv.jpg", category: "Accesorios" },
    { name: "Cartera LV1", description: "Cartera lujo moderna.", price: 90, image: "/cartera-lv1.jpg", category: "Accesorios" },
    { name: "Cartera Roja", description: "Cartera roja elegante.", price: 70, image: "/cartera-roja.jpg", category: "Accesorios" },
    { name: "Cartera Roja 1", description: "Cartera roja moderna.", price: 70, image: "/cartera-roja1.jpg", category: "Accesorios" },
    { name: "Cartera Rosada", description: "Cartera rosada juvenil.", price: 70, image: "/cartera-rosada.jpg", category: "Accesorios" },

    // ================= HOMBRE =================
    { name: "Jeans Hombre", description: "Jeans clásico moderno.", price: 60, image: "/jeanshombre.jpg", category: "Hombre" },
    { name: "Jeans Hombre 1", description: "Jeans slim fit.", price: 60, image: "/jeanshombre1.jpg", category: "Hombre" },
    { name: "Jeans Hombre 2", description: "Jeans azul moderno.", price: 60, image: "/jeanshombre2.jpg", category: "Hombre" },
    { name: "Jeans Hombre 3", description: "Jeans urbano.", price: 60, image: "/jeanshombre3.jpg", category: "Hombre" },

    // ================= CALZADO =================
    { name: "Sandalias RAV", description: "Sandalias cómodas modernas.", price: 45, image: "/sandalias-rav.jpg", category: "Calzado" },
    { name: "Tenis", description: "Tenis urbanos modernos.", price: 80, image: "/tenis.jpg", category: "Calzado" },
    { name: "Tenis Blanco V", description: "Tenis blanco elegante.", price: 80, image: "/tenis-blancov.jpg", category: "Calzado" }
  ]

  const sendWhatsApp = (product: Product) => {
    const message =
`🛍️ Hola! quiero este producto:

👕 Producto: ${product.name}
📂 Categoría: ${product.category}
💰 Precio: $${product.price}`

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  const categories = ["Todos", "Mujer", "Hombre", "Calzado", "Accesorios"]

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

    return list
  }, [search, category])

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