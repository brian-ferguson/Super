import { useSelector } from 'react-redux'

const stat_container_styles = {display: 'flex', flexDirection: 'column'}

const Profile = () => {

    return <div>
        <div style={{display: 'flex', width: 500, margin: '10px auto', justifyContent: 'space-around', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
            <div style={stat_container_styles}>
                <span>Wins</span>
                
            </div>
            <div style={stat_container_styles}>
                <span>Losses</span>
                
            </div>
            <div style={stat_container_styles}>
                <span>Draws</span>
                
            </div>
        </div>
    </div>
}

export default Profile