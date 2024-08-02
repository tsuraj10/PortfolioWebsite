import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800">
      <div className="text-white text-xl font-semibold">
        <Link href="/">My Portfolio</Link>
      </div>
      <ul className="flex gap-6 m-0 list-none">
        <li>
          <Link href="/" className="text-white text-base hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white text-base hover:text-blue-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-white text-base hover:text-blue-500"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white text-base hover:text-blue-500"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
