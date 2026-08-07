import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Notice", href: "/notice" },
  { name: "Gallery", href: "/gallery" },
  { name: "Teachers", href: "/teachers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Chat Hat High School
        </h1>

        <nav>
          <ul className="flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-yellow-300 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/admin"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Admin Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}