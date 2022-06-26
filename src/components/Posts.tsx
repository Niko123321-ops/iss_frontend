import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from "./Post";
import React from "react";
import {UserDto} from "../classes/user.dto";

const Posts = (id: any) => {
    const[posts,setPosts] = useState([]);
    const loadPosts = async () => {
        const res = await axios.get('http://localhost:3001/post/posts', {withCredentials: true});
        if (res.status == 200){
            setPosts(res.data);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    if(posts.length == 0) {
        return (
            <h1>Ni objav</h1>
        )
    }

    if(posts.length > 0) {
        return (
            <>
                {posts.map((post: any, i) => {
                    return <Post postData={post}  key={i} />
                })
                }
            </>
        );
    }

    return(
        <></>
    );

}

export default Posts;