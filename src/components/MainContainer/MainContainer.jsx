import "./MainContainer.scss";

import Header from "../Header/Header";

// add context / state management 

const MainContainer = () => {
  return (
    <div className="main-container">
      <Header/>
      <div>
        "ZZ Enterprise"
      </div>
    </div>
  )
}

export default MainContainer;