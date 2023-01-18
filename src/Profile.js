import { Component } from 'react';
import React from 'react';
import slika from './images/footprints.webp';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa'; 
import { FaRegComment } from 'react-icons/fa'; 
import { FaRegPaperPlane } from 'react-icons/fa'; 
function Profile() {
    const [postovi, setPostovi] = React.useState([]);
    const [loading, setLoading] = React.useState([]);
  
    // const [brojDogadjaja, setBrojDogadjaja] = React.useState(dogadjaj.length);
    React.useEffect(() => {
      setLoading(true);
      const getpostovi = async() =>{
        const res = await fetch("https://localhost:7096/Post/getAllPostsFromUser/0");
        const getdata = await res.json();
        setPostovi(getdata);
        console.log(getdata);
        setLoading(false);
      }
      getpostovi();
  
    },[])
  return (
    
    <section>
    <div className='glavni'>
      
      <div>
        <div className='profil'>
            <div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                className="profilnaSlika"></img>
                
            </div>
            <div className='username'>
                <div className='dugme2'>
                    <div className='info1'>
                        andjella_djo
                    </div>
                    <div className='dugme3'>
                        <button className='btn'>Logout</button>
                    </div>
                </div>
                <div className='info'>
                    <div className='info1'>18 posts</div>
                    <div className='info1'>211 followers</div>
                    <div className='info1'>377 following</div>
                </div>
                <div className='info1'>Neki opis.</div>
            </div>
        </div> 

        <div className='mar'>

        <h2 className="member">Posts</h2>

        <div className='mask-custom'>
            <div className='uredi'>
            <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                className="objava"></img>
            </div>
            <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                className="objava"></img>
            </div>
            <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                className="objava"></img>
            </div>
            <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                className="objava"></img>
            </div>
            <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                className="objava"></img>
            </div>
            <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                className="objava"></img>
            </div>
            <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                className="objava"></img>
            </div>
            </div>
        </div>

        </div>

      </div>

      
    </div>
    </section>
  );
}

export default Profile;
