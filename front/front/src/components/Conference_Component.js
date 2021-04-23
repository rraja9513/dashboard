import React,{Component} from 'react';
export default class Conference extends Component{
    render(){
        return(
            <div>
                <div>
                    <a href="http://cvpr2021.thecvf.com"><h3>IEEE/CVF Conference on Computer Vision and Pattern Recognition</h3></a>
                    <p>CVPR is the premier annual computer vision event comprising the main conference and several co-located workshops and short courses. With its high quality and low cost, it provides an exceptional value for students, academics and industry researchers.</p>
                </div>
                <div>
                    <a href="https://www.solaresearch.org/events/lak/lak21"><h3>International Conference on Learning Analytics And Knowledge</h3></a>
                    <p>The University of California, Irvine is a driving force of innovation and discovery in educational technology and learning analytics. UCI is ranked in the top 10 of public institutions in the United States (currently number 7).</p>
                </div>
                <div>
                <a href="https://waset.org/computer-and-internetworking-technology-conference-in-november-2020-in-venice"><h3>International Conference on Electronics Communication and Computing Applications</h3></a>
                    <p>International Conference on Electronics Communication and Computing Applications aims to bring together leading academic scientists, researchers and research scholars to exchange and share their experiences and research results on all aspects of Electronics Communication and Computing Applications. </p>
                </div>
            </div>
        )
    }
}