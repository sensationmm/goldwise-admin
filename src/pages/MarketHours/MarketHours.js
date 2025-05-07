import { useState } from 'react';
import BaseLayout from '../BaseLayout/BaseLayout'
import { Button, Tab, Tabs } from '@mui/material'
// import { Scheduler } from "@aldabil/react-scheduler";


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

      {/* <Scheduler
        view="month"
        events={[
          {
            event_id: 1,
            title: "Event 1",
            start: new Date("2021/5/2 09:30"),
            end: new Date("2021/5/2 10:30"),
          },
          {
            event_id: 2,
            title: "Event 2",
            start: new Date("2021/5/4 10:00"),
            end: new Date("2021/5/4 11:00"),
          },
        ]}
      /> */}
      </BaseLayout>
    )
}

export default MarketHours