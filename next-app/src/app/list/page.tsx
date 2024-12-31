"use client";

import CustomButton from "@/components/CustomButton/CustomButton";
import './list.scss'

export default function List() {
    function handleClick() {
        console.log('스크롤이 동작합니다.');
    }
    return (
        <div className="main">
            <h2>Products</h2>
            <div className="food">
                <h4>상품명 $40</h4>
            </div>
            <div className="food">
                <h4>상품명 $40</h4>
            </div>
            <CustomButton title="GoodBye2024" handleClick={handleClick}  isDisabled={false} className="listBtn" />
        </div>
    )
}
