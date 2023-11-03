import React from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  // fetching key from Redux store
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  // console.log(trailerVideo?.key);

  return (
    <div className="relative z-10 w-screen h-screen overflow-hidden">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
