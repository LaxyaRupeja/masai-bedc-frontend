import { Navbar } from "@/navbar";
import axios from "axios";
import { useState } from "react";

export default function Login() {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true)
            const res = await axios.post("https://masai-bedc-backend.onrender.com/users/login", userData);
            console.log("Axios Response", res.data);
            localStorage.setItem("token",res.data.token)
            alert("User is Logged in");
        } catch (error) {
            alert((error as any).response?.data?.message ?? "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    }


    return <div>
        <Navbar />
        <div className="flex flex-col items-center w-full mt-5">
            <h1>Login User</h1>

            <div className="w-[400px] border p-5 mt-5">
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => {
                        setUserData((prev) => ({
                            ...prev,
                            email: e.target.value
                        }))
                    }} className="border" type="email" id="email" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => {
                        setUserData((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }} className="border" type="password" id="password" />
                </div>
                <button onClick={handleSubmit} className="bg-blue-500 text-white p-1 px-2 mt-5">
                    {
                        isSubmitting ? "Loading" : "Login"
                    }
                </button>
            </div>
        </div>
    </div>
}