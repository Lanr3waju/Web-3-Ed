import EDB from "../courses/EDB";
import JF from "../courses/JF";
import RTW from "../courses/RTW";

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
      <JF />

      <EDB />

      <RTW />
    </section>
  );
}

export default CourseDetails;
