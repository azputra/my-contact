import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import CardContact from "../components/CardContact";

// action
import getAllContact from "../redux/action/getAllContact"

export default function ContactAll() {
    const dispatch = useDispatch()

    const contacts = useSelector(state=>state.contactReducer.allContact)
    const loading = useSelector(state=>state.loadingReducer.loading)
    useEffect(() => {
        dispatch(getAllContact())
    }, [])
    return(
        <>
            <div className="container mt-2">
                <div className="row">
                    {
                        loading ? 
                        <div className="d-flex justify-content-center m-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading . . .</span>
                            </div>
                        </div>
                        :
                        contacts.length === 0 ? 
                        <div className="text-center m-2 p-4">Data Not Found</div>
                        :
                        contacts.map(contact=>{
                            return(
                                <div className="col-md-3 p-1">
                                    <CardContact contact={contact}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}