import webGPTLogo from "../assets/webgpt-logo.png";

const LeftPanel = () => {
  return (
    <div className="left-panel min-w-[270px] py-2 bg-neutral-800">
      <div className="header p-4 border-b-[1px] border-gray-700">
        <img className="h-8 invert" src={webGPTLogo}></img>
      </div>
    </div>
  );
};

export default LeftPanel;
