import React from 'react'
import "./Footer.css"
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa'

const footerName = [
  [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center"
  ],
  [
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use"
  ],
  [
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us"
  ],
  [
    "Speed Test",
    "Legal Notices",
    "Only on Netflix"
  ]
];




const Footer = () => {
  return (
    <div className="footer container">
      <div className="row">
        <div class="col-sm-12 faicon">
          <FaFacebook size={30}/>
          <FaInstagram size={30}/>
          <FaTwitter size={30}/>
          <FaYoutube size={30}/>
        </div>
      </div>
      <div className="row footerlinks">
        {footerName.map((column, i) => (
          <div key={i} className="col-md-3 col-6  col-sx-6 facontent">
            
                {
                  column.map((name,i)=>{
                    return <li key={i}>{name}</li>
                  })
                }
            
          </div>
        ))}
      </div>

    </div>
  )
}

export default Footer

