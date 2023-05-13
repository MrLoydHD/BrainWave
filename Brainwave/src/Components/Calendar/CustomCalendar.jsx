import localidade from './localizer';
import { Calendar } from 'react-big-calendar';
import '../Calendar/Calendar.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import events from './events';
import { useCallback } from 'react';

export default function CustomCalendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [myEventsList, setMyEventsList] = useState(events);


    const handleSelected = useCallback(({start, end}) => {
      const title = window.prompt('Nome do evento');
      if (title) {
        setMyEventsList((prev) => [...prev, {start, end, title}])
        }
      }, [setMyEventsList]
    );

    const closeModal = () => {
      setIsModalOpen(false);
    }

    //muda a linguagem do calendário para portugues do brasil
    return (
        <div style={{ height: 800 }}>
        <Calendar className='bg-green-100 mt-5 ml-5 mr-5 rounded-lg w-4/6 font-bold shadow-lg'
          localizer={localidade}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelected}
          selectable={true}
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
        </div>
    );
  }

  CustomCalendar.propTypes = {
    dayLayoutAlgorithm: PropTypes.string,
  }
