import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import IMG from "../../Assets/Dumbmerch.png";
import { useNavigate } from "react-router";

function Content (){

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/")
    }


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
                    <div className="login" style={{ textAlign : 'center'}}>
                        <Button variant="danger" onClick={handleNavigate} style={{borderRadius : '5px',width : '100px',textDecoration : 'none', color : 'white'}}>Login</Button>
                    </div>

                    <div className="register" style={{wwidth : '100px', height : '30px', textAlign : 'center', marginLeft : '20px', marginTop : "5px"}}>
                        <Link to="/register" style={{textDecoration : 'none', color : 'white'}}>Register</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Content;