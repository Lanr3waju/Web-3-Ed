import js from "../images/javascript-39410.png";
import ethereum from "../images/ethereum-classic-etc-logo.png";

function Courses() {
  return (
    <ul className="ml-2 border-gray-800 font-poppins border-x-4 border-solid">
      <li>
        <button className="mb-2 flex items-center" type="button">
          <img
            className="w-10 inline rounded-lg m-2"
            src={js}
            alt="javascript icon"
          />
          <span className="text-base font-semibold">
            JavaScript Fundamentals
          </span>
        </button>
      </li>

      <li>
        <button className="mb-2 flex items-center" type="button">
          <img className="w-10 inline m-2" src={ethereum} alt="javascript icon" />
          <span className="text-base font-semibold">
            Ethereum Developer Bootcamp
          </span>
        </button>
      </li>
    </ul >
  );
}

export default Courses;
