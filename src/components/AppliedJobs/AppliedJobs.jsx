import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilitiy/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();

    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));

      const jobsApplied = [];

      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);

        if (job) {
          jobsApplied.push(job);
        }
      }

      setAppliedJobs(jobsApplied);

      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Jobs I applied for: {appliedJobs.length}</h2>
    </div>
  );
};

export default AppliedJobs;
