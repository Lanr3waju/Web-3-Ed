import js from '../images/javascript-seeklogo.com.svg'
import ethereum from '../images/ethereum-classic-etc-logo.png'

function Courses() {
    return (
        <ul className="p-2 ml-2 border-green-200 rounded-xl border-4 border-solid">
            <li className='mb-2 flex items-center'>
                <img className='w-10 inline rounded-lg m-2' src={js} alt='javascript icon' />
                <span className='text-base font-poppins font-semibold'>JavaScript Fundamentals</span>
            </li>
            <li>
                <img className='w-10 inline m-2' src={ethereum} alt='javascript icon' />
                <span className='text-base font-poppins font-semibold'>Ethereum Developer Bootcamp</span>
            </li>
        </ul>
    );
}

export default Courses;
