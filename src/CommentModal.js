import React from 'react';
import Modal from 'react-modal'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function CommentModal(props) {

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
                        <h2 className="member">Comments</h2>
                        <div>
                            <button className='btn' onClick={() => { props.setCloseModal(false)}}>Close</button>
                        </div>
                    </div>
                </div>
            
                
            </div>
            
            
        </div>
    </Modal>
    )

}

export default CommentModal;