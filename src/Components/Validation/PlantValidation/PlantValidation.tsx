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
        setEmailValue(e.currentTarget.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!re.test(String(emailValue).toLowerCase())) {
            setEmailError( "Incorrect email")
        } else {
            setEmailError("")
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
                    onChange={e => setPassValue(e.currentTarget.value)}
                    onBlur={blurHandler}
                />
                <button type="submit">Registration</button>
            </form>
        </div>
    )
}