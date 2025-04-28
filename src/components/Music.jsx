import React, { useRef, useState, useEffect } from "react";
import song1 from "../assets/music/song1.mp3";
import song2 from "../assets/music/song2.mp3";
import song3 from "../assets/music/song3.mp3";
import song4 from "../assets/music/song4.mp3";
import song5 from "../assets/music/song5.mp3";
import song6 from "../assets/music/song6.mp3";
import { FaPlay, FaPause, FaStepForward } from "react-icons/fa";

const Music = () => {
  const originalAudioFiles = [song1, song2, song3, song4, song5, song6];
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const shuffledAudioFiles = originalAudioFiles.sort(
      () => Math.random() - 0.5
    );
    setAudioFiles(shuffledAudioFiles);
    const randomTrack = Math.floor(Math.random() * shuffledAudioFiles.length);
    setCurrentTrack(randomTrack);
    // eslint-disable-next-line
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      try {
        audioRef.current.play();
      } catch (error) {
        console.error("Playing: ", error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    nextTrack();
  };

  const nextTrack = () => {
    const nextTrackIndex = (currentTrack + 1) % audioFiles.length;
    setCurrentTrack(nextTrackIndex);
    setIsPlaying(true);
    audioRef.current.src = audioFiles[nextTrackIndex];
    audioRef.current.play();
  };

  const handleCanPlay = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex gap-2 ">
      <audio
        ref={audioRef}
        src={audioFiles[currentTrack]}
        onEnded={handleEnded}
        onCanPlay={handleCanPlay}
        preload="auto"
      />
      <button
        onClick={handlePlayPause}
        className="p-3 bg-color-4 dark:bg-color-1 rounded-full text-color-1 dark:text-color-4"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button
        onClick={nextTrack}
        className="p-3 bg-color-4 dark:bg-color-1 rounded-full text-color-1 dark:text-color-4"
      >
        <FaStepForward />
      </button>
    </div>
  );
};

export default Music;
