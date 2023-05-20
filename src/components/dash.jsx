import { Link } from 'react-router-dom'
import './styles/dash.css'

const Dash = () => {
    return (
        <div className="dash-container">
            <div className="box1">
                <h1 className="box1-title">Welcome!</h1>
                <p className="box1-paragraph">This is the psychic sqrl network. A hot new guide to the mystic arts. Explore the celestial light of tarot, spells, protection, and healing through our astrological insights. Enter your birthday and find yourself.</p>
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