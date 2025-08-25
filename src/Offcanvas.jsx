import React from 'react';

const OffcanvasMenu = () => {
  return (
    <>
      {/* ===== Modal Search Area ===== */}
      <div id="search" className="modal fade p-0">
        <div className="modal-dialog dialog-animated">
          <div className="modal-content h-100">
            <div className="modal-header" data-bs-dismiss="modal">
              Search <i className="far fa-times-circle icon-close"></i>
            </div>
            <div className="modal-body">
              <form className="row search-form">
                <div className="col-12 align-self-center">
                  <div className="row">
                    <div className="col-12 pb-3">
                      <h2 className="search-title mt-0 mb-3">What are you looking for?</h2>
                      <p>Enter your query now and find precisely what you seek.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 input-group mt-md-4">
                      <input type="text" placeholder="Enter your keywords" className="form-control" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 input-group align-self-center">
                      <button className="btn content-btn mt-4">Search</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Offcanvas Toggler ===== */}
      <div className="offcanvas-wrapper">
        <div
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
        >
          <div className="navbar-header">
            <div className="content">
              <div className="toggler-icon"></div>
              <span className="title">Menu</span>
            </div>
          </div>
        </div>

        {/* ===== Offcanvas Sidebar ===== */}
        <div className="offcanvas offcanvas-end" id="offcanvasRight">
          <div className="fixed-nav-rounded-div">
            <div className="rounded-div-wrap">
              <div className="rounded-div"></div>
            </div>
          </div>

          <div className="offcanvas-content">
            <div className="offcanvas-navigation">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title mt-0">Navigation</h5>
              </div>
              <hr />
              <div className="offcanvas-body">
                <ul className="navbar-nav menu pt-md-4">
                  <li className="nav-item">
                    <a href="/" className="nav-link active">
                      Home <span className="item-count">(01)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/works" className="nav-link">
                      Works <span className="item-count">(02)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/about" className="nav-link">
                      About <span className="item-count">(03)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contact" className="nav-link">
                      Contact <span className="item-count">(04)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="offcanvas-social">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title mt-0">Socials</h5>
              </div>
              <hr />
              <div className="socials offcanvas-body">
                <nav className="nav">
                  <a className="nav-link swap-icon" href="#">
                    Instagram <i className="icon rotate bi bi-arrow-right-short"></i>
                  </a>
                  <a className="nav-link swap-icon" href="#">
                    Twitter <i className="icon rotate bi bi-arrow-right-short"></i>
                  </a>
                  <a className="nav-link swap-icon" href="#">
                    LinkedIn <i className="icon rotate bi bi-arrow-right-short"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffcanvasMenu;
