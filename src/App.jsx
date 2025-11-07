import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StayWidget from './components/StayWidget';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <StayWidget />

        <section id="about" className="py-16 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold">About TrekQuest</h2>
            <p className="mt-4 max-w-3xl text-neutral-300">
              We craft memorable mountain experiences with detailed day-wise itineraries and curated stays—camps, lodges, and boutique hotels. Plan with confidence using availability calendars, maps, and trusted reviews.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Contact us</h2>
            <p className="mt-2 text-neutral-300">Have questions? Send us a message and we’ll get back within a day.</p>
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="w-full rounded-md bg-neutral-900 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <input type="email" placeholder="Email address" className="w-full rounded-md bg-neutral-900 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <input type="text" placeholder="Subject" className="md:col-span-2 w-full rounded-md bg-neutral-900 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <textarea placeholder="Your message" rows="5" className="md:col-span-2 w-full rounded-md bg-neutral-900 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <div className="md:col-span-2">
                <button type="button" className="rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-100">Send message</button>
              </div>
            </form>
          </div>
        </section>

        {/* Anchor target for hero button */}
        <div id="chatbot" className="sr-only" />
      </main>

      <footer className="border-t border-white/10 py-8 text-sm text-neutral-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TrekQuest. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>

      {/* Floating chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;
