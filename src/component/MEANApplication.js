import React from 'react'
import {connect} from 'react-redux'
import {startGetApplications,startUpdateShortlist,startUpdateReject} from '../actions/applicationActions'
import Swal from 'sweetalert2'

function MEANApplication(props){
    if(props.applications.length == 0){
        props.dispatch(startGetApplications())
    }
    console.log(props.applications[0])
    const handleShorlist = (id) =>{
        const formData = {
            status: "shortlisted"
        }
        props.dispatch(startUpdateShortlist({id,formData}))
    }
    const handleReject = (id) => {
        const formData = {
            status: "rejected"
        }
        props.dispatch(startUpdateReject({id,formData}))
    }
    const handleView = (application) => {
        Swal.fire(
            `${application.name} Profile\ncontact number-${application.phone}\nemail-${application.email}\nskills-${application.skills}\nexperience-${application.experience}`

        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2 className="display-4">MEAN Stack Developers</h2>
                <h2 className="display-4" style={{fontSize:"30px"}}>List of candidtaes applied for MEAN Stack Developers job</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical Skills</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th>Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.applications.map(appliction=>{
                            if(appliction.jobTitle == "MEAN Stack Developer"){
                                return (
                                    <tr key={appliction._id}>
                                        <td>{appliction.name}</td>
                                        <td>{appliction.email}</td>
                                        <td>{appliction.experience}</td>
                                        <td>{appliction.createdAt.slice(0,15)}</td>
                                        <td><button onClick={()=>{handleView(appliction)}} className="btn btn-info" style={{width:"120px"}}>View Details</button></td>
                                        <td>{appliction.status == "applied" && (<div><button onClick={()=>{handleShorlist(appliction._id)}} className="btn btn-success">Shortlist</button><button onClick={()=>{handleReject(appliction._id)}} className="btn btn-danger">Reject</button></div>)}
                                        {
                                            appliction.status == "rejected" && (<div><button className="btn btn-danger">Rejected</button></div>)
                                        }
                                        {
                                            appliction.status == "shortlisted" && (<div><button className="btn btn-success">Shortlisted</button></div>)
                                        }
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }

                </tbody>

            </table>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        applications : state.applications
    }
}

export default connect(mapStateToProps)(MEANApplication)