import '../Profile.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function ChangePicture({ onProfilePictureChange }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onProfilePictureChange(file);
    }
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#467E18'),
    width: '80%',
    padding: '2%',
    fontFamily: 'DM Sans',
    fontSize: '1.3em',
    borderRadius: 40,
    textTransform: 'none',
    backgroundColor: '#467E18',
    '&:hover': {
      backgroundColor: '#274C08',
    },
  }));

  return (
    <div className='change-profile-btn'>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="change-profile-picture"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="change-profile-picture" style={{ width: '100%' }}>
        <ColorButton component="span">
          Change Profile Picture
        </ColorButton>
      </label>
    </div>
  );
}

export default ChangePicture;
