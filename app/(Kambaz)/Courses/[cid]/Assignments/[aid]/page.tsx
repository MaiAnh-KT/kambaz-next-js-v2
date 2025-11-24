// /* eslint-disable @typescript-eslint/no-explicit-any */
// // "use client";

// // import { Form, Row, Col } from "react-bootstrap";
// // import { useParams } from "next/navigation";
// // import Link from "next/link";
// // import * as db from "../../../../Database";

// // export default function AssignmentEditor() {
// //   const { cid, aid } = useParams();

// //   // Load the assignment by ID
// //   const assignment = db.assignments.find((a) => a.id === aid);

// //   if (!assignment) {
// //     return <div className="p-4">Assignment not found.</div>;
// //   }

// //   return (
// //     <div id="wd-assignments-editor" className="p-4">
// //       <h4 className="mb-4">{assignment.title}</h4>
// //       <Form>
// //         {/* Assignment Name */}
// //         <Form.Group className="mb-3" controlId="wd-name">
// //           <Form.Label>Assignment Name</Form.Label>
// //           <Form.Control type="text" defaultValue={assignment.title} />
// //         </Form.Group>

// //         {/* Description */}
// //         <Form.Group className="mb-3" controlId="wd-description">
// //           <Form.Label>Description</Form.Label>
// //           <Form.Control
// //             as="textarea"
// //             rows={3}
// //             defaultValue={assignment.description || ""}
// //             placeholder="Add a brief description..."
// //           />
// //         </Form.Group>

// //         {/* Points and Group */}
// //         <Row className="mb-3">
// //           <Col md={6}>
// //             <Form.Group controlId="wd-points">
// //               <Form.Label>Points</Form.Label>
// //               <Form.Control
// //                 type="number"
// //                 defaultValue={assignment.points || 100}
// //               />
// //             </Form.Group>
// //           </Col>
// //           <Col md={6}>
// //             <Form.Group controlId="wd-group">
// //               <Form.Label>Assignment Group</Form.Label>
// //               <Form.Select defaultValue="ASSIGNMENTS">
// //                 <option value="ASSIGNMENTS">ASSIGNMENTS</option>
// //               </Form.Select>
// //             </Form.Group>
// //           </Col>
// //         </Row>

// //         {/* Display Grade and Submission Type */}
// //         <Row className="mb-3">
// //           <Col md={6}>
// //             <Form.Group controlId="wd-display-grade-as">
// //               <Form.Label>Display Grade As</Form.Label>
// //               <Form.Select defaultValue="PERCENTAGE">
// //                 <option value="PERCENTAGE">Percentage</option>
// //                 <option value="POINTS">Points</option>
// //               </Form.Select>
// //             </Form.Group>
// //           </Col>
// //           <Col md={6}>
// //             <Form.Group controlId="wd-submission-type">
// //               <Form.Label>Submission Type</Form.Label>
// //               <Form.Select defaultValue="ONLINE">
// //                 <option value="ONLINE">Online</option>
// //                 <option value="ON_PAPER">On Paper</option>
// //                 <option value="EXTERNAL_TOOL">External Tool</option>
// //               </Form.Select>
// //             </Form.Group>
// //           </Col>
// //         </Row>

// //         {/* Online Entry Options */}
// //         <Form.Group className="mb-3">
// //           <Form.Label>Online Entry Options</Form.Label>
// //           <div>
// //             {[
// //               "Text Entry",
// //               "Website URL",
// //               "Media Recordings",
// //               "Student Annotation",
// //               "File Upload",
// //             ].map((opt, idx) => (
// //               <Form.Check key={idx} type="checkbox" label={opt} />
// //             ))}
// //           </div>
// //         </Form.Group>

// //         {/* Assign To */}
// //         <Form.Group className="mb-3" controlId="wd-assign-to">
// //           <Form.Label>Assign To</Form.Label>
// //           <Form.Control type="text" defaultValue="Everyone" />
// //         </Form.Group>

