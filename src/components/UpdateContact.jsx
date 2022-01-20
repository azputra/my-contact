import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import getDetailContact from "../redux/action/getDetailContact";
import updateContact from "../redux/action/updateContact";

export default function UpdateContact(props) {
    const dispatch = useDispatch()
    const [updateName, setUpdateName] = useState("")
    const [updateEmail, setUpdateEmail] = useState("")
    const [updatePhone, setUpdatePhone] = useState("")
    const [updateCategory, setUpdateCategory] = useState("")

    const contact = useSelector(state=>state.contactReducer.detailContact)

    const getDetail = (id) => {
        dispatch(getDetailContact(id))
    }

    const resetForm = () => {
        setUpdateName("")
        setUpdateEmail("")
        setUpdatePhone("")
        setUpdateCategory("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateContact({
            user: {
                name: updateName,
                email: updateEmail,
                phone: updatePhone,
                category: updateCategory
            }
        }, contact.id))
        resetForm()
    }

    useEffect(() => {
        setUpdateName(contact.name)
        setUpdateEmail(contact.email)
        setUpdatePhone(contact.phonenumber)
        setUpdateCategory(contact.category)
    }, [contact])

    return(
        <>
            <button type="button" onClick={()=>getDetail(props.id)} data-toggle="tooltip" data-placement="top" title="Edit" className="btn btn-light rounded shadow" data-bs-toggle="modal" data-bs-target="#editContact"><i className="bi bi-pencil-square"></i></button>

            <div className="modal fade" id="editContact" tabIndex="-1" aria-labelledby="editContactLabel" aria-label="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editContactLabel">Edit Contact</h5>
                            <button onClick={()=>resetForm()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group m-2">
                                    <label htmlFor="name">Name</label>
                                    <input onChange={e=>setUpdateName(e.target.value)} value={updateName} type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group m-2">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <input onChange={e=>setUpdatePhone(e.target.value)} value={updatePhone} type="number" className="form-control" id="phonenumber" />
                                </div>
                                <div className="form-group m-2">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={e=>setUpdateEmail(e.target.value)} value={updateEmail} type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group m-2">
                                    <label htmlFor="category">Category</label>
                                    <select onChange={e=>setUpdateCategory(e.target.value)} value={updateCategory} name="category" id="category" className="form-control">
                                        <option value="friends">Friends</option>
                                        <option value="family">Family</option>
                                        <option value="work">Work</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={()=>resetForm()} data-bs-dismiss="modal" type="button">Close</button>
                                <button className="btn btn-primary" data-bs-dismiss="modal" type="submit">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}