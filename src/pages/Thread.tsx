import React, {SyntheticEvent, useEffect, useState} from "react";
import {Navigate, Params, useParams} from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";

const styleTextArea = {
    height:"100%"
}

const Thread = () => {

    const[postData,setPosts] = useState([]);
    const[replies,setReplies] = useState([]);
    const { id } = useParams();
    const[error, setError] = useState('');
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[redirect, setRedirect] = useState(false);
    const[categories, setCategories] = useState([]);
    const[categorySelected, setCategorySelected] = useState(1);

    const loadPosts = async () => {
        const res = await axios.get('http://localhost:3001/post/' + id, {withCredentials: true});
        if (res.status == 200){
            setPosts(res.data);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    const loadReplies = async () => {
        const res = await axios.get('http://localhost:3001/post/replies/' + id, {withCredentials: true});
        if (res.status == 200){
            setReplies(res.data);
        }
    }

    useEffect(() => {
        loadReplies();
    }, []);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            title,
            content,
            "reply_id":id
        }

        const res = await axios.post('http://localhost:3001/post/reply', data, { withCredentials: true });

        if(res.status == 201){
            setRedirect(true);
        }

    }

    if(redirect){
        window.location.reload();
        //return <Navigate to={'/thread/' + id}/>
    }

    if(postData && replies.length > 0) {
        return (
            <>
                <Post postData={postData} hideControls={true}/>

                {replies.map((reply: any, i) => {
                    return <Post postData={reply} key={i} hideControls={true} hideImage={true}/>
                })
                }

                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="naslov"
                               onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="floatingInput">Naslov</label>
                    </div>
                    <div className="form-floating">

          <textarea className="form-control" id="floatingContent" rows={8} style={styleTextArea} placeholder="Vnesi vsebino" onChange={(e)=>setContent(e.target.value)}>
          </textarea>

                        <label htmlFor="floatingContent">Vsebina</label>

                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </>
        );
    }

    if(postData) {
        return (
            <>
                <Post postData={postData}  hideControls={true}/>

                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="naslov"
                               onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="floatingInput">Naslov</label>
                    </div>
                    <div className="form-floating">

          <textarea className="form-control" id="floatingContent" rows={8} style={styleTextArea} placeholder="Vnesi vsebino" onChange={(e)=>setContent(e.target.value)}>
          </textarea>

                        <label htmlFor="floatingContent">Vsebina</label>

                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </>
        );
    }

    return (
        <>

        </>
    );
}

export default Thread;