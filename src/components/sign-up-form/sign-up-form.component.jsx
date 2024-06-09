import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebas.utils";
import {FormInput} from "../form-input/form-input.component";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);
const resetField = () =>{
    setFormFields(defaultFormFields);
}
const handleChange = (event) =>{
    const {name, value} = event.target;

    setFormFields({...formFields, [name] : value})
}
const handleSubmit = async (event) =>{
    event.preventDefault();
   // const { name, value } = event.target;
    if (password != confirmPassword){
        alert("passwords do not match")
        return;
    }
    try{
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        await createUserDocFromAuth(user , { displayName })
        resetField();
        //setFormFields(defaultFormFields);
    }catch(error){
        if(error.code=='auth/email-already-in-use'){
            alert('email already in use')
        }else console.log("error is :", error.message)
    }
}

    return (
        <div>
            <h1>Create your account by email and password</h1>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                label = "Display Name"
                type="text" required
                onChange={handleChange} name="displayName" value = {displayName}/>
                
                <FormInput 
                label = "Email"
                type="email" required 
                onChange={handleChange} name="email" value = {email} />
                
                <FormInput 
                label = "Password"
                type="password" required 
                onChange={handleChange} name="password" value = {password} />
                
                <FormInput type="password" required 
                label = "Confirm Password"
                onChange={handleChange} name="confirmPassword" value = {confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>

        </div>
    )
}
export default SignUpForm;