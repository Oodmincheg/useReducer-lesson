import React, {useRef, useState} from 'react'

export default function LoginForm() {
    const loginRef = useRef(null)
    const passwordRef = useRef(null)
    const [loginError, setLoginError] = useState(null)

    console.log('render component')

    function handleSubmit(event) {
        event.preventDefault()

        if(loginError) return

        const login = loginRef.current.value
        const password = passwordRef.current.value
        
        fetch('https:/google.com', {method: 'post', body: {login: login, password: password}})
    }
    function validateLogin() {
        const login = loginRef.current.value

        if(!login) {
            setLoginError('Login is required')
            return
        }
        if(login.length < 6) {
            setLoginError('Please enter login more than 6 chars')
            return
        }
        setLoginError(null)
    }
    return (
        <form>
            <input ref={loginRef} type="text" placeholder="Enter login" onBlur={validateLogin}/>
            {loginError && <div>{loginError}</div>}
            <input ref={passwordRef} type="text" placeholder="Enter password"/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
