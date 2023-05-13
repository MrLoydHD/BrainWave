import localidade from './localizer';
import { Calendar } from 'react-big-calendar';
import '../Calendar/Calendar.css'
import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../Hooks/useFetch';

export default function CustomCalendarFailed() {
  const { error, isPending, data: events } = useFetch('http://localhost:5001/events/');
  const [myEventsList, setMyEventsList] = useState([]);

    useEffect(() => {
      if (!events || !events.events) return;

      setMyEventsList(events);

      const newEvents = events.events.map((event) => {
        const start = new Date(event.start[0], event.start[1], event.start[2], event.start[3], event.start[4]);
        const end = new Date(event.end[0], event.end[1], event.end[2], event.end[3], event.end[4]);
        console.log(start, end);
        return { ...event, start, end };
      }, [events]);
      setMyEventsList(newEvents);
    }, [events]);

    const handleSelected = useCallback(({start, end}) => {
      const title = window.prompt('Nome do evento');
      if (title) {
        start = [start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes()];
        end = [end.getFullYear(), end.getMonth(), end.getDate(), end.getHours(), end.getMinutes()];
        const newEvent = { start, end, title };
        
        fetch('http://localhost:5001/events/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEvent),
        }).then(response => {
          if (response.ok) {
            setMyEventsList((prev) => [...prev, newEvent]);
          } else {
            throw new Error('Não foi possível criar o evento');
          }
        }).catch(error => console.error('Erro ao criar evento', error));
      }
    }, [setMyEventsList]);


    //muda a linguagem do calendário para portugues do brasil
    return (
        <div style={{ height: 800 }}>
        {!isPending && <Calendar className='bg-green-100 mt-5 ml-5 mr-5 rounded-lg w-4/6 font-bold shadow-lg'
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
        />}
        {!isPending && console.log(myEventsList)}
        </div>
    );
  }

  CustomCalendar.propTypes = {
    dayLayoutAlgorithm: PropTypes.string,
  }
