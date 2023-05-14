import { Link } from 'react-router-dom';

const MeusCoursosList = ({ courses }) => {
  return (
    <div>
        {courses.map(course => (
            course.videos && course.videos.length > 0 && 
                <Link key={course.id} to={`/MeuCursoVideos/${course.id}/${course.videos[0].id}`}>
                <div className="bg-white border border-gray-300 rounded-lg shadow-md flex h-48 w-[1000px] relative mb-5 hover:shadow-xl transform hover:scale-105 transition duration-500">
                    <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>
                    <div className="flex-1 flex flex-col justify-between p-4">
                        <div>
                            <h1 className="text-lg font-bold mb-2">{ course.name }</h1>
                            <div className="mb-2">
                                <p className="text-gray-700 text-sm">Professor: { course.prof }</p>
                                <p className="text-gray-700 text-sm">Avaliação: { course.rating } estrelas</p>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">{ course.description }</p>
                        </div>
                        <div className="absolute top-0 right-0 p-4">
                            <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1">{ course.price }€</div>
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
 
export default MeusCoursosList;