import HeroSection from "./components/HeroSection";
import FeatureHighlights from "./components/FeatureHighlights";
import FeaturedCourses from "./components/FeaturedCourses";
import UpcomingEvents from "./components/UpcomingEvents";
import LatestBlogs from "./components/LatestBlogs";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <FeaturedCourses />
      <UpcomingEvents />
      <LatestBlogs />
      <CallToAction />
    </>
  );
}
