import Hero from "../components/hero/Hero";
import WhoWeAre from "../components/who-we-are/WhoWeAre";
import FeaturedClass from "../components/featured-class/FeaturedClass";
import CallToAction from "../components/call-to-action/CallToAction";
import ChooseUs from "../components/choose-us/ChooseUs";
import Trainers from "../components/trainers/Trainers";
import Testimonials from "../components/testimonials/Testimonials";
import Gallery from "../components/gallery/Gallery";
import BMI from "../components/bmi/BMI";
import PricingCards from "../components/pricing/PricingCards";
import Blog from "../components/blog/Blog";
import CallToAction2 from "../components/call-to-action2/CallToAction2";

function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <FeaturedClass />
      <CallToAction />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BMI />
      <PricingCards />
      <Blog />
      <CallToAction2 />
    </main>
  );
}

export default Home;
