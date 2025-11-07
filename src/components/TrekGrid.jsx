import { MapPin, Clock, Mountain, Star } from "lucide-react";

const treks = [
  {
    id: 1,
    title: "Kedarkantha Summit",
    location: "Uttarakhand, India",
    duration: 6,
    difficulty: "Moderate",
    price: 199,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Hampta Pass",
    location: "Himachal Pradesh, India",
    duration: 5,
    difficulty: "Moderate",
    price: 249,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1631377649998-58947055c21d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWYWxsZXklMjBvZiUyMEZsb3dlcnN8ZW58MHwwfHx8MTc2MjUwMDQ0MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Valley of Flowers",
    location: "Uttarakhand, India",
    duration: 7,
    difficulty: "Easy",
    price: 179,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function TrekGrid() {
  return (
    <section id="treks" className="relative py-16 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Popular Treks</h2>
            <p className="mt-2 text-neutral-300">Handpicked adventures with detailed itineraries and cozy stays.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm text-orange-300 hover:text-orange-200">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treks.map((t) => (
            <article key={t.id} className="group rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/20 transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={t.image} alt={t.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-300">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{t.rating}</span>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-1"><MapPin size={16} /> {t.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={16} /> {t.duration} days</span>
                  <span className="inline-flex items-center gap-1"><Mountain size={16} /> {t.difficulty}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-orange-300 font-medium">${t.price} <span className="text-xs text-neutral-400">per person</span></span>
                  <button className="rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20">View details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
