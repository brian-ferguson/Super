import Button from './styled/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/authActions'
import { Link } from "react-router-dom"

const button_styles = { border: '1px solid #FFF', color: '#000', margin: 8 }

const Navigation = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    return <div style={{width: '100%', height: 80, background: '#FFF', margin: 0, display: 'flex'}}>
        {/* Title */}

        <img alt="magnifying glass logo" width="50px" height="50px" src= {window.location.origin + '/images/magnifying-glass.png'}/>
        
        <Link style={{textDecoration: "none"}} to="/"><h1 style={{ margin: 0, padding: '10px 0 0 10px', fontSize: 48, fontFamily: 'sans-serif', color: '#111', userSelect: 'none', cursor: 'pointer'}}>Skilling</h1></Link>
        
        

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%'}}>
            {auth.isAuthenticated && <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button style={button_styles} onClick={() => dispatch(logout())}>Logout</Button>
            </div>}
        </div>

    </div>
}

export default Navigation