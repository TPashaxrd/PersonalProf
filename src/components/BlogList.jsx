import React from 'react';
import BlogCard from './BlogCard';

const blogs = [
  {
    id: 1,
    title: 'Ceo OF Github',
    description: 'Discover the beauty of travel through amazing destinations.',
    image: 'https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg',
  },
  {
    id: 2,
    title: 'About New Project',
    description: 'I created X Project with my team.',
    image: 'https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg',
  },
  {
    id: 3,
    title: 'Healthy Living',
    description: 'Tips and tricks for a healthier and happier life.',
    image: 'https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg',
  },
  {
    id: 4,
    title: "My WebBrowser Project",
    description: "",
    image: "https://www.experlogix.com/app/uploads/2023/10/looking-at-the-business-value-of-low-no-code-software.webp",
    link: "https://google.com"
  }
];

function BlogList() {
  return (
    <section className="blog-list">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          href={blog.link}
        />
      ))}
    </section>
  );
}

export default BlogList;