import { decode } from "html-entities";
import rightArrow from "../../images/arrow-right.png";

function JF() {
  return (
    <section className="text-justify py-4 bg-gradient-to-b pt-10 from-teal-50 through-teal-100 to-transparent flex flex-col justify-center w-full">
      <img src="" alt="" />
      <h3 className="text-2xl mt-4 font-bold my-4">JavaScript Fundamentals</h3>
      <h4 className="font-bold text-green-500 my-4">ABOUT THE COURSE</h4>
      <p className=" my-4 leading-loose">
        This JavaScript crash course covers the basics of programming through
        advanced topics like asynchronous requests and promises. The most used
        developer tools and libraries for Ethereum are JavaScript based, making
        it a key foundation to web3 development.
      </p>
      <p className=" my-4 leading-loose">
        Each week will have interactive coding challenges, videos, and
        tutorials.
      </p>
      <h4 className="font-bold text-green-500 my-4">
        {decode("SKILLS YOU'LL LEARN")}
      </h4>
      <ul>
        <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider ">
          BECOME A PROGRAMMER
        </li>
        <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider">
          FULLSTACK DEVELOPMENT
        </li>
        <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider">
          MASTER JAVASCRIPT
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
          3 weeks
        </li>
        <li className="tracking-widest mb-4">
          <span className="text-gray-500 font-semibold ">Skill level:</span>{" "}
          Beginner
        </li>
        <li className="tracking-widest">
          <span className="text-gray-500 font-semibold ">Pre-requisites:</span>{" "}
          None
        </li>
      </ul>
      <p className=" my-2 leading-loose">
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
            <p>
              <span className="font-semibold">Basics:</span> functions,
              conditionals, loops, storage
            </p>
          </li>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 2</h4>
            <p>
              <span className="font-semibold">Data structures:</span> arrays,
              maps, recursion
            </p>
          </li>
          <li className="my-8">
            <h4 className="font-bold text-lg">Week 3</h4>
            <p>
              <span className="font-semibold">Networks:</span> local and
              asynchronous JS
            </p>
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
export default JF;
