import '../Profile.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function UpdateProfile(){

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#467E18'),
        width: '40%',
        padding: '1.5%',
        fontFamily: 'DM Sans',
        fontSize: '1.2em',
        borderRadius: 40,
        textTransform: 'none',
        backgroundColor:'#467E18',
        '&:hover': {
          backgroundColor: '#274C08',
        },
      }));

      return (
        <div className='update-profile-btn'><ColorButton variant="contained">Update Profile</ColorButton></div>
      );
}

export default UpdateProfile