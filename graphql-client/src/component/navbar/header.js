import React from 'react'
import '../style.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">GraphQl</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" href="#" to="/">Artist<span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link active" href="#" to="/allsongs">Songs</Link>
            {/* <Link className="nav-item nav-link active" href="#">Artist</Link>
            <Link className="nav-item nav-link active" href="#">Artist</Link>
            <Link className="nav-item nav-link active" href="#">Artist</Link> */}
          </div>
        </div>
      </nav>
    )
}
export default Header