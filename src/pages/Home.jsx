import React from "react";
import HeroBanner from "../components/HeroBanner";
import RecentIssue from "../components/RecentIssue";
import CategorySection from "../components/CategorySection";
import CounterSection from "../components/CounterSection";

const issuePromise = fetch("http://localhost:3000/latest-issue").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <title>CleanTrack || Home</title>
      <HeroBanner></HeroBanner>
      <CategorySection></CategorySection>
      <RecentIssue issuePromise={issuePromise}></RecentIssue>
      <CounterSection></CounterSection>
    </div>
  );
};

export default Home;
