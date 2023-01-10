import { decode } from "html-entities";
import rightArrow from "../../images/arrow-right.png";

function CourseDetails() {
    return (
        <section className="pt-32 px-6 text-center bg-gradient-to-b from-green-50 to-blue-50 pb-60">
            <p className="text-xl font-barlow font-bold text-green-600 tracking-wider">
                course details
            </p>
            <h2 className="text-4xl mt-4 font-bold tracking-wide leading-relaxed">
                Start your web3 career
            </h2>
            <p className="py-4 w-4/5 mx-auto my-8 text-lg">
                Our courses can jumpstart your career or let you switch gears.
            </p>
            <section className="text-justify py-4 bg-gradient-to-b pt-10 from-teal-50 through-teal-100 to-transparent flex flex-col justify-center w-full">
                <img src="" alt="" />
                <h3 className="text-2xl mt-4 font-bold my-4">
                    JavaScript Fundamentals
                </h3>
                <h4 className="font-bold text-green-500 my-4">ABOUT THE COURSE</h4>
                <p className=" my-4 leading-loose">
                    This JavaScript crash course covers the basics of programming
                    through advanced topics like asynchronous requests and promises. The
                    most used developer tools and libraries for Ethereum are JavaScript
                    based, making it a key foundation to web3 development.
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
                        <span className="text-gray-500 font-semibold ">
                            Pre-requisites:
                        </span>{" "}
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
                                <span className="font-semibold">Data structures:</span>{" "}
                                arrays, maps, recursion
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

            <section className="text-justify py-4 flex flex-col justify-center w-full">
                <img src="" alt="" />
                <h3 className="text-2xl mt-4 font-bold my-4 text-left">
                    Ethereum Developer Bootcamp
                </h3>
                <h4 className="font-bold text-green-500 my-4">ABOUT THE COURSE</h4>
                <p className=" my-4 leading-loose">
                    The Ethereum Developer Bootcamp is a comprehensive course that
                    teaches you the fundamentals of web3 development. The course
                    includes everything from typography to smart contracts to fully
                    functional dApp development. This is the #1 resource to jumpstart
                    your web3 career.
                </p>
                <p className=" my-2 leading-loose">
                    Content is released on a weakly basis with live sessions,
                    interactive coding challenges, videos, guides and weekly projects
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
                        <span className="text-gray-500 font-semibold ">
                            Pre-requisites:
                        </span>{" "}
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
                            <p>
                                Build the future: identify, voting, exchanges, and wallets
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

            <section className="text-justify py-4 flex flex-col justify-center w-full">
                <img src="" alt="" />
                <h3 className="text-2xl mt-4 font-bold my-4 text-left">
                    Road to web3
                </h3>
                <h4 className="font-bold text-green-500 my-4">ABOUT THE COURSE</h4>
                <p className=" my-4 leading-loose">
                    In this self-paced, 10 project course, {decode("you'll")} learn from
                    industry experts on the cutting edge of web3, meet fellow
                    developers, supercharge your skills through real-world applications,
                    and mint Proof-of-Knowledge NFTs.
                </p>
                <p className=" my-2 leading-loose">
                    Projects increase in difficulty and include video and written
                    tutorials for the most relevant web3 use-cases, and rewarded you
                    with coveted NFTs.
                </p>
                <h4 className="font-bold text-green-500 my-4">
                    {decode("SKILLS YOU'LL LEARN")}
                </h4>
                <ul>
                    <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider ">
                        DEVELOP A DEVELOPER PORTFOLIO
                    </li>
                    <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider">
                        BUILD SMART CONTRACTS
                    </li>
                    <li className="bg-white p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider">
                        FULL STACK WEB3 APPLICATIONS
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
                        10 weeks
                    </li>
                    <li className="tracking-widest mb-4">
                        <span className="text-gray-500 font-semibold ">Skill level:</span>{" "}
                        Intermediate
                    </li>
                    <li className="tracking-widest">
                        <span className="text-gray-500 font-semibold ">
                            Pre-requisites:
                        </span>{" "}
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
                    <span>Start building</span>
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
                            <p> Develop an NFT smart contract</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 2</h4>
                            <p>Build a DeFidApp</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 3</h4>
                            <p>Make NFTs with on-chain metadata</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 4</h4>
                            <p>Create an NFT gallery</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 5</h4>
                            <p>Connect APIs to your smart contract</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 6</h4>
                            <p>Build a staking application</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 7</h4>
                            <p>Build an NFT marketplace</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 8</h4>
                            <p>Ship a blockchain betting game</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 9</h4>
                            <p>Build a token swap dApp</p>
                        </li>
                        <li className="my-8">
                            <h4 className="font-bold text-lg">Week 10</h4>
                            <p>Create a decentralized Twitter app</p>
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
        </section>
    )
}

export default CourseDetails;