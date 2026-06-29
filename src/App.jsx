import { useState, useEffect } from 'react';
import cooky from './../cooky.png';
import phone from './../phone.png';

function getTimeLeft() {
  const launch = new Date('2026-09-01T00:00:00');
  const now = new Date();
  const diff = launch - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#090f0c] text-slate-100 overflow-hidden">
      {/* Top Banner */}
      <div className="w-full bg-linear-to-r from-emerald-700 to-teal-600 py-2 text-center text-sm font-semibold text-white tracking-wide">
        🚀 We're not live yet — but something delicious is coming soon!
      </div>

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:px-10">
        {/* Navbar */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-950/40">
              <img src={cooky} alt="logo" className="w-7 " />
            </div>
            <span className="text-2xl font-extrabold text-white">
              Hey<span className="text-emerald-400">bite</span>
            </span>
          </div>

          <div
            className="flex items-center cursor-pointer gap-3"
            onClick={() => {
              const isMobile = /iPhone|iPad|iPod|Android/i.test(
                navigator.userAgent
              );

              if (isMobile) {
                window.location.href = 'tel:+2349025828588';
              } else {
                window.open(
                  'https://mail.google.com/mail/?view=cm&fs=1&to=godfreyajayi25@gmail.com',
                  '_nblank'
                );
              }
            }}>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-emerald-900/40 transition">
              🕭 Notify Me
            </span>

          </div>
        </header>

        {/* Hero Grid */}
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-950/60 border border-emerald-800/50 px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Launching Soon
            </span>

            <h1 className="max-w-lg text-5xl font-black leading-tight text-white md:text-6xl">
              Delicious food,
              <br />
              delivered <span className="text-emerald-400">fast</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-slate-400">
              Order from your favorite restaurants and get it delivered hot and
              fresh to your door. Fast, easy, and delicious.{' '}
              <span className="font-semibold text-slate-200">
                We're putting the finishing touches — be the first to know when
                we go live.
              </span>
            </p>

            {/* Countdown Timer */}
            <div className="mt-8 flex gap-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-2xl bg-slate-900/80 border border-slate-800 px-5 py-4 shadow-xl shadow-black/30 min-w-[70px]">
                  <span className="text-3xl font-black text-white">
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-medium text-slate-400 mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Features Info */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              {[
                { icon: '🛵', title: 'Fast Delivery', sub: '30-40 min' },
                { icon: '🏆', title: 'Best Quality', sub: 'Top rated' },
                { icon: '🛡️', title: 'Safe & Secure', sub: '100% trusted' },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-950/50 border border-emerald-800/30 p-2 text-emerald-400">
                    {icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-200">{title}</p>
                    <p className="text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-4">
              <div>
                <p className="text-sm text-slate-400">
                  Over <strong className="text-slate-200">3,000+</strong> for
                  delicacies early delivery
                </p>
                <div className="mt-3 flex -space-x-3">
                  {[
                    'https://i.pinimg.com/736x/a3/b4/47/a3b4478e76417c8be0fe3fad1b005b0d.jpg',
                    'https://i.pinimg.com/1200x/31/af/77/31af7766796ad1d84baca6e115d653b7.jpg',
                    'https://i.pinimg.com/736x/2a/78/f2/2a78f207b6ef55cc843b3b02dff8f7f9.jpg',
                    'https://i.pinimg.com/1200x/a1/0d/0f/a10d0f1a02ab7db4c96e7893e3e3fd87.jpg',
                  ].map((i) => (
                    <img
                      key={i}
                      src={i}
                      className="h-10 w-10 rounded-full border-2 border-slate-900 object-cover"
                      alt=""
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                <span className="text-yellow-400">★★★★★</span>
                <span>4.8</span>
              </div>
            </div>
          </div>

          {/* Phone Mockup Component */}
          <div className="relative flex min-h-[620px] items-center justify-center">
            {/* Ambient Background Blurs */}
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

            <div className="absolute bottom-24 left-6 z-20 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-black/40">
              Live Tracking
              <div className="text-xs font-normal opacity-90">On the way</div>
            </div>

            <div className="relative w-[340px] p-[10px] bg-black rounded-[3rem] z-10 rotate-[6deg] shadow-2xl shadow-black/50">
              {/* iPhone frame */}
              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-neutral-900">
                {/* notch */}

                <img
                  src={phone}
                  alt="phone"
                  className="w-full h-full object-cover rounded-[2.1rem]"
                />
              </div>
            </div>

            {/* Decorative background circles */}
            <div className="absolute -right-4 top-10 h-52 w-52 rounded-full bg-linear-to-br from-teal-900/20 to-emerald-800/20 shadow-2xl opacity-40" />
            <div className="absolute right-2 top-44 h-40 w-40 rounded-full bg-linear-to-br from-emerald-900/20 to-teal-800/20 shadow-2xl opacity-40" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
