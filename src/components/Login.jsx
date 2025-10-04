// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true); // 👈 Add loading state
//   const router = useRouter();

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn) {
//       router.replace("/dashboard");
//     } else {
//       setLoading(false); // ab login form dikhane ka time hai
//     }
//   }, [router]);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
//     const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

//     if (email === adminEmail && password === adminPassword) {
//       localStorage.setItem("isLoggedIn", "true");
//       router.replace("/dashboard");
//     } else {
//       setError("Invalid Email or Password");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex  w-full h-screen items-center justify-center px-1 ">
//       <div className="border md:px-4 px-2 py-3 rounded-md shadow flex flex-col gap-6 md:w-[40%] w-full">
//         <h1 className="text-gray-800 dark:text-gray-300 font-medium text-xl">
//           Login Form*
//         </h1>

//         <form onSubmit={handleLogin} className="flex flex-col gap-6">
//           <div className="flex flex-col gap-4">
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               className="outline-none border-b-[1.5] dark:text-gray-400 dark:placeholder:text-gray-600 border-gray-500 py-6 text-sm text-gray-800"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="outline-none border-b-[1.5] dark:text-gray-400 dark:placeholder:text-gray-600 border-gray-500 py-6 text-sm text-gray-800"
//               value={password}

//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <div>
//             <button
//               type="submit"
//               className="border px-4 py-1.5 rounded-md dark:bg-blue-600 bg-blue-400 hover:bg-blue-500 text-white font-semibold hover:cursor-pointer"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdEmail, MdLock } from "react-icons/md";
import login from "../../public/login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", global: "" });
  const [loading, setLoading] = useState(true); // Page loader
  const [btnLoading, setBtnLoading] = useState(false); // Button loader
  const router = useRouter();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (loggedIn) {
      router.replace("/dashboard");
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();
    let tempErrors = { email: "", password: "", global: "" };
    let isValid = true;

    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    }
    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    }

    if (!isValid) {
      setErrors(tempErrors);
      return;
    }

    setBtnLoading(true);

    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    setTimeout(() => {
      if (email === adminEmail && password === adminPassword) {
        sessionStorage.setItem("isLoggedIn", "true");
        router.replace("/dashboard");
      } else {
        setErrors({ ...tempErrors, global: "Invalid Email or Password" });
      }
      setBtnLoading(false);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full">
      {/* Left Side Image (hidden on sm) */}
      <div className="hidden md:block h-full overflow-hidden w-[55%] relative">
        <Image src={login} alt="login" className="h-full w-full object-cover" />
      </div>

      {/* Small screen Background */}
      <div className="md:hidden absolute inset-0">
        <Image
          src={login}
          alt="login"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Right Side / Form */}
      <div className="w-full md:w-[45%] flex items-center justify-center relative z-10">
        <div className="border md:px-4 px-3 py-5 rounded-md shadow flex flex-col gap-6 lg:w-[70%] md:w-[85%] sm:w-[60%] sm:min-w-[60%] w-[90%] bg-[#f5fafa]">
          <div>
            <h1 className="text-[#641143]  font-medium text-2xl  text-left">
              Sign In*
            </h1>
            <p className="text-sm mt-2 text-[#4c4949] max-w-[95%]">
              Welcome back! Please enter your credentials to access the
              dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-2 border-b-[1.5] border-gray-500 py-4">
                  <MdEmail className="text-[#152915] text-lg" />
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-1 outline-none text-sm text-gray-800 dark:text-gray-700 dark:placeholder:text-gray-600 bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-300 text-xs mt-2">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center gap-2 border-b-[1.5] border-gray-500 py-4">
                  <MdLock className="text-[#152915] text-lg" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="flex-1 outline-none text-sm text-gray-800 dark:text-gray-700 dark:placeholder:text-gray-600 bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-300 text-xs mt-2">{errors.password}</p>
                )}
              </div>
            </div>

            {errors.global && (
              <p className="text-red-400 text-sm">{errors.global}</p>
            )}

            <div>
              <button
                type="submit"
                disabled={btnLoading}
                className="flex items-center justify-center gap-2 border w-full h-[40px] px-4 py-1.5 rounded-md dark:bg-[#28c888] bg-[#28c888] hover:bg-[#17b777] text-white font-semibold hover:cursor-pointer disabled:opacity-70"
              >
                {btnLoading ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
