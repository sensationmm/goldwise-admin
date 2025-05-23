import SpreadHours from '../../../components/organisms/SpreadHours'
import React from "react";
import BaseLayout from '../../BaseLayout/BaseLayout';
import { Button } from '@mui/material';

const Products = () => {
    return (
    <BaseLayout title="Spread Management">
      <section className="flex flex-col justify-start antialiased bg-gray-100 text-gray-800 min-h-screen p-4 dark:bg-gray-800 transition-all duration-500 ease-in-out">
          <div className="h-full">
              <div className="w-full mx-auto rounded-sm border-gray-200">
                  <div className="flex">
                      <div className="w-full md:w-1/2 px-2">
                          <SpreadHours
                              title="Normal Hours"
                              type="fixed"
                          />
                      </div>
                      <div className="w-full md:w-1/2 px-2">
                          <SpreadHours
                              title="Extended Hours"
                              type="fixed"
                          />
                      </div>
                  </div>
              </div>
              <div className="flex justify-end pt-12 mt-12">
                  <Button secondary variant='contained' style={{ width: '200px', marginRight: '16px' }}>Cancel</Button>
                  <Button primary variant='contained'>Save</Button>
              </div>
          </div>
      </section>
    </BaseLayout>
  )
}

export default Products
