import React from 'react';
import Modal from 'react-modal'
import { Link } from 'react-router-dom';

function PostModal(props) {

    //Modal.setAppElement(props.el);

    return (
        <Modal
        isOpen={props.mod}
        onRequestClose={props.mod}
        contentLabel="Example modal"
        className='modal mask-custom'
    >
        <div className='modal2 mar'>
            <div className='modal2'>
                <div className='modal2'>
                    <div className='uredi2'>
                        <h2 className="member">Username</h2>
                        <div>
                            <button className='btn' onClick={() => { props.setCloseModal(false)}}>Close</button>
                        </div>
                    </div>
                    <div className='search'>
                        <div className='width'>
                            {props.following.map((fol, index) => {
                                return (
                                    <div key={index} className="story">
                                        <div className='profil'>
                                            <img className='slika' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"></img>
                                            <h3 className='member'>{fol.userName}</h3>
                                        </div>
                                        <div className='postPicture'>
                                            <img className='postPic' src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp'></img>
                                            
                                        </div>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            
                
            </div>
            
            
        </div>
    </Modal>
    )

}

export default PostModal;