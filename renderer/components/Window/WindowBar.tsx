import React from "react";
type Props = {
  title: string;
};

const onClickExit = () => {
  global.ipcRenderer.send("exit", "exit");
};
const WindowBar = ({ title }: Props) => {
  return (
    <div className="title-bar">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        <button aria-label="Close" onClick={onClickExit}></button>
      </div>
    </div>
  );
};
export default WindowBar;
