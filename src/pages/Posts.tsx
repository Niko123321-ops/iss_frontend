import React from "react";
import Top from '../components/Top';
import Posts from '../components/Posts';
import {useParams} from "react-router-dom";

const Home = () => {

    const { id } = useParams();

    return (
        <>

            <Top />
            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Posts id={id}/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;