import React, { useRef} from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Footer from "../Footer/footer";

export default function HeroSection() {

  const imgref=useRef(null)

    const left=()=>{
      imgref.current.scrollBy({
        left:300,
        behavior:"smooth",
      })
    }

    const right=()=>{
      imgref.current.scrollBy({
        left:-  300,
        behavior:"smooth",
      })
    }


  return (
    <>
      <div
        className="w-full h-170"
        style={{
          background:
            "url(https://images.pexels.com/photos/236910/pexels-photo-236910.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full flex flex-col  gap-40">
          <div className="w-full flex justify-between px-5 mt-30">
            <button>
              {" "}
              <FaChevronLeft size={50} />{" "}
            </button>
            <button>
              {" "}
              <FaChevronRight size={50} />{" "}
            </button>
          </div>

          <div className="w-full flex  justify-evenly"> 
            <div className="bg-white w-80 h-100 gap-2 flex wrap flex-col p-5 rounded">
              <h1 className="text-[21px] font-semibold">
                Appliances for your home | Up to 55% off
              </h1>

              <div className="flex gap-3">
                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>

                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>

                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>
              </div>
              <div>See More</div>
            </div>

            <div className="bg-white w-80 h-100 gap-2 flex wrap flex-col p-5 rounded">
              <h1 className="text-[21px] font-semibold">
                Appliances for your home | Up to 55% off
              </h1>

              <div className="flex gap-3">
                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>

                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>

                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>
              </div>
              <div>See More</div>
            </div>

            <div className="bg-white w-80 h-100 gap-2 flex wrap flex-col p-5 rounded">
              <h1 className="text-[21px] font-semibold">
                Appliances for your home | Up to 55% off
              </h1>

              <div className="flex gap-3">
                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>

                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg  )",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>

                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>
              </div>
              <div>See More</div>
            </div>

            <div className="bg-white w-80 h-100 gap-2 flex wrap flex-col p-5 rounded">
              <h1 className="text-[21px] font-semibold">
                Appliances for your home | Up to 55% off
              </h1>

              <div className="flex gap-3">
                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://m.media-amazon.com/images/I/61UE51azLWL._AC_SY145_.jpg)",
                        backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>

                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://m.media-amazon.com/images/I/81XlIoVdx2L._AC_SY145_.jpg)",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://m.media-amazon.com/images/I/51wqZYWGr+L._AC_SY170_.jpg)",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>

                <div>
                  <div
                    className="w-33 h-28  flex flex-col-reverse"
                    style={{
                      background:
                        "url(https://m.media-amazon.com/images/I/718F+0RgtfL._AC_SY170_.jpg)",
                      backgroundRepeat:"no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="text-[12px]">Air Conditioner</p>
                </div>
              </div>
              <div>See More</div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-evenly mt-5">
          <div className="bg-white w-80 h-100 gap-2 flex wrap flex-col p-5 rounded">
            <h1 className="text-[21px] font-semibold">
              Appliances for your home | Up to 55% off
            </h1>

            <div className="flex gap-3">
              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_2_1x._SY116_CB788857785_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>

              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_1_1x._SY116_CB788857785_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_3_1x._SY116_CB788857785_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>

              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_4_1x._SY116_CB788857785_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>
            </div>
            <div>See More</div>
          </div>

          <div className="bg-white w-80 h-100 gap-2 flex wrap flex-col p-5 rounded">
            <h1 className="text-[21px] font-semibold">
              Appliances for your home | Up to 55% off
            </h1>

            <div className="flex gap-3">
              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>

              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>

              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>
            </div>
            <div>See More</div>
          </div>

          <div className="bg-white w-80 h-100 gap-2 flex wrap flex-col p-5 rounded">
            <h1 className="text-[21px] font-semibold">
              Appliances for your home | Up to 55% off
            </h1>

            <div className="flex gap-3">
              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>

              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>

              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>
            </div>
            <div>See More</div>
          </div>

          <div className="bg-white w-80 h-100 gap-2 flex wrap flex-col p-5 rounded">
            <h1 className="text-[21px] font-semibold">
              Appliances for your home | Up to 55% off
            </h1>

            <div className="flex gap-3">
              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img26/march/gw/QC1_186_116_1403._SY116_CB784909716_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>

              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img26/march/gw/QC2_186_116_1403._SY116_CB784909716_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img26/march/gw/QC3_186_116_1403._SY116_CB784908702_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>

              <div>
                <div
                  className="w-33 h-28  flex flex-col-reverse"
                  style={{
                    background:
                      "url(https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img26/march/gw/Ablogo_186_116_1403._SY116_CB784909716_.jpg)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-[12px]">Air Conditioner</p>
              </div>
            </div>
            <div>See More</div>
          </div>
        </div>

        <div className="w-[94%] mt-5 m-auto p-5 gap-2 bg-white">
          <h1 className="text-[21px] p-5 font-semibold">
            Up to 40% off | Big savings on electronics & accessories
          </h1>

          <div className="flex items-center w-full">
          
            <button 
            onClick={right}
            className="bg-gray-400 text-2xl h-35 rounded p-3 z-1">
              <FaChevronLeft />
            </button>
            <div
            ref={imgref}
              id="scroll"
              className="w-full whitespace-nowrap overflow-x-scroll"
            >
              <div
            
                className="w-60 h-50 inline-block mr-3 "
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/71UKHtv92KL._AC_SY200_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block mr-3 "
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/81cZlmUqq1L._AC_SY200_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block mr-3"
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/81Tib6mb8eL._AC_SY200_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block mr-3"
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/614Q9nPTpkL._AC_SY200_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block mr-3"
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/61aM36RGwgL._AC_SY170_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block mr-3"
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/81LskAU5h1L._AC_SY200_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block mr-3"
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/51m4NsZau4L._AC_SY200_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block mr-3"
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/71OF-ZNvAVL._AC_SY200_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block mr-3"
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/61cNUNmYQ1L._AC_SY195_.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className="w-60 h-50 inline-block"
                style={{
                  background:
                    "url(https://m.media-amazon.com/images/I/61Qm+VXoCwL._AC_SY200_.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat:"no-repeat",
                  backgroundPosition: "center",
                  
                }}
              ></div>
            </div>
            <button
            onClick={left}
            className="bg-gray-400 text-2xl h-35 rounded p-3 z-1">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
