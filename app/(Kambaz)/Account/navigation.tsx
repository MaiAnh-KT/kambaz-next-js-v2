"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
 const pathname = usePathname();
 return (
   <Nav variant="pills">
     {links.map((link) => (
       <NavItem key={link}>
         <NavLink as={Link} href={link} active={pathname.endsWith(link.toLowerCase())}>
           {link} </NavLink> </NavItem>
     ))}
   </Nav>
);}

// import Link from "next/link";
// import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation">
//       <ListGroup variant="flush" className="wd">

//         <ListGroupItem className="p-0 border-0 active">
//           <Link href="/Account/Signin" passHref>
//             <Button
//               variant="light"
//               className="w-100 text-start border-0 rounded-0 wd-account-button"
//               id="wd-account-signin-link"
//             >
//               Sign in
//             </Button>
//           </Link>
//         </ListGroupItem>

//         <ListGroupItem className="p-0 border-0">
//           <Link href="/Account/Signup" passHref>
//             <Button
//               variant="light"
//               className="w-100 text-start border-0 rounded-0 wd-account-button"
//               id="wd-account-signup-link"
//             >
//               Sign up
//             </Button>
//           </Link>
//         </ListGroupItem>

//         <ListGroupItem className="p-0 border-0">
//           <Link href="/Account/Profile" passHref>
//             <Button
//               variant="light"
//               className="w-100 text-start border-0 rounded-0 wd-account-button"
//               id="wd-account-profile-link"
//             >
//               Profile
//             </Button>
//           </Link>
//         </ListGroupItem>

//       </ListGroup>
//     </div>
//   );
// }