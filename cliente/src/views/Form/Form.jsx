import {useState} from "react";
import {validar} from "./validet.jsx";

function Form ({login}) {

    // function validar(input) {
    //     let errors = {};
    //     let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    //     let numbersRegex = /\d/;
      
    //     if (!emailRegex.test(input.email)) {
    //       errors.email = "Usuario Invalid";
    //     }
    //     if (input.email.length > 35) {
    //       errors.email = "Usuario Invalido*menos de 35 caracters";
    //     }
    //     if (!numbersRegex.test(input.password)) {
    //       errors.password = "Password tiene que tener un numero";
    //     }
    //     if (input.password.length < 6 || input.password.length > 10) {
    //       errors.password = "Passwors entre 6 y 10 caracters";
    //     }
      
    //     return errors;
    //   }
    


    const [userData, setUserData] = useState({
        email:"",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "your Email@", //
        password: "your Password", //
      });

    function handleChange(event) {
        setUserData({
          ...userData,
          [event.target.name]: event.target.value,
        });

        setErrors(
            validar({
              ...userData,
              [event.target.name]: event.target.value,
            })
          );
    }


        function handleSubmit(event) {
            // envio input a la DB
            event.preventDefault();
            login(userData)
        }


        function diseableHandler() {
            let disabled;
            if(errors.email || errors.password){
                disabled =true;
            }else {
                disabled = false
            }
            return disabled;
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          placeholder="email"
          name="email"
          // value={input.email}
          onChange={handleChange}
          type="text"
        />
        <br/>
        <span>{errors.email}</span>
        <br/>
         <label>PASSWORD</label>
        <input
          placeholder="contrasena"
          name="password"
          type="password"
          onChange={handleChange}
          />
          <br/>
          {errors.password && <span>{errors.password}</span>}
        <br/>
        <button disabled={diseableHandler()} type="submit">submit</button>
            </form>
        </div>
    )
}



export default Form;