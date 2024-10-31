import React from 'react'
import img1 from '../Images/world-.jpg'
import img2 from "../Images/world-.jpg"
import img3 from "../Images/world-.jpg"
import BlogCard from './BlogCard';

const BlogData = [
  {
    img:img1,
   title:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi numquam necessitatibus asperiores consequuntur vero aut iste ducimus, adipisci eveniet! Consequuntur officiis velit ipsam!",
description :" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dignissimos dolores vel itaque deleniti suscipit et, at ipsa magnam alias excepturi ex facere dolorem necessitatibus ipsam quisquam quae, rerum ratione est voluptates!",
date:"Aprile 22, 2024",
writer:"jhone"

  },
  {
    img:img2,
   title:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi numquam necessitatibus asperiores consequuntur vero aut iste ducimus, adipisci eveniet! Consequuntur officiis velit ipsam!",
description :" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dignissimos dolores vel itaque deleniti suscipit et, at ipsa magnam alias excepturi ex facere dolorem necessitatibus ipsam quisquam quae, rerum ratione est voluptates!",
date:"Aprile 22, 2024",
writer:"jhone"

  },
  {
    img:img3,
   title:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi numquam necessitatibus asperiores consequuntur vero aut iste ducimus, adipisci eveniet! Consequuntur officiis velit ipsam!",
description :" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dignissimos dolores vel itaque deleniti suscipit et, at ipsa magnam alias excepturi ex facere dolorem necessitatibus ipsam quisquam quae, rerum ratione est voluptates!",
date:"Aprile 22, 2024",
writer:"jhone"

  },
  
];

const Blogsection = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className='container py-8'>
        <h1 className='mb-8 border-l-8 pl-2 text-center text-3xl font-bold'>
          Our Latest Blogs
        </h1>
        <div className='grid  cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {BlogData.map((blogs) =>(
            <BlogCard
            key={blogs.title}
            img={blogs.img}
            tile={blogs.title}
            description={blogs.description}
            date={blogs.date}
            writer={blogs.writer}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogsection;