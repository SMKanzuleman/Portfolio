import React from 'react'

const Heading = (props) => {
  return (
    <h1 className="text-5xl font-extrabold tracking-tight font-Outfit text-transparent bg-clip-text bg-linear-to-t from-teal-950 to-teal-400" style={{marginTop: `${props.mt}px`, marginBottom: `${props.mb}px`}}>
      {props.data}
    </h1>
  );
}

export default Heading
