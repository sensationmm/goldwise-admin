// import events from '../../mocks/events';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


const TradingPerdiods = () => {
  return (
    <div className='py-10 px-3'>
      { /* https://fullcalendar.io/ */}
      <FullCalendar
        plugins={[ dayGridPlugin,timeGridPlugin,listPlugin ]}
        initialView="timeGridWeek"
        weekends={true}
        events={[
          { title: 'event 1', start: new Date('2025-05-09Z10:00:00'), end: new Date('2025-05-09Z13:00:00') },
          { title: 'The Cycle of the Seasons', start: new Date('2025-05-06Z05:00:00'), end: new Date('2025-05-06Z07:00:00') },
          { title: 'event 2', date: '2025-05-02' }
        ]}
        headerToolbar={{
          start: 'prev,next',
          center: 'title',
          end: 'today timeGridDay,timeGridWeek,dayGridMonth,listWeek' 
        }}
        firstDay={1}
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        }}
        dayHeaderFormat={{ weekday: 'short', month: 'short', day: 'numeric', omitCommas: true }}
        // eventClick={(info) => console.log(info.event.title)}
        nowIndicator
        displayEventTime
      />
    </div>
  )
}

export default TradingPerdiods