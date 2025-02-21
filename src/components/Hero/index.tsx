interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export default function Hero({ title, description, image }: HeroProps) {
  return (
    <section className="relative bg-blue-900 mb-8">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-lg text-xl text-gray-300">{description}</p>
      </div>
    </section>
  );
}
