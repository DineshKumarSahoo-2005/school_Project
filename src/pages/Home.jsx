import Hero from "../components/hero";
import Features from "../components/features";
import HowItWorks from "../components/howItWorks";

export default function Home({ isLoggedIn,setShowRegister, setRedirectAfterLogin }) {
  return (
    <>
      <Hero
      isLoggedIn={isLoggedIn}
        setShowRegister={setShowRegister}
        setRedirectAfterLogin={setRedirectAfterLogin}
      />
      <Features />
      <HowItWorks />
    </>
  );
}
