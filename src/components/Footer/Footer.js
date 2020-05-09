import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component{
 render(){
   const classes = this.props.classes;
   return(
     <>
       <footer>
         &copy; Kristen Stoeckeler
      </footer>
     </>
   );
 }
}

export default Footer;

