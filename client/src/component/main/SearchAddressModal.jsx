import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { IoClose } from "react-icons/io5";
import {Modal, ModalOverlay, ModalContent, ModalHeader,ModalFooter, ModalBody, ModalCloseButton, Button} from '@chakra-ui/react';

export default function SearchAddressModal() {
  const completeHandler = () =>{
    if(window.opener){
      window.opener.postMessage({address: data.address});
      window.close();
    }
  };

  return (
    <DaumPostcode onComplete={completeHandler }/>
  );
}

