// /* eslint-disable @typescript-eslint/no-explicit-any */
// // "use client";

// // import { ListGroup, ListGroupItem } from "react-bootstrap";
// // import { BsGripVertical } from "react-icons/bs";
// // import AssignmentControlButtons from "./AssignmentControlButtons";
// // import AssignmentControls from "./AssignmentControls";
// // import Link from "next/link";
// // import * as db from "../../../Database";
// // import { useParams } from "next/navigation";
// // import { useSelector, useDispatch } from "react-redux";
// // import { RootState } from "../../../store";
// // import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
// // import { useState } from "react";

// // export default function Assignments() {
// //   const { cid } = useParams();
// //   // const courseAssignments = db.assignments.filter(a => a.course === cid);
// //   const [assignmentName, setAssignmentName] = useState("");
// //   const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
// //   const courseAssignments = assignments.filter(a => a.course === cid);
// //   const dispatch = useDispatch();
// //   return (
// //     <div>
// //       <AssignmentControls setAssignmentName={setAssignmentName} assignmentName={assignmentName}
// //         addAssignment={() => {
// //           dispatch(addAssignment({name: assignmentName, course: cid }));
// //           setAssignmentName("");
// //           }}
// //       /><br /><br /><br />
// //       <ListGroup className="rounded-0" id="wd-assignments">
// //         <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
// //           <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
// //             <div className="d-flex align-items-center">
// //               <BsGripVertical className="me-2 fs-3" />
// //               <span className="fw-semibold">ASSIGNMENTS</span>
// //             </div>
// //             <div className="d-flex align-items-center gap-3">
// //               <span className="border rounded-pill px-3 py-1 small text-dark">
// //                 {courseAssignments.length * 10}% of Total
// //               </span>
// //               <span className="fs-5 fw-bold text-dark">+</span>
// //               <span className="fs-4 text-dark">⋮</span>
// //             </div>
// //           </div>

// //           <ListGroup className="rounded-0">
// //             {courseAssignments.map((assignment) => (
// //               <ListGroupItem
// //                 key={assignment.id}
// //                 className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-start"
// //               >
// //                 <Link
// //                   href={`/Courses/${cid}/Assignments/${assignment.id}`}
// //                   className="flex-grow-1 text-decoration-none text-dark"
// //                 >
// //                   <div className="d-flex">
// //                     <BsGripVertical className="me-3 fs-3 text-secondary" />
// //                     <div>
// //                       <div className="fw-semibold">{assignment.title}</div>
// //                       <div className="text-secondary mt-1 small">
// //                         <span className="text-danger fw-normal">Multiple Modules</span> |
// //                         <span className="fw-semibold"> Not available until</span> {assignment.availableFrom}
// //                       </div>
// //                       <div className="text-secondary mt-1 small">
// //                         <span className="fw-semibold"> Due</span> {assignment.availableTo} | {assignment.points} pts
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </Link>
// //                 <AssignmentControlButtons />
// //               </ListGroupItem>
// //             ))}
// //           </ListGroup>
// //         </ListGroupItem>
// //       </ListGroup>
// //     </div>
// //   );
// // }
// "use client";

// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import AssignmentControls from "./AssignmentControls";
// import * as db from "../../../Database";
// import { useParams } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../../store";
// import { addAssignment } from "./reducer";
// import { useState } from "react";
// import AssignmentEditor from "./[aid]/page";


// export default function Assignments() {
//   const { cid } = useParams();
//   const [showEditor, setShowEditor] = useState(false);

//   const { assignments } = useSelector(
//     (state: RootState) => state.assignmentsReducer
//   );
//   const courseAssignments = assignments.filter((a) => a.course === cid);

//   const dispatch = useDispatch();

//   const handleAddAssignment = (assignmentData: any) => {
//     dispatch(addAssignment({ ...assignmentData, course: cid }));
//     setShowEditor(false);
//   };

//   if (showEditor) {
//     return (
//       <AssignmentEditor
//         onCancel={() => setShowEditor(false)}
//         onSave={handleAddAssignment}
//       />
//     );
//   }

