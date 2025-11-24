"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation">
      <ListGroup variant="flush" className="wd">
        {links.map((link) => {
          const href = `/Courses/${cid}/${link}`;
          const isActive = pathname?.startsWith(href);

          return (
            <ListGroupItem key={link} className="p-0 border-0">
              <Link href={href} passHref>
                <Button
                  variant={isActive ? "danger" : "light"}
                  className="w-100 text-start border-0 rounded-0 wd-course-button"
                  id={`wd-course-${link.toLowerCase()}-link`}
                >
                  {link}
                </Button>
              </Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}
