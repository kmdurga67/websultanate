import { useMemo } from "react";

const FrameComponent5 = ({
  image57,
  prop,
  propBorder,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div
      className="w-[169px] relative rounded-lg bg-shade-2 box-border h-[75px] overflow-hidden shrink-0 text-left text-mini text-white font-bold border-[1px] border-solid border-neon-green"
      style={frameDivStyle}
    >
      <div
        className="absolute top-[0px] left-[-31px] [filter:blur(93.4px)] rounded-[50%] bg-neon-green w-[75px] h-[75px]"
        style={ellipseDivStyle}
      />
      <div className="absolute top-[7px] left-[8px] flex flex-row items-center justify-start gap-[8px]">
        <img
          className="w-[60px] relative h-[60px] object-cover"
          alt=""
          src={image57}
        />
        <div className="flex flex-col items-start justify-start">
          <p className="m-0 relative tracking-[-0.02em] font-bold">
            <span>{prop}</span>
            <span className="text-shade-7">00</span>
          </p>
          <div className="flex flex-row items-center justify-start gap-[4px] text-xs text-shade-6 font-medium">
            <img
              className="w-3.5 relative rounded-10xs h-3.5 object-cover"
              alt=""
              src="/rectangle-2@2x.png"
            />
            <span className="relative tracking-[-0.02em] leading-[20px] font-medium">
              MsGreedy
            </span>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[10px] left-[0px] rounded-md bg-neon-green w-0.5 h-[55px] overflow-hidden"
        style={frameDiv1Style}
      />
    </div>
  );
};

export default FrameComponent5;
