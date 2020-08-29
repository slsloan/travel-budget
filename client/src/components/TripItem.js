import React from 'react'
import { motion } from 'framer-motion'

const TripItem = () => {
    return(
        <a href="#!" title="View Chart" className="collection-item">{name}<span style={{float: "right"}}><i className="material-icons" >show_chart</i></span></a>
    )
}

export default TripItem