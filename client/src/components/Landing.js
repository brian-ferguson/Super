
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom"
import Button from './styled/Button'
import Logo from './styled/Logo'
import View from './View'

const GuestLinks = () => {
  
	return <div style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', height:'25%', width:'25%', paddingBottom:'100px'}}>

		{/* Title */}
		<Logo style={{marginBottom: 50}}/>

		{/* Button Container */}
		<div style={{width: '80%', display: 'flex', margin: '0px auto', justifyContent: 'space-evenly'}}>
			{/* Register Button */}
			<Link to="/register">
				<Button style={{background: '#000', color: '#DBE4EE'}}>
					Register
				</Button>
			</Link>

			{/* Log In Button */}
			<Link to="/login">
				<Button>
					Log In
				</Button>
			</Link>
		</div>

	</div>
}

const Landing = () => {

	const auth = useSelector(state => state.auth)
	
	const setContent = () => {
		return <View/>
	}

	return auth && auth.isAuthenticated ? setContent() : <GuestLinks/>

}

export default Landing