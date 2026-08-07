import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
          Welcome to
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-6">
          Chat Hat High School
        </h1>

        <p className="text-xl mt-6 text-gray-200 max-w-3xl mx-auto">
          Empowering Students with Knowledge, Discipline, and Excellence for a Better Tomorrow.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/admission"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300"
          >
            Admission Open
          </Link>

          <Link
            href="/notice"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900"
          >
            View Notice
          </Link>
        </div>
      </div>
    </section>
  );
}