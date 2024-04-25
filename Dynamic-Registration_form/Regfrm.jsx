import { useState } from "react";
import "./regfrm.css";

export const Regfrm = () => {
    const [user, setUser] = useState({
        name: "Janani",
        age: 21,
        gender: "Female",
        isMarried: true,
        country:"India",
        bio:" I am a software developer"
    });
function changehandler(e){
const name=e.target.name;
const value=e.target.type==="checkbox"?e.target.checked:e.target.value;
setUser({...user,[name]:value});
}
    return (
        <>
            <table>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Married</td>
                    <td>{user.ismarried ? "yes" : "no"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <td>Biodata</td>
                    <td>{user.bio}</td>
                </tr>
            </table>
            <form>
                <input type="text" placeholder="Enter your name" value={user.name} onChange={changehandler} name="name"/>
                <input type="number" placeholder="Enter age" value={user.age} onChange={changehandler} name="age"/>
                <div className="gender">
                    <label htmlFor="male"><input type="radio" name="gender" id="male" value="Male" checked={user.gender=="Male"} onChange={changehandler}/> Male</label>
                </div>
                <div className="gender">
                    <label htmlFor="female"><input type="radio" name="gender" id="female" value="Female" checked={user.gender=="Female"} onChange={changehandler}/> Female</label>
                </div>
                <div className="iamarried">
                    <label htmlFor="ismarried"><input type="checkbox" name="ismarried" id="ismarried" checked={user.ismarried} onChange={changehandler} /> Is Married</label>
                </div>
                <div className="select-div">
                    <label htmlFor="country">Select country</label>
                    <select id="country" onChange={changehandler} name="country" value={user.country}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <div>
                    <textarea name="bio" id="bio" cols="30" rows="5" onChange={changehandler} placeholder="Write about yourself"></textarea>
                </div>
            </form>
        </>
    );
};
