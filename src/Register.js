import slika from './images/footprints.webp';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className='center'>
      <section className="polapola">
        <div className="pola">
            <img src={slika} className="foot"></img>
        </div>
        <div className="pola mar">
          <h1 className="member naslov">FollowMe</h1>

          <div>
            <h1 className="member">Sign up to see photos and videos from your friends.</h1>

            <div className="in2">
                <p className="notBold">Users email adress</p>
                <input type="text"></input>
                <p className="notBold">Username</p>
                <input type="text"></input>
                <p className="notBold">Password</p>
                <input type="password"></input>
                
                <div className="d">
                    <button type="button" className="button btn">Sign in</button>
                </div>
            </div>

            <div className="cen2">
                <p className="center">Have an account?</p>
                <Link to='/login' className="center" href="#">Log in.</Link>
            </div>
          </div>

            
        </div>
      </section>
      </div>
  );
}

export default Register;
