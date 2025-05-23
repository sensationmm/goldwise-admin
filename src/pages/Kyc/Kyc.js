import {Link} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import customerAmlService from '../../services/customerAml.service'
import customerDetailService from '../../services/customerDetail.service';
import Locked from './Locked';
import KYCStatus from './KYCStatus';
import {useDispatch} from "react-redux";
import {hideLoader, showLoader} from "../../reducers/loaderSlice.reducer";
import { useSelector } from 'react-redux'
import Flag from '../../components/atoms/Flag/Flag';
import BaseLayout from '../BaseLayout/BaseLayout';
import { Tab, Tabs } from '@mui/material';
import DataTable from '../../components/atoms/DataTable/DataTable';
import UsersDataStructure from '../../dataStructures/users.json';
import Active from '../../components/atoms/Active';
import SearchField from '../../components/atoms/SearchField';

const Kyc = (props) => {
    const [customerView, setCustomerView] = useState(0);
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.search?.searchTerm)
    const [identityStatusId, setIdentityStatusId] = useState("0")
    const [isgwMonitored] = useState("0")
    const [customers, setCustomers] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

    const getCustomers = async (displayLoader) => {
        try {
            if (!displayLoader) dispatch(showLoader());
            let customersPromise;
            if (identityStatusId === "0") {
              customersPromise = await customerDetailService.getAllCustomers(searchTerm);
            } else {
              customersPromise = await customerAmlService.listAml(identityStatusId, isgwMonitored, searchTerm);
            }
            setCustomers(prevCustomers => customersPromise);
        } catch (e) {
            console.error("Error occurred:", e);
            // Display or handle the error
        } finally {
            dispatch(hideLoader())
            setSortOrder('');
        }
    }

    const idStatuses = ['0','4','5,9','6,10,11']

    useEffect(() => {
      if (sortOrder === "") {
          setSortOrder('dateDesc');
      }
    },[sortOrder]);

    useEffect(() => {
      if (searchTerm === "" || searchTerm.length >= 3) {
        getCustomers(true);
      }
    }, [searchTerm]);
      
    useEffect(() => {
        getCustomers(true);
    }, [identityStatusId]);

    const sortKycList = () => {
      if (customers) {
        const sortedCustomers = [...customers].sort((a, b) => {
          const nameA = (a.forename ? a.forename + ' ' + a.surname : a.fullName).toUpperCase();
          const nameB = (b.forename ? b.forename + ' ' + b.surname : b.fullName).toUpperCase();
          const dateA = new Date(a.dateCreated ? a.dateCreated : a.identityLastUpdatedDate).getTime();
          const dateB = new Date(b.dateCreated ? b.dateCreated : b.identityLastUpdatedDate).getTime();
    
          if (sortOrder === 'nameAsc') {
            return nameA.localeCompare(nameB);
          } else if (sortOrder === 'nameDesc') {
            return nameB.localeCompare(nameA);
          } else if (sortOrder === 'dateDesc') {
            return dateB - dateA;
          } else {
            return dateA - dateB;
          }
        });
        setCustomers(sortedCustomers);
      }
    };

    useEffect(() => {
        sortKycList();
    }, [sortOrder]);

    useEffect(() => {
      setIdentityStatusId(idStatuses[customerView])
    }, [customerView])
    
    return (
      <>
        <BaseLayout title="Customers">
          <div className='flex justify-between'>
            <Tabs value={customerView} onChange={(_, newValue) => setCustomerView(newValue)}>
              <Tab label="All" />
              <Tab label="In Review" />
              <Tab label="Passed" />
              <Tab label="Failed" />
              <Tab label="Monitored" />
            </Tabs>
            <SearchField placeholder="Enter Customer's Name or Email" />
          </div>
          
          <div className='mt-10'>
            <div className="text-gray-400 font-bold mb-7 text-sm">{customers.length} results</div>
            <DataTable
              headers={Object.keys(UsersDataStructure).map(res => UsersDataStructure[res].label)}
              data={customers?.map((customer) => ([
                // customer.idCustomerGuid,
                <Link to={'/customers/' + customer.idCustomerGuid} className="text-blue-500 font-bold underline">{
                !!customer.forename ? customer.forename + ' ' + customer.surname : customer.fullName}</Link>,
                customer.emailAddress,
                <div className="flex gap-2">
                  <Flag 
                    src={customer.countryFlag ? customer.countryFlag : customer.countryFlagUrl}
                    title={customer.countryOfResidence ? customer.countryOfResidence : customer.iso3CountryCode}
                    alt={customer.countryName}
                  />
                  <>{customer.countryName}</>
                </div>,
                <Locked isLocked={(customer.isLocked)} isActive={(customer.isActive)} isEmailVerified={(customer.isEmailVerify)} />,
                false,
                <Active isActive={customer.gwMonitor} invert />,
                <KYCStatus status={parseInt(customer.idIdentityStatus)} statusDescription={customer.identityStatusText}></KYCStatus>,
                customer.dateCreated,
                ''
              ]))} 
              dataTypes={Object.keys(UsersDataStructure).map(res => UsersDataStructure[res].dataType)}
            />
          </div>
        </BaseLayout>
    </>
   )
}

export default Kyc
