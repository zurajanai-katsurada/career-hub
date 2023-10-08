import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utilitiy/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();

  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };

  return (
    <div>
      <h1 className="text-center text-3xl mt-12">Job Details</h1>
      <div className="grid gap-4 md:grid-cols-4 mt-32">
        <div className="md:col-span-3">
          <p className="text-xl">
            <span className="font-extrabold">Job Description</span>:{" "}
            {job.job_description}
          </p>
          <p className="text-xl mt-6">
            <span className="font-extrabold">Job Responsibility</span>:{" "}
            {job.job_responsibility}
          </p>
          <p className="text-xl mt-6">
            <span className="font-extrabold">Educational Requirements</span>:{" "}
            {job.educational_requirements}
          </p>
          <p className="text-xl mt-6">
            <span className="font-extrabold">Experiences</span>:{" "}
            {job.experiences}
          </p>
        </div>
        <div className="border px-4">
          <p className="text-lg ">
            Boro vai MAALTO haiben beshi tension loiyen na chokh bondho kori
            apply korielan
            <button onClick={handleApplyJob} className="btn btn-primary w-full">
              Apply Now
            </button>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
