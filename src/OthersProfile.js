import { Component } from 'react';
import React from 'react';
import slika from './images/footprints.webp';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa'; 
import { FaRegComment } from 'react-icons/fa'; 
import { FaRegPaperPlane } from 'react-icons/fa'; 
import FollowersModal from './FollowersModal';
import FollowingModal from './FollowingModal'
function OthersProfile(props) {
    const [postovi, setPostovi] = React.useState([]);
    const [loading, setLoading] = React.useState([]);
    const [followingModalIsOpen, setFollowingIsOpen] = React.useState(false);
    const [followersModalIsOpen, setFollowersIsOpen] = React.useState(false);
    const [followers, setFollowers] = React.useState([]);
    const [following, setFollowing] = React.useState([]);

    const myProfile = 0;

    async function follow() {
        //treba moj id i id ovog profila
        const res2 = await fetch("https://localhost:50017096/User/followUser/" + myProfile + "/" + props.id,
                {
                    method: 'PUT'
                });
    }

    function openFollowingModal() {
        setFollowingIsOpen(true);
    }

    function openFollowersModal() {
        setFollowersIsOpen(true);
    }

    function closeFollowingModal() {
        setFollowingIsOpen(false);
    }

    function closeFollowersModal() {
        setFollowersIsOpen(false);
    }

    const postNum = postovi.length;
    console.log("BROJ POSTOVA");
    console.log(postNum);

    const [person, setPerson] = React.useState({
      id: 2
    });

    React.useEffect(() => {
        setLoading(true);
      const getPerson = async() =>{
        const res = await fetch("https://localhost:7096/User/getUserById/" + props.id);
        const getdata = await res.json();
        setPerson(getdata);
        console.log("Person")
        console.log(getdata);
        setLoading(false);
      }
      getPerson();
  
    },[])

    React.useEffect(() => {
        setLoading(true);
      const getFollowers = async() =>{
        const res = await fetch("https://localhost:7096/User/getUserFollowers/"  + props.id);
        const getdata = await res.json();
        setFollowers(getdata);
        console.log("FOLLOWERS")
        console.log(getdata);
        setLoading(false);
      }
      getFollowers();
  
    },[])

    React.useEffect(() => {
        setLoading(true);
      const getFollowings = async() =>{
        const res = await fetch("https://localhost:7096/User/getUserFollowings/" + props.id);
        const getdata = await res.json();
        setFollowing(getdata);
        console.log("FOLLOWERS")
        console.log(getdata);
        setLoading(false);
      }
      getFollowings();
  
    },[])
  
    // const [brojDogadjaja, setBrojDogadjaja] = React.useState(dogadjaj.length);
    React.useEffect(() => {
        setLoading(true);
      const getpostovi = async() =>{
        const res = await fetch("https://localhost:7096/Post/getAllPostsFromUser/" + props.id);
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
                <img src={person.profilePicture} alt="avatar"
                className="profilnaSlika"></img>
                
            </div>
            <div className='username'>
                <div className='dugme2'>
                    <div className='info1 bold arrow'>
                        {person.userName}
                    </div>
                    <div className='dugme3'>
                        <button onClick={follow} className='btn'>Follow</button>
                    </div>
                </div>
                <div className='info'>
                    <div className='info1 arrow'>{postNum} posts</div>
                    <div onClick={openFollowersModal} className='info1 pointer'>{person.numbersOfFollowers} followers</div>
                    <div onClick={openFollowingModal} className='info1 pointer'>{person.numbersOfFollowings} following</div>
                </div>
                <div className='info1 arrow'>{person.profileDescription}</div>
            </div>
        </div> 

        {followersModalIsOpen && <FollowersModal followers={followers} setCloseModal={setFollowersIsOpen} mod={followersModalIsOpen} />}
        {followingModalIsOpen && <FollowingModal following={following} setCloseModal={setFollowingIsOpen} mod={followingModalIsOpen} />}

        <div className='mar'>

        <h2 className="member">Posts</h2>

        <div className='mask-custom'>
            <div className='uredi'>

                {postovi.map((pic, index) => {
                    console.log(pic);
                    return (
                        <div key={index}>
                            <img src={pic.url} alt="avatar" className="objava"></img>
                        </div>
                    )
                })}
            
            </div>
        </div>

        </div>

      </div>

      
    </div>
    </section>
  );
}

export default OthersProfile;
