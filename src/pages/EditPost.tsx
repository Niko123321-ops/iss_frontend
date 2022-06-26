import React, { SyntheticEvent, useEffect, useState } from 'react';
import {Navigate, useParams} from 'react-router-dom';
import axios from 'axios';

const styleTextArea = {
    height:"100%"
}

const EditPost = () => {

    return (
        <></>
    )
    /*const[postData,setPosts] = useState([]);
    const[error, setError] = useState('');
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[redirect, setRedirect] = useState(false);
    const { id } = useParams();

    const loadPosts = async () => {
        const res = await axios.get('http://localhost:3001/post/' + id, {withCredentials: true});
        if (res.status == 200){
            setPosts(res.data);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            title,
            content
        }

        const res = await axios.post('http://localhost:3001/post/update' + id, data, { withCredentials: true });

        if(res.status == 201){
            setRedirect(true);
        }

    }


    if(redirect && postData.s){
        return <Navigate to='/' />
    }

    return (
        <>
            <h2>{error}</h2>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Title"
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
    )*/
}

export default EditPost;