import Profile from '../../assets/home.jpg'
import { Link } from 'react-router'
import { RiArrowRightLine, RiDownload2Line, RiUserAddLine, RiInstagramLine, RiLinkedinBoxLine, RiSnapchatLine,
  RiFacebookBoxLine, RiTwitterXLine, RiTelegramLine, RiWhatsappLine} from "react-icons/ri";
import './home.css';
import Cv from '../../pdf/Arek-CV.pdf'
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span className='ab'>I'm Abhishek Arek</span> <br />
          <div className="typewriter-text">
            <Typewriter
              words={['Web Developer', 'Photo Editor', 'Frontend Engineer']}
              loop={0}
              cursor
              cursorStyle="💕"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </h1>
        <p className="home-description">
          I am a Delhi based web designer & front-end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
        </p>

        <Link to='/about' className='button'>
          More About Me
          <span className='button-icon'>
            <RiArrowRightLine />
          </span>
        </Link>

        <Link to='/contact' className='button' style={{ marginLeft: '1rem' }}>
          Hire Me
          <span className='button-icon'>
            <RiUserAddLine />
          </span>
        </Link>

        <div className="cv">
          <a href={Cv} download='' className="button">
            Download CV
            <span className="button-icon">
              <RiDownload2Line />
            </span>
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/__black_lover_abhishek__" target="_blank" rel="noopener noreferrer">
            <RiInstagramLine />
          </a>
          <a href="https://www.linkedin.com/in/abhishek9175" target="_blank" rel="noopener noreferrer">
            <RiLinkedinBoxLine />
          </a>
          <a href="https://www.snapchat.com/add/akabhishek1114" target="_blank" rel="noopener noreferrer">
            <RiSnapchatLine />
          </a>
          <a href="https://www.facebook.com/blackloverabhishek" target="_blank" rel="noopener noreferrer">
            <RiFacebookBoxLine />
          </a>
          <a href="https://twitter.com/Abhishek1114ya" target="_blank" rel="noopener noreferrer">
            <RiTwitterXLine />
          </a>
          <a href="https://t.me/blackloverabhishek" target="_blank" rel="noopener noreferrer">
            <RiTelegramLine />
          </a>
          <a href="https://wa.me/919149184310" target="_blank" rel="noopener noreferrer">
            <RiWhatsappLine />
          </a>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  )
}

export default Home;
