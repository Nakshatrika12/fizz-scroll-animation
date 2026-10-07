import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const carVisualRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);
  const streaksRef = useRef(null);
  const badgeRef = useRef(null);
  const scrollTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      /* =========================================
         INITIAL STATES
      ========================================= */

      gsap.set(headlineRef.current, {
        opacity: 0,
        y: isMobile ? 45 : 70,
        scale: 0.97,
      });

      gsap.set(statsRef.current.children, {
        opacity: 0,
        y: 35,
      });

      gsap.set(carRef.current, {
        x: isMobile ? "-100vw" : "-45vw",
      });

      gsap.set(carVisualRef.current, {
        rotate: -2,
        scale: isMobile ? 0.62 : 0.88,
      });

      gsap.set(badgeRef.current, {
        opacity: 0,
        scale: 0.7,
        rotate: -10,
      });

      gsap.set(scrollTextRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(streaksRef.current.children, {
        scaleX: 0,
        transformOrigin: "right center",
      });

      /* =========================================
         MAIN SCROLL TIMELINE
      ========================================= */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: isMobile ? "+=1800" : "+=2200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* CAR MOVEMENT */

      timeline.to(
        carRef.current,
        {
          x: "100vw",
          duration: 4,
          ease: "none",
        },
        0
      );

      /* CAR SCALE */

      timeline.to(
        carVisualRef.current,
        {
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        0.15
      );

      /* HEADLINE */

      timeline.to(
        headlineRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: "power4.out",
        },
        0.15
      );

      /* BADGE */

      timeline.to(
        badgeRef.current,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        0.8
      );

      /* MOTION STREAKS */

      timeline.to(
        streaksRef.current.children,
        {
          scaleX: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
        },
        0.8
      );

      /* STATS */

      timeline.to(
        statsRef.current.children,
        {
          opacity: 1,
          y: 0,
          stagger: 0.14,
          duration: 0.7,
          ease: "power3.out",
        },
        1.7
      );

      /* SCROLL INDICATOR */

      timeline.to(
        scrollTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        2.3
      );

      /* =========================================
         CAR FLOAT
      ========================================= */

      gsap.to(carVisualRef.current, {
        y: -7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         STREAK ANIMATION
      ========================================= */

      gsap.to(streaksRef.current.children, {
        opacity: 0.35,
        duration: 0.8,
        stagger: 0.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-hidden bg-[#f3f1ed] text-black">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={sectionRef}
        className="relative flex h-screen min-h-[680px] w-full items-center justify-center overflow-hidden"
      >

        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">

          {/* Large circle */}

          <div className="absolute left-1/2 top-1/2 h-[90vw] max-h-[850px] w-[90vw] max-w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />

          {/* Inner circle */}

          <div className="absolute left-1/2 top-1/2 h-[70vw] max-h-[650px] w-[70vw] max-w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />

          {/* Decorative dots */}

          <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-orange-500 md:h-3 md:w-3" />

          <div className="absolute right-[12%] top-[27%] h-2 w-2 rounded-full bg-black" />

          <div className="absolute bottom-[30%] left-[18%] h-2 w-2 rounded-full bg-orange-400" />

          {/* Huge background FIZZ */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[32vw] font-black uppercase tracking-[-0.08em] text-black/[0.025] md:text-[18vw]">
            FIZZ
          </div>

        </div>


        {/* =====================================================
            BRAND
        ===================================================== */}

        <div className="absolute left-5 top-5 z-40 flex items-center gap-2 md:left-10 md:top-8 md:gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-black text-white md:h-10 md:w-10 md:text-sm">
            F
          </div>

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] md:text-xs md:tracking-[0.3em]">
              ITZ FIZZ
            </p>

            <p className="mt-1 hidden text-[9px] uppercase tracking-[0.25em] text-black/40 sm:block">
              Creative motion
            </p>

          </div>

        </div>


        {/* =====================================================
            TOP RIGHT
        ===================================================== */}

        <div className="absolute right-5 top-6 z-40 hidden text-right md:right-10 md:top-7 md:block">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/40">
            Digital experience
          </p>

          <p className="mt-1 text-xs font-bold">
            2026 / 01
          </p>

        </div>


        {/* =====================================================
            MAIN HEADLINE
        ===================================================== */}

        <div
          ref={headlineRef}
          className="absolute left-1/2 top-[9%] z-30 w-full max-w-[1500px] -translate-x-1/2 px-5 text-center sm:top-[9%] md:top-[8%]"
        >

          <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.35em] text-black/40 sm:text-[10px] md:mb-4 md:text-xs md:tracking-[0.5em]">
            Design that moves
          </p>

          <h1 className="text-[12vw] font-black uppercase leading-[0.82] tracking-[-0.07em] text-black sm:text-[11vw] md:text-[8vw]">

            <span className="block">
              WELCOME
            </span>

            <span className="block text-orange-500">
              ITZ FIZZ
            </span>

          </h1>

        </div>


        {/* =====================================================
            ORANGE SCROLL BADGE
        ===================================================== */}

        <div
          ref={badgeRef}
          className="absolute right-[6%] top-[29%] z-30 hidden sm:block md:right-[8%] md:top-[28%]"
        >

          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 sm:h-20 sm:w-20 md:h-24 md:w-24">

            <div className="absolute inset-2 rounded-full border border-white/40" />

            <div className="text-center text-white">

              <p className="text-[7px] font-bold uppercase tracking-[0.15em] md:text-[9px] md:tracking-[0.2em]">
                Scroll
              </p>

              <p className="mt-1 text-lg font-black md:text-xl">
                ↓
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            BLACK CINEMATIC STRIP
        ===================================================== */}

        <div className="absolute left-0 top-[52%] w-full -translate-y-1/2">

          <div className="relative h-[250px] w-full overflow-hidden bg-[#090909] sm:h-[290px] md:h-[350px]">

            {/* Center line */}

            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />

            {/* Bottom line */}

            <div className="absolute bottom-[18%] left-0 h-px w-full bg-white/[0.08]" />


            {/* =================================================
                ROAD MARKINGS
            ================================================= */}

            <div className="absolute bottom-[12%] left-0 flex w-full gap-10 opacity-20 sm:gap-16">

              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[2px] w-14 shrink-0 rounded-full bg-white sm:w-20"
                />
              ))}

            </div>


            {/* =================================================
                MOTION STREAKS
            ================================================= */}

            <div
              ref={streaksRef}
              className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2"
            >

              <div className="absolute left-[4%] top-[-50px] h-[2px] w-[100px] bg-orange-500/60 sm:w-[180px]" />

              <div className="absolute left-[12%] top-[-25px] h-px w-[80px] bg-white/30 sm:w-[110px]" />

              <div className="absolute left-[20%] top-[40px] h-[2px] w-[100px] bg-orange-400/40 sm:w-[150px]" />

              <div className="absolute left-[30%] top-[65px] h-px w-[70px] bg-white/20 sm:w-[90px]" />

              <div className="absolute left-[40%] top-[-70px] h-[2px] w-[130px] bg-white/20 sm:w-[200px]" />

            </div>


            {/* =================================================
                CAR
            ================================================= */}

            <div
              ref={carRef}
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2"
            >

              <div
                ref={carVisualRef}
                className="relative h-[135px] w-[405px] sm:h-[170px] sm:w-[510px] md:h-[220px] md:w-[660px]"
              >

                {/* Car shadow */}

                <div className="absolute bottom-[-20px] left-[40px] h-[25px] w-[330px] rounded-full bg-black/70 blur-xl sm:bottom-[-28px] sm:left-[50px] sm:w-[420px] md:bottom-[-32px] md:left-[50px] md:w-[540px]" />

                {/* Orange underglow */}

                <div className="absolute bottom-[-5px] left-[55px] h-[15px] w-[350px] rounded-full bg-orange-500/40 blur-xl sm:left-[70px] sm:w-[420px] md:bottom-[-8px] md:left-[80px] md:w-[500px]" />


                {/* =================================================
                    CAR SVG
                ================================================= */}

                <svg
                  viewBox="0 0 900 300"
                  className="relative h-full w-full overflow-visible"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <defs>

                    <linearGradient
                      id="carBody"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#ff8a00" />
                      <stop offset="45%" stopColor="#ff5a00" />
                      <stop offset="100%" stopColor="#d83200" />
                    </linearGradient>

                    <linearGradient
                      id="windowGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#3c4147" />
                      <stop offset="100%" stopColor="#090b0d" />
                    </linearGradient>

                    <linearGradient
                      id="rimGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#777" />
                      <stop offset="50%" stopColor="#222" />
                      <stop offset="100%" stopColor="#888" />
                    </linearGradient>

                    <filter id="glow">
                      <feGaussianBlur stdDeviation="5" />
                    </filter>

                  </defs>


                  {/* Glow */}

                  <path
                    d="M120 220 C230 270 700 270 810 220"
                    stroke="#ff5a00"
                    strokeWidth="18"
                    opacity="0.3"
                    filter="url(#glow)"
                  />


                  {/* Main body */}

                  <path
                    d="
                      M90 205
                      C120 165 180 140 255 132
                      L350 70
                      C380 50 420 42 465 42
                      L590 42
                      C630 42 665 60 700 90
                      L770 145
                      C805 150 835 168 850 195
                      L850 218
                      C850 230 838 240 825 240
                      L95 240
                      C75 240 65 225 75 210
                      Z
                    "
                    fill="url(#carBody)"
                  />


                  {/* Lower body */}

                  <path
                    d="
                      M78 215
                      C210 230 690 230 842 213
                      L842 240
                      L92 240
                      C75 240 70 225 78 215
                      Z
                    "
                    fill="#b92d00"
                  />


                  {/* Roof */}

                  <path
                    d="
                      M270 132
                      L360 68
                      C385 50 420 44 458 44
                      L585 44
                      C625 44 655 58 688 88
                      L730 132
                      Z
                    "
                    fill="#17191b"
                  />


                  {/* Front window */}

                  <path
                    d="
                      M470 58
                      L585 58
                      C615 58 635 70 660 92
                      L695 124
                      L520 124
                      Z
                    "
                    fill="url(#windowGradient)"
                  />


                  {/* Side window */}

                  <path
                    d="
                      M350 124
                      L382 82
                      C395 67 418 58 445 58
                      L460 58
                      L510 124
                      Z
                    "
                    fill="url(#windowGradient)"
                  />


                  {/* Window divider */}

                  <path
                    d="M460 57 L510 125"
                    stroke="#ff6a00"
                    strokeWidth="6"
                  />


                  {/* Body highlight */}

                  <path
                    d="M130 178 C300 150 580 145 760 166"
                    fill="none"
                    stroke="#ffb16a"
                    strokeWidth="5"
                    opacity="0.6"
                  />


                  {/* Door */}

                  <path
                    d="M510 126 L530 218"
                    stroke="#a92b00"
                    strokeWidth="4"
                  />


                  {/* Door handle */}

                  <rect
                    x="555"
                    y="150"
                    width="45"
                    height="7"
                    rx="4"
                    fill="#1c1c1c"
                  />


                  {/* Front bumper */}

                  <path
                    d="
                      M760 183
                      C805 183 838 192 855 211
                      L855 228
                      L770 228
                      Z
                    "
                    fill="#181818"
                  />


                  {/* Headlight */}

                  <path
                    d="
                      M770 165
                      C798 166 818 175 830 188
                      L775 190
                      Z
                    "
                    fill="#fff7d6"
                    opacity="0.95"
                  />


                  <path
                    d="M775 169 L830 188"
                    stroke="#fff"
                    strokeWidth="6"
                    opacity="0.8"
                  />


                  {/* Grille */}

                  <path
                    d="
                      M790 208
                      L840 208
                      L830 228
                      L780 228
                      Z
                    "
                    fill="#050505"
                  />


                  {/* Rear light */}

                  <rect
                    x="95"
                    y="168"
                    width="45"
                    height="18"
                    rx="8"
                    fill="#ff1600"
                  />


                  {/* Rear wheel */}

                  <circle
                    cx="235"
                    cy="235"
                    r="48"
                    fill="#070707"
                  />

                  <circle
                    cx="235"
                    cy="235"
                    r="30"
                    fill="url(#rimGradient)"
                  />

                  <circle
                    cx="235"
                    cy="235"
                    r="12"
                    fill="#111"
                  />

                  <circle
                    cx="235"
                    cy="235"
                    r="5"
                    fill="#ff6a00"
                  />


                  {/* Front wheel */}

                  <circle
                    cx="700"
                    cy="235"
                    r="48"
                    fill="#070707"
                  />

                  <circle
                    cx="700"
                    cy="235"
                    r="30"
                    fill="url(#rimGradient)"
                  />

                  <circle
                    cx="700"
                    cy="235"
                    r="12"
                    fill="#111"
                  />

                  <circle
                    cx="700"
                    cy="235"
                    r="5"
                    fill="#ff6a00"
                  />


                  {/* Wheel highlights */}

                  <path
                    d="M215 215 A28 28 0 0 1 255 214"
                    stroke="#aaa"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.7"
                  />

                  <path
                    d="M680 215 A28 28 0 0 1 720 214"
                    stroke="#aaa"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.7"
                  />


                  {/* Side skirt */}

                  <path
                    d="M150 225 L760 225"
                    stroke="#ff9b50"
                    strokeWidth="4"
                    opacity="0.7"
                  />

                </svg>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <div
          ref={statsRef}
          className="absolute bottom-[5%] left-1/2 z-40 grid w-[92%] max-w-[1500px] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-10 md:bottom-[6%] md:grid-cols-4 md:gap-x-12"
        >

          {/* STAT 1 */}

          <div className="border-l border-black/10 pl-3 sm:pl-4 md:pl-5">

            <p className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              58<span className="text-orange-500">%</span>
            </p>

            <div className="mt-1 flex items-center gap-2 md:mt-2">

              <span className="h-1 w-4 rounded-full bg-orange-500 md:w-5" />

              <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-black/40 sm:text-[8px] md:text-[9px] md:tracking-[0.18em]">
                Engagement
              </p>

            </div>

          </div>


          {/* STAT 2 */}

          <div className="border-l border-black/10 pl-3 sm:pl-4 md:pl-5">

            <p className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              27<span className="text-orange-500">%</span>
            </p>

            <div className="mt-1 flex items-center gap-2 md:mt-2">

              <span className="h-1 w-4 rounded-full bg-orange-500 md:w-5" />

              <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-black/40 sm:text-[8px] md:text-[9px] md:tracking-[0.18em]">
                Conversion
              </p>

            </div>

          </div>


          {/* STAT 3 */}

          <div className="border-l border-black/10 pl-3 sm:pl-4 md:pl-5">

            <p className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              23<span className="text-orange-500">%</span>
            </p>

            <div className="mt-1 flex items-center gap-2 md:mt-2">

              <span className="h-1 w-4 rounded-full bg-orange-500 md:w-5" />

              <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-black/40 sm:text-[8px] md:text-[9px] md:tracking-[0.18em]">
                Growth
              </p>

            </div>

          </div>


          {/* STAT 4 */}

          <div className="border-l border-black/10 pl-3 sm:pl-4 md:pl-5">

            <p className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              40<span className="text-orange-500">%</span>
            </p>

            <div className="mt-1 flex items-center gap-2 md:mt-2">

              <span className="h-1 w-4 rounded-full bg-orange-500 md:w-5" />

              <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-black/40 sm:text-[8px] md:text-[9px] md:tracking-[0.18em]">
                Retention
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            SCROLL TO EXPLORE
        ===================================================== */}

        <div
          ref={scrollTextRef}
          className="absolute bottom-[5%] right-[4%] z-40 hidden items-center gap-3 lg:flex"
        >

          <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-black/40">
            Scroll to explore
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/20">
            <span className="text-sm">
              ↓
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          NEXT SECTION
      ===================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f3f1ed] px-6">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />

        <div className="relative z-10 text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-black/40">
            Keep moving
          </p>

          <h2 className="text-5xl font-black uppercase tracking-[-0.04em] sm:text-6xl md:text-8xl">
            Next
            <span className="text-orange-500">
              {" "}Section
            </span>
          </h2>

        </div>

      </section>

    </main>
  );
}

export default App;