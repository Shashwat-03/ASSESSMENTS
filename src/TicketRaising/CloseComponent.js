import "./CloseComponent.css"
import React from "react";
class CloseComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {closedTickets}=this.props
        return(
            <div className="close">
                 <p class="h2">Closed Tickets</p>
                {
                    closedTickets.map((item)=>(
                        <div className="content">
                            <h3>ID:{item.id}</h3>
                            <h4>TIMESTAMP:{item.timestamp}</h4>
                            <h5>PRIORITY:{item.priority}</h5>
                            <h6>DESCRIPTION:{item.description}</h6>
                            <p>The Issue has been Resolved, hence closing the ticket</p>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default CloseComponent