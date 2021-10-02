import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
    const styleCont = { 
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: '2px solid black',
        borderRadius: '12px',
        width: '45%',
        marginTop: '3%',
        padding: '50px',
        boxShadow: '10px 10px'
      }
      const styleObj ={
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20px',
        flexWrap: 'wrap',
        
      }
    return (
        <div className="container" style={styleCont}>
            <div style={styleObj} >
            <h4>Full Name: {props.fullName}</h4>
            <h4>Bio: {props.bio}</h4>
            <h4>Profession {props.profession}</h4>
            <button onClick={() => props.handleName(props.fullName)} style={{width:"150px",height:'40px',backgroundColor:"blue",borderColor: 'black',color: 'white',borderRadius: '10px',marginTop:'10px' }} >Show Name</button>
            </div>
            < img src="./title.png" alt ="About US" style={{width:"500px"}}>{props.children}</img>
        </div>
    )
}

Profile.defaultProps = {
    fullName: "Name",
    profession:"profession",
    bio: "bio",
}

Profile.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    handleName: PropTypes.func
}

export default Profile;