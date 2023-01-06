import hamburger from "../images/icons8-hamburger-32.png";
import close from "../images/icons8-close-24.png";

function ToggleButton({ toggleMenu, open }) {
  return (
    <div>
      <button type="button" onClick={toggleMenu}>
        <img
          className="mr-auto"
          src={open ? close : hamburger}
          alt={hamburger}
        />
      </button>
    </div>
  );
}

export default ToggleButton;
