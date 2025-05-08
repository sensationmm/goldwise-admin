import { Button, Tab, Tabs } from "@mui/material";
import BaseLayout from "../BaseLayout/BaseLayout";
import { useState } from "react";
import TradingPerdiods from "./TradingPeriods";
import MetalSpreads from "./MetalSpreads";

const MarketHours = () => {
  const [screen, setScreen] = useState(0)

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
      <Tabs value={screen} onChange={(_, newValue) => setScreen(newValue)}>
        <Tab label="Trading Periods" />
        <Tab label="Metal Spreads" />
      </Tabs>

      <div className="mt-8">

        {screen === 0 && <TradingPerdiods />}

        {screen === 1 && <MetalSpreads />}
      </div>
    </BaseLayout>
  );
};

export default MarketHours;
