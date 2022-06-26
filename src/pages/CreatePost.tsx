import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const styleTextArea = {
    height:"100%"
}

const CreatePost = () => {
    const[error, setError] = useState('');
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[redirect, setRedirect] = useState(false);
    const[categories, setCategories] = useState([]);
    const[categorySelected, setCategorySelected] = useState(1);

    const getCategories = async () => {
        const req = await axios.get('http://localhost:3001/category', { withCredentials: true })
        setCategories(req.data);
    }

    useEffect(() => {
        getCategories();
    }, []);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            title,
            content,
            "category_id":categorySelected
        }

        const res = await axios.post('http://localhost:3001/post/create', data, { withCredentials: true });

        if(res.status == 201){
            setRedirect(true);
        }

    }


    if(redirect){
        return <Navigate to='/' />
    }

    return (
        <>
            <h2>{error}</h2>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="naslov"
                           onChange={(e) => setTitle(e.target.value)}/>
                    <label htmlFor="floatingInput">Naslov</label>
                </div>
                <div className="form-floating">

                    <select className="form-control" id="floatingSelect"
                            onChange={(e:any) => setCategorySelected(e.target.value)}>
                        {categories.map((category:any, i) => {
                            return (<option value={category.id} key={category.id}> {category.title} </option>);
                        })}
                    </select>

                    <label htmlFor="floatingSelect">Izberi predmet</label>
                </div>
                <div className="form-floating">

          <textarea className="form-control" id="floatingContent" rows={8} style={styleTextArea} placeholder="Vnesi vsebino" onChange={(e)=>setContent(e.target.value)}>
          </textarea>

                    <label htmlFor="floatingContent">Vsebina</label>

                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreatePost;