import hamburger from '../images/icons8-hamburger-32.png'
import logo from '../images/acadenow-logo.jpg'

function Nav() {
    return (
        <nav className='p-5'>
            <ul className='flex justify-between items-center w-auto'>
                <li>
                    <img className='w-8 h-8 mr-auto' src={hamburger} alt={hamburger} />
                </li>
                <li className='flex items-center justify-center'>
                    <img className='w-7 h-7 rounded-lg mr-1 inline' src={logo} alt={logo} /><p className='inline font-poppins font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 tracking-wider text-xl'>[acadenow]</p>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;