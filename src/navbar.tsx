import { Link } from "react-router";

export function Navbar(){
    return <nav className="flex gap-2 px-4 border-b">
        <h1>Todo</h1>
        <ul className="flex bg-blue-200  w-full justify-between px-4">
            <Link className="underline" to={"/"} ><li>Home</li></Link>
            <Link className="underline" to={"/login"} ><li>Login</li></Link>
            <Link className="underline" to={"/register"} ><li>Register</li></Link>
            <Link className="underline" to={"/todos"} ><li>Todos</li></Link>
        </ul>
    </nav>
}