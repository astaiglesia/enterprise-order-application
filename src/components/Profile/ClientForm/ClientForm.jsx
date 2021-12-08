import "./ClientForm.scss";

const ClientForm = () => {
  return (
    <div className="form client-form font-face-grotesque">
      <div className="form-heading">Client Profile</div>
      <div className="input-wrapper">
        <label for="name">*Name </label>
        <input type="text" name="name" id="name" placeholder="Name" required/>
      </div>
      <div className="input-wrapper">
        <label for="client-address">*Address</label>
        <input type="text" name="client-address" id="client-address" placeholder="Address" required/>
      </div>
      <div className="input-wrapper">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email"/>
      </div>
      <div className="input-wrapper">
        <label for="phone">Phone</label>
        <input type="tel" name="phone" id="phone" 
               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone"/>
      </div>
    </div>
  )
}

export default ClientForm;