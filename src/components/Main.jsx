import HeroSection from "./sections/HeroSection";
import LearningPath from "./sections/LearningPath";
import CourseDetails from "./sections/CourseDetails";
import CommunitySection from "./sections/CommunitySection";

function Main() {
  return (
    <main className="font-poppins">
      <HeroSection />
      <LearningPath />
      <CourseDetails />
      <CommunitySection />
    </main>
  );
}
export default Main;
