"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Download, Volume2, VolumeX, Radio } from "lucide-react";
import formatTime from "@/lib/timeFormat";

const AudioSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAutoplayed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Attempt to play only if haven't autoplit yet
            if (audioRef.current && !hasAutoplayed.current) {
              const playPromise = audioRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                    hasAutoplayed.current = true;
                  })
                  .catch((error) => {
                    console.log(
                      "Autoplay blocked by browser. User interaction required.",
                      error,
                    );
                  });
              }
            }
          } else {
            // Pause when scrolling away
            if (audioRef.current && !audioRef.current.paused) {
              audioRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.2 }, // Lower threshold for better mobile detection
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        hasAutoplayed.current = true; // Manual play also counts as having autoplit
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clickedProgress = x / rect.width;
      audioRef.current.currentTime =
        clickedProgress * audioRef.current.duration;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="audio-interview"
      className="pb-12 md:pb-28 bg-primaryColor"
    >
      <div className="container mx-auto px-4 md:px-[130px]">
        <div className=" rounded-[32px] md:rounded-[40px] p-6 md:p-16 shadow-2xl border border-accentColor/10 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          {/* Decorative Background Glows */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accentColor/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accentColor/5 rounded-full blur-3xl" />

          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-full aspect-square max-w-[240px] md:max-w-[320px] rounded-[24px] md:rounded-[32px] bg-accentColor flex items-center justify-center shadow-xl overflow-hidden group">
              {/* Animated visuals inside the square */}
              <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent" />

              <div className="flex flex-col items-center gap-6 z-10">
                <div
                  className={`p-6 md:p-8 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 transform transition-all duration-700 ${isPlaying ? "scale-110 shadow-2xl" : "scale-100"}`}
                >
                  <Radio className="size-12 md:size-16 text-white stroke-[1.5]" />
                </div>
                <div className="text-white/80 font-medium tracking-widest text-xs uppercase">
                  {isPlaying ? "Now Playing" : "Listen Now"}
                </div>
              </div>

              {/* Pulse effect when playing */}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full border-4 border-white/20 rounded-[32px] animate-ping opacity-20" />
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-7/12 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentColor/10 text-accentColor text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-accentColor opacity-75 ${isPlaying ? "" : "hidden"}`}
                  ></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accentColor"></span>
                </span>
                Radio Interview
              </div>
              <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                Tune into the Conversation
              </h2>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                Paul Tarsleh shares deep spiritual insights and the profound
                mystery behind his latest literary works in this featured radio
                broadcast.
              </p>
            </div>

            <div className="bg-primaryColor/30 p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-accentColor/5 shadow-inner">
              <audio
                ref={audioRef}
                src="/audio/tarsleh_radio.mpeg"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
              />

              <div className="flex items-center gap-6">
                <button
                  onClick={togglePlay}
                  className="size-14 md:size-16 rounded-xl md:rounded-2xl bg-accentColor text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-accentColor/40"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="size-6 md:size-7 fill-current" />
                  ) : (
                    <Play className="size-6 md:size-7 fill-current ml-1" />
                  )}
                </button>

                <div className="grow space-y-2">
                  <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                    <span>
                      {audioRef.current
                        ? formatTime(audioRef.current.currentTime)
                        : "0:00"}
                    </span>
                    <span>
                      {audioRef.current && !isNaN(audioRef.current.duration)
                        ? formatTime(audioRef.current.duration)
                        : "0:00"}
                    </span>
                  </div>
                  <div
                    className="h-3 w-full bg-accentColor/10 rounded-full cursor-pointer group relative"
                    onClick={handleProgressBarClick}
                  >
                    <div
                      className="h-full bg-accentColor rounded-full transition-all duration-100 ease-linear relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-accentColor rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={toggleMute}
                  className="text-gray-400 hover:text-accentColor transition-colors p-2"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="size-6" />
                  ) : (
                    <Volume2 className="size-6" />
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 md:pt-8 border-t border-accentColor/5 mt-6 gap-4">
                <a
                  href="/audio/tarsleh_radio.mpeg"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-secondaryColor text-white font-semibold text-sm hover:bg-secondaryColor/90 transition-colors shadow-md"
                >
                  <Download className="size-4" />
                  Download Episode
                </a>
                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                  <span className="text-xs text-gray-400 font-medium">
                    Format: High Quality MP3
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    Size: 15.1 MB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
