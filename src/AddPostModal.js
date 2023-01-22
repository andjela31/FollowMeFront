import React from 'react';
import Modal from 'react-modal'

function AddPostModal(props) {

    //Modal.setAppElement(props.el);
    const [slika, setSlika] = React.useState({})
    const [opis, setOpis] = React.useState({})


    async function addPost() {

        console.log(opis)

        const res = await fetch("https://localhost:7096/Post/createPost/"+ props.id, {

            method: 'POST',
            body: JSON.stringify({
                url: slika,
                description: opis
            })
        });

        console.log(res)

    }

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
                        <h2 className="member">Add post</h2>
                        <div>
                            <button className='btn' onClick={() => { props.setCloseModal(false)}}>Close</button>
                        </div>
                    </div>
                    <div className='search'>
                        <div className='width text'>
                            <p>Choose picture</p>
                            <input className='custom-file-input' onChange={(event) => { setSlika(event.target.files[0]) }} type='file'></input>
                            <p>Add decription</p>
                            <input onChange={(event) => { setOpis(event.target.value) }} type='text'></input>
                            <div className='dugme mar'>
                                <button onClick={addPost} className='btn'>Add</button>
                            </div>
                        </div>
                        
                            
                        
                    </div>
                </div>
            
                
            </div>
            
            
        </div>

    </Modal>
    )

}

export default AddPostModal;