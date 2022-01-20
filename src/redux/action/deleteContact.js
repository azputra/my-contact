import axios from "axios";
import Swal from "sweetalert2";
import getAllContact from "./getAllContact";

const deleteContact = (id) => {
    return function (dispatch) {
        axios({
            url: `http://localhost:3001/contacts/${id}`,
            method: "delete"
        })
        .then(() => {
            Swal.fire({
                position:"top-end",
                icon:"success",
                title:`Your contact has been deleted.`,
                showConfirmButton: false,
                timer: 1000
            })
            dispatch(getAllContact())
        }).catch((err) => {
            Swal.fire({
                positon:'top-end',
                icon: 'error',
                title: `${err.message} ${err.status}`,
                showConfirmButton:false,
                timer: 1000
            })
        });
    }
}

export default deleteContact;