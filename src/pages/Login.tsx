import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useForm } from "react-hook-form";
import { loginUser } from "../redux/features/user/userSlice";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
      console.log('loggedin')
    }
  }, [user.email, isLoading]);

  return (
    <div>
      <div className={"hero"} {...props}>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="py-6 text-3xl ">
              Logging mechanisms and the ability to track user activities are
              critical in preventing, detecting, or minimizing the impact of a
              data compromise. The presence of logs in all environments allows
              thorough tracking, alerting, and analysis when something does go
              wrong.
            </p>
            <p className="py-6 text-5xl ">
              You must log in to to private activity
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text  w-full px-4 py-2 rounded-md border">
                    Email
                  </span>
                </label>
                <input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  placeholder="your password"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <label className="label">
                  {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            {/* {
                        success && <p>Welcome to CUuuuuuuuum</p>
                    } */}
            <h2 className="text-center mb-5">
              {" "}
              New to Genius car{" "}
              <Link to="/signup" className="text-orange-700">
                Signup
              </Link>{" "}
            </h2>
          </div>
        </div>

        {/* <div class="bg-pink-500 p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Sign In</h2>
        <input type="text" placeholder="Email or Username" class="">
        <input type="password" placeholder="Password" class="w-full px-4 py-2 mt-4 rounded-md border border-pink-500">
        <button onclick="signIn()" class="w-full px-4 py-2 mt-4 rounded-md bg-black text-pink-500 font-bold">Sign In</button>
      </div> */}
      </div>
    </div>
  );
}

// const LogIn = () => {

//     }
//     return (

//     );
// }
// export default LogIn;
