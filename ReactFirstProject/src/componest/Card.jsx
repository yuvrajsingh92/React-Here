import { FiBookmark, FiMapPin } from "react-icons/fi";

const Card = ({ company, posted, title, tags, salary, location }) => {
  return (
    <article className="job-card">
      <div className="job-card-top">
        <div className="company-logo">{company.charAt(0)}</div>
        <button type="button" className="save-btn">
          <FiBookmark /> Save
        </button>
      </div>

      <div className="job-info">
        <div className="company-name">
          {company} <span>{posted}</span>
        </div>
        <h2>{title}</h2>

        <div className="job-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="job-card-bottom">
        <div>
          <div className="salary">{salary}</div>
          <div className="location">
            <FiMapPin /> {location}
          </div>
        </div>

        <button type="button" className="apply-btn">
          Apply
        </button>
      </div>
    </article>
  );
};

export default Card;
