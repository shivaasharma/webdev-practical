import React, { useState } from 'react';

function LikeButton() {

  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <button 
      onClick={handleClick} 
      className="like-button"
      aria-label={liked ? "Unlike" : "Like"}
    >
      {liked ? '❤️' : '🤍'}
    </button>
  );
}

export default LikeButton;
