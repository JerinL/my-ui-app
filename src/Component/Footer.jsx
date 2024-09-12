// import React from "react";

// export default const Footer = () => {
//   return (
//     <div>new</div>
//   )
// }
// import React from 'react'

// export default function rf() {
//   return (
//     <div>rf</div>
//   )
// }

// import React from 'react'

// export default function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

import React from 'react'

 const Footer = ({title}) => {
  return (
    <div>{title}</div>
  )
}

Footer.defaultProps={
  title : "to do list"
}

export default Footer




