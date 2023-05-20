import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose  } from 'react-icons/ai';

 import logo from '../../images/logo.png';
const Navbar = () => {
    return (
        
        <nav className="w-full flex md:justify-center justify-between items-center p-4 	text-decoration-color: #fff;">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
              <img src={logo} alt="logo" />
            </div>
            {/* <div className ="w-full md:flex-[0.3] justify-between items-center ">
                <input type="text" name="research" className='flex-initial justify-middle ' />
            </div> */}
        </nav>
    );
}
export default Navbar;