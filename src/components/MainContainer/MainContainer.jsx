import "./MainContainer.scss";

import Header from "../Header/Header";
import ClientContainer from "../Profile/ClientContainer";

// add context / state management 

const MainContainer = () => {
  return (
    <div className="main-container">
      <Header/>
      <ClientContainer/>
    </div>
  )
}

export default MainContainer;