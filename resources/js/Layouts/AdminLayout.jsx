import { AdminFooter } from '@/Components/Argon/Footers/AdminFooter';
import Header from '@/Components/Argon/Headers/Header'
import AdminNavbar from '@/Components/Argon/Navbars/AdminNavbar';
import Sidebar from '@/Components/Argon/Sidebars/Sidebar'
import React, { useEffect, useRef } from 'react'

export default function AdminLayout({user, header, children}) {
    const mainContent = useRef(null);


  return (
    <>
        <Sidebar

            logo={{
                innerLink: route('dashboard'),
                imgSrc: '/assets/img/brand/argon-react.png',
                imgAlt: '...'
            }}
        />

        <div className='main-content' ref={mainContent}>

            <AdminNavbar
                header={header}
                user={user}
                />
                {children}

            <AdminFooter/>
        </div>

    </>
  )
}
