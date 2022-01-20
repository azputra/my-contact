import axios from "axios";
import Swal from "sweetalert2";

const allContact = () => {
    return function (dispatch) {
        dispatch({type:"LOADING", payload:true})
        axios({
            url: "http://localhost:3001/contacts",
            method:"get"
        })
        .then(({data}) => {
            dispatch({type:"LOADING", payload:false})
            dispatch({type:"ALL_CONTACTS", payload:data})
        }).catch((err) => {
            dispatch({type:"LOADING", payload:false})
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

export default allContact