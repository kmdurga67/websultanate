import { useMemo } from "react";

const FrameComponent1 = ({ rectangle9, frame68, propMargin }) => {
  const hoursAgoStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className="w-[354px] relative shadow-[0px_64px_59px_rgba(72,_97,_114,_0.08)] rounded-xl bg-shade-2 h-[340px] overflow-hidden shrink-0 text-left text-lg text-white font-bold">
      <div className="absolute top-[84px] left-[16px] flex flex-col items-start justify-start gap-[8px]">
        <strong className="relative tracking-[-0.02em] font-bold">
          Best serivce I ever used
        </strong>
        <p className="m-0 w-[313px] relative text-mini tracking-[-0.02em] leading-[20px] font-medium font-medium text-shade-7 inline-block">
          <a
            className="text-[inherit]"
            href="https://twitter.com/HypeDrop"
            target="_blank"
          >
            @HypeDrop
          </a>
        </p>
      </div>
      <p
        className="m-0 absolute top-[18px] left-[254px] text-mini tracking-[-0.02em] leading-[125.5%] font-medium font-medium1 text-shade-5"
        style={hoursAgoStyle}
      >
        3 hours ago
      </p>
      <div className="absolute top-[16px] left-[16px] flex flex-row items-start justify-start gap-[12px]">
        <img
          className="w-12 relative rounded-md h-12 object-cover"
          alt=""
          src={rectangle9}
        />
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <h2 className="m-0 relative text-inherit tracking-[-0.02em] font-bold font-inherit">
            Andr Grown
          </h2>
          <p className="m-0 relative text-mini tracking-[-0.02em] leading-[20px] font-medium font-medium text-shade-6">
            @users9384
          </p>
        </div>
      </div>
      <img
        className="absolute top-[298px] left-[calc(50%_-_69px)] w-[138px] h-[26px] object-cover"
        alt=""
        src="/frame-67@2x.png"
      />
      <img
        className="absolute top-[175px] left-[16px] w-[322px] h-[103px] object-cover"
        alt=""
        src={frame68}
      />
    </div>
  );
};

export default FrameComponent1;
