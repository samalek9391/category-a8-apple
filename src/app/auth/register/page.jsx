import React from 'react';

const RegisterPage = () => {
    return (
<div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center mb-5 text-blue-600">Login Your Account</h2>
        <form>
          <fieldset className="fieldset bg-blue-50 border-base-300 rounded-box w-xs border p-10">
            {/* <legend className="fieldset-legend">Login</legend> */}

            <label className="label text-black font-semibold ">Your Name</label>
            <input type="text" className="input" placeholder="Your Name" />

            <label className="label text-black font-semibold ">Your Photo</label>
            <input type="text" className="input" placeholder="Your Photo URL" />

            <label className="label text-black font-semibold ">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label text-black font-semibold">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn bg-blue-600 text-white mt-4 ">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default RegisterPage;