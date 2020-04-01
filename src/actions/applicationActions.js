import axios from 'axios'
import Swal from 'sweetalert2'

export const getApplications = (data) => {
    return {type:'GET_APPLICATIONS',payload:data}
}

export const startGetApplications = () => {
    return(dispatch)=>{
        axios.get('http://localhost:3095/users/application-forms')
        .then((response)=>{
            dispatch(getApplications(response.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const startAddApplication = (obj) => {
    return(dispatch)=>{
        axios.post('http://localhost:3095/users/application-form',obj.formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.errors){
                Swal.fire(
                    'error',
                     response.data.message,
                    'error'
                )
            }
            else{
            Swal.fire(
                'Applied',
                'Job Application succeessfullly applied',
                'success'
            )
            return obj.redirect()
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const updateShortlist = (data) => {
    return {type:'UPDATE_SHORTLIST',payload:data}

}

export const startUpdateShortlist = (obj) =>{
    return(dispatch)=>{
        axios.put(`http://localhost:3095/users/application-form/${obj.id}`,obj.formData)
        .then((response)=>{
            dispatch(updateShortlist(response.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const updateReject = (data) => {
    return {type:'UPDATE_REJECT',payload:data}

}

export const startUpdateReject = (obj) =>{
    return(dispatch)=>{
        axios.put(`http://localhost:3095/users/application-form/${obj.id}`,obj.formData)
        .then((response)=>{
            dispatch(updateReject(response.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}