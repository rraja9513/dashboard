import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
export default class Contact extends Component{
    render(){
        return(
            <div>
               <form action="" method="post">
                   <textarea placeholder="Enter Message"></textarea><br/>
                   <input type="text" value="" name="t1" placeholder="Enter Your Name"/>
                   <input type="email" value="" name="e1" placeholder="Email"/><br/>
                   <input type="text" value="" name="t2" placeholder="Enter Subject"/><br/>
                   <button type="submit">SEND</button>
               </form>
            </div>
        )
    }
}