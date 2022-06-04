import IMG from "../Assets/Dumbmerch Nav.png";
import { Link } from "react-router-dom";
import Font from "../Assets/Font.module.css";

function Navbar(){
    return (
        <div>
            <nav>
                <div className="All" style={{display : 'flex', width : '100%', color : 'white'}}>
                    <div className="left" style={{display : 'flex', flex : '50%', marginLeft : '30px'}}>
                        <a href=""><img src={IMG} alt="" style={{alignItem : 'center'}}/></a>
                    </div>

                    <div className="right" style={{display : 'flex', flex : '50%', justifyContent : 'flex-end', marginRight : '30px'}}>
                        <ul style={{display : 'flex', listStyleType : 'none', alignItems : 'center'}}>
                            <Link className={Font.Font} to="/complain" style={{paddingRight : '20px', textDecoration : 'none'}}><li style={{color : 'white'}}>Complain</li></Link>
                            <Link className={Font.Font} to="/profile"style={{paddingRight : '20px', textDecoration : 'none'}}><li style={{color : 'white', textDecoration : 'none'}}>Profile</li></Link>
                            <Link className={Font.Font} to="/" style={{textDecoration : 'none'}}><li style={{color : 'white', textDecoration : 'none'}}>Logout</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;