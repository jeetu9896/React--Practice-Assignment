import Age from "./Age";
import Pic from './image/jitender.jpg';

const Profile = () =>{

    return <div style={{border:"1px solid grey",margin:"10px",padding:"10px",width:"300px"} }>
    <center>
    <img src={Pic} height={"200px"} width={"200px"} alt="User profile" />

    </center>       
     <h1>Name: Jitender </h1>
        <Age />
    </div>
}
export default Profile;