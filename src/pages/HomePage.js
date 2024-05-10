import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import Property1New from "../components/Property1New";
import FrameComponent1 from "../components/FrameComponent1";
import StarsX2Icon from "../components/StarsX2Icon";
import FrameComponent from "../components/FrameComponent";
import Icon1 from "../components/Icon1";
import Icon from "../components/Icon";

const HomePage = () => {
  return (
    <main className="w-full relative bg-shade-0 h-[3003px] overflow-hidden text-left text-smi text-shade-7 font-bold">
      <div className="absolute top-[0px] left-[0px] box-border w-[1920px] h-[68px] overflow-hidden border-b-[1.5px] border-solid border-shade-2">
        <img
          className="absolute top-[calc(50%_-_14px)] left-[24px] w-[159.1px] h-7 overflow-hidden object-cover"
          alt=""
          src="/--1@2x.png"
        />
        <div className="absolute top-[12px] left-[1489px] flex flex-row items-start justify-between">
          <button className="cursor-pointer p-3 bg-shade-1 rounded-lg overflow-hidden flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-shade-2">
            <img
              className="w-5 relative h-5 object-cover"
              alt=""
              src="/image-56@2x.png"
            />
            <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
              EN
            </b>
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/chevrondown@2x.png"
            />
          </button>
          <button className="cursor-pointer p-3 bg-shade-1 rounded-lg overflow-hidden flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-shade-2">
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0 object-contain"
              alt=""
              src="/coin-money@2x.png"
            />
            <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
              USD
            </b>
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/chevrondown@2x.png"
            />
          </button>
          <button className="cursor-pointer [border:none] py-3.5 px-6 bg-[transparent] rounded-lg [background:linear-gradient(180deg,_#7848ff,_#6254ff)] overflow-hidden flex flex-row items-center justify-start">
            <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
              Authorization
            </b>
          </button>
          <button className="cursor-pointer p-3 bg-shade-1 w-[47px] rounded-lg box-border h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-start border-[1px] border-solid border-shade-2">
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0 object-contain"
              alt=""
              src="/chat-messages@2x.png"
            />
          </button>
        </div>
        <nav className="m-0 absolute top-[26px] left-[217px] flex flex-row items-start justify-start gap-[32px] text-left text-mini text-shade-7 font-bold sm:hidden">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <a className="[text-decoration:none] w-5 relative h-5 [transform:_rotate(180deg)]">
              <img
                className="absolute top-[2.6px] left-[-18.1px] w-[16.2px] h-[15.5px] object-contain [transform:_rotate(-180deg)]"
                alt=""
                src="/vector.svg"
              />
            </a>
            <b className="relative tracking-[-0.02em]">Home</b>
          </div>
          <a className="[text-decoration:none] flex flex-row items-start justify-start gap-[8px] text-[inherit]">
            <img
              className="w-5 relative h-5"
              alt=""
              src="/treasurechest-1.svg"
            />
            <b className="relative tracking-[-0.02em]">Boxes</b>
          </a>
          <a className="[text-decoration:none] flex flex-row items-start justify-start gap-[8px] text-[inherit]">
            <img className="w-5 relative h-5" alt="" src="/swords-1.svg" />
            <b className="relative tracking-[-0.02em]">Battles</b>
          </a>
          <a className="[text-decoration:none] flex flex-row items-start justify-start gap-[8px] text-[inherit]">
            <img
              className="w-5 relative h-5 object-contain"
              alt=""
              src="/crown@2x.png"
            />
            <b className="relative tracking-[-0.02em]">VIP Members</b>
          </a>
          <a className="[text-decoration:none] flex flex-row items-start justify-start gap-[8px] text-[inherit]">
            <img
              className="w-5 relative h-5 object-contain"
              alt=""
              src="/user-people-team-group@2x.png"
            />
            <b className="relative tracking-[-0.02em]">Affiliates</b>
          </a>
        </nav>
      </div>
      <aside className="absolute top-[0px] left-[0px] w-[90px] h-[1200px] overflow-hidden flex flex-col items-center justify-end sm:hidden">
        <nav className="m-0 w-[90px] h-[1132px] overflow-hidden shrink-0 flex flex-col items-start justify-end pt-0 px-3 pb-3 box-border gap-[12px]">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <img
              className="w-[66px] relative rounded-lg h-[66px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/home@2x.png"
            />
            <img
              className="w-[66px] relative rounded-lg h-[66px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/open-case@2x.png"
            />
            <img
              className="w-[66px] relative rounded-lg h-[66px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/battles@2x.png"
            />
            <img
              className="w-[66px] relative rounded-lg h-[66px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/vip-members@2x.png"
            />
            <img
              className="w-[66px] relative rounded-lg h-[66px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/affiliates@2x.png"
            />
            <div className="w-[66px] relative h-[66px]">
              <div className="absolute top-[0px] left-[0px] rounded-lg [background:linear-gradient(180deg,_rgba(182,_156,_255,_0.19),_rgba(158,_132,_232,_0.06))] box-border w-[66px] h-[66px] overflow-hidden border-[1px] border-solid border-mediumslateblue-200">
                <div className="absolute h-[103.03%] w-[103.03%] top-[43.94%] right-[-1.52%] bottom-[-46.97%] left-[-1.52%] [filter:blur(26px)] rounded-[50%] bg-mediumslateblue-100" />
                <img
                  className="absolute h-[42.42%] w-[42.42%] top-[28.79%] right-[28.79%] bottom-[28.79%] left-[28.79%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/gift-1@2x.png"
                />
              </div>
              <img
                className="absolute h-[38.48%] w-[60.3%] top-[69.7%] right-[-8.79%] bottom-[-8.18%] left-[48.48%] rounded max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/frame-639@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="w-[66px] relative rounded-lg bg-shade-1 h-[66px] overflow-hidden shrink-0">
              <img
                className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 object-contain"
                alt=""
                src="/megaphone-trumpet@2x.png"
              />
            </div>
            <div className="w-[66px] relative rounded-lg bg-shade-1 h-[66px] overflow-hidden shrink-0">
              <img
                className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 object-contain"
                alt=""
                src="/email-message@2x.png"
              />
            </div>
            <img
              className="w-[66px] relative rounded-lg h-[66px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/documents@2x.png"
            />
            <img
              className="w-[66px] relative rounded-lg h-[66px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/documents@2x.png"
            />
          </div>
          <div className="w-[66px] rounded-lg bg-shade-1 h-[183px] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[27px] px-0 box-border">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <img
                className="w-5 relative h-5 object-cover"
                alt=""
                src="/twitter@2x.png"
              />
              <img
                className="w-5 relative h-5 object-cover"
                alt=""
                src="/inst@2x.png"
              />
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/tiktok@2x.png"
              />
              <img
                className="w-5 relative h-5 object-cover"
                alt=""
                src="/youtube@2x.png"
              />
            </div>
          </div>
        </nav>
      </aside>
      <div className="absolute top-[80px] left-[1613px] w-[307px] h-[1120px] overflow-hidden flex flex-col items-center justify-end sm:hidden">
        <div className="w-[332px] relative bg-shade-1 h-[1132px] overflow-hidden shrink-0 sm:hidden">
          <div className="absolute top-[24px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
            <FrameComponent6
              rectangle1="/rectangle-1@2x.png"
              msGreedy="MsGreedy"
              itsBeenAnHourWindowSinceI="its been an hour window since it sarted they just always "
            />
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="w-[38px] relative rounded h-[38px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <h6 className="m-0 relative text-inherit font-medium font-inherit">
                    coolmate
                  </h6>
                  <span className="relative font-medium text-shade-6">
                    10:13
                  </span>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <p className="m-0 relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    Hello all friends
                  </p>
                </div>
              </div>
            </div>
            <FrameComponent6
              rectangle1="/rectangle-1@2x.png"
              msGreedy="coolmate"
              itsBeenAnHourWindowSinceI="its all time waiting and show now low 😒"
            />
            <FrameComponent6
              rectangle1="/rectangle-1@2x.png"
              msGreedy="coolmate"
              itsBeenAnHourWindowSinceI={`Please provide camera access through your browser or device settings. Click "Allow" when prompted, or adjust settings accordingly.`}
            />
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="w-[38px] relative rounded h-[38px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <h6 className="m-0 relative text-inherit font-medium font-inherit">
                    HATEfriends
                  </h6>
                  <span className="relative font-medium text-shade-6">
                    10:13
                  </span>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <p className="m-0 relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    Good luck everybody 🍀
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="w-[38px] relative rounded h-[38px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <h6 className="m-0 relative text-inherit font-medium font-inherit">
                    coolmate
                  </h6>
                  <span className="relative font-medium text-shade-6">
                    10:13
                  </span>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <p className="m-0 relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    Hello all friends
                  </p>
                </div>
              </div>
            </div>
            <FrameComponent6
              rectangle1="/rectangle-1@2x.png"
              msGreedy="coolmate"
              itsBeenAnHourWindowSinceI=" how you been mate? It’s been a while"
            />
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="w-[38px] relative rounded h-[38px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <h6 className="m-0 relative text-inherit font-medium font-inherit">
                    coolmate
                  </h6>
                  <span className="relative font-medium text-shade-6">
                    10:13
                  </span>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <p className="m-0 relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    Ooooooffff
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="w-[38px] relative rounded h-[38px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <h6 className="m-0 relative text-inherit font-medium font-inherit">
                    coolmate
                  </h6>
                  <span className="relative font-medium text-shade-6">
                    10:13
                  </span>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <p className="m-0 relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    errr how did i move to sports
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="w-[38px] relative rounded h-[38px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <h6 className="m-0 relative text-inherit font-medium font-inherit">
                    coolmate
                  </h6>
                  <span className="relative font-medium text-shade-6">
                    10:13
                  </span>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <p className="m-0 relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    Hello all friends
                  </p>
                </div>
              </div>
            </div>
            <FrameComponent6
              rectangle1="/rectangle-1@2x.png"
              msGreedy="coolmate"
              itsBeenAnHourWindowSinceI="they moved the start times for fd back 30 min"
            />
            <FrameComponent6
              rectangle1="/rectangle-1@2x.png"
              msGreedy="coolmate"
              itsBeenAnHourWindowSinceI="thought the mod had gone mad asking not to share casino bets lol"
            />
            <FrameComponent6
              rectangle1="/rectangle-1@2x.png"
              msGreedy="coolmate"
              itsBeenAnHourWindowSinceI="thought the mod had gone mad asking not to share casino bets lol"
            />
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="w-[38px] relative rounded h-[38px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <div className="relative font-medium">coolmate</div>
                  <div className="relative font-medium text-shade-6">10:13</div>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <div className="relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    Hello all friends
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <div className="w-[38px] relative rounded bg-gainsboro h-[38px]" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <div className="relative font-medium">coolmate</div>
                  <div className="relative font-medium text-shade-6">10:13</div>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <div className="relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    Hello all friends
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[284px] flex flex-row items-start justify-start gap-[8px]">
              <div className="w-[38px] relative rounded bg-gainsboro h-[38px]" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start gap-[4px]">
                  <div className="relative font-medium">coolmate</div>
                  <div className="relative font-medium text-shade-6">10:13</div>
                </div>
                <div className="w-full rounded bg-shade-25 flex flex-row items-start justify-start py-1 px-2 box-border max-w-[234px] text-sm text-white font-medium">
                  <div className="relative tracking-[-0.02em] leading-[20px] font-medium inline-block max-w-[218px]">
                    Hello all friends
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] shadow-[0px_21px_57.5px_rgba(0,_0,_0,_0.65)] bg-shade-1 box-border w-[332px] h-14 overflow-hidden flex flex-row items-center justify-start py-0 pr-3 pl-[15px] gap-[122px] text-mini text-white border-b-[1px] border-solid border-shade-3">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 object-contain"
                alt=""
                src="/chat-messages@2x.png"
              />
              <strong className="relative tracking-[-0.02em] font-bold">
                Chat
              </strong>
            </div>
            <div className="flex flex-row items-start justify-start gap-[4px] text-sm font-medium">
              <div className="rounded-lg bg-shade-2 flex flex-row items-center justify-start p-1.5 gap-[6px]">
                <div className="w-4 relative h-4">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[50%] w-4 h-4 object-cover opacity-[0.2]"
                    alt=""
                    src="/ellipse-12@2x.png"
                  />
                  <img
                    className="absolute top-[5px] left-[5px] rounded-[50%] w-1.5 h-1.5 object-cover"
                    alt=""
                    src="/ellipse-11@2x.png"
                  />
                </div>
                <span className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  12, 490
                </span>
              </div>
              <div className="w-8 relative rounded-lg bg-shade-4 h-8 overflow-hidden shrink-0">
                <img
                  className="absolute top-[8px] left-[8px] w-4 h-4 overflow-hidden object-contain"
                  alt=""
                  src="/chevrondown@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[1054px] left-[0px] shadow-[0px_-4px_57.5px_rgba(0,_0,_0,_0.65)] bg-shade-1 box-border w-[332px] h-[78px] overflow-hidden flex flex-col items-center justify-center border-t-[1px] border-solid border-shade-3">
            <input
              className="[border:none] [outline:none] font-medium font-medium text-sm bg-shade-3 w-[303px] relative rounded-lg h-12 overflow-hidden shrink-0 py-3.5 px-[18px] box-border text-shade-6"
              placeholder="Enter your message"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[84px] left-[90px] w-[1506px] h-[2919px] overflow-hidden flex flex-col items-center justify-end text-5xl text-white">
        <div className="w-[1498px] relative h-[2935px]">
          <div className="absolute top-[12px] left-[12px] rounded-lg bg-shade-1 w-[1474px] h-[120px] overflow-hidden text-sm font-medium">
            <div className="absolute top-[12px] left-[16px] flex flex-row items-center justify-start gap-[6px]">
              <div className="w-4 relative h-4">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-4 h-4 object-cover opacity-[0.2]"
                  alt=""
                  src="/ellipse-121@2x.png"
                />
                <img
                  className="absolute top-[5px] left-[5px] rounded-[50%] w-1.5 h-1.5 object-cover"
                  alt=""
                  src="/ellipse-111@2x.png"
                />
              </div>
              <p className="m-0 relative tracking-[-0.02em] leading-[20px] font-medium">
                Live drops
              </p>
            </div>
            <div className="absolute top-[41px] left-[3px] flex flex-row items-start justify-start gap-[6px] text-mini font-bold">
              <FrameComponent5 image57="/image-57@2x.png" prop="$10." />
              <FrameComponent5
                image57="/image-57@2x.png"
                prop="$289."
                propBorder="1px solid #ff39df"
                propBackgroundColor="#ff39df"
                propBackgroundColor1="#ff39df"
              />
              <FrameComponent5
                image57="/image-57@2x.png"
                prop="$110."
                propBorder="1px solid #3ea1fc"
                propBackgroundColor="#3ea1fc"
                propBackgroundColor1="#3ea1fc"
              />
              <FrameComponent5
                image57="/image-57@2x.png"
                prop="$5."
                propBorder="1px solid #7d7d7d"
                propBackgroundColor="#7d7d7d"
                propBackgroundColor1="#7d7d7d"
              />
              <FrameComponent4
                image57="/image-57@2x.png"
                prop="$289."
                prop1="00"
              />
              <FrameComponent4
                image57="/image-57@2x.png"
                prop="$124."
                prop1="05"
                propBorder="1px solid #3ea1fc"
                propBackgroundColor="#3ea1fc"
                propBackgroundColor1="#3ea1fc"
              />
              <FrameComponent3 prop="$9" />
              <FrameComponent3 prop="$7" />
              <div className="w-[169px] relative rounded-lg bg-shade-2 box-border h-[75px] overflow-hidden shrink-0 border-[1px] border-solid border-grey">
                <div className="absolute top-[0px] left-[-31px] [filter:blur(93.4px)] rounded-[50%] bg-grey w-[75px] h-[75px]" />
                <div className="absolute top-[7px] left-[8px] flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="w-[60px] relative h-[60px] object-cover"
                    alt=""
                    src="/image-57@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative tracking-[-0.02em]">$7</b>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-xs text-shade-6 font-medium">
                      <img
                        className="w-3.5 relative rounded-10xs h-3.5 object-cover"
                        alt=""
                        src="/rectangle-2@2x.png"
                      />
                      <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                        MsGreedy
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[10px] left-[0px] rounded-md bg-grey w-0.5 h-[55px] overflow-hidden" />
              </div>
            </div>
          </div>
          <div className="absolute top-[578px] left-[12px] w-[1474px] h-[51px]">
            <div className="absolute top-[0px] left-[calc(50%_-_148.5px)] rounded-xl bg-shade-2 flex flex-row items-start justify-start p-1 gap-[3px]">
              <button className="cursor-pointer [border:none] p-3 bg-[transparent] rounded-lg [background:linear-gradient(180deg,_#7848ff,_#6254ff)] flex flex-row items-center justify-center">
                <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
                  Featured
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-3 bg-[transparent] rounded-lg flex flex-row items-center justify-center">
                <b className="relative text-mini tracking-[-0.02em] font-bold text-shade-6 text-left">
                  New Boxes
                </b>
              </button>
              <button className="cursor-pointer [border:none] p-3 bg-[transparent] rounded-lg flex flex-row items-center justify-center">
                <b className="relative text-mini tracking-[-0.02em] font-bold text-shade-6 text-left">
                  Top Boxes
                </b>
              </button>
            </div>
            <select className="absolute top-[0px] left-[calc(50%_+_511px)] rounded-xl bg-shade-2 [border:none] w-[230px] flex flex-row items-end justify-between p-4 box-border font-bold font-bold text-mini text-shade-6" />
            <div className="absolute top-[10px] left-[0px] flex flex-row items-center justify-start gap-[13px]">
              <img
                className="w-6 relative h-6 object-cover"
                alt=""
                src="/treasurechest-11@2x.png"
              />
              <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[31px] font-bold font-inherit">
                Featured Boxes
              </h2>
            </div>
          </div>
          <div className="absolute top-[1487px] left-[12px] w-[1474px] h-[51px] flex flex-row items-center justify-start py-1 px-0 box-border gap-[15px]">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="w-6 relative h-6 object-contain"
                alt=""
                src="/fencing@2x.png"
              />
              <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[31px] font-bold font-inherit">
                Latest Battles
              </h2>
            </div>
            <div className="rounded-lg bg-shade-4 flex flex-row items-center justify-center p-3">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini tracking-[-0.02em] font-bold font-bold text-shade-8 text-left inline-block">
                View All
              </button>
            </div>
          </div>
          <div className="absolute top-[2312px] left-[12px] w-[1474px] h-[51px] flex flex-row items-start justify-start pt-1.5 px-0 pb-[5px] box-border gap-[646px]">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="w-6 relative h-6 object-contain"
                alt=""
                src="/text-alignment-justify-left-square@2x.png"
              />
              <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[31px] font-bold font-inherit">
                Fresh Deliveries
              </h2>
            </div>
            <p className="m-0 relative text-base tracking-[-0.02em] leading-[20px] font-semibold font-medium text-shade-6 text-right">
              <span className="block">
                Check out some of the hottest unboxings from our community! To
                appear on our page, 
              </span>
              <span className="block">
                tag us on 
                <a
                  className="text-[inherit]"
                  href="https://twitter.com/HypeDrop"
                  target="_blank"
                >
                  Twitter
                </a>
                 when your item arrives.
              </span>
            </p>
          </div>
          <div className="absolute top-[639px] left-[12px] flex flex-col items-start justify-start gap-[8px] text-lg">
            <div className="w-[1478px] flex flex-row items-start justify-start gap-[8px]">
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Crazy Designers"
                prop="$390"
                openCase="Open case"
                showFrameDiv
                showComponent1
                component1Visible
                component1Visible1
              />
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Card Trader"
                prop="$50"
                openCase="Open Box"
                showFrameDiv
                showComponent1={false}
                component1Visible={false}
                component1Visible1
                propMargin="unset"
                propBorder="none"
                propPadding="0"
                propBackgroundColor="transparent"
                propDisplay="inline-block"
                propBorder1="none"
                propPadding1="0"
                propBackgroundColor1="transparent"
                propDisplay1="inline-block"
                propWidth="unset"
                propHeight="unset"
              />
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Crazy Designers"
                prop="$390"
                openCase="Open Box"
                showFrameDiv={false}
                showComponent1
                component1Visible
                component1Visible1
                propMargin="0"
                propBorder="unset"
                propPadding="unset"
                propBackgroundColor="unset"
                propDisplay="unset"
                propBorder1="unset"
                propPadding1="unset"
                propBackgroundColor1="unset"
                propDisplay1="unset"
                propWidth="unset"
                propHeight="unset"
              />
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Crazy Designers"
                prop="$390"
                openCase="Open Box"
                showFrameDiv
                showComponent1={false}
                component1Visible
                component1Visible1={false}
                propMargin="0"
                propBorder="unset"
                propPadding="unset"
                propBackgroundColor="unset"
                propDisplay="unset"
                propBorder1="unset"
                propPadding1="unset"
                propBackgroundColor1="unset"
                propDisplay1="unset"
                propWidth="unset"
                propHeight="unset"
              />
              <div className="w-[289px] relative rounded-2xl bg-shade-2 h-[410px] overflow-hidden shrink-0">
                <div className="absolute h-[46.34%] w-[65.74%] top-[9.02%] right-[17.3%] bottom-[44.63%] left-[16.96%] [filter:blur(64.8px)] rounded-[50%] bg-darkslategray" />
                <img
                  className="absolute h-[37.56%] w-[66.78%] top-[17.8%] right-[16.61%] bottom-[44.63%] left-[16.61%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image-60@2x.png"
                />
                <div className="absolute top-[253px] left-[16px] flex flex-col items-start justify-start gap-[4px]">
                  <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[24px] font-bold font-inherit">
                    Crazy Designers
                  </h2>
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <button className="cursor-pointer py-[5px] px-2 bg-shade-3 rounded-md flex flex-row items-center justify-center border-[1px] border-solid border-shade-4">
                      <div className="relative text-sm tracking-[-0.02em] leading-[20px] font-medium font-medium text-shade-7 text-left">
                        Streetwear
                      </div>
                    </button>
                    <button className="cursor-pointer py-[5px] px-2 bg-shade-3 rounded-md flex flex-row items-center justify-center border-[1px] border-solid border-shade-4">
                      <div className="relative text-sm tracking-[-0.02em] leading-[20px] font-medium font-medium text-shade-7 text-left">
                        Watches
                      </div>
                    </button>
                  </div>
                </div>
                <strong className="absolute top-[319px] left-[16px] tracking-[-0.02em] leading-[24px] font-bold">
                  <span>$390</span>
                  <span className="text-shade-6">.00</span>
                </strong>
                <fieldset className="absolute top-[351px] left-[16px] rounded-lg [background:linear-gradient(180deg,_#7848ff,_#6254ff)] w-[173px] flex flex-row items-center justify-center p-3 box-border text-left text-mini text-white font-bold">
                  <b className="relative tracking-[-0.02em]">Open Box</b>
                </fieldset>
                <button className="cursor-pointer [border:none] p-3 bg-shade-4 absolute top-[351px] left-[197px] rounded-lg w-[76px] flex flex-row items-center justify-center box-border">
                  <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
                    Info
                  </b>
                </button>
                <div className="absolute top-[16px] left-[16px] flex flex-row items-start justify-start gap-[4px]">
                  <Property1New
                    new1="New"
                    property1NewBorder="none"
                    property1NewBackgroundColor="#39ff88"
                    property1NewBackground="unset"
                    newColor="#003114"
                  />
                  <button className="cursor-pointer [border:none] p-2 bg-[transparent] rounded [background:linear-gradient(180deg,_#ff793f,_#fb3629)] hidden flex-row items-center justify-center">
                    <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
                      Hot
                    </b>
                  </button>
                  <button className="cursor-pointer [border:none] p-2 bg-blue rounded hidden flex-row items-center justify-center">
                    <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
                      Popular
                    </b>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[1478px] flex flex-row items-start justify-start gap-[8px]">
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Crazy Designers"
                prop="$390"
                openCase="Open case"
                showFrameDiv
                showComponent1={false}
                component1Visible={false}
                component1Visible1={false}
                propMargin="0"
                propBorder="unset"
                propPadding="unset"
                propBackgroundColor="unset"
                propDisplay="unset"
                propBorder1="unset"
                propPadding1="unset"
                propBackgroundColor1="unset"
                propDisplay1="unset"
                propWidth="166px"
                propHeight="35px"
              />
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Card Trader"
                prop="$50"
                openCase="Open case"
                showFrameDiv
                showComponent1={false}
                component1Visible={false}
                component1Visible1
                propMargin="0"
                propBorder="unset"
                propPadding="unset"
                propBackgroundColor="unset"
                propDisplay="unset"
                propBorder1="unset"
                propPadding1="unset"
                propBackgroundColor1="unset"
                propDisplay1="unset"
                propWidth="unset"
                propHeight="unset"
              />
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Crazy Designers"
                prop="$390"
                openCase="Open case"
                showFrameDiv={false}
                showComponent1
                component1Visible
                component1Visible1
                propMargin="0"
                propBorder="unset"
                propPadding="unset"
                propBackgroundColor="unset"
                propDisplay="unset"
                propBorder1="unset"
                propPadding1="unset"
                propBackgroundColor1="unset"
                propDisplay1="unset"
                propWidth="unset"
                propHeight="unset"
              />
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Crazy Designers"
                prop="$390"
                openCase="Open case"
                showFrameDiv
                showComponent1={false}
                component1Visible={false}
                component1Visible1={false}
                propMargin="0"
                propBorder="unset"
                propPadding="unset"
                propBackgroundColor="unset"
                propDisplay="unset"
                propBorder1="unset"
                propPadding1="unset"
                propBackgroundColor1="unset"
                propDisplay1="unset"
                propWidth="166px"
                propHeight="35px"
              />
              <FrameComponent2
                image60="/image-60@2x.png"
                crazyDesigners="Crazy Designers"
                prop="$390"
                openCase="Open case"
                showFrameDiv
                showComponent1
                component1Visible={false}
                component1Visible1={false}
                propMargin="0"
                propBorder="unset"
                propPadding="unset"
                propBackgroundColor="unset"
                propDisplay="unset"
                propBorder1="unset"
                propPadding1="unset"
                propBackgroundColor1="unset"
                propDisplay1="unset"
                propWidth="unset"
                propHeight="unset"
              />
            </div>
          </div>
          <div className="absolute top-[2383px] left-[12px] flex flex-row items-start justify-start gap-[20px] text-lg">
            <div className="w-[354px] relative shadow-[0px_64px_59px_rgba(72,_97,_114,_0.08)] rounded-xl bg-shade-2 h-[340px] overflow-hidden shrink-0">
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
              <p className="m-0 absolute top-[18px] left-[254px] text-mini tracking-[-0.02em] leading-[125.5%] font-medium font-medium1 text-shade-5">
                3 hours ago
              </p>
              <div className="absolute top-[16px] left-[16px] flex flex-row items-start justify-start gap-[12px]">
                <img
                  className="w-12 relative rounded-md h-12 object-cover"
                  alt=""
                  src="/rectangle-9@2x.png"
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
              <div className="absolute top-[175px] left-[16px] flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="w-[100px] relative rounded h-[103px] object-cover"
                  alt=""
                  src="/rectangle-6@2x.png"
                />
                <img
                  className="w-[102px] relative rounded h-[103px] object-cover"
                  alt=""
                  src="/rectangle-7@2x.png"
                />
                <img
                  className="w-[100px] relative rounded h-[103px] object-cover"
                  alt=""
                  src="/rectangle-8@2x.png"
                />
              </div>
            </div>
            <FrameComponent1
              rectangle9="/rectangle-9@2x.png"
              frame68="/frame-68@2x.png"
            />
            <FrameComponent1
              rectangle9="/rectangle-9@2x.png"
              frame68="/frame-681@2x.png"
              propMargin="unset"
            />
            <FrameComponent1
              rectangle9="/rectangle-9@2x.png"
              frame68="/frame-682@2x.png"
              propMargin="unset"
            />
          </div>
          <div className="absolute top-[2863px] left-[12px] rounded-lg bg-shade-2 w-[1474px] h-[72px] overflow-hidden text-mini text-shade-6 font-medium">
            <StarsX2Icon />
            <ul className="m-0 absolute top-[calc(50%_-_10px)] left-[calc(50%_-_463px)] flex flex-row items-start justify-start gap-[32px]">
              <li className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-1.5 relative rounded-sm bg-shade-4 h-1.5 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  AML Policy
                </div>
              </li>
              <li className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-1.5 relative rounded-sm bg-shade-4 h-1.5 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  Cookie Policy
                </div>
              </li>
              <li className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-1.5 relative rounded-sm bg-shade-4 h-1.5 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  Contact
                </div>
              </li>
              <li className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-1.5 relative rounded-sm bg-shade-4 h-1.5 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  Terms Of Service
                </div>
              </li>
              <li className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-1.5 relative rounded-sm bg-shade-4 h-1.5 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  Blog
                </div>
              </li>
              <li className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-1.5 relative rounded-sm bg-shade-4 h-1.5 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  FAQ
                </div>
              </li>
              <li className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-1.5 relative rounded-sm bg-shade-4 h-1.5 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  Provably Fair
                </div>
              </li>
              <li className="flex flex-row items-center justify-start gap-[8px]">
                <div className="w-1.5 relative rounded-sm bg-shade-4 h-1.5 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.02em] leading-[20px] font-medium">
                  Privacy Statement
                </div>
              </li>
            </ul>
            <img
              className="absolute top-[17px] left-[1274px] w-44 h-[38px] object-cover"
              alt=""
              src="/frame-2131328813@2x.png"
            />
          </div>
          <div className="absolute top-[1554px] left-[12px] flex flex-col items-start justify-start gap-[12px]">
            <FrameComponent
              frame673="/frame-673@2x.png"
              frame2131328830="/frame-2131328830@2x.png"
            />
            <FrameComponent
              frame673="/frame-673@2x.png"
              frame2131328830="/frame-21313288301@2x.png"
            />
            <FrameComponent
              frame673="/frame-673@2x.png"
              frame2131328830="/frame-21313288302@2x.png"
            />
            <FrameComponent
              frame673="/frame-673@2x.png"
              frame2131328830="/frame-21313288303@2x.png"
            />
            <FrameComponent
              frame673="/frame-673@2x.png"
              frame2131328830="/frame-21313288304@2x.png"
            />
            <FrameComponent
              frame673="/frame-673@2x.png"
              frame2131328830="/frame-21313288305@2x.png"
            />
          </div>
          <div className="absolute top-[141px] left-[12px] w-[1474px] overflow-hidden flex flex-col items-center justify-end text-[28.9px]">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <div className="w-[1035px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xl [background:linear-gradient(-90deg,_#9747ff,_#232325)] h-[417px] overflow-hidden shrink-0">
                <Icon1 />
                <button className="cursor-pointer [border:none] py-3.5 px-6 bg-[transparent] absolute top-[328px] left-[42px] rounded-lg [background:linear-gradient(180deg,_#7848ff,_#6254ff)] h-[47px] overflow-hidden flex flex-row items-center justify-start box-border">
                  <b className="relative text-mini tracking-[-0.02em] font-bold text-white text-left">
                    Claim now
                  </b>
                </button>
                <span className="absolute h-[10.98%] w-[8.55%] top-[76.76%] right-[33.88%] bottom-[12.25%] left-[57.57%] rounded-[9.64px] bg-shade-5 overflow-hidden [transform:_rotate(-10.5deg)] [transform-origin:0_0]">
                  <b className="absolute top-[4.8px] left-[14.5px] tracking-[-0.02em]">
                    Free
                  </b>
                </span>
                <div className="absolute h-[19.9%] w-[38.79%] top-[85.37%] right-[3.64%] bottom-[-5.28%] left-[57.57%] [filter:blur(63px)] rounded-[50%] bg-gray" />
                <img
                  className="absolute top-[42px] left-[581px] w-[452px] h-[362px] object-cover"
                  alt=""
                  src="/image-58@2x.png"
                />
                <img
                  className="absolute h-[8.94%] w-[6.12%] top-[71.46%] right-[5.38%] bottom-[19.59%] left-[88.5%] rounded-[6.59px] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/frame-640@2x.png"
                />
                <div className="absolute top-[50px] left-[42px] flex flex-col items-start justify-start gap-[14px] text-[44px]">
                  <h1 className="m-0 w-[334px] relative text-inherit tracking-[-0.02em] leading-[48px] font-bold font-inherit inline-block">
                    Sign Up today and claim your FREE box
                  </h1>
                  <a
                    className="w-[255px] relative text-sm tracking-[-0.02em] leading-[20px] font-medium font-medium text-shade-7 inline-block [text-decoration:none]"
                    href={`https://www.figma.com/file/YTJxq2L4XYMyZDKp9r6XxA/Logo?type=design&node-id=0%3A1&mode=design&t=y86n4kmSMLPWrL2N-1`}
                    target="_blank"
                  >
                    Unlock YOUR Free Box Today! Each box is a treasure trove of
                    excitement waiting to be discovered. Don't miss out – dive
                    into the unknown with us!
                  </a>
                </div>
              </div>
              <div className="w-[427px] relative rounded-2xl [background:linear-gradient(0deg,_#9747ff,_#232325),_#1a1a20] h-[417px] overflow-hidden shrink-0 text-[28px] sm:hidden">
                <Icon />
                <img
                  className="absolute h-[63.31%] w-[67.92%] top-[43.88%] right-[14.29%] bottom-[-7.19%] left-[17.8%] max-w-full overflow-hidden max-h-full object-cover lg:w-[290%]"
                  alt=""
                  src="/image-59@2x.png"
                />
                <div className="absolute h-[33.09%] w-[57.14%] top-[5.76%] right-[37.24%] bottom-[61.15%] left-[5.62%] flex flex-col items-start justify-start gap-[8px]">
                  <h2 className="m-0 w-[244px] relative text-inherit tracking-[-0.02em] leading-[30px] font-bold font-inherit inline-block">
                    Earn up to 10% on deposits from your friends
                  </h2>
                  <p className="m-0 w-[198px] relative text-sm tracking-[-0.02em] leading-[20px] font-medium font-medium text-shade-7 inline-block">
                    Give your friends a 5% bonus added to all their cash
                    deposits
                  </p>
                </div>
                <span className="absolute w-[8.67%] top-[calc(50%_-_137.5px)] right-[43.42%] left-[47.92%] rounded-[6.59px] bg-pink overflow-hidden flex flex-row items-center justify-center py-[3px] px-[5px] box-border [transform:_rotate(5.8deg)] [transform-origin:0_0] text-[19.8px]">
                  <b className="relative tracking-[-0.02em]">5%</b>
                </span>
                <button className="cursor-pointer [border:none] py-3.5 px-6 bg-neon-green absolute top-[328px] left-[42px] rounded-lg h-[47px] overflow-hidden flex flex-row items-center justify-start box-border">
                  <b className="relative text-mini tracking-[-0.02em] font-bold text-neon-green-inner text-left">
                    Refer a friend
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
