// can we use a single form component with three contexts to reduce overhead??? is that even more efficient...

import "./ClientContainer.scss";

import ClientForm from "./ClientForm";
import BillingForm from "./BillingForm";
import CreditForm from "./CreditForm";

const ClientContainer = () => {
  return (
    <section className="edit-client">
      <ClientForm/>
      <BillingForm/>
      <CreditForm/>
    </section>
  )
}

export default ClientContainer;