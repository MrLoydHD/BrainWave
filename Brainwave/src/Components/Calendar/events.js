const now = new Date()

export default [
    {
        id: 1,
        title: 'Event 1',
        start: new Date(2023, 3, 1, 19, 0, 0),    
        end: new Date(2023, 3, 1, 22, 30, 0),
        allDay: false,
        desc: 'Big conference for important people',
    }, 
    {
        id: 2,
        title: 'Event 2',
        start: new Date(2023, 3, 2, 7, 0, 0),
        end: new Date(2023, 3, 10, 10, 30, 0),
        allDay: false,
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
]