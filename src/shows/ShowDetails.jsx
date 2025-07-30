import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show, setShowDetails }) {
  return (
    <div className="show-details">
      ;<h1>{show.Title}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowDetails(show)}
      >
        Click for more info
      </button>
    </div>
  );
}
