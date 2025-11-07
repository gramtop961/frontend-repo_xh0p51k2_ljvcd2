import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrekGrid from './components/TrekGrid';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="treks" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Featured Treks</h2>
                <p className="mt-2 text-neutral-300">Handpicked routes across the Himalayas and Western Ghats.</p>
              </div>
              <a href="#" className="hidden md:inline-block rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20">View all</a>
            </div>
            <TrekGrid />
          </div>
        </section>

        <section id="reviews" className="py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold">What trekkers say</h2>
            <p className="mt-2 text-neutral-300">Real experiences from our community.</p>
            <div className="mt-10">
              <Testimonials />
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <footer className="border-t border-white/10 py-8 text-sm text-neutral-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TrekQuest. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#treks" className="hover:text-white">Treks</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
