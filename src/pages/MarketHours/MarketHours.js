import { useState } from 'react';
import BaseLayout from '../BaseLayout/BaseLayout'
import { Button, Tab, Tabs } from '@mui/material';
import events from '../../mocks/events';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


const MarketHours = () => {
  const [view, setView] = useState(0);

    return (
        
    <BaseLayout
      title="Market Hours"
      action={
          <Button
            variant="contained"
            size="large"
          >Edit Trading Periods</Button>
      }
    >

      <Tabs value={view} onChange={(_, newValue) => setView(newValue)}>
        <Tab label="Trading Periods" />
        <Tab label="Metal Spreads" />
      </Tabs>

      <div className='py-10 px-3'>
        <FullCalendar
          plugins={[ dayGridPlugin,timeGridPlugin,listPlugin ]}
          initialView="timeGridWeek"
          weekends={true}
          events={[
            { title: 'event 1', date: '2025-05-09' },
            { title: 'event 2', date: '2025-05-02' }
          ]}
          headerToolbar={{
            start: 'prev,next',
            center: 'title',
            end: 'today timeGridDay,timeGridWeek,dayGridMonth,listWeek' 
          }}
          firstDay={1}
        />
        </div>
      </BaseLayout>
    )
}

export default MarketHours