import Card from "./componest/Card";

const jobs = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    posted: "2 days ago",
    title: "Frontend Developer",
    tags: ["Full-Time", "Mid Level"],
    salary: "$95/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    posted: "1 day ago",
    title: "Software Engineer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Apple",
    posted: "3 days ago",
    title: "Product Designer",
    tags: ["Full-Time", "Mid Level"],
    salary: "$105/hr",
    location: "Bangalore, India",
  },
  {
    id: 5,
    company: "Meta",
    posted: "6 days ago",
    title: "React Developer",
    tags: ["Full-Time", "Junior Level"],
    salary: "$85/hr",
    location: "Mumbai, India",
  },
  {
    id: 6,
    company: "Netflix",
    posted: "4 days ago",
    title: "UX Researcher",
    tags: ["Part-Time", "Mid Level"],
    salary: "$100/hr",
    location: "Pune, India",
  },
  {
    id: 7,
    company: "Adobe",
    posted: "2 days ago",
    title: "UI Designer",
    tags: ["Full-Time", "Junior Level"],
    salary: "$75/hr",
    location: "Noida, India",
  },
  {
    id: 8,
    company: "Spotify",
    posted: "7 days ago",
    title: "Frontend Engineer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$115/hr",
    location: "Bangalore, India",
  },
  {
    id: 9,
    company: "Tesla",
    posted: "3 days ago",
    title: "Product Manager",
    tags: ["Full-Time", "Senior Level"],
    salary: "$125/hr",
    location: "Pune, India",
  },
  {
    id: 10,
    company: "IBM",
    posted: "1 day ago",
    title: "Backend Developer",
    tags: ["Full-Time", "Mid Level"],
    salary: "$90/hr",
    location: "Hyderabad, India",
  },
];

const App = () => {
  return (
    <div className="job-container">
      {jobs.map((job) => (
        <Card
          key={job.id}
          company={job.company}
          posted={job.posted}
          title={job.title}
          tags={job.tags}
          salary={job.salary}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default App;
