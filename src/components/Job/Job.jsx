import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#9873FF]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#9873FF]">
            {job_type}
          </button>
        </div>
        <div className="flex mt-4 mb-4">
          <h2 className="flex mr-6">
            <MdLocationOn className="text-2xl mr-2"></MdLocationOn>
            {location}
          </h2>
          <h2 className="flex">
            <HiOutlineCurrencyDollar className="text-2xl mr-2"></HiOutlineCurrencyDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
