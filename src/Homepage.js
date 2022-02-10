import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Homepage = () => {
    const [blogs, setBlogs] = useState(null);

const [name, setName] = useState('Mario');

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json()
    })
}, []);
   

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = 'Alle blogs' handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mike')} title = 'Mike"s blogs' handleDelete={handleDelete} />
            <button onClick={() => setName('Luigi')}>Change Name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Homepage;