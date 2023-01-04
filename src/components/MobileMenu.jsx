import { useState } from 'react';
import classNames from 'classnames';
import Courses from './Courses';
import expandArrow from '../images/icons8-expand-arrow-50.png'

function MobileMenu() {
    const [courses, setCourses] = useState(false)

    const expandClass = classNames(
        "w-6 h-6 transition-all",
        {
            "rotate-180 transition-all": courses,
        }
    );
    return (
        <>
            <ul className='p-5'>
                <li className=" bg-gradient-to-b from-green-900 mb-3 to-black text-white text-lg rounded-2xl pl-8 pr-8 pt-2 pb-2 font-bold font-barlow tracking-widest w-fit">
                    Login
                </li>
                <li className=" text-green-900 font-barlow tracking-wider pl-4 mb-3 font-bold text-lg">
                    STARTER CODE
                </li>
                <li className=" text-green-900 font-barlow tracking-wider pl-4 mb-3 font-bold text-lg">
                    FAQ
                </li>
                <li>
                    <button
                        className=" text-green-900 font-barlow tracking-wider pl-4 font-bold text-lg flex w-full justify-between"
                        type='button'
                        onClick={() => setCourses(!courses)}>
                        <p>COURSES</p>
                        <img className={expandClass} src={expandArrow} alt="Expand" />
                    </button>
                </li>
            </ul>
            {courses && <Courses />}
        </>
    )

}

export default MobileMenu;