export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Corporate Office
          </h2>

          <p>
            MANIXIL BIO-ORGANICS
          </p>

          <p>
            No.55/80, 2nd Main,
            Srinivasa Nagar,
            Pipeline Road,
            Sunkadakatte,
            Bangalore - 560091
          </p>

          <div className="mt-4">
            <p>📞 +91 97424 75780</p>
            <p>📞 +91 97429 30655</p>
            <p>✉️ manixilbio@gmail.com</p>
          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Manufacturing Facility
          </h2>

          <p>
            Plot No.86,
            2nd Phase,
            KIADB Industrial Area,
            Kudumalakunte Village,
            Gowribidanur Taluk,
            Chikkaballapura District,
            Karnataka - 561208
          </p>

        </div>

      </div>

    </main>
  );
}
