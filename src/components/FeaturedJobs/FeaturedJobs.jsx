import { useEffect, useState } from "react";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs : {jobs}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
    </div>
  );
};

export default FeaturedJobs;
