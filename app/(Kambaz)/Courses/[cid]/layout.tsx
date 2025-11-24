/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode } from "react";
import CourseNavigation from "./navigation";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../Database";
import CourseBreadcrumb from "./CourseBreadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
 const { cid } = useParams();
 const { courses } = useSelector((state: any) => state.coursesReducer);
 const course = courses.find((course: any) => course._id === cid);

return (
  <div id="wd-courses">
    <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name}
         {/* Breadcrumb */}
            <CourseBreadcrumb course={course} />
          <hr/>
         </h2> <hr/>
        <div className="d-flex">
          <div className="d-none d-md-block">
          <CourseNavigation cid={cid?.toString() ?? ""} />
          </div>
          <div className="flex-fill">
            {children}
          </div>
        </div>
  </div>
);}



// import { ReactNode } from "react";
// import CourseNavigation from "./navigation";
// import { FaAlignJustify } from "react-icons/fa";
// import { courses } from "../../Database";
// import CourseBreadcrumb from "./CourseBreadcrumb";
// export default async function CoursesLayout({
//   children,
//   params,
// }: {
//   children: ReactNode;
//   params: Promise <{ cid: string }>;
// }) {
//   const { cid } = await params;
//   const course = courses.find((course) => course.id === cid);

// return (
//   <div id="wd-courses">
//     <h2 className="text-danger">
//         <FaAlignJustify className="me-4 fs-4 mb-1" />
//         {course?.name}
//          {/* Breadcrumb */}
//             <CourseBreadcrumb course={course} />
//           <hr />
//          </h2> <hr />
//         <div className="d-flex">
//           <div className="d-none d-md-block">
//           <CourseNavigation cid = {cid} />
//           </div>
//           <div className="flex-fill">
//             {children}
//           </div>
//         </div>
//   </div>
// );}