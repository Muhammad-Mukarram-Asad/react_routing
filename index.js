import FbImageLibrary from 'react-fb-image-grid'

export default function FbPost(props) {
    const { title, date, images, username, profilePic } = props

    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start",
         alignItems:"center", width: '100%', height:"100%", border: '2px solid black' }}>

            <img style={{ borderRadius: '50%' }} width='50' height='50' src={profilePic} />
            <p style={{color:"black", fontSize:"26px"}}>{username}</p>
            <p style={{color:"darkblue", fontSize:"20px"}}>{date}</p>

            <p style={{color:"darkgreen", fontSize:"30px"}}>{title}</p>
            <div style={{ width: '50%',height:"auto", border:"2px solid red" }}>
                <FbImageLibrary images={images} />
            </div>
        </div>
    )
}
