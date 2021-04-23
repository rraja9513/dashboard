import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Ranking extends Component{
    render(){
        return(
            <div>
                <div>
                <Link to="/defence" className="nav-link"><h3>Top 10 Defence Solution Providers of 2021</h3></Link>
                <p>The defense sector has been significantly affected by technical advances. This is true not only of the platforms and equipment that armed forces are constantly demanding, but also of the internal mechanisms that defense companies use to get such goods and services to market.</p>
                </div>
                <div>
                <Link to="/quality" className="nav-link"><h3>Top 10 Quality Management Solution Providers of 2021</h3></Link>
                    <p>Many recent organizational developments have a positive effect on quality management, and it is well positioned to influence the future economy as well. In the coming years, it is expected that this combination of project management and quality principles will govern all business sectors.</p>
                </div>
                <div>
                <Link to="/bpm" className="nav-link"><h3>Top 10 BPM Solution Companies - 2021</h3></Link>
                    <p>BPM is typically organized by capacity structures that outline and package capacity areas related to the introduction of process orientation in organizations. In terms of their extensive use, the current BPM power structures are being threatened by sociotechnical developments, such as those...</p>
                </div> 
            </div>
        )
    }
}