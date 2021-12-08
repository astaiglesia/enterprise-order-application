import "./CreditForm.scss";

const CreditForm = () => {
  return (
    // add form fields
    <div className="form credit-form">
      <div className="form-heading font-face-grotesque">Card On File</div>
      <form action="" method="">
        <div>
          <label for="name">*Name </label>
          <input type="text" name="name" id="name" required/>
        </div>
      </form>
    </div>
  )
}

export default CreditForm;