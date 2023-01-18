import './Chat.css'

function Chat() {
  return (
    <div className='chat'>
      <section>
        <div className="glavni1">

          <div className="col-md-6 col-lg-7 col-xl-7 drugiDiv2">

            <ul className="list-unstyled text-white">
              <li className="d-flex justify-content-between mb-4 poruka">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                  className="slika slika2" width="60"></img>
                <div className="card mask-custom sirina2">
                  <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="text-light small mb-0"><i className="far fa-clock"></i> 12 mins ago</p>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </li>
              <li className="d-flex justify-content-between mb-4 poruka">
                <div className="card mask-custom w-100">
                  <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Lara Croft</p>
                    <p className="text-light small mb-0"><i className="far fa-clock"></i> 13 mins ago</p>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                      laudantium.
                    </p>
                  </div>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                  className="slika slika2" width="60"></img>
              </li>
              <li className="d-flex justify-content-between mb-4 poruka">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                  className="slika slika2" width="60"></img>
                <div className="card mask-custom">
                  <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">Brad Pitt</p>
                    <p className="text-light small mb-0"><i className="far fa-clock"></i> 10 mins ago</p>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-3">
                <div className="form-outline form-white">
                  <textarea className="form-control" id="textAreaExample3" placeholder='Message' rows="4"></textarea>
                </div>
              </li>
              <div className="dugme">
                <button type="button" className="button btn btn-light btn-lg btn-rounded float-end">SEND</button>
              </div>
            </ul>

          </div>

    
        </div>
      </section>
    </div>
  );
}

export default Chat;
