import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Card () {

    const [token,setToken] = useState('');

    const [name,setName] = useState('Dhairya Singla');
    const [mobile,setMobile] = useState('8076311782');
    const [address,setAddress] = useState('dhalimar garden, extn-2, shaibabad, Ghaziabad');
    const [gmail,setGmail] = useState('dhairyasingla250504@gmail.com');
    const [qualification,setQualification] = useState('Btech in Compouter Science');
    const [expertise,setExpertise] = useState('');
    const [hobby,setHobby] = useState('');
    const [title1,setTitle1] = useState('CV Maker');
    const [title2,setTitle2] = useState('');
    const [desc1,setDesc1] = useState('This is a website in which a user can signin and enter his her qualifications and achievements and the website will make a sharable CV for them.');
    const [desc2,setDesc2] = useState('');
    const [link1,setLink1] = useState('https://CV-Maker.com');
    const [link2,setLink2] = useState('');
    const [github,setGithub] = useState('https://google.com');
    const [linkedin,setLinkedin] = useState('https://google.com');
    const [twitter,setTwitter] = useState('https://google.com');

    const navigate = useNavigate();
    
    const toTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(()=>{
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
            if(response.data.msg === "old user"){
                // setName(response.data.name);
                // setMobile(response.data.mobile);
                // setAddress(response.data.address);
                // setGmail(response.data.gmail);
                // setQualification(response.data.qualification);
                setExpertise(response.data.expertise);
                // setHobby(response.data.hobby);
                // setTitle1(response.data.title1);
                // setTitle2(response.data.title2);
                // setDesc1(response.data.desc1);
                // setDesc2(response.data.desc2);
                // setLink1(response.data.link1);
                // setLink2(response.data.link2); 
                // setGithub(response.data.github);
                // setLinkedin(response.data.linkedin);
                // setTwitter(response.data.twitter);

            }
            
        }
        getDetail();
    })

    return (
        <div>
            <div id="top" onClick={toTheTop()}>
            </div>

            
            <div>
                <div className="bg-black text-white">
                    <div className="text-3xl flex ">
                        {name}
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="">
                            <div>
                                <div>
                                    {mobile}
                                </div>
                                <div>
                                    {gmail}
                                </div>
                                <div>
                                    {address}
                                </div>
                            </div>
                            <div>
                                {qualification}
                            </div>
                            <div>
                                {expertise}
                            </div>
                            <div>
                                {hobby}
                            </div>
                        </div>
                        <div>
                            <div>
                                Projects
                            </div>
                            <div>
                                <div>
                                    {title1}
                                </div>
                                <div>
                                    {desc1}
                                </div>
                                <div>
                                    {link1}
                                </div>
                            </div>
                            {
                                title2 !=='' && desc2 !=='' && link2 !=='' &&
                                <div>
                                    <div>
                                        {title2}
                                    </div>
                                    <div>
                                        {desc2}
                                    </div>
                                    <div>
                                        {link2}
                                    </div>
                                </div>
                            }
                            {
                                title2 ==='' && desc2 ==='' && link2 ==='' &&
                                <div>
                                    <div>
                                        {github}
                                    </div>
                                    <div>
                                        {linkedin}
                                    </div>
                                    <div>
                                        {twitter}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        title2 !=='' && desc2 !=='' && link2 !=='' &&
                        <div>
                            <div>
                                {github}
                            </div>
                            <div>
                                {linkedin}
                            </div>
                            <div>
                                {twitter}
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}