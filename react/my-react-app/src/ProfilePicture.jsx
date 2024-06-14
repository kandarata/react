
function ProfilePicture() {

    const imageUrl = './src/assets/profile.jpg';

    const handleClick = (e) => {
        console.log("OUCH!");
        e.target.style.display = "none";
    }

    return (<div><img onClick={(e) => handleClick(e)} src={imageUrl}></img></div>)
}

export default ProfilePicture