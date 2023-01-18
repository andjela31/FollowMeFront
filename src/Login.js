import slika from './images/footprints.webp';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='center'>
      <section className="polapola">
        <div className="pola">
            <img src={slika} className="foot"></img>
        </div>
        <div className="pola mar">
          <h1 className="member naslov">FollowMe</h1>

          <div>
            <h1 className="member">Welcome to FollowMe</h1>

            <div className="in">
                <p className="notBold">Users name or Email</p>
                <input type="text"></input>
                <p className="notBold">Password</p>
                <input type="password"></input>
                
                <div className="d">
                    <button type="button" className="button btn">Log in</button>
                </div>
            </div>

            <div className="cen1">
                <p className="center">New to FollowMe?</p>
                <Link to='/register' className="center">Create account.</Link>
                <Link to='/profile' className='center'>Profile</Link>
            </div>
          </div>

            
        </div>
      </section>
      </div>
  );
}

export default Login;
