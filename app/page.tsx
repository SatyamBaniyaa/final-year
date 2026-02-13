import { CircleArrowUp, Eye, ChevronsLeftRight } from "lucide-react";

export default function Homepage() {
  return (
    <div className=" ">
      <div className="grid grid-cols-12  ">
        <div className="col-span-3  w-full border-gray-500 ">
          <div className="flex m-1 bg-[#CAC7C5]">
            <img
              src="./image.png"
              alt="logo"
              height={17}
              width={17}
              className="rounded-full  m-2 "
            />
            <input type="" placeholder="Satyam" className="m-2 text-sm " />
          </div>

          <div className="   scroll-y bg-[#CAC7C5] m-1  ">
            <div className="flex justify-end">
              <div className=" m-1 flex ">
                <button className="bg-[#EBE8E0]  text-center  m-2  w-37">
                  build a landing page
                </button>
              </div>
            </div>

            <div className="flex   ">
              <img
                src="./image.png"
                alt="logo"
                height={17}
                width={17}
                className="rounded-full  m-2 "
              />
              <input type="" placeholder="Satyam" className=" text-sm  " />
            </div>

            <div className="flex m-1">
              "I wish I was a neutron bomb, for once I could go off I wish I was
              a sacrifice, but somehow still lived on I wish I was a sentimental
              ornament you hung on The Christmas tree, I wish I was the star
              that went on top I wish I was the evidence, I wish I was the
              grounds For 50 million hands upraised and open toward the sky I
              wish I was a sailor with someone who waited for me I wish I was as
              fortunate, as fortunate as me I wish I was a messenger and all the
              news was good I wish I was the full moon shining off your Camaro's
              hood I wish I was an alien at home behind the sun I wish I was the
              souvenir you kept your house key on I wish I was the pedal brake
              that you depended on I wish I was the verb 'to trust' and never
              let you down I wish I was a radio song, the one that you turned up
              I wish... I wish..."
            </div>
            <button className="  bg-[#C86442] m-1 rounded p-2">
              {"</>"} Fragment <br /> Preview {">"}
            </button>
          </div>
          <div className="  bg-[#FAF7F4]  m-1">
            <div className="bg-[#CAC7C5] m-1 ">
              <button className="p-2   w-full text-sm mb-35 flex ">
                What would you like to build?
                <br />
              </button>

              <div className="">
                <button className=" hover:text-orange-400 text-sm  flex justify-between w-full">
                  Enter to submit
                  <CircleArrowUp />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-9  w-full  bg-[#FAF7F4]">
          <div className="bg-[#FAF7F4] flex justify-between">
            <div className="flex items-center ">
              <div className="bg-[#FAF7F4] flex text-center p-2 w-30  ">
                <button className=" text-sm rounded bg-[#CAC7C5] flex  items-center p-2 cursor-pointer">
                  <Eye className="mr-2 h-7 w-7" /> Demo
                </button>
                <button className=" text-sm rounded bg-[#EFE9E1] flex  items-center p-2 cursor-pointer">
                  <ChevronsLeftRight className="mr-2 h-7 w-7" />
                  Demo
                </button>
              </div>
            </div>
            <div className="flex  ">
              <button className="bg-[#EED5CA] rounded-2xl  m-2 text-sm w-19 text-[#CD9584]">
                upgrade
              </button>
              <button className="bg-[#A647B6] p-2 m-1  text-center rounded-xl text-sm ">
                S
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
