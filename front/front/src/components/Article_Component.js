import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class Article extends Component{
    render(){
        return(
            <div>
                <div>
                    <h3>
                    <Link to="/mainstream" className="nav-link">Why Mainstream Organizations Struggle With Becoming Data-Driven and How Decision Management Can Help Them Achieve Value Faster</Link>
                    </h3>
                    <p>
                    Traditional Fortune 1000 companies are waking up and smelling the coffee. After watching data-driven technology leaders like Amazon, Facebook, and Google rapidly gaining market share and valuation, they’ve come to realize that they too need ...
                    </p>
                </div>
                <div>
                    <h3>
                    <Link to="/health" className="nav-link">When Will Companies Take A Stand On Health Insurance Costs?</Link>
                    </h3>
                    <p>
                    Back in college, I took a philosophy of science class and one of the topics was scientific revolutions and paradigms (ok, stay with me here). The premise is that things stay the same until they don't. Innovation occurs and the next level of thinking prevails. We've all lived through many paradigm s...
                    </p>
                </div>
                <div>
                    <h3>
                    <Link to="/pas" className="nav-link">WHAT IS PAS?</Link>
                    </h3>
                    <p>
                    Policy Administration Solutions, Inc., or PAS is a software solution designed specifically to automate all functions of the insurance industry. PAS can operate as an end-to-end solution, with functionality addressing every step of the insurance process. From quotes and claims, to bind, rating, polic...
                    </p>
                </div>
            </div>
        )
    }
}