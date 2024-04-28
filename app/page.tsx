import Navbar from "./components/Header/navbar";
import Landing from "./components/landing/page";
import Trusted from "./components/landingTrusted/page";
import Reason from "./components/reason/page";
import Fluency from "./components/fluency/page";
import Atlas from "./components/atlas/page";
import Review from "./components/reviewsUsers/page";
import StartLearning from "./components/startLearning/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto ">
        <Landing />
        <Trusted/>
        <Reason/>
        <Fluency/>
        <Atlas/>
        <Review/>
        <StartLearning/>
        <Footer/>
      </div>
    </>
  );
}
