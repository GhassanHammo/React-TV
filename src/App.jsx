/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 *
 *
 */

import { useState } from "react";
import { tvShows } from "./shows/data";
import "./episodes/episodes.css";
import "./shows/shows.css";
import EpisodeDetails from "./episodes/EpisodeDetails";
import EpisodeList from "./episodes/EpisodeList";
import ShowSelection from "./shows/ShowSelection";

// export default function App() {
function App() {
  // const [tvShowsInfo, setStvShowsInfo] = useState(tvShows);
  // console.log(tvShowsInfo);
  // return (
  //   <>
  //     <header>
  //       <p>React TV</p>
  //     </header>
  //     <main>
  //       <h1>{tvShows.name}</h1>
  //       <div className="displayAll">
  //         <div className="main">
  //           <div className="show-details">
  //             <ShowSelection shows={tvShows} setShows={setStvShowsInfo} />
  //           </div>
  //         </div>
  //       </div>
  //     </main>
 
  const [tvShowsInfo, setStvShowsInfo] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(tvShows[0]); // default to first show
  const [selectedEpisode, setSelectedEpisode] = useState(null);
console.log(tvShowsInfo);
  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <div className="displayAll">
          <div className="main">
            <div className="show-details">
              <ShowSelection
                shows={tvShowsInfo}
                setShows={setStvShowsInfo}
                setSelectedShow={setSelectedShow}
              />
              {selectedShow && (
                <EpisodeList
                  name={selectedShow.title}
                  episodes={selectedShow.episodes}
                  selectedEpisode={selectedEpisode}
                  setSelectedEpisode={setSelectedEpisode}
                />
                )}
                {selectedEpisode && (
  <EpisodeDetails episode={selectedEpisode} />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
