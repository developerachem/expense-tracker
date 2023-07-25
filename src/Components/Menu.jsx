import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
        <div className="navbar bg-base-100 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Expense</Link></li>
                        <li><Link to="/income">Income</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Expense</Link></li>
                    <li><Link to="/income">Income</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
