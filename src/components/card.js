
import Image from 'next/image';
export default function Card({ title, description, image }) {
        
        return (<div style={{
                border: "2px solid", marginLeft: "4px", marginRight: "4px",
                padding: "12px", width: "20vw", 
        }}>
                <div style= {{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Image
                                src={image}
                                alt="vercel logo"
                                width={220}
                                height={150}
                        />
                </div>
                <h1 style={{ "margin-top": "12px", "margin-bottom": "12px", fontStyle:"italic", fontSize:"150%" }}>{title}</h1>
                <p>{description}</p>

        </div>)
}
