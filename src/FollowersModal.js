import React from 'react';
import Modal from 'react-modal'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function FollowersModal(props) {

    //Modal.setAppElement(props.el);


    return (
            <Modal
                isOpen={props.mod}
                onRequestClose={props.mod}
                contentLabel="Example modal"
                className='modal mask-custom'
            >
                <div className='modal2 mar'>
                <div className='uredi2'>
                        <div>
                        <h2>Followers</h2>
                        </div>
                    
                        <div>
                        <button className='btn' onClick={() => { props.setCloseModal(false)}}>Close</button>
                        </div>
                    </div>

                    <div className='mar move'>
                    {props.followers.map((follower, index) => {
                    console.log(follower);
                    return (
                        <Link key={index} to='/chat' className="prviDiv1">
                            <div className="prviDiv1 follower">
                                <img src={follower.url} alt="avatar"
                                className="slika" width="60"></img>
                                <div className="pt-1 sirina">
                                    <p className="fw-bold mb-0">{follower.userName}</p>
                                    <p className="small text-white">Opis</p> 
                                </div>
                                <div className='modal2'>
                                    <button className='btn'>Remove</button>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                </div>
                    
              
                    
                </div>
            </Modal>
    )

}

export default FollowersModal;