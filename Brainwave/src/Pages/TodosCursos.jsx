import Navbar from '../Components/Navbar'
import Search from '../Components/TodosCursosSearch'
import Courses from '../Components/TodosCursosCourses'
import useFetch from '../Hooks/useFetch';
import { useEffect, useState, useRef } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function TodosCursos() {
    const { error, isPending, data: courses } = useFetch('http://localhost:3000/courses/');
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [choice, setChoice] = useState("");
    const [valorSlider, setValorSlider] = useState(200);
    const [selectedRadio, setSelectedRadio] = useState('');
    const [unreapeatedSubjects, setUnreapeatedSubjects] = useState([]);
    const selectRef = useRef(null);
    const [selectedFormControl, setSelectedFormControl] = useState(null);

    // atualiza o estado filteredCourses com o valor de courses
    useEffect(() => {
        setFilteredCourses(courses);
        setTimeout(() => {
            setUnreapeatedSubjects([...new Set(courses.map(course => course.subject))]);

        }, 2000);
    }, [courses]);

    // atualiza o estado choice com o valor do dropdown
    const handleDrop = (event) => {
        setChoice(event.target.value);
    }

    // atualiza o estado valorSlider com o valor do slider
    const handleChange = (value) => {
        setValorSlider(value);
    }

    // atualiza o estado selectedRadio com o valor do radio button
    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
        setSelectedFormControl(event.target);
      };

    const filterResults = () => {
        var filtered = [];
        if (choice === "") {
            filtered = courses;

        } else{
            for (var i = 0; i < courses.length; i++) {
                if (choice === courses[i].subject) {
                    filtered.push(courses[i]);
                }
            }
        } 
        
        filtered = filtered.filter(course => course.price <= valorSlider);

        switch(selectedRadio){
            case '1ouMais':
                setFilteredCourses(filtered.filter(course => course.rating >= 1));
                break;
            case '2ouMais':
                setFilteredCourses(filtered.filter(course => course.rating >= 2));
                break;
            case '3ouMais':
                setFilteredCourses(filtered.filter(course => course.rating >= 3));
                break;
            case '4ouMais':
                setFilteredCourses(filtered.filter(course => course.rating >= 4));
                break;
            default:
                setFilteredCourses(filtered);
                break;
        }
    }

    const resetFilters = () => {
        // Volta o select para a opção padrão
        selectRef.current.value = '';
        
        // Redefine o estado dos outros campos
        setChoice('');
        setValorSlider(200);
        setSelectedRadio('');
        setFilteredCourses(courses);

        if (selectedFormControl) {
            selectedFormControl.checked = false;
          }
    }

    return (
        <div className='lili min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header> 
            <main>
                <div className='flex justify-center items-center mt-10'>
                    {!isPending && <Search courses={courses}></Search>}
                </div>
                <div className='flex w-full items-start mt-10'>
                    <div className='w-1/4 ml-32 p-10 border bg-white rounded-lg shadow-lg'>
                        <div className='flex justify-center'>
                            <h2 className="text-2xl font-bold mb-4">Filtros</h2>
                        </div>
                        <div>
                            <div className="mb-10 mt-4">
                                <h3 htmlFor="disciplina" className="text-xl font-bold mb-4">Disciplina:</h3>
                                <select id="disciplina" name="disciplina" className="select select-bordered w-2/3" onChange={handleDrop} ref={selectRef}>
                                <option value="">Todas as disciplinas</option>
                                {!isPending && unreapeatedSubjects.map(subject => (
                                    <option value={subject}>{subject}</option>
                                ))}
                                {console.log(choice)}
                                </select>
                            </div>
                            <div className="items-center mb-10">
                                <h3 htmlFor="precoMaximo" className="text-xl font-bold mb-4">Preço Máximo: {valorSlider}€/mês</h3>
                                <Slider min={0} max={200} value={valorSlider} onChange={handleChange} className='slider-custom'/>
                            </div>
                            <div className='mb-10'>
                                <h3 htmlFor="Feedback" className="text-xl font-bold mb-4">Avaliação:</h3>
                                <div name="Feedback">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                                <p className='ml-1 mt-1'>ou mais</p>
                                            </span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-black-500" id='1ouMais' onChange={handleRadioChange}/>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                                <p className='ml-1 mt-1'>ou mais</p>
                                            </span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-black-500" id='2ouMais' onChange={handleRadioChange}/>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                                <p className='ml-1 mt-1'>ou mais</p>
                                            </span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-black-500" id='3ouMais' onChange={handleRadioChange}/>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                                <p className='ml-1 mt-1'>ou mais</p>
                                            </span> 
                                            <input type="radio" name="radio-10" className="radio checked:bg-black-500" id='4ouMais' onChange={handleRadioChange}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <button className="btn bg-red-800 content-center border-red-800 py-4 text-xl text-white hover:bg-red-900 hover:border-red-900" onClick={resetFilters}>Apagar filtros</button>
                            <button className="btn py-4 bg-green-600 border-green-600 hover:bg-green-900 hover:border-green-900 text-xl content-center text-white" onClick={filterResults}>Aplicar filtros</button>
                        </div>
                    </div>
                    <div className='w-3/4 p-10'>
                        <Courses error={error} isPending={isPending} courses={filteredCourses}></Courses>
                    </div>
                </div>
                
            </main>
        </div>
    )
}

export default TodosCursos