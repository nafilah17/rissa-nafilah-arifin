import React from 'react'
import { Image } from 'react-bootstrap';

const Profile = () => {
  return (
    <div className="text-center">
    <Image
      className="rounded-circle"
      width={200}
      height={200}
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    />
    <h4 className="mt-4">Rissa Nafilah</h4>
  </div>
  )
}

export default Profile