import React from 'react'
import {connect} from 'react-redux'
import {startGetApplications,startUpdateShortlist,startUpdateReject} from '../actions/applicationActions'
import Swal from 'sweetalert2'

function FrontEndApplication(props){
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
            <h2 className="display-4">Front-End Developers</h2>
            <h2 className="display-4" style={{fontSize:"30px"}}>List of candidtaes applied for Front-End Developers job</h2>
            <div className="table-responsive-lg">
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
                            if(appliction.jobTitle == "Front-End Developer"){
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
    )
}

const mapStateToProps = (state) => {
    return {
        applications : state.applications
    }
}

export default connect(mapStateToProps)(FrontEndApplication)