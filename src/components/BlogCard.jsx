import React from 'react';

function BlogCard({ title, description, image, link }) {

  const links = () => {
    window.location.href = "goog"
  }

  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button><a href={link}>Read More</a></button>
    </div>
  );
}

export default BlogCard;