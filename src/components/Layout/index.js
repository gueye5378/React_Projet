import React from 'react'
import Linkbar from '../linkbar/linkbar'
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <>
        <Linkbar />
        {props.children}
      </>
   )
 }

export default Layout