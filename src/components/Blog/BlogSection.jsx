import React from 'react'
import BlogCard from './BlogCard'

const BlogSection = () => {
    const blogData = [
        {
          image: "/assets/img/blog/single_blog_1.png",
          date: "15",
          title: "Google inks pact for new 35-storey office",
          description: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
          category: "Travel,Lifestyle",
          comments:  "03 Comments"
        },
        {
          image: "/assets/img/blog/single_blog_2.png",
          date: "20",
          title: "New Tech Trends for 2024",
          description: "The technology landscape is evolving fast. This year, there will be a surge in AI-driven solutions that will transform industries.",
          category: "Travel,Lifestyle",
          comments:  "03 Comments"
        },
        {
          image: "/assets/img/blog/single_blog_3.png",
          date: "20",
          title: "New Tech Trends for 2024",
          description: "The technology landscape is evolving fast. This year, there will be a surge in AI-driven solutions that will transform industries.",
          category: "Travel,Lifestyle",
          comments:  "03 Comments"
        },
        {
          image: "/assets/img/blog/single_blog_4.png",
          date: "20",
          title: "New Tech Trends for 2024",
          description: "The technology landscape is evolving fast. This year, there will be a surge in AI-driven solutions that will transform industries.",
          category: "Travel,Lifestyle",
          comments:  "03 Comments"
        },
        {
          image: "/assets/img/blog/single_blog_5.png",
          date: "20",
          title: "New Tech Trends for 2024",
          description: "The technology landscape is evolving fast. This year, there will be a surge in AI-driven solutions that will transform industries.",
          category: "Travel,Lifestyle",
          comments:  "03 Comments"
        },]

  return (
    <div className='p-4 md:p-10 py-20 flex flex-col gap-7 md:gap-14 pb-24'>
        {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              category={blog.category}
              comments={blog.comments}
            />
  
        ))}
    </div>
  )
}

export default BlogSection