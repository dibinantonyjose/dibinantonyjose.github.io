import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
const modules = import.meta.glob("../assets/blogs/*.mdx");

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    const blogData = await Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const module = await resolver();
        return { path, ...module };
      })
    );
    setBlogs(blogData);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <section className="blog-page">
      {blogs.map((blog) => (
        <div key={blog.path} className="blog-list">
          <p className="blog-meta blog-date">{blog.metaData?.date}</p>
          <Link
            to={blog.path.replace("../assets/blogs/", "").replace(".mdx", "")}
          >
            <h3 className="link-class">{blog.metaData?.title}</h3>
          </Link>
          <p className="blog-meta">{blog.metaData?.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Blogs;
