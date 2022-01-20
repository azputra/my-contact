import React, {useEffect} from "react";
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import getAllContact from "../redux/action/getAllContact"
import CardContact from "../components/CardContact"

export default function CategoryContact() {
    const dispatch = useDispatch()
    const params = useParams()

    const contacts = useSelector(state=>state.contactReducer.allContact)
    const categoryContact = useSelector(state=>state.contactReducer.categoryContact)
    const loading = useSelector(state=>state.loadingReducer.loading)

    useEffect(() => {
        dispatch(getAllContact())
    }, [])

    useEffect(() => {
        const regex = new RegExp(params.category, "i")
        const myContact = contacts.filter(contact=>{
            return regex.test(contact.category)
        })
        dispatch({type:"CATEGORY_CONTACTS", payload:myContact})
    }, [contacts, params])

    return(
        <>
        <div className="container mt-3">
            <div className="row">
            {
                loading? 
                <div className="d-flex justify-content-center m-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading . . .</span>
                    </div>
                </div>
                :
                categoryContact.length === 0 ?
                <div className="text-center m-2 p-4">Data Not Found</div>
                :
                categoryContact.map((contact, i) =>{
                    return(
                        <div className="col-md-3 p-1">
                            <CardContact contact={contact} key={i}/>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}