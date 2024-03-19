import { useState } from "react";
import axios from 'axios';
import zod from 'zod';
import { useNavigate } from 'react-router-dom'

export default function Signup(){

    const [gmail,setGmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCPassword] = useState('');

    const [gmailerror,setGmailError] = useState('');
    const [usernameerror,setusernameError] = useState('');
    const [passworderror,setpasswordError] = useState('');

    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();

    const submitDetails = () => {
        setLoading(true);
        setGmailError('');
        setusernameError('');
        setpasswordError('');
        const passschema = zod.string().min(8)
        const res = passschema.safeParse(password)
        
        if(!res.success){
            setpasswordError('*Password should be min 8 characters');
            setLoading(false);
            return;
        }

        if(password !== cpassword){
            setpasswordError('*Passwords do not match');
            setLoading(false);
            return;
        }
        const data = {
            username : username
        }

        axios.post('https://cv-maker-q8a2.onrender.com/signup',data,{
            headers : {
                gmail : gmail,
                password : password
            }
        }).then(()=>{
            setLoading(false);
            navigate('/signin');

        }).catch((error)=> {
            
            if((error.response.data) === '*User already exists'){
                setpasswordError('*User already exists');
                setLoading(false);
                return;
            }
            else if(error.response.data === '*Gmail already in use'){
                setGmailError('*Gmail already in use');
                setLoading(false);
                return;
            }
            else if(error.response.data === '*Username taken'){
                setusernameError('*Username taken');
                setLoading(false);
                return;
            }

        });
    }


    return(
        <div className="shadow-xl shadow-white/60 border-2 border-white/60 bg-gradient-to-t from-black to-slate-900 p-10 rounded-xl flex flex-col items-center mt-14">
            <div className="m-2">
                <div className="text-slate-300 m-1 select-none">
                    <label htmlFor="gmail">Gmail</label>
                </div>
                <div>
                    <input type="text" id="gmail" placeholder="Enter email" className="w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none" onChange={(e) => setGmail(e.target.value)} />
                </div>
                <div className="text-base text-red-500">
                    {gmailerror}
                </div>
            </div>
            <div className="m-2">
                <div className="text-slate-300 m-1 select-none">
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="text" id="username" placeholder="Enter username" className="w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="text-base text-red-500">
                    {usernameerror}
                </div>
            </div>
            <div className="m-2">
                <div className="text-slate-300 m-1 select-none">
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <input type="text" id="password" placeholder="Enter password" className="w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="m-2">
                <div className="text-slate-300 m-1 select-none">
                    <label htmlFor="cpassword">Confirm password</label>
                </div>
                <div>
                    <input type="text" id="cpassword" placeholder="Enter password" className="w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none" onChange={(e) => setCPassword(e.target.value)} />
                </div>
            </div>
            <div className="text-base text-red-500">
                {passworderror}
            </div>
            <div className="m-2 select-none">
                <button className="text-white p-3 border-2 border-white m-2 w-72 mt-5 bg-slate-900" onClick={submitDetails}>
                    
                    {
                        loading ? <div>Loading ...</div> : `Submit`
                    }
                </button>
            </div>
        </div>
    )
}