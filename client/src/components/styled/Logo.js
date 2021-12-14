
const Logo = ({ style }) => {
    return <h1 
        style={{...style,
            userSelect: 'none', 
            fontFamily:'system-ui', 
            fontSize:33, 
            fontWeight:'bold', 
            textAlign:'center'
        }}>

        <img alt="magnifying glass logo" width="50px" height="50px" src= {window.location.origin + '/images/magnifying-glass.png'}/>

        Skilling
        <span style={{fontFamily:'monospace', fontSize:33, fontWeight: 'normal'}}>
            Game
        </span>
    </h1>
}

export default Logo