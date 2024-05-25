import React from 'react'
import image from '../../assets/unsplash.png'
import logo from '../../assets/logo.webp'

import styles from './home.module.css'
 


const Home = () => {
  return (
<>
 
    <div   >Home

      

   
    <img src={image} alt=""  className={styles.img} />

    <h2 className={styles.title}>Welcome to my WebSite</h2>
    <img src={logo} alt=""  className={styles.img} />
    </div>
    </>

  )
}

export default Home