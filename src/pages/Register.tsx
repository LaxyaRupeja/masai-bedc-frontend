import { Navbar } from "@/navbar";
import axios from "axios";
import { useState } from "react";

export default function Register() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true)
            await axios.post("https://masai-bedc-backend.onrender.com/users/register", userData);
            alert("User is Registered");
        } catch (error) {
            alert((error as any).response?.data?.message ?? "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    }


    return <div>
        <Navbar />
        <div className="flex flex-col items-center w-full mt-5">
            <h1>Register New User</h1>

            <div className="w-[400px] border p-5 mt-5">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => {
                        setUserData((prev) => ({
                            ...prev,
                            name: e.target.value
                        }))
                    }} className="border" type="text" id="name" />
                </div>
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
                <div className="flex flex-col">
                    <label htmlFor="role">Role</label>
                    <select className="border" onChange={(e) => {
                        setUserData((prev) => ({
                            ...prev,
                            role: e.target.value
                        }))
                    }}>
                        <option value="">Select User Role</option>
                        <option value="user">Become a User</option>
                        <option value="admin">Become a Admin</option>
                    </select>
                </div>
                <button onClick={handleSubmit} className="bg-blue-500 text-white p-1 px-2 mt-5">
                    {
                        isSubmitting ? "Loading" : "Register"
                    }
                </button>
            </div>
        </div>
    </div>
}