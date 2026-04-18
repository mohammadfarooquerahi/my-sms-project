const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-100 flex items-center justify-center">
      <div className="w-96 h-96 bg-green-100 shadow-lg rounded-md p-5">
        <h2
          className="text-center "
          style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
        >
          Sign in
        </h2>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-500">Username</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Type username"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-gray-500">Password</legend>
          <input
            type="password"
            className="input w-full"
            placeholder="Type password"
          />
        </fieldset>
        <button className="btn btn-primary w-full mb-4 mt-10">Sign in</button>
        <label style={{ color: "gray" }}>
          Donot have account?
          <a href="/" className="link link-primary ">
            Click here
          </a>
        </label>
      </div>
    </div>
  );
};

export default Login;

{
  /* name , fname, dob, roll no, class, section, address, phone number, email, subjects */
}
