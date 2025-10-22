import NavItems from "./NavItems";
import UserButton from "./UserButton";
const Navbar = () => {
  return (
    <nav
      className={`
        flex flex-1 items-center justify-between gap-6
        md:gap-10
      `}
    >
      <div
        className={`
          flex flex-1 items-center
          lg:justify-center
        `}
      >
        <NavItems />
      </div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
