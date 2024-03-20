import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll'

export default function LandingPage({component}){


    const [home,setHome] = useState(true);
    const [signin,setSignin] = useState(false);
    const [signup,setSignup] = useState(false);
    const [details,setDetails] = useState(false);
    const [card,setCard] = useState(false);
    const [show,setShow] = useState(false);

    const [name,setName] = useState('');
    const [mobile,setMobile] = useState('');
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const goToHome = () => {
        setHome(true);
        setSignin(false);
        setSignup(false);
        setDetails(false);
        setCard(false);
        navigate('/');
    }
    const goToSignup = () => {
        setHome(false);
        setSignin(false);
        setSignup(true);
        setDetails(false);
        setCard(false);
        navigate('/signup');
    }
    const goToSignin = () => {
        setHome(false);
        setSignin(true);
        setSignup(false);
        setDetails(false);
        setCard(false);
        navigate('/signin');
    }

    const goToDetails = () => {
        setHome(false);
        setSignin(false);
        setSignup(false);
        setDetails(true);
        setCard(false);
        navigate('/details');
    }
    const goToCard = () => {
        setHome(false);
        setSignin(false);
        setSignup(false);
        setDetails(false);
        setCard(true);
        navigate('/card');
    }

    useEffect(()=>{
        const token = localStorage.getItem('OATIT');
        if(token){
            setShow(true);
        }
        else{
            setShow(false);
        }
        if(location.pathname === '/'){
            goToHome();
        }
        else if(location.pathname === '/details'){
            goToDetails();
        }
        else if(location.pathname === '/card'){
            goToCard();
        }
        else if(location.pathname === '/signin'){
            goToSignin();
        }
        else if(location.pathname === '/signup'){
            goToSignup();
        }
        

    },[])


    return (
        <div>
            <div className="fixed flex justify-around w-screen bg-black">
                <div className="flex items-center p-2 px-3 text-3xl select-none">
                    Name
                </div>
                <div className="flex items-end p-2 select-none">
                    <Link to="top" spy={true} smooth={true} duration={250} className="flex items-center">
                        <div className={home ? `text-green-200 text-3xl p-2 cursor-pointer` : `text-white text-lg p-2 cursor-pointer font-semibold hover:text-slate-400`} onClick={goToHome}>
                            Home
                        </div>
                    </Link>
                    {
                        show &&
                        <Link to="top" spy={true} smooth={true} duration={250} className="flex items-center">
                            <div className={details ? `text-green-200 text-3xl p-2 cursor-pointer` : `text-white text-lg p-2 cursor-pointer font-semibold hover:text-slate-400`} onClick={goToDetails}>
                                Details
                            </div>
                        </Link>
                    }
                    {
                        show &&
                        <Link to="top" spy={true} smooth={true} duration={250} className="flex items-center">
                            <div className={card ? `text-green-200 text-3xl p-2 cursor-pointer` : `text-white text-lg p-2 cursor-pointer font-semibold hover:text-slate-400`} onClick={goToCard}>
                                Card
                            </div>
                        </Link>
                    }
                </div>
                <Link to="contactForm" spy={true} smooth={true} duration={250} className="flex items-center select-none">
                    <div className={`text-green-200 text-3xl p-2 cursor-pointer`}>
                        Contact-Us
                    </div>
                </Link>
                {
                    !show ? 
                    <div className="flex items-end p-2 select-none">
                        <Link to="top" spy={true} smooth={true} duration={250} className="flex items-center">
                            <div className={signin ? `text-green-400 text-3xl p-2 cursor-pointer` : `text-white text-lg p-2 cursor-pointer font-semibold hover:text-slate-400`} onClick={goToSignin}>
                                SignIn
                            </div>
                        </Link>
                        <Link to="top" spy={true} smooth={true} duration={250} className="flex items-center">
                            <div className={signup ? `text-green-400 text-3xl p-2 cursor-pointer` : `text-white text-lg p-2 cursor-pointer font-semibold hover:text-slate-400`} onClick={goToSignup}>
                                SignUp
                            </div>
                        </Link>
                    </div>
                    :
                    <div className="flex items-end p-2 select-none">
                        <div className={`text-white text-2xl p-2 cursor-pointer font-semibold hover:text-slate-400`} onClick={()=>{
                            localStorage.removeItem('OATIT');
                            navigate('/signin');
                            window.location.reload();
                        }}>
                            SignOut
                        </div>
                    </div>
                }
            </div>
            <div id="top" className="flex justify-center bg-gradient-to-b from-black via-green-700 to-black items-center h-screen">
                {component}
            </div>
            <div className="bg-black" id="contactForm">
                <div className="flex justify-between">
                    <div className="select-none" >
                        
                    </div>
                    <div className="m-10 mt-80 bg-gradient-to-b from-slate-950 to-green-700 shadow-lg shadow-gray-300/60 border-gray-300/60 border-2 rounded-lg p-5">
                        <div className="select-none flex justify-center text-slate-300 text-xl font-bold p-3" >
                            Contact Form
                        </div>
                        <div>
                            <div className="p-1">
                                <label htmlFor="name" className="select-none text-slate-300" >Name</label>
                            </div>
                            <div>
                                <input type="text" id="name" className="outline-none w-64 h-8 p-2" onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className="p-1">
                                <label htmlFor="mobile"className="select-none text-slate-300" >Phone number</label>
                            </div>
                            <div>
                                <input type="text" id="mobile" className="outline-none w-64 h-8 p-2" onChange={(e) => setMobile(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className="p-1">
                                <label htmlFor="title"className="select-none text-slate-300" >Title</label>
                            </div>
                            <div>
                                <input type="text" id="title" className="outline-none w-64 h-8 p-2" onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div className="p-1">
                                <label htmlFor="text"className="select-none text-slate-300" >Description</label>
                            </div>
                            <div>
                                <input type="text" id="text" className="outline-none w-64 h-8 p-2" onChange={(e) => setDesc (e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex justify-center select-none">
                            <button className="h-10 w-60 border-2 border-white mt-7 text-slate-200 font-semibold bg-slate-950">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}