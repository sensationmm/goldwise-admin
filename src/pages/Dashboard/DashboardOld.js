import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import BaseLayout from '../BaseLayout/BaseLayout'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
)

const DashboardOld = () => {
  const chartOptions = {
      responsive: true,
      plugins: {
          legend: {
              display: false
          },
          title: {
              display: false
          },
          tooltips: {
              enabled: false
          }
      },
      maintainAspectRatio: false,
      elements: {
          point: {
              radius: 0
          }
      },
      scales: {
          x: {
              display: false,
              grid: {
                  display: false
              },
              scaleLabel: false,
              ticks: {
                  display: false
              }
          },
          y: {
              display: false,
              grid: {
                  display: false
              },
              scaleLabel: false,
              ticks: {
                  display: false,
                  suggestedMin: 0,
                  suggestedMax: 10
              }
          }
      }
  }

  const data1 = {
      labels: [3, 5, 1, 3, 2, 6, 7, 5, 1],
      datasets: [
          {
              backgroundColor: "rgba(246, 102, 52, 0.1)",
              borderColor: "rgba(246, 102, 52, 0.8)",
              borderWidth: 3,
              data: [3, 5, 1, 3, 2, 6, 7, 5, 1],
              fill: true
          }
      ]
  }

  const data2 = {
      labels: [8, 4, 3, 9, 7, 7, 4, 8, 6],
      datasets: [
          {
              backgroundColor: "rgba(75, 230, 202, 0.1)",
              borderColor: "rgba(75, 230, 202, 0.8)",
              borderWidth: 3,
              data: [8, 4, 3, 9, 7, 7, 4, 8, 6],
              fill: true
          }
      ]
  }

  const data3 = {
      labels: [3, 5, 1, 3, 2, 6, 7, 5, 1],
      datasets: [
          {
              backgroundColor: "rgba(101, 116, 205, 0.1)",
              borderColor: "rgba(101, 116, 205, 0.8)",
              borderWidth: 3,
              data: [3, 5, 1, 3, 2, 6, 7, 5, 1],
              fill: true
          }
      ]
  }

  return (
    <BaseLayout title="Dashboard">
      <div className="-mx-2 md:flex">
          <div className="w-full md:w-1/3 px-2">
              <div className="rounded-md mb-4 border-solid border-2 border-gray-200 min-h-full dark:border-gray-600 transition-all duration-500 ease-in-out">
                  <div className="flex rounded-md relative overflow-hidden">
                      <div className="md:w-1/3 px-3 pt-6 pb-10 text-left relative z-10">
                          <h4 className="text-sm text-gray-500 leading-tight dark:text-gray-100">Total Sessions</h4>
                          <h3 className="text-xl text-left text-gray-600 font-semibold leading-tight my-3 dark:text-gray-100">456</h3>
                      </div>
                      <div className="md:w-2/3 h-20 w-full mr-4">
                          {/* TODO: Wrap the chart into a Component */}
                          <Line
                              options={chartOptions}
                              data={data1}
                          />
                      </div>
                  </div>
                  <div className='flex justify-between border-t-[2px] h-10 dark:border-t-gray-600 transition-all duration-500 ease-in-out'>
                      <p className='text-left text-sm p-3 text-gray-500 dark:text-gray-100'>4 visitors</p>
                      <p className='text-right text-sm p-3 text-gray-500 dark:text-gray-100'>View report</p>
                  </div>
              </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
              <div className="rounded-md mb-4 border-solid border-2 border-gray-200 min-h-full dark:border-gray-600 transition-all duration-500 ease-in-out">
                  <div className="flex rounded-md relative overflow-hidden">
                      <div className="md:w-1/3 px-3 pt-6 pb-10 text-left relative z-10">
                          <h4 className="text-sm text-gray-500 leading-tight dark:text-gray-100">Total Sales</h4>
                          <h3 className="text-xl text-left text-gray-600 font-semibold leading-tight my-3 dark:text-gray-100">£2810.90</h3>
                      </div>
                      <div className="md:w-2/3 h-20 w-full mr-4">
                          {/* TODO: Wrap the chart into a Component */}
                          <Line
                              options={chartOptions}
                              data={data2}
                          />
                      </div>
                  </div>
                  <div className='flex justify-between border-t-[2px] h-10 dark:border-t-gray-600 transition-all duration-500 ease-in-out'>
                      <p className='text-left text-sm p-3 text-gray-500 dark:text-gray-100'>6 total orders</p>
                      <p className='text-right text-sm p-3 text-gray-500 dark:text-gray-100'>View report</p>
                  </div>
              </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
              <div className="rounded-md mb-4 border-solid border-2 border-gray-200 min-h-full dark:border-gray-600 transition-all duration-500 ease-in-out">
                  <div className="flex rounded-md relative overflow-hidden">
                      <div className="md:w-1/3 px-3 pt-6 pb-10 text-left relative z-10">
                          <h4 className="text-sm text-gray-500 leading-tight dark:text-gray-100">Total Users</h4>
                          <h3 className="text-xl text-left text-gray-600 font-semibold leading-tight my-3 dark:text-gray-100">1456</h3>
                      </div>
                      <div className="md:w-2/3 h-20 w-full mr-4">
                          {/* TODO: Wrap the chart into a Component */}
                          <Line
                              options={chartOptions}
                              data={data3}
                          />
                      </div>
                  </div>
                  <div className='flex justify-between border-t-[2px] h-10 dark:border-t-gray-600 transition-all duration-500 ease-in-out'>
                      <p className='text-left text-sm p-3 text-gray-500 dark:text-gray-100'>2 new users</p>
                      <p className='text-right text-sm p-3 text-gray-500 dark:text-gray-100'>View report</p>
                  </div>
              </div>
          </div>
      </div>
    </BaseLayout>
  )
}

export default DashboardOld