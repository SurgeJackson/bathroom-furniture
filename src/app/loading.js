'use client'

import { InfinitySpin } from  'react-loader-spinner';

export default function Loading() {
  console.log("Loading...");

  return (
    <div className='z-[1000]'>
      LoadingPage...
      <InfinitySpin
      width='500'
      color="#4fa94d"
    />
    </div>
  );


}