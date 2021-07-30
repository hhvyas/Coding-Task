import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../ComponentStyles/NavBar.css'

export default function NavBar() {
    return (
        <div className='main_nav'>
            <div className='navbar'>
                <div className='profile'>
                    <i class="material-icons lol">account_circle</i>
                    <div className='profile_name' style={{color:'white'}}>
                        Alpha. M
                    </div>
                    <div className='badges'>
                        <i class="material-icons" style={ {'color':'#c12a41'}}>local_police</i>
                        <i class="material-icons" style={ {'color':'#ffd503'}}>local_police</i>
                        <i class="material-icons" style={ {'color':'#00ffdc'}}>local_police</i>
                        <i class="material-icons" style={ {'color':'#ff00e6'}}>local_police</i>
                    </div>
                </div>
                <div className='tabs'>
                        <div className='tab_class'>
                            <NavLink to='/dashboard' className='tabs_icons'><i class="material-icons">grid_view</i><span className='other'>Dashboard</span></NavLink>
                        </div>
                        <div className='tab_class'>
                            <NavLink to='/profile' className='tabs_icons'><i class="material-icons">person</i><span className='other'>Profile</span></NavLink>
                        </div>
                        <div className='tab_class'>
                            <NavLink to='/events' className='tabs_icons'><i class="material-icons">event</i><span className='other'>Event</span></NavLink>
                        </div>
                        <div className='tab_class'>
                            <NavLink to='/practice' className='tabs_icons'><i class="material-icons">code</i><span className='other'>Practice</span></NavLink>
                        </div>
                </div>
                <div className='categoies'>
                <ul className='catrory_ul'>
                    <li className='categories_name'> Categoies </li>
                    <li className='cate'> <Link to='#'>Web</Link> </li>
                    <li className='cate'> <Link to='#'>Crypto</Link> </li>
                    <li className='cate'> <Link to='#'>Forensics</Link> </li>
                    <li className='cate'> <Link to='#'>Networks</Link> </li>
                    <li className='cate'> <Link to='#'>Firmware</Link> </li>
                    <li className='cate'> <Link to='#'>IoT</Link> </li>
                    <li className='cate'> <Link to='#'>Log Analysis</Link> </li>
                </ul>
                </div>

            </div>
        </div>
    )
}
