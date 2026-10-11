import './App.css';

const schedule = {
    "title": "CS Courses for 2018-2019",
    "courses": {
      "F101" : {
        "term": "Fall",
        "number": "101",
        "meets" : "MWF 11:00-11:50",
        "title" : "Computer Science: Concepts, Philosophy, and Connections"
      },
      "F110" : {
        "term": "Fall",
        "number": "110",
        "meets" : "MWF 10:00-10:50",
        "title" : "Intro Programming for non-majors"
      },
      "S313" : {
        "term": "Spring",
        "number": "313",
        "meets" : "TuTh 15:30-16:50",
        "title" : "Tangible Interaction Design and Learning"
      },
      "S314" : {
        "term": "Spring",
        "number": "314",
        "meets" : "TuTh 9:30-10:50",
        "title" : "Tech & Human Interaction"
      }
    }
  };

type Course = {
  term: string;
  number: string;
  meets: string;
  title: string;
};

interface CourseListProps {
  courses: Record<string, Course>;
}

const Banner = ({ title }: { title: string }) => (
  <h1>{title}</h1>
);

const CourseCard = ({ course }: { course: Course }) => (
  <li className="flex flex-col rounded-lg border border-gray-300 bg-white p-4">
    <h2 className="text-xl">{course.term} CS {course.number}</h2>
    <p className="mt-2 mb-4 grow text-sm leading-6">{course.title}</p>
    <p className="border-t border-gray-300 pt-3 text-sm">{course.meets}</p>
  </li>
);

const CourseList = ({ courses }: CourseListProps ) => (
  <ul className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-2 font-sans">
    {Object.entries(courses).map(([id, course]) => (
      <CourseCard key={id} course={course} />
    ))}
  </ul>
);

const App = () => (
  <main>
    <Banner title={schedule.title} />
    <CourseList courses={schedule.courses} />
  </main>
);

export default App;