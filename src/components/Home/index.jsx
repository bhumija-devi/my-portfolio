import { Button } from "react-bootstrap"
import './index.css'

const Home = () => {
    return (
        <div className="container-fluid col-11 mt-lg-5 d-flex flex-sm-column flex-lg-row">
          <div className="col-lg-5 col-sm-11 order-sm-1 order-lg-0">
          <p className="full-stack-head">Full Stack Development Trainee</p>
            <h1 className="hi-there-head">Hi There, I’m <br/> <span className="name-head">Devi Mallela</span> </h1>
            <p className="welcome-dis">Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</p>
        <div className="btn-con">
            <Button className="res-btn" >Resume</Button>
            <Button className="port-btn" >Portfolio</Button>
        </div>
          </div>
          <div className="col-lg-5 col-sm-11">
          <img  src="https://i.ibb.co/8j72tLH/Image.png" alt="Image" border="0"/>
          </div>
        </div>
    )
}

export default Home