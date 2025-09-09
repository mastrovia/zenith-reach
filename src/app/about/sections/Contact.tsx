export default function Contact() {
  return (
    <section className="max-w-section mx-auto pb-20 grid sm:grid-cols-2 gap-10">
      <picture>
        <img src="/image/about-us-coconut-tree.png" alt="" />
      </picture>
      <div className="flex flex-col text-center sm:text-start sm:justify-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-13 sm:leading-normal md:leading-20">
            Want to <br /> partner with <br /> Zenith Reach?
          </h2>
          <a href="/contact" className="cursor-pointer">
            <button className="cursor-pointer bg-primary px-5 py-2">Contact now</button>
          </a>
        </div>
      </div>
    </section>
  );
}
