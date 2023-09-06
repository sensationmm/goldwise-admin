import {Link, useNavigate} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import React, {useEffect, useState} from "react";
import customerAmlService from '../../services/customerAml.service'
import customerDetailService from '../../services/customerDetail.service';
import Locked from './Locked';
import KYCStatus from './KYCStatus';
import {useDispatch} from "react-redux";
import {hideLoader, showLoader} from "../../reducers/loaderSlice.reducer";
import { useSelector } from 'react-redux'
import Flag from '../../components/atoms/Flag/Flag';
import Modal from '../../components/atoms/Modal/Modal';
import BaseLayout from '../BaseLayout/BaseLayout';

const Kyc = (props) => {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.search?.searchTerm)
    const [identityStatusId, setIdentityStatusId] = useState("0")
    const [isgwMonitored] = useState("0")
    const [customers, setCustomers] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [filterListOptionsModal, setFilterListOptionsModal] = useState(false)

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

    const customersStatus = [
        {
            id: "0",
            name: "View All",
        },
        {
            id: "1",
            name: "Not Started",
        },
        {
            id: "2",
            name: "Awaiting Information",
        },
        {
            id: "3",
            name: "In Progress",
        },
        {
            id: "4",
            name: "In Review",
        },
        {
            id: "5",
            name: "Passed",
        },
        {
            id: "6",
            name: "Failed",
        },
        {
            id: "7",
            name: "Retry",
        },
        {
            id: "8",
            name: "Expired",
        },
        {
            id: "9",
            name: "Passed (manual)",
        },
        {
            id: "10",
            name: "Failed (manual)",
        },
        {
            id: "11",
            name: "Suspended",
        },
    ]

    const navigate = useNavigate();

    useEffect(() => {
      if (sortOrder == "") {
          setSortOrder('dateDesc');
      }
    });

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
    
    const setFilterListOption = (option) => {
        setSortOrder(option)
        sortKycList()
        setFilterListOptionsModal(false)
    }

    return (
      <>
        {filterListOptionsModal && 
          <Modal hidePopup={() => setFilterListOptionsModal(false) } title="Sort by Options">
          <div className='modal-content'>
              <ul>
                  <li>
                      <div className={"handCursor" + (sortOrder === 'nameAsc' ? " selected" : "")} onClick={() => setFilterListOption('nameAsc')}>
                          Name A - Z
                      </div>
                  </li>
                  <li>
                      <div className={"handCursor" + (sortOrder === 'nameDesc' ? " selected" : "")} onClick={() => setFilterListOption('nameDesc')}>
                          Name Z - A
                      </div>
                  </li>
                  <li>
                      <div className={"handCursor" + (sortOrder === 'dateDesc' ? " selected" : "")} onClick={() => setFilterListOption('dateDesc')}>
                          Date Created Descending
                      </div>
                  </li>
                  <li>
                      <div className={"handCursor" + (sortOrder === 'dateAsc' ? " selected" : "")} onClick={() => setFilterListOption('dateAsc')}>
                          Date Created Ascending
                      </div>
                  </li>
              </ul>
          </div>
          </Modal>
        }
          
        <BaseLayout title="Customers">
          {/* TODO: Tabs component */}
          <div
              className="text-sm font-medium bg-white text-center text-gray-500 dark:bg-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out">
              <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                      <div onClick={() => {setIdentityStatusId('0');}} className={(identityStatusId === "0") ? 'inline-block p-4 border-b-2 border-[#5db1b5] handCursor': 'inline-block p-4 handCursor'}
                          >View All</div>
                  </li>
                  <li className="mr-2">
                      <div onClick={() => {setIdentityStatusId('4');}} className={(identityStatusId === "4") ? 'inline-block p-4 border-b-2 border-[#5db1b5] handCursor': 'inline-block p-4 handCursor'} aria-current="page">To
                          Be Reviewed</div>
                  </li>                                    
                  <li className="mr-2">
                      <div onClick={() => {setIdentityStatusId('5,9');}} className={(identityStatusId === "5,9") ? 'inline-block p-4 border-b-2 border-[#5db1b5] handCursor': 'inline-block p-4 handCursor'}
                            aria-current="page">Passed</div>
                  </li>
                  <li className="mr-2">
                      <div onClick={() => {setIdentityStatusId('6,10,11');}} className={(identityStatusId === "6,10,11") ? 'inline-block p-4 border-b-2 border-[#5db1b5] handCursor': 'inline-block p-4 handCursor'}
                            aria-current="page" >Failed</div>
                  </li>
                  <li className="mr-2 filter">
                      <div onClick={() => {setFilterListOptionsModal(true)} } className="inline-block p-4 handCursor"><i className="fa fa-thin fa-sort dark:text-gray-100 sortIcon"></i>Sort by:</div>
                  </li>
              </ul>
          </div>
          {/* TODO: Load using test data and convert to small components */}
          <div className="p-3">
              <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                      <thead className="text-xs font-bold text-gray-800 dark:text-gray-100">
                      <tr>
                          <th className="p-3 whitespace-nowrap" style={{display: 'none'}}>
                              <div className="font-semibold text-left">Photo</div>
                          </th>
                          <th className="p-3 whitespace-nowrap">
                              <div className="font-semibold text-left">Id</div>
                          </th>
                          <th className="p-3 whitespace-nowrap">
                              <div className="font-semibold text-left">Name</div>
                          </th>
                          <th className="p-3 whitespace-nowrap">
                              <div className="font-semibold text-center">Email</div>
                          </th>
                          <th className="p-3 whitespace-nowrap">
                              <div className="font-semibold text-center">Contact Number</div>
                          </th>
                          <th className="p-3 whitespace-nowrap">
                              <div className="font-semibold text-center">Country</div>
                          </th>
                          <th className="p-3 whitespace-nowrap">
                              <div className="font-semibold text-center">Account Status</div>
                          </th>
                          <th className="p-3 whitespace-nowrap">
                              <div className="font-semibold text-center">KYC Status</div>
                          </th>
                          <th className="p-3 whitespace-nowrap">
                              <div className="font-semibold text-center">Monitor</div>
                          </th>
                          <th className="p-3 whitespace-nowrap flex justify-center">
                              <div className="font-semibold text-center"><FiSettings size="16px"/>
                              </div>
                          </th>
                      </tr>
                      </thead>
                      <tbody
                          className="text-sm divide-y divide-gray-200 dark:divide-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out">
                      {
                          customers && customers.length > 0 &&
                          (customers?.map((customer, index) => (
                              <tr key={index}>
                                  <td style={{display: 'none'}} className="p-2 whitespace-nowrap">
                                      <div className="flex items-center">
                                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <img className="rounded-full"
                                                    src={!!customer.profilePhoto ? customer.profilePhoto : "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"}
                                                    width="40" height="40"
                                                    alt={(!!customer.forename) ? customer.forename + ' ' + customer.surname : customer.fullName}/>
                                          </div>
                                      </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <div className="text-left">{customer.idCustomerGuid}</div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <div
                                          className="text-left font-medium text-gray-800 dark:text-gray-100">{!!customer.forename ? customer.forename + ' ' + customer.surname : customer.fullName}</div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <div className="text-left">{customer.emailAddress}</div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <div className="text-right">{customer.contactNumber}</div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <div className="flex">
                                          <div className="text-left text-lg sm:mr-3">
                                              <Flag 
                                                  src={customer.countryFlag ? customer.countryFlag : customer.countryFlagUrl}
                                                  title={customer.countryOfResidence ? customer.countryOfResidence : customer.iso3CountryCode}
                                                  alt={customer.countryName}
                                              />
                                          </div>
                                          <div className="text-left">{customer.countryName}</div>
                                      </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <span className="flex items-center justify-left">
                                          <Locked
                                              isLocked={(customer.isLocked)}
                                              isActive={(customer.isActive)}
                                              isEmailVerified={(customer.isEmailVerify)} />
                                      </span>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <span className="flex items-center justify-left">
                                          <KYCStatus status={parseInt(customer.idIdentityStatus)}
                                                      statusDescription={customer.identityStatusText}></KYCStatus>
                                      </span>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                          <span className="flex items-center justify-center">
                                          <span aria-hidden="true"
                                          className={"w-3 h-3 rounded-full inline-block align-middle " + (!customer.gwMonitor ? " bg-green-500 " : " bg-red-500 ")}>
                                          </span>
                                          <span className="pl-2">
                                              {customer.gwMonitor ? "Yes" : "No"}
                                          </span>
                                      </span>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                      <span className="flex items-center justify-center">
                                          <Link to={'/customers/' + customer.idCustomerGuid}
                                                className="rounded-full bg-[#5db1b5] text-white pt-1 pr-6 pb-1 pl-6 font-bold">View</Link>
                                      </span>
                                  </td>
                              </tr>)))
                      }

                      </tbody>
                  </table>
              </div>
          </div>
        </BaseLayout>
    </>
   )
}

export default Kyc
