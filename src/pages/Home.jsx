
import React, { useEffect, useState } from 'react'
import { Coins, Search } from 'lucide-react'
import Slider from 'react-slick'
import axios from 'axios'
import styles from './Home.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SwipperBanner from './SwigerBAnner'
import Reyting from './Reyting'

function Home() {
  

  return (
    <>
      <main className={styles.homeMian}>
        <h1>Home Page</h1>
      </main>
    </>
  )
}

export default Home