import React, {useState} from "react";
import {UserDto} from "../classes/user.dto";
import axios from "axios";

interface PostProps{
    postData: any
    hideImage?: boolean
    hideControls?: boolean;
}

const Post = ({postData, hideControls, hideImage}: PostProps) => {
/*
    const [user,setUser] = useState<UserDto>(new UserDto(0, '', ''));

    const currentUser = async () => {
        try{
            const res = await axios.get('http://localhost:3001/users/profile', {withCredentials: true});

            if(res.status == 200){
                console.log(res.data);
                setUser(res.data);
            }
        }
        catch (e){

        }
    }

    async function clickDelete(){
        const res = await axios.delete('http://localhost:3001/post/'+postData.id, {withCredentials: true});
        window.location.reload();
    }
 //
    if (postData.userId == user.id){ Ne vem zakva to ne dela in se mi ne da iskati
        return (
            <>
                <div className="col" style={{padding: 5}}>
                    <div className="card shadow-sm">
                        {!hideImage &&<svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                           preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" />
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>}
                        <div className="card-body">
                            <h5>{postData.title}</h5>
                            <p className="card-text">{postData.content}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    {!hideControls &&<a href = {"thread/"+postData.id}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>}
                                    <a href = {"thread/"+postData.id}><button type="button" className="btn btn-sm btn-outline-secondary">Edit</button></a>
                                    <button type="button" onClick={clickDelete} className="btn btn-sm btn-outline-secondary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
*/
    return (
        <>
            <div className="col" style={{padding: 5}}>
                <div className="card shadow-sm">
                    {!hideImage &&<svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c" />
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>}
                    <div className="card-body">
                        <h5>{postData.title}</h5>
                        <p className="card-text">{postData.content}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                {!hideControls &&<a href = {"../thread/"+postData.id}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Post;