import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaHandsHelping } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SearchModal from './SearchModal'

function Header() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [following, setFollowing] = React.useState([]);
  const [loading, setLoading] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
  const getFollowings = async() =>{
    const res = await fetch("https://localhost:7096/User/getUserFollowings/0");
    const getdata = await res.json();
    setFollowing(getdata);
    console.log("FOLLOWERS")
    console.log(getdata);
    setLoading(false);
  }
  getFollowings();

},[])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


    return (
      <div>
        <header className='levi'>
            <section>
              {modalIsOpen && <SearchModal following={following} setCloseModal={setIsOpen} mod={modalIsOpen} />}
              <div className='divLevi'>
                  <div>
                      <h2 className="font-weight-bold mb-3 text-center text-white naslov">FollowMe</h2>
                  </div>
                  <div className='options'>
                  <div className='option'><FaHome /> <Link to='/posts' className='color'>Home</Link></div>
                  <div className='option'><FaSearch /> <Link onClick={openModal} className='color'>Search</Link></div>                  
                    
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
  