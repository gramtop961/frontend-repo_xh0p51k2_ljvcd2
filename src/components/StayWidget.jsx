import { Calendar, MapPin, Users, Star } from 'lucide-react';

export default function StayWidget() {
  return (
    <section className="relative" aria-label="Stay booking widget">
      <div className="mx-auto -mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-neutral-900/70 p-4 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
            <MapPin className="h-5 w-5 text-orange-400" />
            <div>
              <p className="text-xs text-neutral-400">Location</p>
              <p className="text-sm">Any trek region</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
            <Calendar className="h-5 w-5 text-orange-400" />
            <div>
              <p className="text-xs text-neutral-400">Dates</p>
              <p className="text-sm">Select range</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
            <Users className="h-5 w-5 text-orange-400" />
            <div>
              <p className="text-xs text-neutral-400">Guests</p>
              <p className="text-sm">2 adults</p>
            </div>
          </div>
          <button className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-3 font-medium text-white hover:bg-orange-400">
            Search stays
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
          <Star className="h-3.5 w-3.5 text-yellow-400" />
          Trusted by 5k+ trekkers last season
        </div>
      </div>
    </section>
  );
}