// //         {/* Due and Availability Dates */}
// //         <Row className="mb-3">
// //           <Col md={4}>
// //             <Form.Group controlId="wd-due-date">
// //               <Form.Label>Due</Form.Label>
// //               <Form.Control
// //                 type="date"
// //                 defaultValue={assignment.availableTo || "2024-05-13"}
// //               />
// //             </Form.Group>
// //           </Col>
// //           <Col md={4}>
// //             <Form.Group controlId="wd-available-from">
// //               <Form.Label>Available From</Form.Label>
// //               <Form.Control
// //                 type="date"
// //                 defaultValue={assignment.availableFrom || "2024-05-06"}
// //               />
// //             </Form.Group>
// //           </Col>
// //           <Col md={4}>
// //             <Form.Group controlId="wd-available-until">
// //               <Form.Label>Available Until</Form.Label>
// //               <Form.Control
// //                 type="date"
// //                 defaultValue={assignment.availableTo || "2024-05-20"}
// //               />
// //             </Form.Group>
// //           </Col>
// //         </Row>

// //         {/* Action Buttons */}
// //         <div className="text-end mt-4">
// //           <Link
// //             href={`/Courses/${cid}/Assignments`}
// //             className="btn btn-secondary me-2"
// //           >
// //             Cancel
// //           </Link>
// //           <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">
// //             Save
// //           </Link>
// //         </div>
// //       </Form>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";

// export default function AssignmentEditor({
//   onCancel,
//   onSave,
// }: {
//   onCancel: () => void;
//   onSave: (assignmentData: any) => void;
// }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [points, setPoints] = useState(100);
//   const [dueDate, setDueDate] = useState("");
//   const [availableFrom, setAvailableFrom] = useState("");
//   const [availableUntil, setAvailableUntil] = useState("");

//   return (
//     <div id="wd-assignment-editor" className="p-4">
//       <h2 className="mb-4">New Assignment</h2>
//       <Form>
//         {/* Title */}
//         <Form.Group className="mb-3">
//           <Form.Label>Assignment Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </Form.Group>

//         {/* Description */}
//         <Form.Group className="mb-3">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </Form.Group>

//         {/* Points */}
//         <Row className="mb-3">
//           <Col md={4}>
//             <Form.Group>
//               <Form.Label>Points</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={points}
//                 onChange={(e) => setPoints(Number(e.target.value))}
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Dates */}
//         <Row className="mb-3">
//           <Col md={4}>
//             <Form.Group>
//               <Form.Label>Due Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={dueDate}
//                 onChange={(e) => setDueDate(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//           <Col md={4}>
//             <Form.Group>
//               <Form.Label>Available From</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={availableFrom}
//                 onChange={(e) => setAvailableFrom(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//           <Col md={4}>
//             <Form.Group>
//               <Form.Label>Available Until</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={availableUntil}
//                 onChange={(e) => setAvailableUntil(e.target.value)}
//               />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Actions */}
//         <div className="text-end">
//           <Button variant="secondary" className="me-2" onClick={onCancel}>
//             Cancel
//           </Button>
//           <Button
//             variant="danger"
//             onClick={() =>
//               onSave({ title, description, points, dueDate, availableFrom, availableUntil })
//             }
//           >
//             Save
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// }

"use client";

import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const isNew = aid === "new";
  const existing = assignments.find((a) => a.id === aid);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  useEffect(() => {
    if (!isNew && existing) {
      setTitle(existing.title || "");
      setDescription(existing.description || "");
      setPoints(existing.points || 100);
      setDueDate(existing.dueDate || "");
      setAvailableFrom(existing.availableFrom || "");
      setAvailableUntil(existing.availableTo || "");
    }
  }, [isNew, existing]);

  const handleSave = () => {
    const data = {
      id: isNew ? Date.now().toString() : aid,
      title,
      description,
      points,
      dueDate,
      availableFrom,
      availableUntil,
      course: cid,
    };

    if (isNew) dispatch(addAssignment(data));
    else dispatch(updateAssignment(data));

    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" className="p-4">
      <h2 className="mb-4">
        {isNew ? "New Assignment" : `Edit ${title || "Assignment"}`}
      </h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Points</Form.Label>
              <Form.Control
                type="number"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Available From</Form.Label>
              <Form.Control
                type="date"
                value={availableFrom}
                onChange={(e) => setAvailableFrom(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Available Until</Form.Label>
              <Form.Control
                type="date"
                value={availableUntil}
                onChange={(e) => setAvailableUntil(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-end">
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => router.push(`/Courses/${cid}/Assignments`)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
