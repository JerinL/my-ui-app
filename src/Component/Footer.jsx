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

import React from "react";

const Footer = ({ title, user }) => {

  console.log(!user)
  return (
    <>
      {user ? (
        <>
          <div>
            {title + user?.length} {user.length === 1 ? "user" : "users"}
          </div>
        </>
      ):(
        <>
        <div>
          no data
        </div>
        </>
      )}
    </>
  );
};

// Footer.defaultProps={
//   title : "to do list"
// }

export default Footer;
