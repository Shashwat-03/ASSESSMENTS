import TicketRaising from "./TicketRaising/TicketRaising";
import data from "./TicketRaising/TicketRaisingData";
function App(){
    return(
      <div>
        <TicketRaising data={data}></TicketRaising>
      </div>
    )
  }
  export default App;