import React from 'react'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

function Footer() {
  return (
    <div className='container-fluid text-light text-center text-capitalize shadow-lg p-2 mb-5  rounded'>
        copyright <CopyrightOutlinedIcon/> { new Date().getFullYear() }
    </div>
  )
}

export default Footer