import '../Profile.css';
import UpdateProfile from './UpdateProfile';

function RightBox() {
  return (
    <div className='right-box'>
        <h1 className='AccountDetails'>Account Details</h1>
        <div className='data-box-right'>
          <div className='data-content-right'>
            <form>
              <label className='label' htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="fname"/>
            </form>
            <form>
              <label className='label' htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" name="lastname" />
            </form>
          </div>
          <div className='data-content-right'>
            <form className="phone-number">
              <label className='label' htmlFor="phonenum">Phone Number</label>
              <input type="text" id="phonenum" name="phonenum"/>
            </form>
            <form className="moralm-email">
              <label className='label' htmlFor="moralmemail">Moralm Email</label>
              <input type="text" id="moralmemail" name="moralmemail"/>
            </form>
          </div>
        </div>
        <UpdateProfile />
    </div>
  )
}

export default RightBox