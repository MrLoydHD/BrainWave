import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  return (
    <div>
        {courses.map(course => (
            <Link to={`/TodosCursos/${course.id}`}>
                <div className="bg-white border border-gray-300 rounded-lg shadow-lg flex h-72 w-10/12 relative mb-5 ml-24 hover:shadow-xl transform hover:scale-105 transition duration-500">
                    <div className="w-1/2 bg-cover rounded-l-lg bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>
                    <div className="flex-1 flex flex-col justify-between p-4">
                        <div>
                            <h1 className="text-lg font-bold mb-2">{ course.name }</h1>
                            <div className="mb-2">
                                <p className="text-gray-700 text-sm">Professor: { course.prof }</p>
                                <p className="text-gray-700 text-sm flex flex-row items-center">Avaliação: {course.rating} <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></p>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">{ course.medium_description }</p>
                        </div>
                        <div className="absolute top-0 right-0 p-4">
                            <div className="bg-green-500 text-white text-lg font-semibold rounded-full px-3 py-1">{ course.price }€</div>
                        </div>
                        <div className="absolute bottom-0 right-0 p-4">
                            <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">{ course.subject }</div>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </div>
  );
}
 
export default CourseList;