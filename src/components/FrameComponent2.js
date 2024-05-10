import { useMemo } from "react";
import Property1New from "./Property1New";

const FrameComponent2 = ({
  image60,
  crazyDesigners,
  prop,
  openCase,
  showFrameDiv,
  showComponent1,
  component1Visible,
  component1Visible1,
  propMargin,
  propBorder,
  propPadding,
  propBackgroundColor,
  propDisplay,
  propBorder1,
  propPadding1,
  propBackgroundColor1,
  propDisplay1,
  propWidth,
  propHeight,
}) => {
  const crazyDesignersStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const streetwearStyle = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
      backgroundColor: propBackgroundColor,
      display: propDisplay,
    };
  }, [propBorder, propPadding, propBackgroundColor, propDisplay]);

  const watchesStyle = useMemo(() => {
    return {
      border: propBorder1,
      padding: propPadding1,
      backgroundColor: propBackgroundColor1,
      display: propDisplay1,
    };
  }, [propBorder1, propPadding1, propBackgroundColor1, propDisplay1]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="w-[289px] relative rounded-2xl bg-shade-2 h-[410px] overflow-hidden shrink-0 text-left text-lg text-white font-bold">
      <div className="absolute h-[46.34%] w-[65.74%] top-[9.02%] right-[17.3%] bottom-[44.63%] left-[16.96%] [filter:blur(64.8px)] rounded-[50%] bg-darkslategray" />
      <img
        className="absolute h-[37.56%] w-[66.78%] top-[17.8%] right-[16.61%] bottom-[44.63%] left-[16.61%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image60}
      />
      <div className="absolute top-[253px] left-[16px] flex flex-col items-start justify-start gap-[4px]">
        <h2
          className="m-0 relative text-inherit tracking-[-0.02em] leading-[24px] font-bold font-inherit"
          style={crazyDesignersStyle}
        >
          {crazyDesigners}
        </h2>
        <div className="flex flex-row items-start justify-start gap-[5px]">
          <button className="cursor-pointer py-[5px] px-2 bg-shade-3 rounded-md flex flex-row items-center justify-center border-[1px] border-solid border-shade-4">
            <div
              className="relative text-sm tracking-[-0.02em] leading-[20px] font-medium font-medium text-shade-7 text-left"
              style={streetwearStyle}
            >
              Streetwear
            </div>
          </button>
          <button className="cursor-pointer py-[5px] px-2 bg-shade-3 rounded-md flex flex-row items-center justify-center border-[1px] border-solid border-shade-4">
            <div
              className="relative text-sm tracking-[-0.02em] leading-[20px] font-medium font-medium text-shade-7 text-left"
              style={watchesStyle}
            >
              Watches
            </div>
          </button>
        </div>
      </div>
      <strong className="absolute top-[319px] left-[16px] tracking-[-0.02em] leading-[24px] font-bold">
        <span>{prop}</span>
        <span className="text-shade-6">.00</span>
      </strong>
      <button className="cursor-pointer [border:none] p-3 bg-[transparent] absolute top-[351px] left-[16px] rounded-lg [background:linear-gradient(180deg,_#7848ff,_#6254ff)] w-[173px] flex flex-row items-center justify-center box-border">
        <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
          {openCase}
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-3 bg-shade-4 absolute top-[351px] left-[197px] rounded-lg w-[76px] flex flex-row items-center justify-center box-border">
        <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
          Info
        </b>
      </button>
      {showFrameDiv && (
        <div
          className="absolute top-[16px] left-[16px] flex flex-row items-start justify-start gap-[4px]"
          style={frameDiv4Style}
        >
          <Property1New
            new1="New"
            property1NewBorder="none"
            property1NewBackgroundColor="#39ff88"
            property1NewBackground="unset"
            newColor="#003114"
          />
          <Property1New
            new1="Hot"
            property1NewBorder="none"
            property1NewBackgroundColor="transparent"
            property1NewBackground="linear-gradient(180deg, #ff793f, #fb3629)"
            newColor="#fff"
          />
          <Property1New
            new1="Popular"
            property1NewBorder="none"
            property1NewBackgroundColor="#3ea1fc"
            property1NewBackground="unset"
            newColor="#fff"
          />
        </div>
      )}
    </div>
  );
};

export default FrameComponent2;
