import { Link } from "./link";

export const Navbar = () => {
  return (
    <nav className="bg-blue-950 flex w-full px-0 md:px-20 py-4 items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
      <span className="text-xl tracking-wide">FOOD SEARCHER</span>
      <ul className="flex gap-4">
        <Link text="Home" isSelected />
        <Link text="About Us" />
        <Link text="How to Cook" />
      </ul>
      <a
        href="https://github.com/GilbertoFreitasJunior997/recipe-searcher"
        target="_blank"
        className="px-10 flex items-center justify-center gap-1 hover:text-blue-500 transition-colors"
      >
        <i className="fa-brands fa-github text-lg text-inherit" />
        <span className="text-inherit"> GitHub </span>
      </a>
    </nav>
  );
};
