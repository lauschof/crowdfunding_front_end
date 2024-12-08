import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import postLikeProject from "../api/post-like-project";
import postUnlikeProject from "../api/del-like-project";
import { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ projectData }) {
  const { auth } = useAuth();
  const [likeCount, setLikeCount] = useState(projectData.like_count || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      if (!liked) {
        await postLikeProject(projectData.id); // Like the project
        setLiked(true);
        setLikeCount(likeCount + 1);
      } else {
        await postUnlikeProject(projectData.id); // Unlike the project
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    } catch (error) {
      console.error("Error toggling like status:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="project-card">
      <Link to={`/projects/${projectData.id}`}>
        <img src={projectData.image} alt={projectData.title} />
        <h3>{projectData.title}</h3>
      </Link>
      {auth?.token && <p>{likeCount} Likes</p>} {/* Show likes only when logged in */}
      {auth?.token && (
        <button onClick={handleLike} className="like-button">
          {liked ? "♥" : "♡"}
        </button>
      )}
    </div>
  );
}

export default ProjectCard;