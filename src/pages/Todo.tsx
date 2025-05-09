import { Navbar } from "@/navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Todos() {

    const [todoData, setTodoData] = useState({
        title: "",
        description: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [todos, setTodos] = useState<{
        _id: string
        title: string;
        description: string
    }[]>([]);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {

            await axios.post("https://masai-bedc-backend.onrender.com/todos/create", todoData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            fetchTodos();
            alert("Todo is created!!!")

        } catch (error) {
            alert((error as any).response?.data?.message ?? "Something went wrong");
        } finally {
            setIsSubmitting(false)
        }
    }

    const fetchTodos = async () => {
        try {
            const res = await axios.get("https://masai-bedc-backend.onrender.com/todos", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            setTodos(res.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchTodos();
    }, [])


    return <div>
        <Navbar />
        Todos
        {/* Todo Form */}
        <div className="flex flex-col items-center w-full mt-5">
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input onChange={(e) => {
                    setTodoData((prev) => ({
                        ...prev,
                        title: e.target.value
                    }))
                }} className="border" type="text" id="title" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="description">Description</label>
                <input onChange={(e) => {
                    setTodoData((prev) => ({
                        ...prev,
                        description: e.target.value
                    }))
                }} className="border" type="text" id="description" />
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-1 px-2 mt-5">
                {
                    isSubmitting ? "Loading" : "Create Todo"
                }
            </button>
        </div>

        <hr />

        <div>
            Todos list

            <div className="space-y-4">
                {
                    todos.map((todo) => <div className="border p-2" key={todo._id}>
                        <p>Title: {todo.title}</p>
                        <p>Description: {todo.description}</p>
                    </div>)
                }
            </div>
        </div>
    </div>
}