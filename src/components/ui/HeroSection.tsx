export default function HeroSection() {
  return (
    <section className="relative md:h-full">
      <picture>
        <img src="/banners/home-page-bg.png" alt="" />
      </picture>
      <div className="absolute bottom-0 left-0 w-full h-96">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl text-white mb-4 leading-20">
            Pure Taste. <br />
            Traditional Roots
          </h1>
          <p>Bringing non-preservative ready-to-eat and ready-to-cook Indian food to the world.</p>
        </div>
      </div>
    </section>
  );
}
