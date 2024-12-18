import React from 'react'
import { Rings } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className='w-screen h-[70vh] flex justify-center items-center'>
      <Rings
  visible={true}
  height="80"
  width="80"
  color="#304be6"
 />
    </div>
  )
}

export default Loading
