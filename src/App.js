import './App.css';
import AddNewAddress from './components/AddNewAddress/AddNewAddress';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import AddressForm from './components/AddressForm/AddressForm';

function App() {
  const [addNewAddress, setAddNewAddress] = useState(false);
  return (
    <div className="App">
      <AddNewAddress handleAddNewAddress={setAddNewAddress}/>
      {
        addNewAddress && <Modal handleClose={setAddNewAddress} headerText={"Add New Address"}>
         <AddressForm />
        </Modal>
      }
    </div>
  );
}

export default App;
