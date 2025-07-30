import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    //  <nav className="shows">
    //   {/* <nav className="individual-show" key={tvShows.name}> */}
    //     <h1>{setTvShows}</h1>
    // </nav>
    <div>
      <h2>Shows</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id} onClick={() => setSelectedShow(show)}>
            {show.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
