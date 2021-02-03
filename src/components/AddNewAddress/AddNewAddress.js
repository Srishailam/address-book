import React from 'react'
import './AddNewAddress.scss';

export default function AddNewAddress({handleAddNewAddress}) {
  return (
    <div className="AddNewAddress">
      <div className="Card" onClick={() => handleAddNewAddress( _ => true)}>
        <div>+</div>
        <div>Add New Address</div>
      </div>
    </div>
  )
}
