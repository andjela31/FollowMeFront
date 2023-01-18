import './Chat.css'
import { Link } from 'react-router-dom';

function Messages() {
  return (
    <div>
      <section>
        <div className="glavni1">
          <div className="">

            <h1 className="member">Member</h1>

            <div className="card mask-custom glavni1">
              <div className='glavni1'>

              <ul>

                <li className="p-2 border-bottom">
                <Link to='/chat' className="prviDiv1">
                  <div className="d-flex flex-row prviDiv1">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                                className="slika" width="60"></img>
                    <div className="pt-1 sirina">
                      <p className="fw-bold mb-0">John Doe</p>
                      <p className="small text-white">Hello, are you there?</p>
                    </div>
                  </div>
                  <div className="pt-1 sirina2">
                    <p className="small text-white mb-1">Just now</p>
                  </div>
                </Link>
              </li>

                <li className="p-2 border-bottom">
                <Link to='/chat' className="prviDiv1">
                  <div className="d-flex flex-row prviDiv1">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp" alt="avatar"
                      className="slika" width="60"></img>
                    <div className="pt-1 sirina">
                      <p className="fw-bold mb-0">Danny Smith</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1 sirina2">
                    <p className="small text-white mb-1">5 mins ago</p>
                  </div>
                </Link>
              </li>

              <li className="p-2 border-bottom">
                <Link to='/chat' className="prviDiv1">
                  <div className="prviDiv1">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar"
                      className="slika" width="60"></img>
                    <div className="pt-1 sirina">
                      <p className="fw-bold mb-0">Alex Steward</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1 sirina2">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </Link>
              </li>
              <li className="p-2 border-bottom">
                <Link to='chat' className="prviDiv1">
                  <div className="d-flex flex-row prviDiv1">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                      className="slika" width="60"></img>
                    <div className="pt-1 sirina">
                      <p className="fw-bold mb-0">Ashley Olsen</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1 sirina2">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </Link>
              </li>
              <li className="p-2 border-bottom">
                <a href="#!" className="prviDiv1">
                  <div className="d-flex flex-row prviDiv1">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar"
                      className="slika" width="60"></img>
                    <div className="pt-1 sirina">
                      <p className="fw-bold mb-0">Kate Moss</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1 sirina2">
                    <p className="small text-white mb-1">Yesterday</p>
                  </div>
                </a>
              </li>

              <li className="p-2 broder-bottom">
                <a href="#!" className="prviDiv1">
                  <div className="d-flex flex-row prviDiv1">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                      className="slika" width="60"></img>
                    <div className="pt-1 sirina">
                      <p className="fw-bold mb-0">Brad Pitt</p>
                      <p className="small text-white">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="pt-1 sirina2">
                    <p className="small text-white mb-1">5 mins ago</p>
                    <span className="text-white float-end"><i className="fas fa-check" aria-hidden="true"></i></span>
                  </div>
                </a>
              </li>
              
              </ul>

              </div>
            </div>
          </div>

    
        </div>
      </section>
    </div>
  );
}

export default Messages;
