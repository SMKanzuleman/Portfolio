import React from 'react'
import Grid from './Grid'

const Background = (props) => {
  return (
    <div className="w-full h-full relative bg-bg overflow-hidden flex flex-col items-center gap-5 ">
      <Grid />
      {props.children}
    </div>
  )
}

export default Background
