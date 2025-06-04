import { motion } from "framer-motion";

// Sliding drawer showing video metadata and thumbnail.
export default function VideoDrawer({ video, onClose }) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="absolute bottom-0 left-0 w-full bg-white text-black rounded-t-2xl p-4 z-50 shadow-lg"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{video.title}</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black"
        >
          Close
        </button>
      </div>
      <p className="mb-4">{video.description}</p>
      <img
        src={video.thumbnail}
        alt="Video thumbnail"
        className="w-full rounded"
      />
    </motion.div>
  );
}