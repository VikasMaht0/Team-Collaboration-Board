import React from "react";
import "./Header.css";

export default function Header({ activeBoard }) {
  return (
    <header className="header">
      <h1 className="logo">Team Collaboration Board</h1>
      {/* <div className="person-name">
       {activeBoard && <h2 className="board-title">{activeBoard.name}</h2>}
      </div> */}
      
    </header>
  );
}
