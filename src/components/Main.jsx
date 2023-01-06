import gif1 from "../images/blockchain (1).gif";
import premium from "../images/premium-quality.png";
import rightArrow from "../images/arrow-right.png";

function Main() {
  return (
    <main>
      <section className="text-center">
        <h2 className="font-poppins text-2xl leading-relaxed font-bold  mb-4">
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
          Learn, Build and get NFTified{" "}
          <img
            className="w-40 absolute ml-56 animate-pulse rotate-45 -mt-24"
            src={premium}
            alt="premium quality"
          />
        </h3>
        <button
          className="mt-8 bg-black shadow-md rounded-xl font-poppins justify-center items-center mr-auto ml-auto font-semibold  w-4/6 h-16 shadow-green-900 text-white text-lg flex"
          type="button"
        >
          <span>Get early access</span>
          <img className="w-6 ml-2" src={rightArrow} alt="right arrow" />
        </button>
        <button
          className="mt-8 bg-green-100 shadow-lg rounded-xl font-poppins font-semibold  w-4/6 h-16 shadow-green-900 text-black text-lg"
          type="button"
        >
          Login
        </button>
      </section>
      <section className="mt-52 text-center bg-gradient-to-b from-white via-lime-50 to-green-100">
        <p className="text-lg font-barlow font-bold text-teal-900 tracking-wider">
          choose your path
        </p>
        <h2 className="text-4xl mt-4 font-bold font-poppins">
          What are you looking for ?
        </h2>
        <ul className="mt-6 text-2xl">
          <li>I want to learn how to code</li>
          <li>I want to learn how to code</li>
          <li>I want to learn how to code</li>
        </ul>
      </section>
    </main>
  );
}
export default Main;
