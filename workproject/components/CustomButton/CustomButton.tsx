"use client";

import PropsCustomButton from "../../../new-types";

import Image from "next/image";
import "./CustomButton.scss";

const CustomButton = ({
  title,
  handleClick,
  btnType = "button",
  textStyles,
  rightIcon,
  isDisabled = false,
  className = "",
}: PropsCustomButton) => {
  return (
    <button
      className={`listBtn ${className}`} // className은 추가될 수 있도록 설정
      type={btnType}
      disabled={isDisabled}
      onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div>
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
