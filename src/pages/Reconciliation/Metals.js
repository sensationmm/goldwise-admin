import { Button, FormControl, Input, InputLabel, MenuItem, Select, Tab, Tabs } from "@mui/material";
import BaseLayout from "../BaseLayout/BaseLayout";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import MetalMovement from "./Metals/MetalMovement";
import VaultLedgers from "./Metals/VaultLedgers";
import Assets from "./Metals/Assets";

const Metals = () => {
  const [screen, setScreen] = useState(0)
  const [reportFrom, setReportFrom] = useState(null)

  return (
    <BaseLayout
      title="Metals Administration"
      action={
        screen !== 1 && <div className="grid grid-cols-3 gap-4">
          <DatePicker label="Date From" value={reportFrom} onChange={setReportFrom} format="DD/MM/YYYY" />
          <Button variant="contained" color="secondary" disabled>Search</Button>
          <Button variant="outlined" color="secondary" disabled>Reset</Button>
        </div>
      }
    >
      <Tabs value={screen} onChange={(_, newValue) => setScreen(newValue)}>
        <Tab label="Metal Movement" />
        <Tab label="Vault Ledgers" />
        <Tab label="Assets" />
      </Tabs>

      <div className="mt-8">
        {(screen === 0 || screen === 1 )&&
          <>
            <h2>Move Metals</h2>

            <div className="grid grid-cols-5 gap-5 mt-8 mb-8">
              <FormControl>
                <InputLabel id="report-source">Source</InputLabel>
                <Select id="select-source" label="Source">
                  <MenuItem value={0}>GHL | London | StoneX</MenuItem>
                  <MenuItem value={1}>GHL | Zurich | StoneX</MenuItem>
                  <MenuItem value={2}>GEUAB | London | StoneX</MenuItem>
                  <MenuItem value={3}>GEUAB | Zurich | StoneX</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="report-product">Product</InputLabel>
                <Select id="select-product" label="Product">
                  <MenuItem value={0}>Digital Gold</MenuItem>
                  <MenuItem value={1}>Digital Silver</MenuItem>
                  <MenuItem value={2}>Digital Platinun</MenuItem>
                  <MenuItem value={3}>Digital Palladium</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="report-destination">Destination</InputLabel>
                <Select id="select-destination" labelId="report-destination" label="Destination">
                  <MenuItem value={0}>GHL | London | Brinks</MenuItem>
                  <MenuItem value={1}>GHL | Zurich | Brinks</MenuItem>
                  <MenuItem value={2}>GEUAB | London | Brinks</MenuItem>
                  <MenuItem value={3}>GEUAB | Zurich | Brinks</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="report-weight">Weight (t/oz)</InputLabel>
                <Input />
              </FormControl>

              <Button variant="contained" size="large">Move Metal</Button>
            </div>
          </>
        }

        {screen === 0 && <MetalMovement />}

        {screen === 1 && <VaultLedgers />}

        {screen === 2 && <Assets />}
      </div>
    </BaseLayout>
  );
};

export default Metals;
