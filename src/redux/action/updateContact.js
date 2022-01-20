import axios from "axios";
import Swal from "sweetalert2";
import getAllContact from "./getAllContact";

const updateContact = ({user}, id) => {
    return function (dispatch) {
        axios({
            url: `http://localhost:3001/contacts/${id}`,
            method: "put",
            data: {
                name: user.name,
                email: user.email,
                phonenumber: user.phone,
                category: user.category
            }
        })
        .then(({data}) => {
            Swal.fire({
                position:"top-end",
                icon:"success",
                title:`Success Edit contact ${data.name}`,
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

export default updateContact