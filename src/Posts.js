
import './Posts.css';
import React from "react"
import { FaRegHeart } from 'react-icons/fa'; 
import { FaRegComment } from 'react-icons/fa'; 
import { FaRegPaperPlane } from 'react-icons/fa'; 

function Posts() {
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

            <div>
              <h1 className="member">Stories</h1>
              <div className="price">
                <div className='pr'>
                  <a href="#!" className="">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                        className="slika"></img>

                  </a>
                </div>

                <div className='pr'>
                  <a href="#!" className="">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                        className="slika"></img>

                  </a>
                </div>

                <div className='pr'>
                  <a href="#!" className="">
                    <div className=''>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                        className="slika"></img>
                    </div>

                  </a> 
                </div> 

              </div>
            </div>

            <h2 className="member">Posts</h2>

            <div className="mask-custom glavni">
              <div className="post">

                    <div className="prviDiv">
                      <div className='prviDiv'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" alt="avatar"
                          className="slika"></img>
                        <div className="kor">John Doe</div>
                      </div>
                    </div>
                    
                    <div className="dugme">
                      <button type="button" className="button btn btn-light btn-lg btn-rounded float-end">Follow</button>
                    </div>

              </div>

              {postovi.map((slide, index) => {
                console.log(slide);
                return (
                  <div key={index} className="postPicture">
                <img src={slide.url} alt="avatar"
                          className="postPic"></img>
                </div>
              );
            })}

              <div className="reakcija">
                <div className='ikonica'>
                  <FaRegHeart className='ikonica' />
                </div>
                <div className='ikonica'>
                  <FaRegComment className='ikonica' />
                </div>
                <div className='ikonica'>
                  <FaRegPaperPlane className='ikonica' />
                </div>
              </div>

            </div>

            <div className="mask-custom glavni">
              <div className="post">
                  <div className="prviDiv">
                    <div className='prviDiv'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                          className="slika"></img>
                        <div className="kor">Alisha Olsen</div>
                      </div>
                    </div>

                    
                    <div className="dugme">
                      <button type="button" className="button btn btn-light btn-lg btn-rounded float-end">Follow</button>
                    </div>

              </div>

              <div className="postPicture">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar"
                        className="postPic"></img>
              </div>

              <div className="reakcija">
                <div className='ikonica'>
                  <FaRegHeart className='ikonica' />
                </div>
                <div className='ikonica'>
                  <FaRegComment className='ikonica' />
                </div>
                <div className='ikonica'>
                  <FaRegPaperPlane className='ikonica' />
                </div>
              </div>

            </div>

          </div>

          
        </div>
      </section>
  );
}

export default Posts;
