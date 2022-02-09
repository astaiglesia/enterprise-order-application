import React from "react";

import styles from './FormContainer.module.css';

import ProjectProfileForm from "../ProjectProfileForm/ProjectProfileForm";

const FormContainer = () => {
  return (
    <div className={styles['form-container']}>
      <ProjectProfileForm />
    </div>    
  )
};


export default FormContainer;