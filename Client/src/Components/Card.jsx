import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { IoMdCall, IoIosMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';


export default function Card () {

    const [token,setToken] = useState('');

    const [name,setName] = useState('');
    const [mobile,setMobile] = useState('');
    const [address,setAddress] = useState('');
    const [gmail,setGmail] = useState('');
    const [qualification,setQualification] = useState('');
    const [expertise,setExpertise] = useState('');
    const [hobby,setHobby] = useState('');
    const [title1,setTitle1] = useState('');
    const [title2,setTitle2] = useState('');
    const [desc1,setDesc1] = useState('');
    const [desc2,setDesc2] = useState('');
    const [link1,setLink1] = useState('');
    const [link2,setLink2] = useState('');
    const [github,setGithub] = useState('');
    const [linkedin,setLinkedin] = useState('');
    const [twitter,setTwitter] = useState('');

    const [username,setUsername] = useState('');
    const [copy,setCopy] = useState(false);

    const navigate = useNavigate();
    
    const toTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(()=>{
        toTheTop;
        const Token = localStorage.getItem('OATIT');
        setToken(localStorage.getItem('OATIT'));
        if(!Token){
            navigate('/signin');
            window.location.reload();
        }
        let response = '';
        async function getDetail() {
            response = await axios.get('http://localhost:8001/getDetails',{
                headers:{
                    Authorization : Token
                }
            })
            if(response.data.msg === 'old user'){
                setName(response.data.name);
                setMobile(response.data.mobile);
                setAddress(response.data.address);
                setGmail(response.data.gmail);
                setQualification(response.data.qualification);
                setExpertise(response.data.expertise);
                setHobby(response.data.hobby);
                setTitle1(response.data.title1);
                setTitle2(response.data.title2);
                setDesc1(response.data.desc1);
                setDesc2(response.data.desc2);
                setLink1(response.data.link1);
                setLink2(response.data.link2); 
                setGithub(response.data.github);
                setLinkedin(response.data.linkedin);
                setTwitter(response.data.twitter);
                setUsername(response.data.username);
            }
            
        }
        getDetail();
    },[])

    const onCopy = () => {
        setCopy(true);
        setTimeout(() => setCopy(false), 5000);
    }

    return (
        <div>

            <div className="flex">
                <div className="shadow-xl shadow-white/60 border-white border-2 rounded-lg bg-gradient-to-t from-slate-900 to-black to-95% text-white mt-96">
                    <div className="text-7xl px-24 p-10 flex justify-end">
                        {name}
                    </div>
                    <div className="grid grid-cols-2 ">
                        <div className="w-96 p-5">
                            <div className="p-5 border-b-2 border-slate-200">
                                <div className="flex items-center">
                                    <IoMdCall className="ml-2 m-1 size-5"/>
                                    <div className="text-base">
                                        {mobile}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <IoIosMail className="ml-2 m-1 size-5"/>
                                    <div className="text-base">
                                        {gmail}
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <IoHome className="ml-2 m-1 size-5"/>
                                    <div className="text-base">
                                        {address}
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 flex border-b-2 border-slate-200">
                                <FaGraduationCap className="ml-2 m-1 size-5"/>
                                <div className="text-base">
                                    {qualification}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="pb-2 text-lg">
                                    Skills
                                </div>
                                {
                                    expertise.split(' ').map((element,index) => {
                                        return(
                                            <li key={index}>
                                                {`${element}`}
                                            </li>
                                        )
                                    })
                                }
                            </div>
                            {
                                hobby !== '' &&
                                <div className="p-5 border-t-2 border-slate-200">
                                    <div className="pb-2 text-lg">
                                        Hobbies
                                    </div>
                                    {
                                        hobby.split(' ').map((element,index) => {
                                            return(
                                                <li key={index}>
                                                    {element}
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                        <div className="p-5 border-l-2 border-slate-200">
                            <div className="p-2 flex justify-center text-3xl">
                                Projects
                            </div>
                            <div className="p-3">
                                <div>
                                    <li className="underline text-lg font-bold">
                                        {title1}
                                    </li>
                                </div>
                                <div className="w-80 text-slate-300">
                                    {desc1}
                                </div>
                                <div>
                                    <button className="bg-blue-600 p-1 px-5 text-lg rounded-lg m-3" onClick={() => {
                                        window.open(`${link1}`,"_blank")
                                    }}>Link</button>
                                </div>
                            </div>
                            {
                                title2 !=='' && desc2 !=='' && link2 !=='' &&
                                <div className="p-3">
                                    <div>
                                        <li className="underline text-lg font-bold">
                                            {title2}
                                        </li>
                                    </div>
                                    <div className="w-80 text-slate-300">
                                        {desc2}
                                    </div>
                                    <div>
                                        <button className="bg-blue-600 p-1 px-5 text-lg rounded-lg m-3" onClick={() => {
                                            window.open(`${link2}`,"_blank")
                                        }}>Link</button>
                                    </div>
                                </div>
                            }
                            {
                                (github || linkedin || twitter) &&
                                <div className="mt-10">
                                    <div className="text-xl">
                                        Important Links - 
                                    </div>
                                    <div className="flex">
                                        {   github &&
                                            <div>
                                                <button className="bg-blue-600 p-1 px-5 text-lg rounded-lg m-3" onClick={() => {
                                                    window.open(`${github}`,"_blank")
                                                }}>
                                                    Github
                                                </button>
                                            </div>
                                        }
                                        {   linkedin && 
                                            <div>
                                                <button className="bg-blue-600 p-1 px-5 text-lg rounded-lg m-3" onClick={() => {
                                                    window.open(`${linkedin}`,"_blank")
                                                }}>
                                                    Linkedin
                                                </button>
                                            </div>
                                            }
                                        {   twitter &&   
                                            <div>
                                                <button className="bg-blue-600 p-1 px-5 text-lg rounded-lg m-3" onClick={() => {
                                                    window.open(`${twitter}`,"_blank")
                                                }}>
                                                    Twitter
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                            
                        </div>
                    </div>
                    
                </div>
                <div className="mt-96">
                    <CopyToClipboard text={`http://localhost:5173/Card/${username}`} onCopy={onCopy} >
                        <button className="bg-blue-600 p-1 px-5 text-lg rounded-lg m-3 text-white w-28" >{copy ? "Copied!" : "Copy"}</button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    )
}