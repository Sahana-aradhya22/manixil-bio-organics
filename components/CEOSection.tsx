export default function CEOSection() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="/images/ceo.jpg"
              alt="Dr Ramesh Naik"
              className="rounded-lg shadow"
            />
          </div>

          <div>

            <h2 className="text-4xl font-bold mb-4">
              Dr. Ramesh Naik
            </h2>

            <h3 className="text-xl mb-4">
              Founder & CEO
            </h3>

            <p className="leading-8">
              PhD in Organic Chemistry with over
              10 years of industrial experience in
              R&D, pilot plants and large scale
              chemical manufacturing.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
