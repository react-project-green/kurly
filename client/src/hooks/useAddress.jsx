import React, { useRef, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

export function useAddress() { 
    const [data, setData] = useState({});
    const scriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const refs = {
        zipcodeRef: useRef(null), // reference for the zipcode input
        addressRef: useRef(null) // reference for the address input
    };

    const open = useDaumPostcodePopup(scriptUrl);

    const handleComplete = (data) => { 
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        console.log(fullAddress); 
        if (refs.zipcodeRef.current) {
            refs.zipcodeRef.current.value = data.zonecode; //zipcode 넣기
        }
        if (refs.addressRef.current) {
            refs.addressRef.current.value = fullAddress; // 지번주소 넣기
        }
        setData({zipcode:data.zonecode, address: data.address})
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });

    };

    return {
        Postcode: () => (
            <div>
                <button type='button' onClick={handleClick} className='address_botton'>
                    주소검색
                </button>
            </div>
        ),
        refs, data // Expose refs for use in the form inputs
    };
}
