import { dataWhyUs } from "../data/whyus"
import {MdPriceCheck,MdHighQuality} from "react-icons/md"
import {GrServices} from "react-icons/gr"
const WhyUs = () => {
  return (
    <>
      <div className="mt-[100px] flex flex-col items-center mb-[50px]">
        <div className="max-w-[1440px] w-full  ">
          <div className="text-center text-5xl md:text-6xl font-bold">
            <p>Why Us</p>
          </div>
          <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-[20px] mt-10 mx-10">
            {/* {
              dataWhyUs.map((data,idx)=> {
                return (
                  <div key={idx} className="w-full rounded-lg h-[300px] shadow-lg shadow-gray-400/50 ">
                    <div className="p-6 flex flex-col items-center">
                      <div className="text-3xl font-bold">
                        {data.name}
                      </div>
                      <div className="text-xl opacity-80 w-[100px]">
                        <data.icon/>
                      </div> 
                    </div>
                  </div>
                )
              })
            } */}
            <div className="w-full rounded-lg h-[250px] shadow-lg shadow-gray-400/50 flex items-center justify-center">
              <div className="p-6 flex flex-col items-center">
                <div className="text-3xl font-medium mb-4 opacity-80 ">
                  {"High Quality"}
                </div>
                <div className="opacity-80 text-[100px]   ">
                  <MdHighQuality/>
                </div> 
              </div>
            </div>

            <div className="w-full rounded-lg h-[250px] shadow-lg shadow-gray-400/50 flex items-center justify-center">
              <div className="p-6 flex flex-col items-center">
                <div className="text-3xl font-medium mb-4 opacity-80 ">
                  {"Best Prices"}
                </div>
                <div className="opacity-80 text-[100px]   ">
                  <MdPriceCheck/>
                </div> 
              </div>
            </div>

            <div className="w-full rounded-lg h-[250px] shadow-lg shadow-gray-400/50 flex items-center justify-center">
              <div className="p-6 flex flex-col items-center">
                <div className="text-3xl font-medium mb-4 opacity-80 text-center">
                  {"Good Services"}
                </div>
                <div className="opacity-80 text-[100px]   ">
                  <GrServices/>
                </div> 
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUs