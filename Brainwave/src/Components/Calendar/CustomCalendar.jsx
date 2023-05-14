import localidade from './localizer';
import { Calendar } from 'react-big-calendar';
import '../Calendar/Calendar.css'
import { useState, useCallback} from 'react';
import events from './events';

export default function CustomCalendar() {


    // Para recuperar os eventos do localStorage
    const savedEvents = JSON.parse(localStorage.getItem('myEvents')) || events;
    const [myEvents, setEvents] = useState(savedEvents);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDates, setSelectedDates] = useState({ start: new Date(), end: new Date() });
    const [title, setTitle] = useState("");
    const [discipline, setDiscipline] = useState("");
    const [tasks, setTasks] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [dicas, setDicas] = useState(false);

    localStorage.setItem('myEvents', JSON.stringify(myEvents));

    const allFieldFilled = () => {
        return title && discipline && tasks;
    }


    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            setModalOpen(true);
            setSelectedDates({ start, end });
        },
        []
    )

    const handleSelectEvent = useCallback(
        (event) => {
            setSelectedEvent(event);
        },
        []
    )

    const handleSaveEvent = () => {
        if (!allFieldFilled()) {
            setDisabled(true);
            setTimeout(() => {
                setDisabled(false);
            }, 3000);
        } else {
            const tasksArray = tasks.split(';').filter((task) => task.trim() !== '');
            //se o evento tiver os campos vazios ele não salva
            if (!title || !discipline || !tasks) {
                toast.error('Preencha todos os campos!');
                return;
            }
            const newEvent = {
                start: isEditMode ? selectedEvent.start : selectedDates.start,
                end: isEditMode ? selectedEvent.end : selectedDates.end,
                title,
                discipline,
                tasks: tasksArray,
            }
            setEvents((prev) => prev.map((event) => event === selectedEvent ? newEvent : event)); 
            setSelectedEvent(newEvent);
            setIsEdited(true);
            setTimeout(() => {
                setIsEdited(false);
            }, 2000);
            setTitle("");
            setDiscipline("");
            setTasks("");
            handleModalClose();
        }
    }

    const handleModalClose = () =>{ 
        setTitle("");
        setDiscipline("");
        setTasks("");
        setModalOpen(false);
        setIsEditMode(false);
    }

    const handleAddEvent = () => {
        if (!allFieldFilled()) {
            setDisabled(true);
            setTimeout(() => {
                setDisabled(false);
            }, 3000);
        } else {
            const tasksArray = tasks.split(';').filter((task) => task.trim() !== ''); //separa as tarefas por ; e remove os espaços em branco
            const newEvent = {
                start: selectedDates.start,
                end: selectedDates.end,
                title,
                discipline,
                tasks: tasksArray,
            }
            setEvents((prev) => [...prev, newEvent]);
            setIsSaved(true);
            setTimeout(() => {
                setIsSaved(false);
            }, 2000);
            setTitle("");
            setModalOpen(false);
            setDiscipline("");
            setTasks("");
        
        }
    }

    return (
        <div style={{ height: 800 }}>
        <Calendar className='bg-green-100 mt-5 ml-5 mr-5 rounded-lg w-4/6 font-bold shadow-lg'
          localizer={localidade}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          selectable={true}
          views={['month']}
          messages={{
            next: "Próximo",
            previous: "Anterior",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            agenda: "Agenda",
            date: "Data",
            time: "Hora",
            event: "Evento",
            noEventsInRange: "Não há eventos no intervalo",
            showMore: (total) => `+ Ver mais (${total})`,
          }}
        />
        {modalOpen && (
        <div>
            <div className="fixed z-10 inset-0 left-2/3 overflow-x-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-scren pt-4 px-5 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                {/* <button className='btn btn-sm btn-circle absolute right-2 top-2 text-lg bg-slate-500 border-slate-500' onClick={handleModalClose}>X</button> */}
                                <h3 className="text-lg font-bold leading-6 text-gray-900" id="modal-title">
                                    Adicionar Evento
                                </h3>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    className="input placeholder:text-gray-500 border-2 input-bordered w-full mb-4"
                                    placeholder="Nome do Evento"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    />
                                </div>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    className="input placeholder:text-gray-500 border-2 input-bordered w-full mb-4"
                                    placeholder="Nome da Disciplina"
                                    value={discipline}
                                    onChange={(e) => setDiscipline(e.target.value)}
                                    required
                                    />
                                </div>
                                <div className="mt-2">
                                    <textarea
                                        className="textarea placeholder:text-gray-500 border-2 textarea-bordered w-full mb-4"
                                        placeholder="Tarefas, separadas por ;"
                                        value={tasks}
                                        onChange={(e) => setTasks(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className={`w-full inline-flex justify-center rounded-md hover:bg-green-900 border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm ${
                                        !allFieldFilled() ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                    onClick={handleAddEvent}
                                >
                                    Adicionar
                                </button>
                                <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleModalClose}
                                >
                                Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        {isSaved && (
            <div className='fixed top-0 right-0 p-6'>
                <div className='toast toast-top toast-end'>
                    <div className='alert alert-success'>
                        <p>Evento criado com sucesso</p>
                    </div>
                </div>
            </div>
        )}
        {disable && (
            <div className='fixed top-0 right-0 p-6'>
                <div className='toast toast-top toast-end'>
                    <div className='alert alert-warning'>
                        <p>Preencha todos os campos</p>
                    </div>
                </div>
            </div>
        )}
        {selectedEvent && <div className="fixed z-10 inset-0 left-2/3 overflow-x-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-5 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                {/* Se o modo de Edição tive desativado, exibe as informações do evento */}
                                {!isEditMode && (
                                <div>
                                    <h3 className="text-xl font-bold text-center mr-4 leading-6 text-gray-900" id="modal-title">
                                        {selectedEvent.title}
                                    </h3>
                                    <p className="mt-4 text-lg ml-10"><span className='font-bold'>Disciplina: </span>{selectedEvent.discipline}</p>
                                    <div className="mt-3 ml-10">
                                        <h4 className="font-bold text-lg">Tarefas:</h4>
                                        <div className='ml-8 text-lg'>
                                        {selectedEvent.tasks.map((task, index) => (
                                            <p key={index}>{task}</p>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                )}
                                {/* Se o modo de Edição estiver ativado, exibe os inputs para edição */}
                                {isEditMode && (
                                    <div>
                                        <h3 className="text-xl font-bold text-center mr-4 leading-6 text-gray-900" id="modal-title">
                                            Editar Evento
                                        </h3>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                className="input placeholder:text-gray-500 border-2 input-bordered w-full mb-4"
                                                placeholder="Nome do Evento"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                className="input placeholder:text-gray-500 border-2 input-bordered w-full mb-4"
                                                placeholder="Nome da Disciplina"
                                                value={discipline}
                                                onChange={(e) => setDiscipline(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <textarea
                                                className="textarea placeholder:text-gray-500 border-2 textarea-bordered w-full mb-4"
                                                placeholder="Tarefas, separadas por ;"
                                                value={tasks}
                                                onChange={(e) => setTasks(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            {/* Se o modo de Edição estiver desativado, exibe o botão de Editar */}
                            {!isEditMode && (
                                <div>
                                    <button 
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md hover:bg-green-900 border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setIsEditMode(true)}
                                    >
                                        Editar
                                    </button> 
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => {setSelectedEvent(null)}}
                                    >
                                        Fechar
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => {setConfirmDelete(true)}}
                                        >
                                        Excluir
                                    </button>
                                </div>
                            )}
                            {/* Se o modo de Edição estiver ativado, exibe os botões de Salvar e Cancelar */}
                            {isEditMode && (
                                <div>
                                    <button
                                        type="button"
                                        className={`w-full inline-flex justify-center rounded-md hover:bg-green-900 border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm ${
                                            !allFieldFilled() ? "opacity-50 cursor-not-allowed" : ""
                                        }`}
                                        onClick={handleSaveEvent}
                                    >
                                        Salvar
                                    </button>
                                    <button
                                        type="button"   
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => {setIsEditMode(false);
                                                        setTitle('')
                                                        setDiscipline('')
                                                        setTasks('')}}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>}
            {isEdited && (
                <div className='fixed top-0 right-0 p-6'>
                    <div className='toast toast-top toast-end'>
                        <div className='alert alert-success'>
                            <p>Evento editado com sucesso</p>
                        </div>
                    </div>
                </div>
            )}
            {confirmDelete && (
                <div>
                    <div className="fixed z-20 inset-0 overflow-x-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                                Tem certeza que quer eliminar este evento?
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {
                                                setEvents((prev) => prev.filter((event) => event !== selectedEvent));
                                                setSelectedEvent(null);
                                                handleModalClose();
                                                setToastMessage("Evento eliminado com sucesso");
                                                setTimeout(() => {
                                                    setToastMessage("");
                                                }, 2000);
                                                setConfirmDelete(false);
                                            }}
                                        >
                                            Sim, eliminar
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {setConfirmDelete(false);}}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {toastMessage && (
                <div className='fixed top-0 right-0 p-6'>
                    <div className='toast toast-top toast-end'>
                        <div className='alert alert-error'>
                            <p>{toastMessage}</p>
                        </div>
                    </div>
                </div>
            )}
            <div className='relative'>
                <div className="absolute bottom-128 right-0 flex mr-4 justify-end gap-2">
                    {dicas && (
                        <div className="text-block ml-4 bg-green-200 font-bold rounded shadow-lg">
                            <p>Dica- Clica no dia para marcares um evento</p>
                            <p>Dica- Para marcar vários dias arrastar no Calendário </p>
                            <p>Dica- Clica no evento para ver/editar</p>
                        </div>
                    )}
                    <button
                        className="w-10 h-10 rounded-full flex font-bold text-xl items-center justify-center bg-green-300 shadow-lg"
                        onClick={() => setDicas(!dicas)}
                    >
                        ?
                    </button>
                </div>
            </div>
    </div>
  );
}
