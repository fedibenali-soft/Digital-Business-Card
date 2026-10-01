import meImage from './assets/Me.jpeg'
import './style/nav.css'
function NavBar(){
    return(
        <>
            <h1>My photo:</h1>
            <img src={meImage} alt="Me" className='Me' />
        </>
    )
}
export default NavBar