import rightArrow from "../../images/arrow-right.png";
import codeIcon from "../../images/html-code-for-icon-7.jpg";
import course from "../../images/icons8-read-online-48.png";
import block from "../../images/icons8-block-64.png";

function LearningPath() {
    return (
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
    )
}
export default LearningPath;
