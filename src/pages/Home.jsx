import React from "react";
import HeroBanner from "../components/HeroBanner";
import RecentIssue from "../components/RecentIssue";
import CategorySection from "../components/CategorySection";
import CounterSection from "../components/CounterSection";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/NewsLetter";

const issuePromise = fetch(
  "https://cleantrack-assignment-server.vercel.app/latest-issue"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <title>CleanTrack || Home</title>
      <HeroBanner></HeroBanner>
      <CategorySection></CategorySection>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <RecentIssue issuePromise={issuePromise}></RecentIssue>
      <CounterSection></CounterSection>
      <FAQ></FAQ>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
