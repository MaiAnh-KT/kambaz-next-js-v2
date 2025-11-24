/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/Account/Profile");
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
             className="wd-username b-2" placeholder="username" />
      <FormControl value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
             className="wd-password mb-2" placeholder="password" type="password"/>
      <Button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </Button><br />
      <Link href="/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
);}

// import Link from "next/link";

// export default function Signup() {
//   return (
//     <div id="wd-signup-screen">
//       <h1>Sign up</h1>
//       <input
//         id="wd-username"
//         placeholder="username"
//         className="wd-username mb-2 w-100"
//       />
//       <input
//         id="wd-password"
//         type="password"
//         placeholder="password"
//         className="wd-password mb-2 w-100"
//       />
//       <input
//         id="wd-password-verify"
//         type="password"
//         placeholder="verify password"
//         className="wd-password-verify mb-2 w-100"
//       />
//       <Link
//         id="wd-signup-btn"
//         href="/Account/Profile"
//         className="btn btn-primary w-100 mb-2"
//       >
//         Sign up
//       </Link>
//       <Link id="wd-signin-link" href="/Account/Signin">
//         Sign in
//       </Link>
//     </div>
//   );
// }
