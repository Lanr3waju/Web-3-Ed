import gif1 from "../images/blockchain (1).gif";
import rightArrow from "../images/arrow-right.png";
import codeIcon from "../images/html-code-for-icon-7.jpg";
import course from "../images/icons8-read-online-48.png";
import block from "../images/icons8-block-64.png";
import discord from "../images/discord-logo-png-7617.png";

function Main() {
  return (
    <main className="font-poppins">
      <section className="text-center fon px-4 mt-20">
        <h2 className="text-2xl leading-relaxed font-bold  mb-4">
          We are creating a dent on
          <span className="text-transparent ml-2 bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
            Decentralized Internet.
          </span>{" "}
          Kickstart your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-300">
            web3
          </span>{" "}
          and gaming career
        </h2>
        <img
          className="w-6/12 mr-auto ml-auto mb-4"
          src={gif1}
          alt="Blockchcain gif"
        />
        <h3 className=" bg-teal-100  text-green-900 drop-shadow-lg shadow-green-700 pt-2 pb-2 pr-8 pl-8 w-fit mr-auto ml-auto text-xl font-barlow tracking-wider font-bold rounded-2xl">
          Learn, Build and get NFTified
        </h3>
        <button
          className="mt-8 bg-black shadow-md rounded-xl justify-center items-center mr-auto ml-auto font-semibold  w-4/6 h-16 shadow-green-900 text-white text-lg flex"
          type="button"
        >
          <span>Get early access</span>
          <img className="w-6 ml-2" src={rightArrow} alt="right arrow" />
        </button>
        <button
          className="mt-8 bg-green-100 shadow-lg rounded-xl font-semibold  w-4/6 h-16 shadow-green-900 text-black text-lg"
          type="button"
        >
          Login
        </button>
      </section>
      <section className="mt-52 text-center py-10 bg-gradient-to-b from-transparent via-lime-50 to-green-50">
        <p className="text-xl font-barlow font-bold text-green-600 tracking-wider">
          choose your path
        </p>
        <h2 className="text-4xl mt-4 font-bold leading-relaxed">
          What are you looking for ?
        </h2>
        <ul className="mt-10 text-gray-500 font-semibold w-11/12 ml-[8%]">
          <li>
            <button
              className="p-2 w-11/12 h-32 rounded-3xl border-gray-500 border-2 mb-8 flex items-center justify-around"
              type="button"
            >
              <img className="w-16" src={codeIcon} alt="angle brackets" />
              <span>I want to learn how to code</span>
            </button>
          </li>
          <li>
            <button
              className="p-2 w-11/12 h-32 rounded-3xl border-gray-500 border-2 mb-8 flex items-center justify-around"
              type="button"
            >
              <img className="w-16" src={course} alt="read online" />
              <span>I want to learn web3 through a course</span>
            </button>
          </li>
          <li>
            <button
              className=" p-2 w-11/12 h-32 rounded-3xl border-gray-500 border-2 mb-8 flex items-center justify-around"
              type="button"
            >
              <img className="w-16" src={block} alt="block" />
              <span>I want to learn web3 by building projects</span>
            </button>
          </li>
        </ul>
        <button
          className="mt-8 bg-black shadow-md rounded-xl justify-center items-center mr-auto ml-auto font-semibold  w-5/6 h-16 shadow-green-900 text-white text-lg flex"
          type="button"
        >
          <span>Check out all courses</span>
          <img className="w-6 ml-2" src={rightArrow} alt="right arrow" />
        </button>
      </section>

      <section className="text-xl font-barlow font-bold text-green-600 tracking-wider">
        <p>course details</p>
        <h2 className="text-4xl mt-4 font-bold tracking-wide leading-relaxed">
          Start your web3 career
        </h2>
        <p className="text-lg py-4 font-semibold">
          Our courses can jumpstart your career or let you switch gears.
        </p>
        <section>
          <img src="" alt="" />
          <h3>JavaScript Fundamentals</h3>
          <h4>ABOUT THE COURSE</h4>
          <p>
            This JavaScript crash course covers the basics of programming
            through advanced topics like asynchronous requests and promises. The
            most used developer tools and libraries for Ethereum are JavaScript
            based, making it a key foundation to web3 development. Each week
            will have interactive coding challenges, videos, and tutorials.
          </p>
          <h4>SKILLS YOU'LL LEARN</h4>
          <ul>
            <li>BECOME A PROGRAMMER</li>
            <li>FULLSTACK DEVELOPMENT</li>
            <li>MASTER JAVASCRIPT</li>
          </ul>
          <ul>
            <li>
              <spam>Price:</spam> Free
            </li>
            <li>
              <spam>Time to complete:</spam> 3 weeks
            </li>
            <li>
              <spam>Skill level:</spam> Beginner
            </li>
            <li>
              <spam>Pre-requisites:</spam> None
            </li>
          </ul>
          <p>
            This course gets you running with coding in one of the most popular
            programming languages in the world. Great start prior to taking the
            bootcamp.
          </p>
          <button
            className="mt-8 bg-black shadow-md rounded-xl justify-center items-center mr-auto ml-auto font-semibold  w-4/6 h-16 shadow-green-900 text-white text-lg flex"
            type="button"
          >
            <span>Get early access</span>
            <img className="w-6 ml-2" src={rightArrow} alt="right arrow" />
          </button>
          <button
            className="mt-8 bg-green-100 shadow-lg rounded-xl font-semibold  w-4/6 h-16 shadow-green-900 text-black text-lg"
            type="button"
          >
            Login
          </button>
        </section>
        <section>
          <h3>CURRICULUM OVERVIEW</h3>
          <ul>
            <li>
              <h4>Week 1</h4>
              <p>Basics: functions, conditionals, loops, storage</p>
            </li>
            <li>
              <h4>Week 2</h4>
              <p>Data structures: arrays, maps, recursion</p>
            </li>
            <li>
              <h4>Week 3</h4>
              <p>Networks: local and asynchronous JS</p>
            </li>
          </ul>

          <button type="button">Learn More</button>
        </section>
      </section>

      <section className="text-center py-40 px-4 bg-gradient-to-b from-teal-50 via-green-50 to-transparent">
        <p className="text-xl font-barlow font-bold text-green-600 tracking-wider">
          community
        </p>
        <h2 className="text-4xl mt-4 font-bold tracking-wide leading-relaxed">
          Connect with other builders
        </h2>
        <p className="text-lg py-4 font-semibold">
          Meet thousands of developers and gamers at all different stages of
          their web3 journey.
        </p>
        <button
          className="mt-8 bg-black shadow-md rounded-xl justify-center items-center mr-auto ml-auto font-semibold  w-4/6 h-16 shadow-green-900 text-white text-lg flex"
          type="button"
        >
          <span>Join Discord</span>
          <img className="w-14 ml-2" src={discord} alt="Discord" />
        </button>
      </section>
    </main>
  );
}
export default Main;
