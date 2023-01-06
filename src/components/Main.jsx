import gif1 from "../images/blockchain (1).gif";
import rightArrow from "../images/arrow-right.png";
import codeIcon from '../images/html-code-for-icon-7.jpg'
import course from '../images/icons8-read-online-48.png'
import block from '../images/icons8-block-64.png'

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
                    Learn, Build and get NFTified
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
            <section className="mt-52 text-center py-10 bg-gradient-to-b from-slate-50 via-lime-50 to-lime-100">
                <p className="text-lg font-barlow font-bold text-teal-900 tracking-wider">
                    choose your path
                </p>
                <h2 className="text-4xl mt-4 font-bold font-poppins">
                    What are you looking for ?
                </h2>
                <ul className="mt-10 ml-4 text-gray-500 font-semibold font-poppins w-full flex flex-col">
                    <li>
                        <button className="p-2 w-11/12 h-32 rounded-3xl border-gray-500 border-2 mb-8 flex items-center justify-around" type="button">
                            <img className="w-16" src={codeIcon} alt="angle brackets" />
                            <span>I want to learn how to code</span>
                        </button>
                    </li>
                    <li>
                        <button className="p-2 w-11/12 h-32 rounded-3xl border-gray-500 border-2 mb-8 flex items-center justify-around" type="button">
                            <img className="w-16" src={course} alt="read online" />
                            <span>I want to learn web3 through a course</span>
                        </button>
                    </li>
                    <li>
                        <button className=" p-2 w-11/12 h-32 rounded-3xl border-gray-500 border-2 mb-8 flex items-center justify-around" type="button">
                            <img className="w-16" src={block} alt="block" />
                            <span>I want to learn web3 by building projects</span>
                        </button>
                    </li>
                </ul>
            </section>
        </main>
    );
}
export default Main;
