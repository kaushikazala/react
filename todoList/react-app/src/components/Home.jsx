import React, { useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [submitData, setSubmitData] = useState(null);
  const [error, setError] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      setSubmitData(data);
      setData({ name: "", email: "", password: "" });
    }
  }

  function validation() {
    let obj = {};
    let val = true;

    if (!data.name.trim()) {
      val = false;
      obj.name = "Name is not valid";
    }

    if (!data.email.trim()) {
      val = false;
      obj.email = "Email is not valid";
    }

    if (!data.password.trim()) {
      val = false;
      obj.password = "Password is not valid";
    } else if (data.password.length < 8) {
      val = false;
      obj.password = "Password should be at least 8 characters long";
    }

    setError(obj);
    return val;
  }

  return (
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex flex-col items-center justify-center`}>
      <form
        onSubmit={handleSubmit}
        className="w-72 border border-black p-4 rounded-lg shadow-md"
      >
        <div>
          <label>
            Name:
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="text"
              placeholder="Enter your Name"
            />
          </label>
          {error.name && <p className="text-red-500">{error.name}</p>}
        </div>

        <div>
          <label>
            Email:
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="email"
              placeholder="Enter your email"
            />
          </label>
          {error.email && <p className="text-red-500">{error.email}</p>}
        </div>

        <div>
          <label>
            Password:
            <input
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              type="password"
              placeholder="Enter your password"
            />
          </label>
          {error.password && <p className="text-red-500">{error.password}</p>}
        </div>

        <button
          type="submit"
          className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Submit
        </button>
      </form>

      <div className="mt-4">
        <Link to="/todolist">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Next</button>
        </Link>
      </div>

      {submitData && (
        <div className="mt-4">
          <p>{submitData.name}</p>
          <p>{submitData.email}</p>
          <p>{submitData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
