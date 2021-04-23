import React,{Component} from 'react';
import {Link} from 'react-router-dom'
export default class Tech extends Component{
    render(){
        return(
            <div>
                <div>
                     <Link to="/ai" className="nav-link"><h4>The AI arms race comes to enterprise content management</h4></Link>
                     <p>Enterprise content management (ECM) platforms that have historically been employed to manage files are, thanks to the rise of AI							
							...</p>
                </div>
                <div>
                <Link to="/techdata" className="nav-link"><h4>Tech Data launches hardware apprenticeship</h4></Link>
                     <p>Throughout the coronavirus pandemic, the channel has looked for training and enablement in order to keep skills sharp and utilise the time that engineers							
							...</p>
                </div>
                <div>
                <Link to="/trust" className="nav-link"><h4>Trust Is Not A Good Feeling</h4></Link>
                    <p>As a society, we trust in a lot of things in order for our daily lives to proceed. Trust is embedded in our lives. We trust in everything from the products we use to our relationships we have to our government. But when our trust is broken or shaken 
							...</p>
                </div>
            </div>
        )
    }
}