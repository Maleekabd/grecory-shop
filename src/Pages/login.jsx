import { useFormik } from "formik";
import validate from "./Validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailed, loginSuccess } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/auth/login",
          values
        );
        if (data) {
          dispatch(loginSuccess({ user: data.username, token: data.token }));
          navigate("/");
        }
      } catch (error) {
        dispatch(loginFailed(error.response.data.message));
      }
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
          <h5>
            Did not have an account ? <a href="/signup">register</a>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Login;
