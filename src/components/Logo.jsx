import logo from "../images/acadenow-logo.jpg";

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <img className="w-7 h-7 rounded-lg mr-1 inline" src={logo} alt={logo} />
      <p className="inline font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 tracking-wider text-xl">
        [acadenow]
      </p>
    </div>
  );
}

export default Logo;
