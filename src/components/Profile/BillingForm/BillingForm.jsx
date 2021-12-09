import "./BillingForm.scss";

const BillingForm = () => {
  return (
    <div className="form billing-form font-face-grotesque">
      <div className="form-heading">Client Profile</div>
      <div className="input-wrapper">
        <label for="contact-name">Contact Name </label>
        <input type="text" name="contact-name" id="contact-name" placeholder="Contact Name" />
      </div>
      <div className="input-wrapper">
        <label for="contact-address">Address</label>
        <input type="text" name="contact-address" id="contact-address" placeholder="Address" />
      </div>

      <div className="two-col">
        <div className="input-wrapper">
          <label for="apt">Apartment, suite, etc</label>
          <input type="text" name="apt" id="apt" placeholder="Apartment, suite, etc"/>   
        </div>
        <div className="input-wrapper">
          <label for="country">Country</label>
          <select name="country" id="country">
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="france">France</option>
            <option value="italy">Italy</option>
            <option value="japan">Japan</option>
            <option value="united-kingdom">United Kingdom</option>
          </select>
        </div>
      </div>

      <div className="two-col">
        <div className="input-wrapper">
          <label for="state">State</label>
          <select name="state" id="state" placeholder="State">
            <option value="new-york">New York</option>
            <option value="new-jersey">New Jersey</option>
            <option value="connecticut">Connecticut</option>
            <option value="pennsylvania">Pennsylvania</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label for="">Zip Code</label>
          <input type="text" name="zip" id="zip" placeholder="Zip Code"/>   
        </div>
      </div>
      
      <div className="input-wrapper">
        <label for="contact-email">Email</label>
        <input type="text" name="contact-email" id="contact-email" placeholder="Email" />
      </div>
      <div className="input-wrapper">
        <label for="contact-address">Phone</label>
        <input type="tel" name="phone" id="phone" 
               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone"/>
      </div>
    </div>
  )
}

export default BillingForm;