import { useState, useEffect, useRef, useMemo } from 'react';
import'./top_bar.css'

function Filter_chip_bar(){

    return(
    <div className="category-bar">
        <button className="category selected">All</button>
        <button className="category">Gaming</button>
        <button className="category">Minecraft modding</button>
        <button className="category">News</button>
        <button className="category">Audio commentaries</button>
        <button className="category">Live</button>
        <button className="category">Computer programming</button>
        <button className="category">Computers</button>
        <button className="category">PVP</button>
        <button className="category">Indie games</button>
        <button className="category">Recently uploaded</button>
        <button className="category">Watched</button>
        <button className="category">New to you</button>
    </div>
  );;

}

export default Filter_chip_bar