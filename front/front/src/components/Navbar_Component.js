import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ITO</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/magazines" className="nav-link">Magazines</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/article" className="nav-link">Articles</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/conference" className="nav-link">Conference</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/press" className="nav-link">PressRelease</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/ranking" className="nav-link">Ranking</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/tech" className="nav-link">TechNews</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}