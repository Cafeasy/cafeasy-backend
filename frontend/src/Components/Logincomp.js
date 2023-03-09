import Logohitam from '../Photo/Logohitam.png'
import { Link } from 'react-router-dom';
import "../Style/Loginpage.css"
import { useState } from "react";
import Berandapage from '../Pages/Berandapage';

function Logincomp() {
    const [inputText, setInputText] = useState("");
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };
    const submitUser = () => {
        <Berandapage user={inputText}></Berandapage>
    }
    return (
        <div>

            <div className="login">
                <div className="gambarlogin">
                    <img src={Logohitam} alt="logo-cafeasy"></img>
                </div>
                <div className="text1" >CAFEASY</div>
                <div className="text3">© 2022-2023 CAFEASY All Rights Reserved.</div>

                <div className="Loginput">
                    <div class="d-grid gap-10 col-9 mx-auto">
                        <label for="usr">Nama</label>
                        <input type="text" class="form-control" id="usr" onChange={e => setInputText(e.target.value)} value={inputText} />

                        <div class="form-check form-switch ">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">ingat saya</label>
                        </div>
                    </div>

                </div>
                <div className="Logbutton">
                    <div class="d-grid gap-10 col-9 mx-auto mt-3">
                        <Link to="/Berandapage" type='button' button class='btn btn-dark' onClick={submitUser}>
Masuk
                        </Link>
                        <div className="Loginput text-center  ">atau</div>
                        <button class="btn btn-light btn-rounded" type="button" onClick={googleAuth}>Google</button>
                    </div>

                </div>


            </div>

        </div>
    );

}

export default Logincomp