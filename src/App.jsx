import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import videos from "./data/videos";
import VideoPlayer from "./components/VideoPlayer";
import VideoDrawer from "./components/VideoDrawer";

export default function App() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle vertical scroll to switch videos
  const handleScroll = (e) => {
    const direction = e.deltaY;
    if (direction > 0 && activeVideoIndex < videos.length - 1) {
      setActiveVideoIndex((i) => i + 1);
    } else if (direction < 0 && activeVideoIndex > 0) {
      setActiveVideoIndex((i) => i - 1);
    }
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden relative bg-black text-white"
      onWheel={handleScroll}
    >
      {videos.map((video, index) => (
        <AnimatePresence key={video.id}>
          {index === activeVideoIndex && (
            <VideoPlayer
              key={video.id}
              video={video}
              onMoreInfo={() => setIsDrawerOpen(true)}
            />
          )}
        </AnimatePresence>
      ))}

      <AnimatePresence>
        {isDrawerOpen && (
          <VideoDrawer
            video={videos[activeVideoIndex]}
            onClose={() => setIsDrawerOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}