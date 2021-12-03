import "./MainContainer.scss";

import Header from "../Header/Header";
import ClientContainer from "../Profile/ClientContainer";
import Order from "../Order/Order";
import Footer from "../Footer/Footer";

// add context / state management 

const MainContainer = () => {
  return (
    <div className="main-container">
      <Header/>
      <main>
        <ClientContainer/>
        <Order/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainContainer;