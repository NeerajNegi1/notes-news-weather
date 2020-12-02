import React from 'react'
import '../Footer/Footer.css'

function Footer() {
    const dt = new Date();
    const yr = dt.getFullYear();
    
    return (
        <p className="footer">&#169;{yr}: Neeraj Negi</p>
    )
}

export default Footer
