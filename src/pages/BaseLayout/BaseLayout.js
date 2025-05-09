import { Outlet, useNavigate } from 'react-router-dom'
import Loader from "../../components/atoms/Loader";
import {useSelector} from "react-redux";
import Sidebar from "../../components/molecules/Sidebar";
import { useState } from 'react';
import Header from '../../components/molecules/Header/Header';
import { IconButton } from '@mui/material';

const BaseLayout = ({full, title, action, children, hasBack = false}) => {
    const loader = useSelector((state) => state.loader?.display)
    const [showSidePanel, setShowSidePanel] = useState(true)
    const navigate = useNavigate();

    return (
      <>
        {loader && <Loader/>}
        <main className="App transition-all">
          {full
            ? <Outlet /> 
            : <>
              <Header />
              <div className={`h-full ${showSidePanel ? `pl-[300px]` : `pl-[90px]`} transition-all`}>
                <div className={`fixed left-0 flex justify-start border-r z-20 ${showSidePanel ? `w-[300px]` : `w-[90px]`} transition-all h-full overflow-hidden`}>
                  <Sidebar isOpen={showSidePanel} setIsOpen={setShowSidePanel} />
                  <button className={`fixed top-0 ${showSidePanel ? `left-[299px]` : `left-[89px]`} bg-slate-800 w-8 transition-all`} onClick={() => setShowSidePanel(!showSidePanel)}>
                    <i className={`fa ${showSidePanel ? 'fa-chevron-left' : 'fa-chevron-right'} text-lg text-secondary bold text-white`}/>
                  </button>
                </div>
                
                <main className="relative overflow-hidden p-12 z-10">
                  <header className="mb-8 flex justify-between items-center pr-[40px]">
                    <div className="flex items-center">
                      {hasBack && 
                        <div className="mr-2 absolute left-[10px]">
                          <IconButton color="text" onClick={() => navigate(-1)}><i className={`fa text-sm fa-arrow-left`} aria-hidden="true" /></IconButton>
                        </div>
                      }
                      <h1>{title}</h1>
                    </div>
                    <div className='w-auto max-w-[50%]'>{action}</div>
                  </header>
                  {children}
                </main>
              </div>
            </>
          }
        </main>
      </>
    )
}

export default BaseLayout
