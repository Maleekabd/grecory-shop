import { useFormik } from "formik";
import validate from "./Validate";

const Login = () => {
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="h-auto">
      <div className="h-screen p-5 flex items-center justify-center">
        <div className="relative m-10 border rounded-md h-4/6 w-2/6 ">
          <form
            onSubmit={Formik.handleSubmit}
            className="flex flex-col h-full justify-between p-10"
          >
            <h1 className="text-center text-2xl m-1">Login</h1>
            <div className="flex flex-col h-full p-2 gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                onChange={Formik.handleChange}
                className="p-2 border"
                type="email"
                placeholder="Email"
                value={Formik.values.email}
              />
              {Formik.errors.email ? (
                <h3 className="text-rose-400 text-sm">{Formik.errors.email}</h3>
              ) : null}
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                onChange={Formik.handleChange}
                className="p-2 border"
                type="password"
                placeholder="password"
                value={Formik.values.password}
              />
              {Formik.errors.password ? (
                <h3 className="text-rose-400 text-sm">
                  {Formik.errors.password}
                </h3>
              ) : null}
            </div>
            <button type="submit" className="h-1/6 border">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
