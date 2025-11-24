/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
// import * as db from "../Database";
import * as client from "../Courses/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import * as db from "../Database";
import { RootState } from "../store";
export default function Dashboard() {
  // const courses = db.courses;
  // const [courses, setCourses] = useState<any[]>(db.courses);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  // const { enrollments } = db;
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "images/LOOPY.png", description: "New Description"
  });
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };
  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: { _id: string; }) => course._id !== courseId)));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(setCourses(courses.map((c: { _id: any; }) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};
  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!currentUser) return; 
    fetchCourses();
  }, [currentUser]);
  if (!currentUser) {
    return <div>Redirecting to Sign in...</div>;
  }
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1><hr />
      <h5>New Course
          <button onClick={onAddNewCourse}
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            // onClick={() => dispatch(addNewCourse(course))}
            > 
            Add 
          </button>
          <button onClick={onUpdateCourse}
            className="btn btn-warning float-end me-2"
            // onClick={() => dispatch(updateCourse(course))} 
            id="wd-update-course-click">
              Update 
          </button>
      </h5><br />
      <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} as="textarea" rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
          // .filter((course: { id: string; }) =>
          //   enrollments.some(
          //     (enrollment) =>
          //       enrollment.user === currentUser.id && enrollment.course === course.id))
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((course: any) => (
            <Col key={course.id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  href={`/Courses/${course.id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    // src={`/images/${course.id}.jpg`} 
                    src={course.id ? `/images/${course.id}.jpg` : "/images/LOOPY.png"}
                    style={{ width: "100%", height: "160px", objectFit: "cover" }}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.number} {course.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    <button 
                      // onClick={(event) => {
                      //     event.preventDefault();
                      //     dispatch(deleteCourse(course._id));
                      //   }}
                      onClick={(event) => {
                        event.preventDefault();
                        onDeleteCourse(course._id);
                      }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                    </button>
                    <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                    </button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
