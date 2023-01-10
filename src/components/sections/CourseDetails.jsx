import CourseOverView from "../courses/CourseOverview";
import { courses } from "../../course-data.json";

function CourseDetails() {
  const courseEl = courses.map(
    ({
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
    }) => (
      <CourseOverView
        key={title}
        title={title}
        description={description}
        activities={activities}
        takeawaySkills={takeawaySkills}
        price={price}
        duration={duration}
        skillLevel={skillLevel}
        preRequisites={preRequisites}
        details={details}
        curriculum={curriculum}
      />
    )
  );
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
      {courseEl}
    </section>
  );
}

export default CourseDetails;
