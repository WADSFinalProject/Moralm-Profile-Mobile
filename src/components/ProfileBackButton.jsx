import '../Profile.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function ProfileBackButton() {
  return (
    <div className='profile-back-btn'>
        <ArrowBackIosNewOutlinedIcon />
        &nbsp; Edit Profile
    </div>
  )
}

export default ProfileBackButton