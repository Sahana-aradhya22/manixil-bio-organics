const categories = [
  {
    title: "API Intermediates",
    products: [
      "2-Amino Methyl Pyridine",
      "4-Bromoaniline",
      "Benzhydryl Chloride",
      "Choline Bicarbonate",
      "4'-Methoxyacetophenone",
      "3-Methoxy Benzoic Acid",
      "Veratraldehyde",
      "Veratric Acid"
    ]
  },
  {
    title: "Pheromones",
    products: [
      "Methyl Eugenol",
      "Cue Lure",
      "Muscalure"
    ]
  },
  {
    title: "Agro Chemicals",
    products: [
      "DA6-PGR",
      "6BA",
      "Potassium Humate",
      "Gibberellic Acid",
      "Fulvic Acid",
      "IAA",
      "IBA"
    ]
  },
  {
    title: "Fragrance Chemicals",
    products: [
      "Coumarin",
      "Vanillin",
      "Vanillyl Acetate",
      "Eugenol",
      "Eugenyl Acetate",
      "Raspberry Ketone"
    ]
  }
];

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-12">
        Products
      </h1>

      <div className="space-y-10">

        {categories.map((category) => (
          <div
            key={category.title}
            className="border rounded-lg p-6 shadow"
          >
            <h2 className="text-3xl font-bold mb-4">
              {category.title}
            </h2>

            <ul className="grid md:grid-cols-2 gap-2">
              {category.products.map((item) => (
                <li key={item}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

    </main>
  );
}
