/***
 * File contain field validation for form component
 * Created on:30 Dec 2019
 * Author:Ravi Pratap Singh(ravipratap.s@activa.one)
 */

const regax_Special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const regax_Num = /[0-9]/
const regax_Char = /[a-z|A-Z]/

const emailValidation = (email) => {

    //Restrict the email....
    //Split out the type of mail
    const isContainEmail = email.match(/gmail|yahoo|hotmail|outlook|live/i)
    //Is Email field is empty
    if (email === '') {
        return {
            isError: true,
            message: "Email field is empty"
        }
    } else {
        //Email is right check the valid email for email hai their domain
        if (!(email.includes("@") && email.split("@")[1].includes("."))) {
            return {
                isError: true,
                message: "Invalid Email Pattern"
            }
        } else {
            if (isContainEmail) {
                return {
                    isError: true,
                    message: "Invalid Email"
                }
            } else {
                return {
                    isError: false,
                    message: "Correct"
                }
            }
        }
    }
}
const passwordValidation = (password) => {
    //Check the length
    if (password.length < 6) {
        return {
            isError: true,
            message: "Password length is too short"
        }
    } else {
        //Check for special char number
        if (!(regax_Special.test(password) && regax_Num.test(password) && regax_Char.test(password))) {
            return {
                isError: true,
                message: "Password should contain special char,number and char"
            }
        } else {
            return {
                isError: false,
                message: "Correct"
            }
        }
    }
}
const nameValidation = (name) => {
    if (name.length > 6) {
        return {
            isError: true,
            message: 'Name should be atleast 6 char'
        }
    }
    if (name == '') {
        return {
            isError: 'true',
            message: "Name field is empty"
        }
    } else {
        if (regax_Num.test(name) || regax_Special.test(name)) {
            return {
                isError: true,
                message: "Name should not have special char or number"
            }
        } else {
            return {
                isError: false,
                message: "Correct"
            }

        }
    }

}

export default { emailValidation, passwordValidation, nameValidation }