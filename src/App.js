import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages'
import './App.css'

const App = () => {

  const activeMenu = true

  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <TooltipComponent content='Settings' position='top'>
            <button
              type='button'
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              style={{ background: 'blue', borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className='fixed md:statis bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>
        </div>
        <div>
          <Routes>
            {/* Dashboard */}
            <Route path="cra/" element={<Ecommerce />} />
            <Route path="cra/ecommerce" element={<Ecommerce />} />
            {/* Pages */}
            <Route path="cra/orders" element={<Orders />} />
            <Route path="cra/employees" element={<Employees />} />
            <Route path="cra/customers" element={<Customers />} />
            {/* Apps */}
            <Route path="cra/kanban" element={<Kanban />} />
            <Route path="cra/editor" element={<Editor />} />
            <Route path="cra/calendar" element={<Calendar />} />
            <Route path="cra/color-picker" element={<ColorPicker />} />
            {/* Apps */}
            <Route path="cra/line" element={<Line />} />
            <Route path="cra/area" element={<Area />} />
            <Route path="cra/bar" element={<Bar />} />
            <Route path="cra/pie" element={<Pie />} />
            <Route path="cra/financial" element={<Financial />} />
            <Route path="cra/color-mapping" element={<ColorMapping />} />
            <Route path="cra/pyramid" element={<Pyramid />} />
            <Route path="cra/stacked" element={<Stacked />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
