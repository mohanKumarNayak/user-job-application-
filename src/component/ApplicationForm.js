import React from 'react'
import {connect} from 'react-redux'
import {startAddApplication} from '../actions/applicationActions'
import {withRouter} from 'react-router-dom'

class ApplictaionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            phone : '',
            skills : '',
            jobTitle : '',
            experience : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            email : this.state.email,
            phone : this.state.phone,
            skills : this.state.skills,
            jobTitle : this.state.jobTitle,
            experience : this.state.experience
        }
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startAddApplication({redirect,formData}))
    }

    render(){
        return(
            <div className="container">
                <h2>Apply For Job</h2>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" value={this.state.name} name="name" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="text" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="+91 9874561230" value={this.state.phone} name="phone" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                        <label htmlFor="jobTitle">Applying for job</label>
                        <select id="jobTitle" value={this.state.jobTitle} className="form-control" name="jobTitle" onChange={this.handleChange}>
                            <option value="">select</option>
                            <option value="Front-End Developer">Front-End Developer</option>
                            <option value="Node.js Developer">Node.js Developer</option>
                            <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                            <option value="FULL Stack Developer">Full Stack Developer</option>
                        </select>
                    </div>
                <div class="form-group">
                    <label for="experience">experience</label>
                    <input type="text" class="form-control" id="experience" aria-describedby="emailHelp" placeholder="experience (2-years ,3-months)" value={this.state.experience} name="experience" onChange={this.handleChange} />
                </div>
                
                <div className="form-group">
                        <label htmlFor="skills">Technical skills</label>
                        <textarea type="text" rows="3" cols="50" className="form-control" id="skills" onChange={this.handleChange} value={this.state.skills} name="skills" placeholder="skills"/>
                </div>

                <input type="submit" value="Send Application" className="btn btn-primary" />
                
                
                </form>
            </div>
        )
    }
}

export default withRouter(connect()(ApplictaionForm))