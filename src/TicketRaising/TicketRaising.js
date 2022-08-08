import "./TicketRaising.css"
import React from "react"
import CloseComponent from "./CloseComponent"
import OpenComponent from "./OpenComponent"
class TicketRaising extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tickets:this.props.data
        }
    }
    getOpenTickets=()=>{
        const result= this.state.tickets.filter((item)=>item.status===true)
        return result
     }
     getClosedTickets=()=>{
        const result= this.state.tickets.filter((item)=>item.status===false)
        return result
     }
    changeStatus=(itemid)=>{
        const temp=[...this.state.tickets]
        const obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        this.setState({tasks:temp}) 
     }
    render(){
        return(
            <div>
                <div className="Open">
                <OpenComponent openTickets={this.getOpenTickets()} changeStatus={this.changeStatus}></OpenComponent>
                </div>
                <div className="Close">
                <CloseComponent closedTickets={this.getClosedTickets()} ></CloseComponent>
                </div>
            </div>
        )
    }
}
export default TicketRaising