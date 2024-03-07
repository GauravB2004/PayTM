
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router"

export const Signup = () => {
    const [firstName,setfirstName]= useState("")
    const [lastName,setlastName]= useState("")
    const [username,setusername]= useState("")
    const [password,setpassword]= useState("")
    const navigate = useNavigate()

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create an account"} />

        <InputBox onChange={e => {
            setfirstName(e.target.value)
        }} placeholder="Gaurav" label={"First Name"} />

        <InputBox onChange={e =>{
            setlastName(e.target.value)
        }} placeholder="Bhalerao" label={"Last Name"} />

        <InputBox onChange={e =>{
            setusername(e.target.value)
        }} placeholder="gaurav@gmail.com" label={"Email"} />

        <InputBox onChange={e =>{
            setpassword(e.target.value)
        }} placeholder="123456" label={"Password"} />

        <div className="pt-4">
          <Button onClick={ async () => {
           try{ 
            const response = await axios.post("http://localhost:3001/api/v1/user/signup",{
            username,
            password,
            firstName,
            lastName,
            
            });
            localStorage.setItem("token",response.data.token)
            navigate('/dashboard')
        }
        catch(e){
            console.log("in button clicl")
        }
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}