import "./CreditForm.scss";

const CreditForm = () => {
  return (
    <div className="form credit-form font-face-grotesque">
      <div className="form-heading">Card On File</div>
      <div className="input-wrapper">
        <label for="cc">Credit Card </label>
        <input type="number" name="cc" id="cc" placeholder="Credit Card" />
      </div>

      <div className="two-col">
        <div className="input-wrapper">
          <label for="cc-firstName">First Name </label>
          <input type="text" name="cc-firstName" id="cc-firstName" placeholder="First Name" />
        </div>
        <div className="input-wrapper">
          <label for="cc-lastName">Last Name </label>
          <input type="text" name="cc-lastName" id="cc-lastName" placeholder="Last Name" />
        </div>
      </div>

      <div className="three-col">
        <div className="input-wrapper">
          <label for="month">Month</label>
          <select name="month" id="month" placeholder="Month">
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label for="year">Year</label>
          <input type="number" name="year" id="year" placeholder="Year"/>   
        </div>
        <div className="input-wrapper">
          <label for="cvv">CVV</label>
          <input type="number" name="cvv" id="cvv" placeholder="CVV"/>
        </div>
      </div>

    </div>
  )
}

export default CreditForm;