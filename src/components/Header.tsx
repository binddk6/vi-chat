// components/Header.tsx
import React from "react";

interface HeaderProps {
  isConnected: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isConnected }) => (
  <div className="header">
    <h1>Banter</h1>
    <p>
      Status:
      <span className={isConnected ? "connected" : "disconnected"} />
    </p>
  </div>
);
