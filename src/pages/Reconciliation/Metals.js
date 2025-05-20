import { Button, FormControl, Input, InputLabel, MenuItem, Select, Tab, Tabs } from "@mui/material";
import BaseLayout from "../BaseLayout/BaseLayout";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import MetalMovement from "./Metals/MetalMovement";
import VaultLedgers from "./Metals/VaultLedgers";
import Assets from "./Metals/Assets";
import HistoricAssetReports from "./Metals/HistoricAssetReports";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../reducers/loaderSlice.reducer";
import reconciliationService from "../../services/reconciliation.service";
import { useParams } from "react-router-dom";

const Metals = () => {
  const { tab } = useParams()
  const dispatch = useDispatch()
  const [screen, setScreen] = useState(0)
  const [reportFrom, setReportFrom] = useState(null)
  const [reportTo, setReportTo] = useState(null)
  const [reportEntity, setReportEntity] = useState('')

  const [entitiesList, setEntitiesList] = useState([])

  const getEntities = async () => {
    try {
      dispatch(showLoader())
      const entities = await reconciliationService.getEntities();
      setEntitiesList(entities.data.response.map(ent => ({ value: ent.idCompanyGuid, label: ent.companyName})));
    } catch (e) {
      //todo: display error if happen
      console.log(e)
    } finally {
      dispatch(hideLoader())
    }
  }

  const handleSearch = () => {
  }

  const resetForm = () => {
    setReportFrom(null)
    setReportTo(null)
    setReportEntity(null) 
  }
  
  useEffect(() => {
    getEntities()
  }, []);
  
  useEffect(() => {
    tab && setScreen(parseInt(tab))
  }, [tab]);

  return (
    <BaseLayout
      title="Metals Administration"
      action={
        <>
        {(screen === 0  || screen === 1) && <div className="relative grid grid-cols-3 gap-4">
          <DatePicker label="Date From" value={reportFrom} onChange={setReportFrom} format="DD/MM/YYYY" />
          <Button variant="contained" color="secondary" disabled>Search</Button>
          <Button variant="contained" color="primary" disabled>Reset</Button>
          <div className="w-full absolute text-sm bottom-[-40px] text-right"><span className="font-bold">Results From:</span> 03 JAN 2023 10:00:02 GMT</div>
        </div>}

        {(screen === 2) && <div className="relative grid grid-cols-3 gap-4">
          <Button variant="outlined" color="secondary" disabled>Refresh</Button>
          <Button variant="outlined" color="secondary" disabled>Edit Details</Button>
          <Button variant="contained" color="primary">Save Report</Button>
          <div className="w-full absolute text-sm bottom-[-40px] text-right"><span className="font-bold">Results From:</span> 03 JAN 2023 10:00:02 GMT</div>
        </div>}
        </>
      }
    >
      <Tabs value={screen} onChange={(_, newValue) => setScreen(newValue)}>
        <Tab label="Metal Movement" />
        <Tab label="Vault Ledgers" />
        <Tab label="Assets" />
        <Tab label="Historic Assets" />
      </Tabs>

      <div className="mt-8">
        {(screen === 0 || screen === 1 ) ?
          <>
            <h2>Move Metals</h2>

            <div className="grid grid-cols-5 gap-5 mt-8 mb-8">
              <FormControl>
                <InputLabel id="report-source">Source</InputLabel>
                <Select id="select-source" label="Source" value={''}>
                  <MenuItem value={0}>GHL | UK - London | StoneX</MenuItem>
                  <MenuItem value={1}>GHL | USA - New York | StoneX</MenuItem>
                  <MenuItem value={2}>GHL | Switzerland - Zurich | StoneX</MenuItem>
                  <MenuItem value={3}>GHL | UK - London | Brinks</MenuItem>
                  <MenuItem value={4}>GHL | USA - New York | Brinks</MenuItem>
                  <MenuItem value={5}>GHL | Switzerland - Zurich | Brinks</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="report-product">Product</InputLabel>
                <Select id="select-product" label="Product" value={''}>
                  <MenuItem value={0}>Fractional Gold</MenuItem>
                  <MenuItem value={1}>Fractional Silver</MenuItem>
                  <MenuItem value={2}>Fractional Platinun</MenuItem>
                  <MenuItem value={3}>Fractional Palladium</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="report-destination">Destination</InputLabel>
                <Select id="select-destination" labelId="report-destination" label="Destination" value={''}>
                  <MenuItem value={0}>GHL | UK - London | StoneX</MenuItem>
                  <MenuItem value={1}>GHL | USA - New York | StoneX</MenuItem>
                  <MenuItem value={2}>GHL | Switzerland - Zurich | StoneX</MenuItem>
                  <MenuItem value={3}>GHL | UK - London | Brinks</MenuItem>
                  <MenuItem value={4}>GHL | USA - New York | Brinks</MenuItem>
                  <MenuItem value={5}>GHL | Switzerland - Zurich | Brinks</MenuItem>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="report-weight">Weight (KG)</InputLabel>
                <Input />
              </FormControl>

              <Button variant="contained" size="large">Move Metal</Button>
            </div>
          </>
          : screen === 3 && <>
            <div className="grid grid-cols-5 gap-5 mt-8 mb-8">
              <DatePicker label="Date From" value={reportFrom} onChange={setReportFrom} format="DD/MM/YYYY" maxDate={reportTo} />

              <DatePicker label="Date To" value={reportTo} onChange={setReportTo} format="DD/MM/YYYY" minDate={reportFrom} />

              <FormControl>
                <InputLabel id="report-entity" disabled={entitiesList.length === 0}>Entity</InputLabel>
                <Select
                  id="select-entity"
                  labelId="report-entity"
                  label="Entity"
                  value={entitiesList.length > 0 ? reportEntity : ''}
                  onChange={e => setReportEntity(e.target.value)}
                  disabled={entitiesList.length === 0}
                >
                  <MenuItem value={'all'}>All</MenuItem>
                  {entitiesList.map((ent, count) => <MenuItem key={`select-entity-${count}`} value={ent.value}>{ent.label}</MenuItem>)}
                </Select>
              </FormControl>

              <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleSearch}
                disabled = {reportFrom === null || reportTo === null}
              >
                Search
              </Button>

              <Button variant="outlined" onClick={resetForm} color="secondary">Reset</Button>
            </div>
          </>
        }

        {screen === 0 && <MetalMovement />}

        {screen === 1 && <VaultLedgers />}

        {screen === 2 && <Assets />}

        {screen === 3 && <HistoricAssetReports />}
      </div>
    </BaseLayout>
  );
};

export default Metals;
