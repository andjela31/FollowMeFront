import React from 'react';
import Modal from 'react-modal'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function SearchModal(props) {

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
                        <h2 className="member">Search</h2>
                        <div>
                            <button className='btn' onClick={() => { props.setCloseModal(false)}}>Close</button>
                        </div>
                    </div>
                    <div className='search'>
                        <div className='width'>
                            <input type='text'></input>
                        </div>
                        
                            <button className='btn2'><Link to={`/otherprof/${2}`}><FaSearch /></Link></button>
                        
                    </div>
                </div>
            
                
            </div>

            <div className='mar move'>
            {props.following.map((following, index) => {
            console.log(following);
            return (
                <Link key={index} to='/chat' className="prviDiv1">
                    <div className="prviDiv1 follower">
                        <img src={following.url} alt="avatar"
                        className="slika" width="60"></img>
                        <div className="pt-1 sirina">
                            <p className="fw-bold mb-0">{following.userName}</p>
                            <p className="small text-white">Opis</p> 
                        </div>
                        <div className='modal2'>
                            <button className='btn'>Following</button>
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

export default SearchModal;