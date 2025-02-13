import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Events", href: "/" },
  { label: "My Tickets", href: "/tickets" },
  { label: "About Project", href: "/about" },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-5 max-w-[1200px] h-[76px] rounded-3xl border px-4 border-teal-31 bg-[#0e242b] mx-2 md:mx-auto">
      <Link href="#">
        <Image src="/assets/logo.svg" width={100} height={100} alt="" />
      </Link>

      <ul className="flex items-center gap-4 max-md:hidden text-lg">
        {navItems.map(({ label, href }) => (
          <li key={label} className="p-2.5">
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white text-black border border-transparent group hover:bg-teal-43 hover:text-neutral-85 hover:border-neutral-85 duration-200 h-[52px] px-4 py-2"
      >
        <span>MY TICKETS </span>
        <span className="text-xl font-semibold leading-[0] mb-0.5 group-hover:-rotate-45 duration-200 group-hover:text-neutral-85">
          &rarr;
        </span>
      </Link>
    </nav>
  );
};
