import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full text-white" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">Meet your trek buddy</span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Plan treks and book stays with a friendly robot guide
          </h1>
          <p className="mt-4 text-neutral-200 max-w-xl">
            Explore curated routes, live availability, and handpicked camps and lodges. The chatbot can answer questions and help you book in minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#treks" className="inline-flex items-center rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-100">Explore Treks</a>
            <a href="#chatbot" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 font-medium hover:bg-white/20">Ask the Robot</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-neutral-950" />
    </section>
  );
}
