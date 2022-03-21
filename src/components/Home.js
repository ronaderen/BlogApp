
import { useState,useEffect } from "react";
import "../style.css";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
    const {data : blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
    return ( 
    <div className="home">
        { error && <div> {error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="Blogs !" />}{/*handleDelete={handleDelete}*/}
        
    </div> 
    );
}

export default Home;