import React from 'react'
import {connect} from 'react-redux'
import {startGetApplications,startUpdateShortlist,startUpdateReject} from '../actions/applicationActions'
import FrontEndApplications from './FrontEndApplications'
import FullStackApplications from './FullStackApplications'
import MEANApplication from './MEANApplication'
import NodeJsApplication from './NodeJsApplication'

class ApplicationList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            frontEnd : true,
            fullStack : false,
            meanStack : false,
            nodeJs : false

        }
    }

    handleFrontEnd = () => {
        this.setState({
            frontEnd : true,
            fullStack : false,
            meanStack : false,
            nodeJs : false
        })
    }
    handleFullStack = () =>{
        this.setState({
            frontEnd : false,
            fullStack : true,
            meanStack : false,
            nodeJs : false
        })
    }
    handleMEANstack = () => {
        this.setState({
            frontEnd : false,
            fullStack : false,
            meanStack : true,
            nodeJs : false
        })
    }
    handleNodeJs = () => {
        this.setState({
            frontEnd : false,
            fullStack : false,
            meanStack : false,
            nodeJs : true
        })
    }

    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                    <button class="nav-link" onClick={this.handleFrontEnd} class="btn btn-outline-primary">FrontEnd<span class="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item active">
                    <button class="nav-link" onClick={this.handleFullStack} class="btn btn-outline-secondary">Full Stack</button>
                    </li>
                    <li className="nav-item active">
                    <button class="nav-link" onClick={this.handleMEANstack} class="btn btn-outline-warning">MEAN Stack</button>
                    </li>
                    <li className="nav-item active">
                    <button class="nav-link" onClick={this.handleNodeJs} class="btn btn-outline-success">Node Js</button>
                    </li>
                    </ul>
                    </div>
              </nav> 
              {
                  this.state.frontEnd && <FrontEndApplications />
              }
              {
                  this.state.fullStack && <FullStackApplications />
              }
              {
                  this.state.meanStack && <MEANApplication />
              }
              {
                  this.state.nodeJs && <NodeJsApplication />
              }
                
            </div>
        )
    }
}


export default connect()(ApplicationList)