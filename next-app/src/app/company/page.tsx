"use client";

import CustomButton from "@/components/CustomButton/CustomButton";

export default function Page() {
    function handleClick() {
        console.log('스크롤이 동작합니다.');
    }
    return (
        <div className="main">
            <h1>회사입니다</h1>
            <div className="food">
                <h4>상품명 $40</h4>
            </div>
            <CustomButton title="GoodBye2024" handleClick={handleClick}  isDisabled={false} className="listBtn" />
        </div>
    )
}
