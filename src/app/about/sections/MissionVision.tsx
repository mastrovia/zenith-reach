export default function MissionVision() {
  const missions = [
    'To offer healthy, preservative-free food solutions that meet international quality standards.',
    'To promote authentic Indian flavors across global markets.',
    'To support families and communities with food that is both convenient and culturally rooted.',
    'To build long-term partnerships with clients through trust, quality, and commitment.',
  ];

  return (
    <section className="max-w-section mx-auto relative overflow-hidden">
      <div className="hidden md:flex absolute left-5 h-full justify-center">
        <h1 className="text-8xl text-primary/25 rotate-[-90deg]">Mission | Vision</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h1 className="text-secondary text-3xl md:text-4xl font-semibold leading-tight">Our Vision</h1>
          <p className="mt-6 leading-8 relative text-lg">
            To be a trusted global partner in delivering{' '}
            <span className="font-bold">
              non-preservative, authentic, and high-quality Indian food products
            </span>
            , making traditional flavors accessible to modern lifestyles — without compromising taste or
            purity.
          </p>
        </div>
        <div className="col-span-1">
          <picture className="w-full">
            <img className="w-full" src="/image/about-us-chilly.png" alt="" />
          </picture>
        </div>
      </div>
      <div className="rounded-3xl bg-primary/30 p-5 md:p-10 text-center mt-5 md:mt-14 max-w-4xl mx-auto flex flex-col gap-6">
        <h1 className="text-secondary text-3xl md:text-4xl font-semibold leading-tight uppercase">
          Our Mission
        </h1>
        <div className="h-[2px] w-full bg-primary/50" />
        <div className="w-full rounded-2xl bg-primary p-5 md:p-10 text-start">
          {missions.map((mission, idx) => (
            <p key={idx} className="text-white leading-relaxed mb-4 flex items-center gap-3">
              <svg
                className="shrink-0"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.04848 6.45135L4.81191 11.2443C7.67583 6.6575 10.8915 2.63762 13.8056 0.318463C14.4588 -0.299979 15.4637 0.0607789 14.7603 0.730758C11.4944 4.18373 8.98217 8.10053 6.41972 14.2334C5.41484 14.9549 4.25922 15.3157 3.70654 14.6457L0.0889576 7.99746C-0.413484 7.17287 1.34506 5.266 2.04848 6.45135Z"
                  fill="white"
                />
              </svg>
              {mission}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