//   return (
//     <div>
//       <AssignmentControls onAddClick={() => setShowEditor(true)} />
//       <br />
//       <br />
//       <br />

//       <ListGroup className="rounded-0" id="wd-assignments">
//         <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
//             <div className="d-flex align-items-center">
//               <BsGripVertical className="me-2 fs-3" />
//               <span className="fw-semibold">ASSIGNMENTS</span>
//             </div>
//             <div className="d-flex align-items-center gap-3">
//               <span className="border rounded-pill px-3 py-1 small text-dark">
//                 {courseAssignments.length * 10}% of Total
//               </span>
//               <span className="fs-5 fw-bold text-dark">+</span>
//               <span className="fs-4 text-dark">⋮</span>
//             </div>
//           </div>

//           <ListGroup className="rounded-0">
//             {courseAssignments.map((assignment) => (
//               <ListGroupItem
//                 key={assignment.id}
//                 className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-start"
//               >
//                 <div className="flex-grow-1 text-dark">
//                   <div className="d-flex">
//                     <BsGripVertical className="me-3 fs-3 text-secondary" />
//                     <div>
//                       <div className="fw-semibold">{assignment.title}</div>
//                       <div className="text-secondary mt-1 small">
//                         <span className="text-danger fw-normal">
//                           Multiple Modules
//                         </span>{" "}
//                         |<span className="fw-semibold"> Not available until</span>{" "}
//                         {assignment.availableFrom}
//                       </div>
//                       <div className="text-secondary mt-1 small">
//                         <span className="fw-semibold"> Due</span>{" "}
//                         {assignment.availableTo} | {assignment.points} pts
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <AssignmentControlButtons />
//               </ListGroupItem>
//             ))}
//           </ListGroup>
//         </ListGroupItem>
//       </ListGroup>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Button, Form, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  // get assignments for this course
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const courseAssignments = assignments.filter((a) => a.course === cid);

  // filter based on search term
  const filteredAssignments = courseAssignments.filter((assignment) =>
    assignment.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* --- Control Buttons --- */}
      <div id="wd-assignments-controls" className="text-nowrap mb-4">
        <Button
          variant="danger"
          onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
          size="lg"
          className="me-2 float-end"
          id="wd-add-assignment-btn"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="me-3 float-end"
          id="wd-add-group-btn"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </Button>

        {/* Search bar */}
        <div className="float-start" style={{ maxWidth: "300px" }}>
          <InputGroup size="lg">
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              id="wd-search-assignment"
              placeholder="Search..."
              aria-label="Search for Assignments"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* --- Assignments List --- */}
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="fw-semibold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="border rounded-pill px-3 py-1 small text-dark">
                {courseAssignments.length * 10}% of Total
              </span>
              <span className="fs-5 fw-bold text-dark">+</span>
              <span className="fs-4 text-dark">⋮</span>
            </div>
          </div>

          <ListGroup className="rounded-0">
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((assignment) => (
                <ListGroupItem
                  key={assignment.id}
                  className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-start"
                >
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment.id}`}
                    className="flex-grow-1 text-decoration-none text-dark"
                  >
                    <div className="d-flex">
                      <BsGripVertical className="me-3 fs-3 text-secondary" />
                      <div>
                        <div className="fw-semibold">{assignment.title}</div>
                        <div className="text-secondary mt-1 small">
                          <span className="text-danger fw-normal">Multiple Modules</span> |{" "}
                          <span className="fw-semibold">Not available until</span>{" "}
                          {assignment.availableFrom || "N/A"}
                        </div>
                        <div className="text-secondary mt-1 small">
                          <span className="fw-semibold">Due</span>{" "}
                          {assignment.availableTo || "N/A"} |{" "}
                          {assignment.points || 100} pts
                        </div>
                      </div>
                    </div>
                  </Link>
                  <AssignmentControlButtons />
                </ListGroupItem>
              ))
            ) : (
              <ListGroupItem className="p-4 text-center text-secondary">
                No assignments found.
              </ListGroupItem>
            )}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

