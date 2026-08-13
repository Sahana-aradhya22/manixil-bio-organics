import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import GlobalPresence from "@/components/GlobalPresence";
import CEOSection from "@/components/CEOSection";

export default function Home() {
  return (
    <main>

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold mb-6">
          About Us
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Manixil Bio-Organics is an ISO 9001:2015 Certified
          company and sister concern of Ramsun Bio Organics.
          Established in 2020, we specialize in research-driven
          manufacturing of specialty chemicals, API intermediates,
          cosmetic chemicals, fragrance chemicals, agro chemicals,
          pheromones and natural products.
        </p>
       
       <p className="text-lg leading-8 text-gray-700">
          Under the leadership of Dr. Ramesh Naik, PhD in Organic
          Chemistry, we provide innovative chemical solutions for
          pharmaceutical, cosmetic, fragrance and agro industries
          across domestic and international markets.
        </p>

      </section>


 {/* Product Categories */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Our Product Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">
                API Intermediates
              </h3>
              <p>
                High quality pharmaceutical intermediates for
                domestic and export markets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">
                Pheromones
              </h3>
              <p>
                Methyl Eugenol, Cue Lure, Muscalure and
                other specialty pheromone products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">
                Agro Chemicals
              </h3>
              <p>
                Plant growth regulators, micronutrients,
                humates and specialty agro formulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">
                Fragrance Chemicals
              </h3>
              <p>
                Vanillin, Coumarin, Eugenol,
                Raspberry Ketone and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">
                Cosmetic Chemicals
              </h3>
              <p>
                Specialty ingredients for cosmetic and
                personal care industries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">
                Natural Products
              </h3>
              <p>
                Herbal extracts and natural product
                isolation solutions.
              </p>
            </div>

          </div>

        </div>
      </section>

      <CEOSection />

      <VisionMission />

      <GlobalPresence />

      {/* Contact Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="mb-3">
            MANIXIL BIO-ORGANICS
          </p>

          <p className="mb-2">
            No. 55/80, 2nd Main, Srinivasa Nagar,
            Pipeline Road, Sunkadakatte,
            Bangalore - 560091
          </p>

          <p className="mb-2">
            +91 97424 75780 | +91 97429 30655
          </p>

          <p>
            manixilbio@gmail.com
          </p>

        </div>
      </section>

    </main>
  );
}
