import { useState, useEffect } from "react";

//  Simulates fetching and updating video stats (likes/comments).
 
export default function useVideoStats(videoId) {
  const initialStats = {
    1: { likes: 120, comments: 15, liked: false },
    2: { likes: 89, comments: 8, liked: false },
  };

  const [stats, setStats] = useState(initialStats[videoId]);

  useEffect(() => {
    setStats(initialStats[videoId]);
  }, [videoId]);

  const toggleLike = () => {
    setStats((prev) => ({
      ...prev,
      likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
      liked: !prev.liked,
    }));
  };

  const incrementComments = () => {
    setStats((prev) => ({
      ...prev,
      comments: prev.comments + 1,
    }));
  };

  return {
    stats,
    toggleLike,
    incrementComments,
  };
}
