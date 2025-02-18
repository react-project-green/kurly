import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { IoClose } from "react-icons/io5";


export default function PopupDom() {
  return (
    <DaumPostBackground>
      <DaumPostConainer>
        <div>
          {/* <DaumPostCloseSvg onClick={()=>} /> */}
        </div>

      </DaumPostConainer>
    </DaumPostBackground>
  );
}

const DaumPostBackground = styled.div`
  position : fixed;
  top: 0; 
  left: 0; 
  bottom : 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;
const DaumPostConainer = styled.div`
  position : absolute;
  top: 50%; 
  left: 50%; 
  width: 500px
  transform: translate(-50%, -50%);
`;