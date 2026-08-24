import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-green-700 text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-6">
          Research Driven Chemical Manufacturing V2
        </h1>

        <p className="text-xl max-w-4xl">
          API Intermediates • Pheromones • Agro Chemicals •
          Cosmetic Chemicals • Specialty Chemicals •
          Fragrance Chemicals
        </p>

        <Link
          href="/products"
          className="inline-block mt-8 bg-white text-green-700 px-6 py-3 rounded-lg font-bold"
        >
          View Products
        </Link>

      </div>

    </section>
  );
}
