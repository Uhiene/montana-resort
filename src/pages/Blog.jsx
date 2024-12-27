import React from "react";
import Hero from "../components/ReuseableComponents/Hero";
import BlogSection from "../components/Blog/BlogSection";

const Blog = () => {
  return (
    <div>
      <Hero backgroundImage="/assets/img/banner/bradcam.png" title="Blog" />
      <BlogSection />
    </div>
  );
};

export default Blog;
