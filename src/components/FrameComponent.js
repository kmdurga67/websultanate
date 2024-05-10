const FrameComponent = ({ frame673, frame2131328830 }) => {
  return (
    <div className="w-[1474px] relative rounded-2xl bg-shade-2 h-[113px] overflow-hidden shrink-0 text-left text-lg text-white font-bold">
      <img
        className="absolute top-[8px] left-[calc(50%_-_446px)] rounded-lg w-[1022px] h-[97px] overflow-hidden object-cover"
        alt=""
        src={frame673}
      />
      <button className="cursor-pointer [border:none] p-3 bg-[transparent] absolute top-[54px] left-[1339px] rounded-lg [background:linear-gradient(180deg,_#7848ff,_#6254ff)] w-[119px] flex flex-row items-center justify-center box-border">
        <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
          Open case
        </b>
      </button>
      <b className="absolute top-[21px] left-[1355px] tracking-[-0.02em] leading-[24px] font-bold">
        <span>$390</span>
        <span className="text-shade-6">.00</span>
      </b>
      <img
        className="absolute top-[16px] left-[16px] rounded-xl w-[250px] h-[81px] overflow-hidden object-cover"
        alt=""
        src={frame2131328830}
      />
    </div>
  );
};

export default FrameComponent;
