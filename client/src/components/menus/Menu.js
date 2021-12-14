import { useDispatch } from 'react-redux';
import Button from '../styled/Button';

const Lobby = () => {
    const dispatch = useDispatch()

	return <div style={{background: 'lightblue', display: 'flex', height: '100%'}}>
        <div style={{flexGrow: 4, background: '#212121'}}>
        </div>
        <div style={{flexGrow: 1, background: '#FFF'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '50%', margin: '20px auto'}}>
            </div>
        </div>
    </div>
};

export default Lobby