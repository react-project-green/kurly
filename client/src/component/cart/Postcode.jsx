import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';

export default function Postcode() {
    const [data, setData] = useState({ zipcode: '', address: '', detailaddress: '' });
    const [isOpen, setIsOpen] = useState(false); // 검색창 열기/닫기 상태
    const [userId, setUserId] = useState(null); // 사용자 ID 저장

    useEffect(() => {
        // 로컬 스토리지에서 사용자 ID 가져오기
        const id = localStorage.getItem("user_id");
        if (id) {
            setUserId(id);
        }
    }, []);

    const handleComplete = async (addressData) => {
        let fullAddress = addressData.address;
        let extraAddress = '';

        if (addressData.addressType === 'R') {
            if (addressData.bname !== '') {
                extraAddress += addressData.bname;
            }
            if (addressData.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${addressData.buildingName}` : addressData.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        const updatedData = {
            zipcode: addressData.zonecode,
            address: fullAddress,
            detailaddress: data.detailaddress || 'ddddd', // 기존 상세주소 유지
            id: userId, // 사용자 ID 추가
        };

        setData(updatedData);





        // 주소 변경 API 호출
        try {
            const response = await axios.post("http://localhost:9000/member/addressUpdate", updatedData);
            if (response.data.result_rows) {
                alert("배송지가 성공적으로 변경되었습니다.");
            } else {
                console.log(updatedData);
                
                alert("배송지 변경에 실패했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error("배송지 업데이트 오류:", error);
            alert("배송지 변경 중 오류가 발생했습니다.");
        }

        setIsOpen(false); // 주소 선택 후 검색창 닫기
    };

    return (
        <div>
            {/* 우편번호 입력 필드 */}
            <div>
                <p>현재 주소:{data.address || "주소를 검색해주세요."}</p>
            </div>
            <div>
                <DaumPostcode onComplete={handleComplete} autoClose={false} />
            </div>
        </div>
    );
}
