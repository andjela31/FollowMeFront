import { FaHome } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaHandsHelping } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div>
        <header className='levi'>
            <section>
              <div className='divLevi'>
                  <div>
                      <h2 className="font-weight-bold mb-3 text-center text-white naslov">FollowMe</h2>
                  </div>
                  <div className='options'>
                  <div className='option'><FaHome /> <Link to='/posts' className='color'>Home</Link></div>
                  <div className='option'><FaSearch /> <Link to='/search' className='color'>Search</Link></div>
                  <div className='option'><FaEnvelope /> <Link to='/message' className='color'>Messages</Link></div>
                  <div className='option'><FaUserAlt /> <Link to='/profile' className='color'>Profile</Link></div>
                  <div className='option'><FaHandsHelping /> <Link to='/help' className='color'>Help</Link></div>
                  </div>
              </div>
            </section>
        </header>
      </div>
    );
  }
  
  export default Header;
  