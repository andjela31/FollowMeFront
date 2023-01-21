
import './Posts.css';
import React from "react"
import { FaRegHeart } from 'react-icons/fa'; 
import { FaRegComment } from 'react-icons/fa'; 

function Posts() {
  const [postovi, setPostovi] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  const [loading, setLoading] = React.useState([]);

  

  // const [brojDogadjaja, setBrojDogadjaja] = React.useState(dogadjaj.length);
 

  React.useEffect(() => {
    setLoading(true);
  const getFollowings = async() =>{
    const res = await fetch("https://localhost:7096/User/getUserFollowings/0");
    const getdata = await res.json();
    setFollowing(getdata);
    console.log(getdata);
    setLoading(false);
  }
  getFollowings();

  },[])


  React.useEffect(() => {
    setLoading(true);
    const getpostovi = async() =>{
      const res = await fetch("https://localhost:7096/Post/getAllPostsFromUser/" + 2);
      const getdata = await res.json();
      setPostovi(getdata);
      console.log(getdata);
      setLoading(false);
    }
    getpostovi();

  },[])


  const [person, setPerson] = React.useState([]);

  React.useEffect(() => {
      setLoading(true);
    const getPerson = async() =>{
      const res = await fetch("https://localhost:7096/User/getUserById/" + 2);
      const getdata = await res.json();
      setPerson(getdata);
      console.log("Person")
      console.log(getdata);
      setLoading(false);
    }
    getPerson();

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

              {postovi.map((slide, index) => {
                console.log(slide);
                return (
                      
                  <div key={index} className="mask-custom glavni">
                  <div className="post">
                      <div className="prviDiv">
                        <div className='prviDiv'>
                            <img src={slide.url} alt="avatar"
                              className="slika"></img>
                            <div className="kor">{person.userName}</div>
                          </div>
                        </div>

                        
                        <div className="dugme">
                          <button type="button" className="button btn btn-light btn-lg btn-rounded float-end">Following</button>
                        </div>

                  </div>

                  <div className="postPicture">
                  <img src={slide.url} alt="avatar"
                            className="postPic"></img>
                  </div>

                  <div className="reakcija">
                    <div className='ikonica'>
                      <FaRegHeart className='ikonica' />
                    </div>
                    <div className='ikonica'>
                      <FaRegComment className='ikonica' />
                    </div>
                  </div>

                </div>
              );
            })}


          </div>

          
        </div>
      </section>
  );
}

export default Posts;
