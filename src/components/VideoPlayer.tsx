import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });

  useEffect(()=>{
    if(isInView && videoRef.current && !userPaused){
        videoRef.current.play();
        setIsPlaying(true);
    }
  },[isInView,userPaused])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setUserPaused(false)
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setUserPaused(true)
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progressPercentage =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressPercentage);
    }
  };

  return (
    <div
    ref={ref}
      className="video-container justify-self-center relative group w-full bg-transparent"
      onClick={togglePlayPause}
    >
      {/* Play/Pause Button */}
      <button
        className={`video-button absolute inset-0 flex items-center justify-center bg-black/[33%] text-white text-6xl transition-opacity duration-300 opacity-0
          ${isPlaying ? "touch:opacity-0" : "touch:opacity-100"}`}
      >
        <div className="flex justify-center items-center bg-black/[33%] p-5 w-20 h-20 md:w-28 md:h-28 rounded-full flex-shrink-0">
          {isPlaying ? (
            <img src="/homePage/pause-icon.svg" alt="pause icon" />
          ) : (
            <img
              src="/homePage/play-icon.svg"
              alt="play icon"
              className="block mx-auto pl-2"
            />
          )}
        </div>
      </button>

      {/* Video */}
      <video
        ref={videoRef}
        className="w-full"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="/homePage/GSIS-Company-Profile-Short.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Progress Bar */}
      <div className="bg-black/[33%] absolute bottom-0 left-0 w-full">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="h-1 bg-gradient-to-r from-PrimaryGradientClr1 to-PrimaryGradientClr2"
        />
      </div>
    </div>
  );
};

export default VideoSection;
