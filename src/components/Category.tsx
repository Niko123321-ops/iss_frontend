import React, {useState} from "react";
import axios from "axios";

const Category = ({categoryData}:{categoryData:any}) => {
    return (
        <>
            <div className="col" style={{padding: 5}}>
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5>{categoryData.title}</h5>
                        <p className="card-text">{categoryData.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <a href = {"posts/"+categoryData.id}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;