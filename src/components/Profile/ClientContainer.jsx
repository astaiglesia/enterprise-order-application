// can we use a single form component with three contexts to reduce overhead??? is that even more efficient...

import "./ClientContainer.scss";

import ClientForm from "./ClientForm/ClientForm";
import BillingForm from "./BillingForm/BillingForm";
import CreditForm from "./CreditForm/CreditForm";

const ClientContainer = () => {
  return (
    <div>
      <h1>Enter Client Info</h1>
      <section className="edit-client">
        <ClientForm/>
        <BillingForm/>
        <CreditForm/>
      </section>
    </div>
  )
}

export default ClientContainer;