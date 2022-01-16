import React, { Component } from 'react'
import {vod_ar} from "./vod_json"

class AppVod extends Component {
    render() {
        return (
            <div className='my-5'>
                <hr />
                <h1>My Movies List</h1>
                <br />
                <div className='row'>

                {/* ============================= */}

                {vod_ar.map((item,i) => {
                    return(
                        <div key={i} className="card my-4 mx-4" style={{width: "18rem"}}>
                            <img className="card-img-top" width="100" src={'/images/' + item.image} alt="image" />
                            <div className="card-body">
                                <div className="card-text">
                                    <h2>name {item.name}</h2>
                                    <h3>kind {item.kind}</h3>
                                    <h3>views {item.kind}</h3>
                                    <h3>genere {item.genere}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* =================== */}

                </div>
            </div>
        )
    }
}

export default AppVod
