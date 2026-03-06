import NavItem from "./NavItem";
export default function Navbar() {
  return (
    <div className=" fixed top-7 w-full flex items-center justify-center z-100">
      <div className="w-[90%] md:w-1/2 lg:w-1/3 h-15 rounded-full bg-linear-to-r from-purple-600 to-purple-800  px-7 py-4 transition-all duration-500 animate-float-breath">
        <div className="w-full h-full flex justify-center gap-5
        lg:gap-7 py-0 items-center list-none cursor-pointer">
          <NavItem data="Home" link="#" />
          <NavItem data="About" link="#about" />
          <NavItem data="Projects" link="#projects" />
          <NavItem data="Skills" link="#myskills" />
          <NavItem data="Contact" link="#contact" />
        </div>
      </div>
    </div>
  );
}
