import { Link } from 'react-router-dom'
import './styles/dash.css'

const Dash = () => {
    return (
        <div className="dash-container">
            <div className="box1">
                <h1 className="box1-title">Welcome!</h1>
                <p className="box1-paragraph">This is <strong class="glow">Moon Phase.</strong> A hot new guide to the mystic arts. Explore the celestial light of tarot, spells, protection, and healing. Immerse yourself in spiritual insights with our lunar phase journal. Enter your birthday and discover the profound connection waiting for you.</p>
                <p className="box1-paragraph2">What are you waiting for?</p>
                <div className="btn-container">
                <Link to="/login">
                <button className="btn-join">Join Now</button>
                </Link>
                </div>
                
            </div>
            <div className="box2">

            </div>
        </div>
    )
}

export default Dash