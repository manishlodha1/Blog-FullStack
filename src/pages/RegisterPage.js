import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert("Registration successful");
      } else {
        // If response is not ok, throw an error
        throw new Error('Registration failed');
      }
    } catch (error) {
    //   console.error("Fetch error:", error);
      alert("Registration complete failed");
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
//mernBlog
//mongodb+srv://mernBlog:mernBlog@cluster0.vgdztwl.mongodb.net/
//mongodb+srv://mernBlog:mernBlog@cluster0.vgdztwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0