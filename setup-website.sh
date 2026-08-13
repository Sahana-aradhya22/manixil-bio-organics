#!/bin/bash

echo "Creating website files..."

# Navbar
cat > components/Navbar.tsx << 'EON'
export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-2xl">
          Manixil Bio-Organics
        </h1>

        <div className="space-x-6">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/research">Research</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
EON

# Footer
cat > components/Footer.tsx << 'EON'
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p>© 2026 Manixil Bio-Organics. All Rights Reserved.</p>
    </footer>
  );
}
EON

# Hero
cat > components/Hero.tsx << 'EON'
export default function Hero() {
  return (
    <section className="bg-green-100 py-24 text-center">
      <h1 className="text-6xl font-bold text-green-800">
        Manixil Bio-Organics
      </h1>

      <p className="mt-6 text-xl text-gray-700">
        ISO 9001:2015 Certified Chemical Manufacturing Company
      </p>

      <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-lg">
        Explore Products
      </button>
    </section>
  );
}
EON

# Home Page
cat > app/page.tsx << 'EON'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>

        <p className="text-lg text-gray-700 leading-8">
          Manixil Bio-Organics, an ISO 9001:2015 Certified company,
          is a sister concern of Ramsun Bio Organics.
          Established in 2020, we manufacture specialty chemicals
          and allied products for pharmaceutical, cosmetic,
          perfume, fragrance and allied industries.
        </p>
      </section>

      <Footer />
    </>
  );
}
EON

# About Page
cat > app/about/page.tsx << 'EON'
export default function About() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>

      <p>
        Manixil Bio-Organics is an ISO 9001:2015 certified company
        serving pharmaceutical, cosmetic and fragrance industries.
      </p>
    </div>
  );
}
EON

# Products Page
cat > app/products/page.tsx << 'EON'
export default function Products() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Products</h1>

      <ul className="list-disc pl-6">
        <li>Pharmaceutical Chemicals</li>
        <li>Cosmetic Chemicals</li>
        <li>Fragrance Chemicals</li>
        <li>Industrial Chemicals</li>
      </ul>
    </div>
  );
}
EON

# Research Page
cat > app/research/page.tsx << 'EON'
export default function Research() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">
        Research & Development
      </h1>

      <p>
        Continuous innovation and development of specialty chemicals.
      </p>
    </div>
  );
}
EON

# Contact Page
cat > app/contact/page.tsx << 'EON'
export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

      <form className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Name"
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Message"
        />

        <button
          className="bg-green-700 text-white px-6 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
EON

echo "Website files created successfully."
