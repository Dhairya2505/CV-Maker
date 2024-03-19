import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


export default function Signin(){
    
    const [gmail,setGmail] = useState('');
    const [password,setPassword] = useState('')

    const [error,setError] = useState('');
    
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();

    const submitForm = () => {
        setLoading(true);
        axios.post('http://localhost:3001/signin',{},{
            headers : {
                gmail : gmail,
                password : password
            }
        }).then((response) => {
            localStorage.setItem('OATIT',response.data.token);
            setLoading(false);
            navigate('/about');
            window.location.reload();
        }).catch((error) => {
            setLoading(false);
            setError(error.response.data);
        })
    }

    return(
        <div className="shadow-xl shadow-white/60 border-2 border-white/60 bg-gradient-to-t from-black to-slate-900 p-10 rounded-xl flex flex-col items-center">
            <div className="m-2">
                <div className="text-slate-300 m-1 select-none">
                    <label htmlFor="gmail">Gmail</label>
                </div>
                <div>
                    <input type="text" id="gmail" placeholder="Enter email" className="w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none" onChange={(e) => setGmail(e.target.value)} />
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
            <div className="text-base text-red-500">
                {error}
            </div>
            <div className="m-2 select-none">
                <button className="text-white p-3 border-2 border-white bg-slate-900 m-2 w-72 mt-5" onClick={submitForm}>
                    
                    {
                        loading ? <div>Loading ...</div> : `Submit`
                    }
                    
                </button>
            </div>
        </div>
    )
}