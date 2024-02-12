import Link from 'next/link';
import React from 'react'
import Menu from './Menu';

const Header = () => {
  return (
    <div>
      <nav className='navbar justify-between bg-base-300'>
        <Link href="/" className='btn btn-ghost text-lg'>
        Next Amazon App
        </Link>
        <Menu/>
      </nav>
    </div>
  )
}

export default Header;
