import React from 'react';
import HeroBanner from '../components/HeroBanner';
import RecentIssue from '../components/RecentIssue';

const issuePromise = fetch('http://localhost:3000/latest-issue')
.then(res=>res.json())
.then(data=>console.log(data))

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <RecentIssue issuePromise={issuePromise}></RecentIssue>
        </div>
    );
};

export default Home;