import React from 'react';

import styles from './ProjectProfileForm.module.css';

const ProjectProfileForm = () => {
  
  return (
    <form className={styles.form}>
      <h2>Project Profile</h2>
      
      <label htmlFor="nickname" >Project Nickname</label>
      <input type="text" name="nickname" id="nickname" required={true} ></input>
      <label htmlFor="proj-address" >Project Address</label>
      <input type="text" name="proj-address" id="proj-address" ></input>
      
      {/* create 2 col class */}
      <label htmlFor="proj-suite" >Apt, Suite, Unit</label>
      <input type="text" name="proj-suite" id="proj-suite" ></input>
      <label htmlFor="proj-zip" >Zip</label>
      <input type="number" name="proj-zip" id="proj-zip" ></input>

      {/* create 2 col class ... dynamically populate based on zip*/}
      <label htmlFor="proj-state" >State</label>
      <select type="text" name="proj-state" id="proj-state" >
        <option value="ny">New York</option>
        <option value="nj">New Jersey</option>
        <option value="ct">Connecticut</option>
        <option value="ca">California</option>
      </select>
      <label htmlFor="proj-country" >Country</label>
      <select type="text" name="proj-country" id="proj-country" >
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="mexico">Mexico</option>
        <option value="france">France</option>
      </select>

      <label htmlFor="delivery-date" >Delivery Date</label>
      <input type="date" name="delivery-date" id="delivery-date" ></input>
      <label htmlFor="notes" >Order Notes</label>
      <input type="text" name="notes" id="notes" ></input>
      <label htmlFor="tag" >Tag</label>
      <input type="text" name="tag" id="tag" ></input>
      
    </form>
  )
};

export default ProjectProfileForm;