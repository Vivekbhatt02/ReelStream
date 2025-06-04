import { motion } from "framer-motion";
import { FaHeart, FaCommentDots, FaShare } from "react-icons/fa";
import useVideoStats from "../hooks/useVideoStats";

// Fullscreen video component with overlay actions.

export default function VideoPlayer({ video, onMoreInfo }) {
  const { stats, toggleLike, incrementComments } = useVideoStats(video.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <video
        src={video.url}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xl font-semibold">{video.creator}</h2>
          </div>

          <div className="flex space-x-4">
            <ActionButton
              icon={<FaHeart color={stats.liked ? "red" : "white"} />}
              label={stats.likes}
              onClick={toggleLike}
            />
            <ActionButton
              icon={<FaCommentDots />}
              label={stats.comments}
              onClick={incrementComments}
            />
            <ActionButton icon={<FaShare />} label="Share" />
            <button
              onClick={onMoreInfo}
              className="border px-3 py-1 rounded text-white text-sm border-white hover:bg-white hover:text-black transition"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ActionButton({ icon, label, onClick }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center text-white">
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}
