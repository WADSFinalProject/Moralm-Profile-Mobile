import { useState } from 'react';
import ChangePicture from './ChangePicture';
import '../Profile.css';

function ProfilePicture() {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (newPicture) => {
    setProfilePicture(newPicture);
  };

  return (
    <div className='profile-picture'>
      {profilePicture ? (
        <img src={URL.createObjectURL(profilePicture)} alt="Profile" className='profile-img' />
      ) : (
        <div className="profile-placeholder"></div>
      )}
      <ChangePicture onProfilePictureChange={handleProfilePictureChange} />
    </div>
  );
}

export default ProfilePicture;
