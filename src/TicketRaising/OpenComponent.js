import "./OpenComponent.css"
import React from "react";
class OpenComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {openTickets,changeStatus}=this.props
        return(
            <div className="Open">
                 <div class="h2">Open Tickets</div>
                {
                    openTickets.slice(0).reverse().map((item)=>(
                        <div className="content">
                            <h3>ID:{item.id}</h3>
                            <h6>TIMESTAMP:{item.timestamp}</h6>
                            <h5>PRIORITY:{item.priority}</h5>
                            <h6>DESCRIPTION:{item.description}</h6>
                            <p>Solve the Issue</p>
                            <div className="b1"><button className='btn btn-primary' onClick={()=>changeStatus(item.id)}>Close Ticket</button></div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default OpenComponent