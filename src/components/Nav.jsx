import { useState } from "react";
import ToggleButton from "./ToggleButton";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prevMenuState) => !prevMenuState);

  return (
    <nav className="p-5 bg-gray-50 rounded-lg drop-shadow-lg shadow-green-300 mx-2 mb-8">
      <div className="flex justify-between items-center w-auto">
        <ToggleButton open={mobileMenuOpen} toggleMenu={() => toggleMenu()} />
        <Logo />
      </div>
      {mobileMenuOpen && <MobileMenu />}
    </nav>
  );
}

export default Nav;
