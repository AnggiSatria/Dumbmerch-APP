import { Link } from "react-router-dom";
import IMG from "../Assets/Dumbmerch.png";

function Content (){
    return (
        <div>
            <div className="All">
                <div className="Img">
                    <img src={IMG} alt="" />
                </div>

                <div className="h1">
                    <h1 style={{color : 'white'}}>Easy, Fast and Realiable</h1>
                </div>

                <div className="p">
                    <p style={{color : 'white'}}>Go shopping for merchandise, just go dumb merch shopping. the biggest merchandise in <strong>Indonesia</strong></p>
                </div>

                <div className="button" style={{display : 'flex'}}>
                    <div className="login" style={{width : '100px', height : '30px', backgroundColor : 'red', borderRadius : '5px', textAlign : 'center'}}>
                        <Link to="/" style={{textDecoration : 'none', color : 'white'}}>Login</Link>
                    </div>

                    <div className="register" style={{wwidth : '100px', height : '30px', textAlign : 'center', marginLeft : '20px'}}>
                        <Link to="/register" style={{textDecoration : 'none', color : 'white'}}>Register</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Content;