import React, {useState, FocusEvent, ChangeEvent} from "react"
import s from "./PlantValidation.module.css"

export const PlantValidation = () => {

    const [emailValue, setEmailValue] = useState<string>('')
    const [passValue, setPassValue] = useState<string>('')
    // состояние, отображающее "были мы в внутри инпута или нет"
    const [emailTouched, setEmailTouched] = useState<boolean>(false)
    const [passTouched, setPassTouched] = useState<boolean>(false)

    const [emailError, setEmailError] = useState('Email field cannot be empty ')
    const [passError, setPassError] = useState('Password field cannot be empty ')

    const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case "email":
                setEmailTouched(true)
                break
            case "password":
                setPassTouched(true)
                break
        }
    }

    const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('1:', emailValue)
        setEmailValue(e.currentTarget.value)
        console.log('1:', emailValue)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // ВАЖНО! (!re.test(String(e.currentTarget.value).toLowerCase())) здесь должно быть иммено (e.currentTarget.value)
        // если будем вставлять целиком почту, то в момент вставляния emailValue будет ещё старое значение, то есть пустое
        // и соотвествино сработает setEmailError("Incorrect email")

        if (!re.test(String(e.currentTarget.value).toLowerCase())) {
            setEmailError("Incorrect email")
        } else {
            // если всё ок - зануляем ошибку
            setEmailError("")
        }
    }

    const passChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassValue(e.currentTarget.value)
        if (e.currentTarget.value.length < 4) {
            setPassError("The minimum password length is 4 characters.")
        } else if (e.currentTarget.value.length > 8) {
            setPassError( "The maximum password length is 8 characters.")
        } else if (!e.currentTarget.value) {
            setPassError("Password field cannot be empty")
        } else {
            setPassError("")
        }

    }

    return (
        <div className={s.validationBlock}>
            <form>
                <h1>Registration</h1>
                {(emailTouched && emailError) && <span style={{color: 'red'}}>{emailError}</span>}
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your email ..."
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={blurHandler}
                />
                {(passTouched && passError) && <span style={{color: 'red'}}>{passError}</span>}
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password ..."
                    value={passValue}
                    onChange={passChangeHandler}
                    onBlur={blurHandler}
                />
                <button type="submit">Registration</button>
            </form>
        </div>
    )
}