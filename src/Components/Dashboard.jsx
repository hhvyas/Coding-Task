import React from 'react'
import '../ComponentStyles/Dashboard.css'
import NavBar from './NavBar'
import Userwelcome from './Userwelcome'
import PromotionalEvents from './PromotionalEvents'
import FeatureCards from './FeatureCards'

export default function Dashboard() {
    let text = ['Live Labs', 'Streak', 'My Labs', 'Online Members']
    let widgets = ['science', 'insights', 'laptop', 'groups']
    let nums = [0,1,2,3];
    return (
        <div className='dashboard_container'>
            <NavBar />
            <div className='main_content_dashboard'>
                <div className='first_row'>
                    <Userwelcome username={'Alpha'}/>
                    <PromotionalEvents />
                </div>
                <div className='second_row'>
                    {nums.map(index => 
                        <FeatureCards key= {index} text={text[index]} widgets={widgets[index]}/>
                    )}
                </div>
            </div>
        </div>
    )
}
