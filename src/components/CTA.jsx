export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden py-16 bg-gradient-to-br from-orange-500 to-amber-400 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/30 backdrop-blur p-8 md:p-12 border border-white/40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Ready to book your next trek?</h3>
              <p className="mt-2 text-neutral-700">Lock your dates now—stays get sold out quickly for peak seasons.</p>
            </div>
            <div className="flex gap-3">
              <a href="#treks" className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800">Book a Trek</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-white px-5 py-3 font-medium hover:bg-neutral-100">Talk to Expert</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
