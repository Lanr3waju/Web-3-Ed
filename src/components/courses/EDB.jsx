import { decode } from "html-entities";
import rightArrow from "../../images/arrow-right.png";

function EDB() {
  return (
    <section className="text-justify py-4 flex flex-col justify-center w-full">
      <img src="" alt="" />
      <h3 className="text-2xl mt-4 font-bold my-4 text-left">
        Ethereum Developer Bootcamp
      </h3>
      <h4 className="font-bold text-green-500 my-4">ABOUT THE COURSE</h4>
      <p className=" my-4 leading-loose">
        The Ethereum Developer Bootcamp is a comprehensive course that teaches
        you the fundamentals of web3 development. The course includes everything
        from typography to smart contracts to fully functional dApp development.
        This is the #1 resource to jumpstart your web3 career.
      </p>
      <p className=" my-2 leading-loose">
        Content is released on a weakly basis with live sessions, interactive
        coding challenges, videos, guides and weekly projects
      </p>
      <h4 className="font-bold text-green-500 my-4">
        {decode("SKILLS YOU'LL LEARN")}
      </h4>
      <ul>
        <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider ">
          BECOME INTERVIEW READY
        </li>
        <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider">
          MASTER SOLIDITY
        </li>
        <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider">
          BUILD SMART CONTRACTS
        </li>
      </ul>
      <ul className="my-8">
        <li className="tracking-widest mb-4">
          <span className="text-gray-500 font-semibold ">Price:</span> Free
        </li>
        <li className="tracking-widest mb-4">
          <span className="text-gray-500 font-semibold ">
            Time to complete:
          </span>{" "}
          7 weeks
        </li>
        <li className="tracking-widest mb-4">
          <span className="text-gray-500 font-semibold ">Skill level:</span>{" "}
          Intermediate
        </li>
        <li className="tracking-widest">
          <span className="text-gray-500 font-semibold ">Pre-requisites:</span>{" "}
          JS Fundamentals
        </li>
      </ul>
      <p className=" my-4 leading-loose">
        This course gets you running with coding in one of the most popular
        programming languages in the world. Great start prior to taking the
        bootcamp.
      </p>
      <button
        className="mt-8 bg-black mx-auto shadow-md rounded-xl justify-center items-center font-semibold w-10/12 /6 h-16 shadow-green-900 text-white text-lg flex"
        type="button"
      >
        <span>Get early access</span>
        <img className="w-6 ml-2" src={rightArrow} alt="right arrow" />
      </button>
      <button
        className="mt-8 mx-auto bg-green-100 shadow-lg rounded-xl font-semibold  w-10/12 h-16 shadow-green-900 text-black text-lg"
        type="button"
      >
        Login
      </button>
      <section className="mt-24 bg-green-200 p-4 rounded-3xl shadow-lg text-left border-4 border-green-300 shadow-green-700">
        <h3 className="font-bold text-left text-green-900 my-4">
          CURRICULUM OVERVIEW
        </h3>
        <ul>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 1</h4>
            <p> Blockchcain cryptography fundamentals</p>
          </li>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 2</h4>
            <p>Accounts and data structures</p>
          </li>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 3</h4>
            <p>Ethereum clients, requests and libraries</p>
          </li>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 4</h4>
            <p>Smart contract syntax and functions</p>
          </li>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 5</h4>
            <p>Mastering solidity: events, security, and data</p>
          </li>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 6</h4>
            <p>Decentralized applications</p>
          </li>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 7</h4>
            <p>Build the future: identify, voting, exchanges, and wallets</p>
          </li>
        </ul>

        <button
          className="bg-black mx-auto shadow-md rounded-xl justify-center items-center font-semibold w-10/12 /6 h-16 shadow-green-900 text-white text-lg flex"
          type="button"
        >
          Learn More
        </button>
      </section>
      <div className="w-11/12 my-32 mx-auto bg-green-200 h-1" />
    </section>
  );
}
export default EDB;
