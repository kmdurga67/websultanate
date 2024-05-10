const FrameComponent6 = ({
  rectangle1,
  msGreedy,
  itsBeenAnHourWindowSinceI,
}) => {
  return (
    <div className="w-[284px] flex flex-row items-start justify-start gap-[8px] text-left text-smi text-shade-7 font-bold">
      <img
        className="w-[38px] relative rounded h-[38px] object-cover"
        alt=""
        src={rectangle1}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <h6 className="m-0 relative text-inherit font-medium font-inherit">
            {msGreedy}
          </h6>
          <span className="relative font-medium text-shade-6">10:13</span>
        </div>
        <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
          <p className="m-0 relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
            {itsBeenAnHourWindowSinceI}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
