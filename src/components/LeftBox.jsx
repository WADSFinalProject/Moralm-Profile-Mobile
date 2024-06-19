import '../Profile.css';

function LeftBox() {
  return (
    <div className='left-box'>
      <div className='data-box-left'>
        <div className='data-content'>
          <p className='left-text'>Employee ID</p>
          <p className='right-text'>348975938475</p>
        </div>
        <hr />
        <div className='data-content'>
          <p className='left-text'>Employee Role</p>
          <p className='right-text'>XYZ</p>
        </div>
        <hr className='hr2'/>
        <div className='data-content-address'>
          <p className='left-text'>Department Address</p>
          <p className='down-text'>Jl. Insert Address Here No 69, RT 06 RW 09, Nusa Tenggara Timur</p>
        </div>
      </div>
    </div>
  )
}

export default LeftBox
