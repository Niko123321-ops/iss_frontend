import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from "./Post";
import React from "react";
import Category from "./Category";

const Categories = () => {
    const[categories,setCategories] = useState([]);
    const loadCategories = async () => {
        const res = await axios.get('http://localhost:3001/category', {withCredentials: true});
        if (res.status == 200){
            setCategories(res.data);
        }
    }

    useEffect(() => {
        loadCategories();
    }, []);

    if(categories.length == 0) {
        return (
            <h1>Ni objav</h1>
        )
    }

    if(categories.length > 0) {
        return (
            <>
                {categories.map((category: any, i) => {
                    return <Category categoryData={category}  key={i} />
                })
                }
            </>
        );
    }

    return(
        <></>
    );

}

export default Categories;