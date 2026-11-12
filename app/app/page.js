
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    model: "Volterra S1",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      model: "Volterra S1",
    });
  };

  const closeMenu = () => setMenuOpen(false);

  const features = [
    {
      number: "01",
      icon: "↗",
      title: "Electric mobility",
      description:
        "Enjoy a quiet ride and zero tailpipe emissions as you travel through the city.",
      category: "PERFORMANCE",
    },
    {
      number: "02",
      icon: "◉",
      title: "Everyday comfort",
      description:
        "A practical riding position and thoughtful proportions for daily travel.",
      category: "COMFORT",
    },
    {
      number: "03",
      icon: "⌁",
      title: "Simple charging",
      description:
        "A convenient charging experience that fits naturally into your daily routine.",
      category: "CONVENIENCE",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose your ride",
      description: "Explore the model that suits your daily commute.",
    },
    {
      number: "02",
      title: "Experience it yourself",
      description: "Book a test ride and get to know the scooter.",
    },
    {
      number: "03",
      title: "Make the switch",
      description: "Take a more convenient approach to everyday travel.",
    },
  ];

  const models = [
    {
      name: "Volterra S1",
      category: "EVERYDAY SERIES",
      description: "Simple. Practical. Ready for every day.",
      price: "₹89,999",
      initials: "S1",
      color: "bg-[#718d73]",
    },
    {
      name: "Volterra X2",
      category: "CITY SERIES",
      description: "More comfort for longer city journeys.",
      price: "₹1,09,999",
      initials: "X2",
      color: "bg-[#424a42]",
    },
  ];

  const plans = [
    {
      label: "EVERYDAY",
      name: "Volterra S1",
      price: "₹89,999",
      description: "A practical electric scooter for daily city travel.",
      features: [
        "Electric powertrain",
        "Everyday comfort design",
        "Convenient charging",
        "Standard support package",
      ],
    },
    {
      label: "EXTENDED COMFORT",
      name: "Volterra X2",
      price: "₹1,09,999",
      description: "Extra comfort for riders with longer daily journeys.",
      features: [
        "Electric powertrain",
        "Enhanced comfort design",
        "Convenient charging",
        "Priority support package",
      ],
      popular: true,
    },
  ];

  return (
    <main className="overflow-hidden bg-[#fafbf8] text-[#202820]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#e8ebe5] bg-[#fafbf8]">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">

          <a href="#home" className="text-2xl font-extrabold tracking-tighter">
            VOLTERRA<span className="text-[#718f74]">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Home", "#home"],
              ["Our Scooters", "#models"],
              ["About", "#about"],
              ["Features", "#features"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm text-[#626c61] transition hover:text-[#718f74]"
              >
                {name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-sm bg-[#293c2e] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#405d45] md:block"
          >
            Book a Test Ride ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-[#e8ebe5] bg-[#fafbf8] px-7 py-6 md:hidden">
            {[
              ["Home", "#home"],
              ["Our Scooters", "#models"],
              ["About", "#about"],
              ["Features", "#features"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={closeMenu}
                className="text-sm text-[#626c61]"
              >
                {name}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-[#f0f2eb] px-6 py-16 md:px-12 lg:px-20 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          <div>
            <p className="mb-6 text-[10px] font-bold tracking-[2px] text-[#718474]">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#739776]" />
              THE NEXT WAY FORWARD
            </p>

            <h1 className="text-6xl font-bold leading-[0.98] tracking-[-4px] sm:text-7xl lg:text-[88px]">
              Make every
              <br />
              ride <span className="text-[#718f74]">count.</span>
            </h1>

            <p className="mt-7 max-w-[420px] text-sm leading-8 text-[#697169]">
              Experience a smarter way to move. Designed for everyday
              journeys, built around electric performance and comfort.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#models"
                className="rounded-sm bg-[#293c2e] px-6 py-4 text-xs font-semibold text-white transition hover:-translate-y-1 hover:bg-[#405d45]"
              >
                Explore our scooters ↗
              </a>

              <a
                href="#about"
                className="text-xs font-semibold text-[#293c2e]"
              >
                Discover Volterra →
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-4 border-t border-[#d8ded4] pt-6">
              <div>
                <h3 className="text-2xl font-bold">0%</h3>
                <p className="mt-1 text-[10px] text-[#727b72]">
                  Tailpipe emissions
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="mt-1 text-[10px] text-[#727b72]">
                  Electric mobility
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Daily</h3>
                <p className="mt-1 text-[10px] text-[#727b72]">
                  Made for your commute
                </p>
              </div>
            </div>
          </div>

          {/* ORIGINAL SCOOTER ILLUSTRATION */}
          <div className="rounded-sm bg-[#dfe5da] p-5 md:p-8">
            <div className="flex justify-between text-[9px] tracking-[1.5px] text-[#657267]">
              <span>01 / THE NEW GENERATION</span>
              <span>VOL. S1</span>
            </div>

            <svg
              viewBox="0 0 700 430"
              className="my-8 w-full"
              role="img"
              aria-label="Original illustration of an electric scooter"
            >
              <defs>
                <linearGradient id="bodyPaint" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#dce6d8" />
                  <stop offset="55%" stopColor="#8caa91" />
                  <stop offset="100%" stopColor="#506f59" />
                </linearGradient>
              </defs>

              <ellipse cx="345" cy="370" rx="275" ry="20" fill="#101713" opacity=".13" />

              {[185, 550].map((x) => (
                <g key={x}>
                  <circle cx={x} cy="305" r="73" fill="#202622" />
                  <circle cx={x} cy="305" r="57" fill="#c6cec5" />
                  <circle cx={x} cy="305" r="45" fill="#303a34" />
                  <circle cx={x} cy="305" r="15" fill="#a9b6a9" />
                  <circle cx={x} cy="305" r="7" fill="#29332d" />
                </g>
              ))}

              <path
                d="M106 288 Q115 202 185 200 Q260 196 264 290"
                fill="none"
                stroke="#53675a"
                strokeWidth="13"
                strokeLinecap="round"
              />

              <path
                d="M179 264 L223 244 Q247 234 272 246 L443 246 Q470 247 489 273 L512 294 L432 294 L398 272 L273 272 L240 299 L201 299 Z"
                fill="url(#bodyPaint)"
              />

              <path
                d="M247 274 L422 274 L449 289 L252 289 Z"
                fill="#333d36"
              />

              <path
                d="M387 243 Q403 204 410 151 L437 105 Q449 89 469 102 L503 133 Q517 146 511 166 L484 252 Q470 275 447 274 L407 271 Z"
                fill="url(#bodyPaint)"
              />

              <path
                d="M443 119 Q467 108 488 138 L474 158 Q458 145 439 151 Z"
                fill="#e4e9df"
              />

              <path
                d="M218 196 Q225 174 252 170 L372 166 Q397 169 401 190 L394 202 L246 209 Q222 211 218 196"
                fill="#252c27"
              />

              <path d="M246 184 L373 181" stroke="#737d74" strokeWidth="2" fill="none" />
              <path d="M249 207 L226 263" stroke="#414b44" strokeWidth="13" strokeLinecap="round" />
              <path d="M433 108 L422 54" stroke="#323c35" strokeWidth="13" strokeLinecap="round" />
              <path d="M394 53 L455 53" stroke="#252e28" strokeWidth="12" strokeLinecap="round" />
              <rect x="483" y="157" width="12" height="28" rx="6" fill="#f4f2d8" transform="rotate(20 483 157)" />
              <path d="M481 254 L533 297" stroke="#434d46" strokeWidth="12" strokeLinecap="round" />
              <path d="M234 239 L208 286" stroke="#414a43" strokeWidth="8" strokeLinecap="round" />
              <path d="M287 251 Q325 234 370 249" fill="none" stroke="#e2e9df" strokeWidth="3" />
            </svg>

            <div className="flex items-center justify-between border-t border-[#c7d0c4] pt-5">
              <div>
                <p className="text-[9px] tracking-[1px] text-[#6d796d]">
                  DESIGNED FOR THE EVERYDAY
                </p>
                <h3 className="mt-1 text-xl font-semibold">Volterra S1</h3>
              </div>
              <a
                href="#models"
                className="rounded-full bg-[#293c2e] px-4 py-3 text-white"
              >
                ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="flex min-h-[72px] items-center justify-between gap-3 bg-[#293c2e] px-6 py-5 text-white md:px-12 lg:px-20">
        <p className="text-[9px] font-bold tracking-[1.5px] md:text-[10px]">
          MOVE WITH PURPOSE.
        </p>
        <span className="text-xs text-[#c0d1bf]">
          Electric by design
        </span>
        <p className="text-[9px] font-bold tracking-[1.5px] md:text-[10px]">
          MADE FOR EVERY JOURNEY.
        </p>
      </section>

      {/* MODELS */}
      <section id="models" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold tracking-[2px] text-[#718474]">
                FIND YOUR RIDE
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Made for the way <span className="text-[#718f74]">you move.</span>
              </h2>
            </div>
            <p className="max-w-[340px] text-sm leading-7 text-[#747c73]">
              Thoughtful design, everyday practicality and a quieter
              way to get where you need to go.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {models.map((model) => (
              <article key={model.name} className="border border-[#e9ece6] bg-white">
                <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden bg-[#e7ebe3]">
                  <span className="absolute left-5 top-5 text-[9px] tracking-[1.5px] text-[#626e63]">
                    {model.category}
                  </span>
                  <div
                    className={`${model.color} flex h-24 w-60 skew-x-[-7deg] items-center justify-center rounded-t-[80px] rounded-b-3xl text-4xl font-extrabold text-white shadow-xl`}
                  >
                    {model.initials}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{model.name}</h3>
                  <p className="mt-2 text-xs text-[#788077]">
                    {model.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#edf0eb] pt-5">
                    <strong className="text-sm">
                      From {model.price}*
                    </strong>
                    <a
                      href="#contact"
                      className="rounded-full bg-[#293c2e] px-4 py-2 text-white"
                      aria-label={`Enquire about ${model.name}`}
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-[10px] leading-5 text-[#899087]">
            *Illustrative concept pricing for this demonstration website.
            Specifications and prices are not actual product offers.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-[#f0f2eb] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold tracking-[2px] text-[#718474]">
                THE VOLTERRA DIFFERENCE
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Small details. <span className="text-[#718f74]">Better journeys.</span>
              </h2>
            </div>
            <p className="max-w-[340px] text-sm leading-7 text-[#747c73]">
              Every part of the experience is designed around
              the needs of everyday riders.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="flex min-h-[245px] flex-col items-start border border-[#e5e9e0] bg-[#fafbf8] p-7"
              >
                <div className="mb-7 grid h-11 w-11 place-items-center border border-[#cbd5c8] text-xl text-[#648368]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-xs leading-7 text-[#778076]">
                  {feature.description}
                </p>
                <span className="mt-auto pt-6 text-[9px] tracking-[1.5px] text-[#879184]">
                  {feature.number} / {feature.category}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="grid gap-12 px-6 py-20 md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20">
        <div className="relative flex min-h-[360px] items-center justify-center bg-[#dfe5da] md:min-h-[460px]">
          <span className="absolute left-7 top-7 text-xs tracking-widest text-[#728273]">
            01
          </span>
          <div className="px-5 text-center">
            <p className="text-[9px] tracking-[2px] text-[#6c7c6e]">
              THE FUTURE IS NOT FAR AWAY.
            </p>
            <h3 className="mt-5 text-5xl font-bold leading-tight tracking-tighter text-[#304332] md:text-6xl">
              It's already
              <br />
              on your street.
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-5 text-[10px] font-bold tracking-[2px] text-[#718474]">
            A DIFFERENT WAY TO MOVE
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Better journeys
            <span className="text-[#718f74]"> begin with better choices.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#778076]">
            At Volterra, we believe electric mobility should feel natural.
            It should be easy to understand, comfortable to use and
            practical for everyday life.
          </p>

          <div className="my-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 border-b border-[#e6eae3] py-5"
              >
                <span className="text-xs font-bold text-[#769178]">
                  {step.number}
                </span>
                <div>
                  <h4 className="text-sm font-semibold">{step.title}</h4>
                  <p className="mt-2 text-xs leading-6 text-[#7b8379]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="w-fit rounded-sm bg-[#293c2e] px-6 py-4 text-xs font-semibold text-white transition hover:bg-[#405d45]"
          >
            Get in touch ↗
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-[#f0f2eb] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[850px]">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[10px] font-bold tracking-[2px] text-[#718474]">
              STRAIGHTFORWARD CHOICES
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Find the right <span className="text-[#718f74]">fit.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#778076]">
              Explore our concept packages and find a starting point
              for your next ride.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative border bg-[#fafbf8] p-7 md:p-9 ${
                  plan.popular
                    ? "border-[#718f74]"
                    : "border-[#e0e6dc]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-0 top-0 bg-[#718f74] px-4 py-2 text-[9px] tracking-wider text-white">
                    CITY FAVOURITE
                  </span>
                )}

                <p className="text-[9px] font-bold tracking-[1.5px] text-[#728873]">
                  {plan.label}
                </p>
                <h3 className="mt-5 text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-3 min-h-10 text-xs leading-6 text-[#7b8379]">
                  {plan.description}
                </p>

                <div className="mt-7 text-3xl font-bold tracking-tight">
                  {plan.price}
                  <span className="text-xs font-normal text-[#81887f]">
                    {" "}onwards*
                  </span>
                </div>

                <div className="my-7 border-t border-[#e4e8e0]" />

                <ul className="mb-8 space-y-4">
                  {plan.features.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[#eef0eb] pb-3 text-xs text-[#626c61]"
                    >
                      <span className="mr-3 font-bold text-[#718f74]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`flex items-center justify-between px-5 py-4 text-xs font-semibold ${
                    plan.popular
                      ? "bg-[#293c2e] text-white hover:bg-[#405d45]"
                      : "border border-[#b9c5b6] text-[#293c2e] hover:bg-[#e9eee6]"
                  }`}
                >
                  Enquire now <span>↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="mt-5 text-[10px] leading-5 text-[#899087]">
            *All prices are illustrative and do not represent actual
            products or commercial offers.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="grid gap-12 px-6 py-20 md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-20">
        <div>
          <p className="mb-5 text-[10px] font-bold tracking-[2px] text-[#718474]">
            YOUR NEXT RIDE STARTS HERE
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
            Ready to take
            <span className="text-[#718f74]"> the first ride?</span>
          </h2>

          <p className="mt-6 max-w-[400px] text-sm leading-8 text-[#7b8379]">
            Interested in a Volterra scooter? Leave your details
            and our team will get in touch with you.
          </p>

          <div className="mt-10">
            <p className="text-[9px] tracking-[1.5px] text-[#839080]">
              GENERAL ENQUIRIES
            </p>
            <h4 className="mt-2 text-sm font-semibold">
              hello@volterra.example
            </h4>
          </div>

          <div className="mt-8">
            <p className="text-[9px] tracking-[1.5px] text-[#839080]">
              OUR PROMISE
            </p>
            <h4 className="mt-2 text-sm font-semibold">
              Simple mobility. Thoughtful design.
            </h4>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#f0f2eb] p-6 md:p-9"
        >
          <h3 className="text-2xl font-semibold">Book a test ride</h3>
          <p className="mb-7 mt-2 text-xs leading-6 text-[#7a8278]">
            Fill in the details below to register your interest.
          </p>

          {submitted && (
            <div
              role="status"
              className="mb-5 border border-[#bdcfbb] bg-[#e0eadf] p-3 text-xs text-[#38533b]"
            >
              Thank you! Your enquiry has been recorded in this demo.
            </div>
          )}

          <label className="mb-2 mt-5 block text-xs font-semibold" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-[#dce2d8] bg-white p-4 text-xs outline-none focus:border-[#718f74]"
          />

          <label className="mb-2 mt-5 block text-xs font-semibold" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-[#dce2d8] bg-white p-4 text-xs outline-none focus:border-[#718f74]"
          />

          <label className="mb-2 mt-5 block text-xs font-semibold" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your 10-digit phone number"
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-[#dce2d8] bg-white p-4 text-xs outline-none focus:border-[#718f74]"
          />

          <label className="mb-2 mt-5 block text-xs font-semibold" htmlFor="model">
            Select a model
          </label>
          <select
            id="model"
            name="model"
            value={form.model}
            onChange={handleChange}
            className="w-full border border-[#dce2d8] bg-white p-4 text-xs outline-none focus:border-[#718f74]"
          >
            <option>Volterra S1</option>
            <option>Volterra X2</option>
          </select>

          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-between bg-[#293c2e] px-5 py-4 text-xs font-semibold text-white transition hover:bg-[#405d45]"
          >
            Submit enquiry <span>↗</span>
          </button>

          <p className="mt-4 text-[10px] leading-5 text-[#899087]">
            This demonstration form does not send information to a server.
          </p>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#26362a] px-6 pb-6 pt-16 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 border-b border-[#445346] pb-12 sm:grid-cols-2 lg:grid-cols-3">

          <div>
            <a href="#home" className="text-2xl font-extrabold tracking-tighter">
              VOLTERRA<span className="text-[#8eac90]">.</span>
            </a>
            <p className="mt-5 max-w-[260px] text-xs leading-7 text-[#b3beb2]">
              Moving forward, one journey at a time. Designed for
              everyday electric mobility.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-[10px] font-bold tracking-[1.5px] text-[#a9bea9]">
              EXPLORE
            </h4>
            <a href="#home" className="text-xs text-[#d0d8cf] hover:text-white">Home</a>
            <a href="#models" className="text-xs text-[#d0d8cf] hover:text-white">Our scooters</a>
            <a href="#features" className="text-xs text-[#d0d8cf] hover:text-white">Features</a>
            <a href="#about" className="text-xs text-[#d0d8cf] hover:text-white">About us</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-[10px] font-bold tracking-[1.5px] text-[#a9bea9]">
              GET IN TOUCH
            </h4>
            <a href="#contact" className="text-xs text-[#d0d8cf] hover:text-white">Book a test ride</a>
            <a href="#contact" className="text-xs text-[#d0d8cf] hover:text-white">Contact us</a>
            <a href="#pricing" className="text-xs text-[#d0d8cf] hover:text-white">Pricing</a>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 pt-6 text-[10px] text-[#aeb9ad] sm:flex-row">
          <p>© 2026 Volterra. Concept website created for demonstration.</p>
          <a href="#home" className="text-white">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
