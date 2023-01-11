import logo from "../images/acadenow-logo.jpg";

function Logo() {
  return (
    <div className="flex items-center">
      <img className="w-7 h-7 rounded-lg mr-1 inline" src={logo} alt={logo} />
      <p className="font-cookie ml-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-green-900 text-4xl">
        acadenow
      </p>
    </div>
  );
}

export default Logo;
