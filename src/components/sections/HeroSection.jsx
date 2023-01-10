import gif1 from "../../images/blockchain (1).gif";
import rightArrow from "../../images/arrow-right.png";

function HeroSection() {
    return (
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
    )
}

export default HeroSection