import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">fuseble</div>
      <div className="menu">
        <div className="menuLeft">
          <div className="menuLeftContent">강의</div>
          <div className="menuLeftContent">로드맵</div>
          <div className="menuLeftContent">커뮤니티</div>
        </div>
        <div className="menuRight">
          <div className="menuRightContent">최근강의</div>
          <div className="menuRightContent">장바구니</div>
          <div className="menuRightContent">알람</div>
          <div className="menuRightContent">로그인</div>
        </div>
      </div>
    </div>
  );
};
