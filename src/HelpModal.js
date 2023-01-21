import React from 'react';
import Modal from 'react-modal'

function HelpModal(props) {

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
                        
                        <h2 className="member">Help</h2>
                        <div>
                            <button className='btn' onClick={() => { props.setCloseModal(false)}}>Close</button>
                        </div>
                        <div className='text'>
                            
                            <p>You can contact us by using one of the following email adresses:</p>
                            <p>followMe@gmail.com</p> 
                            <p>followMeHelp@gmail.com</p> 
                            <p>info@followme.rs</p> 
                            <p>or visit :</p>
                            <p>www.followMeHelpCenter.com</p>
                            
                        </div>
                    </div>
                </div>
            
                
            </div>          
        </div>

    </Modal>
    )

}

export default HelpModal;