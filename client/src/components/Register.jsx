import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-blue-100 h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-blue-600 mb-5">Register</h1>
      <form className="w-64">
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Username"
          className="block w-full rounded-md p-2 mb-2 border-none outline-none shadow-sm"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Email"
          className="block w-full rounded-md p-2 mb-2 border-none outline-none shadow-sm"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
          className="block w-full rounded-md p-2 mb-2 border-none outline-none shadow-sm"
        />
        <button className="bg-blue-600 text-white w-full rounded-md h-10 mt-2 shadow-sm hover:shadow-xl duration-300 ease-in-out">
          Register
        </button>
      </form>
    </div>
  );
}
