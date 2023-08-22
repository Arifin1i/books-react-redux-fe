import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { createUser } from "../redux/features/user/userSlice";
import { useAppDispatch } from "../redux/hooks";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  email: string;
  password: string;
}

// export default function SignUp() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignupFormInputs>();

//   const dispatch = useAppDispatch();

//   const onSubmit = (data: SignupFormInputs) => {
//     // createUser({email: data.email, password:data.password})
//     console.log(data);
//     dispatch(createUser({ email: data.email, password: data.password }));
//   };

export function Signup({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();

  async function onSubmit(data: SignupFormInputs) {
    await dispatch(createUser({ email: data.email, password: data.password }));
  }

  return (
    <div className={"hero "} {...props}>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              {/* <div className="grid gap-1"> */}
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
              {errors.email && <p>{errors.email.message}</p>}
              
              <label className="label">
                <span className="label-text  w-full px-4 py-2 rounded-md border">
                  Password
                </span>
              </label>
              <input
                id="password"
                placeholder="your password"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
              <label className="label">
                <span className="label-text  w-full px-4 py-2 rounded-md border">
                  Confirm Password
                </span>
              </label>
              <input
                id="password"
                placeholder="confirm password"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
              />
              {/* </div> */}
              <button>Create Account</button>
            </div>
          </form>

          {/* <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form> */}
          <h2 className="text-center mb-5">
            {" "}
            Member already{" "}
            <Link to="/login" className="text-orange-700">
              Login
            </Link>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
