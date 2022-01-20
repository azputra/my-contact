import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"

import detailContact from "../redux/action/getDetailContact";

export default function DetailContact(props) {
    const dispatch = useDispatch()
    const params = useParams()

    const contact = useSelector(state=>state.contactReducer.detailContact)

    useEffect(() => {
        dispatch(detailContact(params.id))
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="card shadow-sm rounded mt-3 width-detail">
                        <div className="card-body">
                            <h5 className="card-title">{contact.name}</h5>
                            <p className="card-text">{contact.email}</p>
                            <p className="card-text">{contact.phonenumber}</p>
                            <p className="card-text">{contact.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}