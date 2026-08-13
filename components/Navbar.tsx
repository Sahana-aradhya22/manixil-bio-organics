import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/">
          <h1 className="text-2xl font-bold">
            MANIXIL BIO-ORGANICS
          </h1>
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/research">R&D</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
