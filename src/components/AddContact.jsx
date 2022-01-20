import React, { useState } from "react";
import {useDispatch} from "react-redux";

import addContact from "../redux/action/addContact"

export default function AddContact() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [category, setCategory] = useState("family")

    const resetForm = () => {
        setName("")
        setEmail("")
        setPhone("")
        setCategory("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addContact({
            user:{
                name:name,
                phone:phone,
                email:email,
                category:category
            }
        }))
        resetForm()
    }

    return(
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#formAddContact">Add Contact</button>
            <div className="modal fade" id="formAddContact" tabIndex="-1" aria-labelledby="addContactLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="addContactLabel">Add Contact</h3>
                            <button className="btn-close" onClick={()=>resetForm()} type="button" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" id="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone number</label>
                                    <input type="number" onChange={(e)=>setPhone(e.target.value)} value={phone} className="form-control" id="phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" id="email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <select name="category" id="category" onChange={(e)=>setCategory(e.target.value)} value={category} className="form-control">
                                        <option value="family">Family</option>
                                        <option value="friends">Friends</option>
                                        <option value="work">Work</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={()=>resetForm()} data-bs-dismiss="modal">Close</button>
                                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}