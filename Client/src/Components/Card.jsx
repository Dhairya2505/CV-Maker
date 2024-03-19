import { useEffect } from "react"

export default function Card () {
    
    const toTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <div id="top" onClick={toTheTop()}>
            </div>

            
            <div>
                Card
            </div>
        </div>
    )
}