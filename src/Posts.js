import './Posts.css';
import React from "react"
import { FaRegHeart } from 'react-icons/fa'; 
import { FaRegComment } from 'react-icons/fa'; 
import { FaHeart } from 'react-icons/fa';
import PostModal from './PostModal';
import CommentModal from './CommentModal';

function Posts() {
  const [postovi, setPostovi] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  const [loading, setLoading] = React.useState([]);
  const [stories, setStories] = React.useState([]);

  const [postModalIsOpen, setPostIsOpen] = React.useState(false)
  const [commentModalIsOpen, setCommentIsOpen] = React.useState(false)
  const [comments, setComments] = React.useState([])

  const [heart, setHeart] = React.useState(false)

  const myProfile = 0;

  const like = async (id) => {
    console.log("ZDRAVO")
    setHeart(true)

    const res = await fetch("https://localhost:7096/Post/likePost/"+ myProfile + "/" + id);

    console.log(res)

  }

  React.useEffect(() => {
    setLoading(true);
  const getPostovi = async() =>{
    const res = await fetch("https://localhost:7096/Post/getFollowingsRecentPosts/" + 0);
    const getdata = await res.json();
    setPostovi(getdata);
    console.log("Person")
    console.log(getdata);
    setLoading(false);
  }
  getPostovi();

},[])


  function openModal() {
    setPostIsOpen(true)
  }

  function openCommentModal() {
    setCommentIsOpen(true)
  }



  React.useEffect(() => {
    setLoading(true);
  const getFollowings = async() =>{
    const res = await fetch("https://localhost:7096/Story/getAllStoryFromUser/" + 0);
    const getdata = await res.json();
    setStories(getdata);
    console.log("FOLLOWING"+getdata);
    setLoading(false);
  }
  getFollowings();

  },[])

  

  // const [brojDogadjaja, setBrojDogadjaja] = React.useState(dogadjaj.length);
 
//ovde treba da uzmemo following listu za trenutno prijavljenog korisnika
  React.useEffect(() => {
    setLoading(true);
  const getFollowings = async() =>{
    const res = await fetch("https://localhost:7096/User/getUserFollowings/" + myProfile);
    const getdata = await res.json();
    setFollowing(getdata);
    console.log("FOLLOWING"+getdata);
    setLoading(false);
  }
  getFollowings();

  },[])

  following.map(fol => {
    console.log("OVO JE ID" + fol.id)
  })

 


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

                <button onClick={openModal} className='btn3'>View stories</button>

                {following.map((fol, index) => {
                  console.log("FOL"+fol);
                  return (
                    <div key={index} onClick={openModal} className='pr pointer'>
                    <img src={fol.profilePicture} alt="avatar"
                      className="slika"></img>
                    </div>
                  )
                })}
                

              </div>
            </div>

            {postModalIsOpen && <PostModal following={following} setCloseModal={setPostIsOpen} mod={postModalIsOpen} />}

            <h2 className="member">Posts</h2>

              {postovi.map((slide, index) => {
                console.log(slide);
                return (
                      
                  <div key={index} className="mask-custom glavni">
                  <div className="post">
                      <div className="prviDiv">
                        <div className='prviDiv'>
                            <div className="kor">{slide.creatorUserName}</div>
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
                  <div className='desc'>
                    {slide.description}
                  </div>

                  <div className="reakcija">
                    <div onClick={() => like(slide.id)} className='ikonica'>
                      {
                        heart ? <FaRegHeart className='ikonica' /> : <FaHeart className='ikonica' />
                      }
                    </div>
                    <div onClick={openCommentModal} className='ikonica'>
                      <FaRegComment className='ikonica' />
                    </div>
                    {commentModalIsOpen && <CommentModal comments={comments} setCloseModal={setCommentIsOpen} mod={commentModalIsOpen} />}
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
