import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import axios from 'axios';

export default function Restaurant(){

    const navigate = useNavigate();

    const [token,setToken] = useState('');

    const [name,setName] = useState('');
    const [mobile,setMobile] = useState('');
    const [address,setAddress] = useState('');
    const [qualification,setQualification] = useState('');
    const [expertise,setExpertise] = useState('');
    const [hobby,setHobby] = useState('');
    const [title1,setTitle1] = useState('');
    const [title2,setTitle2] = useState('');
    const [desc2,setDesc2] = useState('');
    const [desc1,setDesc1] = useState('');
    const [link1,setLink1] = useState('');
    const [link2,setLink2] = useState('');

    const [isReadOnly,setIsReadOnly] = useState(false);

    useEffect(() => {
        const Token = localStorage.getItem('OATIT');
        setToken(localStorage.getItem('OATIT'));
        if(!Token){
            navigate('/signin');
            window.location.reload();
        }
    },[])

    const submitDetails = () => {
        setIsReadOnly(true);
        const Token = localStorage.getItem('OATIT');
        const data = {
            name : name,
            mobile : mobile,
            address : address,
            qualification : qualification,
            expertise : expertise,
            hobby : hobby,
            title1 : title1,
            desc1 : desc1,
            link1 : link1,
            title2 : title2,
            desc2 : desc2,
            link2 : link2,
        }
        axios.post('http://localhost:8001/details',data,{
            headers : {
                Authorization : Token,
            }
        })
    }

    const editDetails = () => {
        setIsReadOnly(false);
    }

    return(
        token ? 
        <div>
            <div className="shadow-xl shadow-white/60 border-2 border-white/60 bg-gradient-to-t from-black to-slate-900 mt-40 mb-16 p-10 rounded-xl flex flex-col items-center">
                <div className="flex items-center text-slate-300 text-3xl">
                    Details {
                        isReadOnly && <div className="p-2 m-2 cursor-pointer border-2 bg-slate-900 border-white rounded-full hover:invert" onClick={editDetails}>
                            <GoPencil className="size-8"/>
                        </div>
                    }
                </div>
                <div className="grid grid-cols-2">
                    <div className="m-5">
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="Name">Name</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="Name" placeholder="Enter name" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setName(e.target.value)} readOnly={isReadOnly}/>
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="Mobile">Mobile</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="Mobile" placeholder="Enter phone number" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setMobile(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="address">Address</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="address" placeholder="Enter address" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setAddress(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="qualification">Qualification</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="qualification" placeholder="Enter Qualification" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setQualification(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="expertise">Expertises (Enter with space)</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="expertise" placeholder="Enter topics you are good at" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setExpertise(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="hobby">Hobbies (Enter with space)</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="hobby" placeholder="Enter your hobbies if any ..." className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setHobby(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>
                    </div>
                    <div className="m-5">
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="title1">Title</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="title1" placeholder="Enter title" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => settt(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="desc1">Description</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="desc1" placeholder="Describe your project" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setDesc1(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="link1">Link</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="link1" placeholder="Link of project" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setLink1(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>

                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="title2">Title</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="title2" placeholder="Enter title" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setTitle2(e.target.value)} readOnly={isReadOnly}/>
                               
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="desc2">Description</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="desc2" placeholder="Describe your project" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setDesc2(e.target.value)} readOnly={isReadOnly}/>
                                
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="text-slate-300 m-1 select-none">
                                <label htmlFor="link2">Link</label>
                            </div>
                            <div className="flex">
                                <input type="text" id="link2" placeholder="Link of project" className={isReadOnly ? `w-72 h-8 outline-none p-1 bg-gray-400 placeholder:text-gray-700 placeholder:select-none cursor-pointer` : `w-72 h-8 outline-none p-1 bg-gray-300 placeholder:text-gray-500 placeholder:select-none`} onChange={(e) => setLink2(e.target.value)} readOnly={isReadOnly}/>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <button className="p-2 m-2 bg-slate-800 w-72 border-2 border-slate-500 text-white text-lg" onClick={submitDetails}>
                        Submit
                    </button>
                </div>
                
            </div>
        </div>
        :
        <div className="text-white text-2xl">
            Loading ...
        </div>
    )
}