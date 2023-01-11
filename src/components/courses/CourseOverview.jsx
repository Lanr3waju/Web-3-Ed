import { decode } from "html-entities";
import rightArrow from "../../images/arrow-right.png";

function CourseOverView({
  title,
  description,
  activities,
  takeawaySkills,
  price,
  duration,
  skillLevel,
  preRequisites,
  details,
  curriculum,
}) {
  const takeawaySkillsEl = takeawaySkills.map((takeawaySkill) => (
    <li
      key={takeawaySkill}
      className="bg-white uppercase p-4 rounded-3xl text-center shadow-md shadow-lime-700 my-3 tracking-wider "
    >
      {takeawaySkill}
    </li>
  ));

  const curriculumEl = curriculum.map(({ week, courseWork }) => (
    <li key={courseWork} className="my-8">
      <h4 className="font-bold text-lg">{week}</h4>
      <p>{courseWork}</p>
    </li>
  ));
  return (
    <section className="text-justify py-4 bg-gradient-to-b pt-10 from-teal-50 through-teal-100 to-transparent flex flex-col justify-center w-full">
      <img src="" alt="" />
      <h3 className="text-2xl mt-4 text-left font-bold my-4">{title}</h3>
      <h4 className="font-bold text-green-500 my-4">ABOUT THE COURSE</h4>
      <p className=" my-4 leading-loose">{description}</p>
      <p className=" my-4 leading-loose">{activities}</p>
      <h4 className="font-bold text-green-500 my-4">
        {decode("SKILLS YOU'LL LEARN")}
      </h4>
      <ul>{takeawaySkillsEl}</ul>
      <ul className="my-8">
        <li className="tracking-widest mb-4">
          <span className="text-gray-500 font-semibold ">Price:</span> {price}
        </li>
        <li className="tracking-widest mb-4">
          <span className="text-gray-500 font-semibold ">
            Time to complete:
          </span>{" "}
          {duration}
        </li>
        <li className="tracking-widest mb-4">
          <span className="text-gray-500 font-semibold ">Skill level:</span>{" "}
          {skillLevel}
        </li>
        <li className="tracking-widest">
          <span className="text-gray-500 font-semibold ">Pre-requisites:</span>{" "}
          {preRequisites}
        </li>
      </ul>
      <p className=" my-2 leading-loose">{details}</p>
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
        <ul>{curriculumEl}</ul>

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
export default CourseOverView;
