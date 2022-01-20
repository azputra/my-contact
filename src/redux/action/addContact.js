import axios from "axios";
import getAllContact from "./getAllContact";
import Swal from "sweetalert2";

const addContact = ({user}) => {
    return function (dispatch) {
        axios({
            url: "http://localhost:3001/contacts",
            method: "post",
            data: {
                name: user.name,
                email:user.email,
                phonenumber: user.phone,
                category: user.category
            }
        })
        .then(({data}) => {
            Swal.fire({
                position:"top-end",
                icon:"success",
                title:`Success add contact ${data.name}`,
                showConfirmButton: false,
                timer: 1000
            })
            dispatch(getAllContact())
        }).catch((err) => {
            Swal.fire({
                position:"top-end",
                icon:"error",
                title:`${err.message} ${err.status}`,
                showConfirmButton: false,
                timer: 1000
            })
        });
    }
}

export default addContact