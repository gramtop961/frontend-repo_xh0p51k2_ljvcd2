import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarav P.",
    text: "Flawless planning and breathtaking views. The stay after the summit day was so cozy!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Meera K.",
    text: "Loved the guides and the day-wise itinerary. Booking the campsite along with the trek was super easy.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    name: "Ryan L.",
    text: "The availability calendar helped us plan perfectly. Highly recommend!",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold">What trekkers say</h2>
        <p className="mt-2 text-neutral-300">Real stories from recent expeditions</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                <figcaption>
                  <div className="font-medium">{t.name}</div>
                  <div className="flex items-center gap-1 text-yellow-300">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-neutral-300">“{t.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
