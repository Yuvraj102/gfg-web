import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";

const GFGPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-outfit items-center justify-start mx-auto pb-[31px] w-full">
        <div className="h-[1491px] md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mb-[-127.67px] ml-auto w-[94%] z-[1]">
            <div className="flex flex-col gap-[33px] justify-start w-full">
              <Img
                className="h-[58px] md:h-auto ml-4 md:ml-[0] object-cover w-[34%]"
                src="images/img_ellipse2.png"
                alt="ellipseTwo"
              />
              <div className="flex flex-col gap-[57px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] w-[95%] md:w-full">
                  <Img
                    className="h-28 md:h-auto object-cover"
                    src="images/img_whatsappimage.png"
                    alt="whatsappimage"
                  />
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[18px]">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-center justify-start w-auto md:w-full">
                      <Text
                        className="text-white-A700 text-xl uppercase w-auto"
                        size="txtOutfitBold20"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-white-A700 text-xl uppercase w-auto"
                        size="txtOutfitBold20"
                      >
                        Events
                      </Text>
                      <Text
                        className="text-white-A700 text-xl uppercase w-auto"
                        size="txtOutfitBold20"
                      >
                        our team
                      </Text>
                      <Text
                        className="text-white-A700 text-xl uppercase w-auto"
                        size="txtOutfitBold20"
                      >
                        About Us
                      </Text>
                      <Button className="cursor-pointer font-bold leading-[normal] min-w-[233px] text-center text-xl">
                        Join Our Community
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-3/5 md:w-full">
                    <Text
                      className="capitalize ml-0.5 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                      size="txtInterBold50"
                    >
                      <span className="text-white-A700 font-outfit text-left font-bold">
                        <>
                          Welcome to <br />
                        </>
                      </span>
                      <span className="text-green-700 font-outfit text-left font-bold">
                        GeeksforGeeks
                      </span>
                      <span className="text-white-A700 font-outfit text-left font-bold">
                        {" "}
                        Student Chapter of{" "}
                      </span>
                      <span className="text-orange-800 font-outfit text-left font-bold">
                        JSPM’s RSCOE
                      </span>
                    </Text>
                    <Text
                      className="capitalize ml-0.5 md:ml-[0] text-lg text-white-A700 w-[96%] sm:w-full"
                      size="txtOutfitRegular18"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </>
                    </Text>
                    <div className="flex sm:flex-col flex-row font-outfit gap-[39px] items-center justify-start w-[64%] md:w-full">
                      <Button className="cursor-pointer font-bold leading-[normal] min-w-[233px] text-center text-xl">
                        Join Our Community
                      </Button>
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[233px] text-center text-xl"
                        color="green_700"
                        variant="outline"
                      >
                        Register For Event
                      </Button>
                    </div>
                  </div>
                  <div className="md:h-[565px] h-[611px] md:mt-0 mt-[3px] relative w-[39%] md:w-full">
                    <Img
                      className="absolute bottom-[0] h-[565px] object-cover right-[0] rotate-[10deg] w-2/5"
                      src="images/img_ellipse1.png"
                      alt="ellipseOne"
                    />
                    <Img
                      className="absolute h-96 left-[0] object-cover top-[0] w-[81%]"
                      src="images/img_gfg1.png"
                      alt="gfgOne"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-auto mx-auto p-11 md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mb-[29px] w-[92%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="bg-clip-text bg-gradient  capitalize md:text-5xl text-[90px] text-center text-transparent tracking-[4.50px] underline"
                  size="txtOutfitBold90"
                >
                  About Us
                </Text>
                <Text
                  className="capitalize mt-9 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtOutfitRegular30"
                >
                  <span className="text-gray-800 font-outfit font-normal">
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="text-gray-800 font-outfit font-bold">
                    Our
                  </span>
                  <span className="text-white-A700 font-outfit font-bold">
                    {" "}
                  </span>
                  <span className="text-green-700 font-outfit font-bold">
                    <>
                      Pledge
                      <br />
                    </>
                  </span>
                  <span className="text-gray-800 font-outfit font-normal">
                    We are dedicated to:
                  </span>
                </Text>
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-2 w-[84%] md:w-full">
                  <Img
                    className="h-[153px] md:h-auto object-cover"
                    src="images/img_istockphoto143.png"
                    alt="istockphoto143"
                  />
                  <Img
                    className="h-[152px] md:h-auto object-cover"
                    src="images/img_images.png"
                    alt="images"
                  />
                  <Img
                    className="h-[153px] md:h-auto object-cover"
                    src="images/img_istockphoto134.png"
                    alt="istockphoto134"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[17px] w-4/5 md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl uppercase"
                    size="txtOutfitBold24"
                  >
                    Innovation
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl uppercase"
                    size="txtOutfitBold24"
                  >
                    Continuous Learning
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-800 sm:text-xl uppercase"
                    size="txtOutfitBold24"
                  >
                    Community
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1240px] mt-[35px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[114px] h-[150px] relative w-[86%] md:w-full">
              <Text
                className="absolute bg-clip-text bg-gradient  capitalize inset-x-[0] mx-auto md:text-5xl text-[90px] text-center text-transparent top-[0] tracking-[4.50px] w-max"
                size="txtOutfitBold90"
              >
                EVENTS
              </Text>
              <Text
                className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                size="txtOutfitRegular30"
              >
                Stay inspired and informed through our hackathons, webinars, and
                tech talks.
              </Text>
            </div>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 2 },
                1050: { items: 4 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="flex gap-[21px] mt-[47px] w-full"
              items={[...Array(16)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="bg-cyan-50 flex flex-col items-center justify-end mx-2.5 p-3 rounded-[10px]">
                    <Text
                      className="capitalize mt-[368px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl"
                      size="txtOutfitBold24"
                    >
                      Event Name
                    </Text>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-5 bg-blue_gray-300 w-5" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-5 bg-blue_gray-300_7f w-5"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="flex h-5 justify-center mt-[42px] w-[110px]"
              count={4}
              activeCss="inline-block cursor-pointer rounded-[50%] h-5 bg-blue_gray-300 w-5"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-5 bg-blue_gray-300_7f w-5"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[151px] items-center justify-end mt-[46px] p-[65px] md:px-10 sm:px-5 w-full">
          <Text
            className="bg-clip-text bg-gradient1  capitalize mt-[5px] md:text-5xl text-[90px] text-center text-transparent tracking-[4.50px] underline"
            size="txtOutfitBold90Black900"
          >
            OUR TEAM
          </Text>
          <div className="flex flex-col items-center justify-start max-w-[1255px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[194px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between w-full">
                <div className="bg-green-700 flex md:flex-1 flex-col items-center justify-end p-[37px] sm:px-5 rounded-[20px] w-[31%] md:w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start mt-[117px] w-[93%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[2.40px] uppercase"
                      size="txtOutfitSemiBold24"
                    >
                      President
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_link.svg"
                        alt="link"
                      />
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </div>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[55px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-green-700 flex flex-col items-center justify-end sm:ml-[0] p-[37px] sm:px-5 rounded-[20px] w-full">
                    <div className="flex flex-col gap-[30px] items-center justify-start mt-[117px] w-[93%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[2.40px] uppercase"
                        size="txtOutfitSemiBold24"
                      >
                        President
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[50px] w-[50px]"
                          src="images/img_link.svg"
                          alt="link"
                        />
                        <Img
                          className="h-[50px] w-[50px]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                        <Img
                          className="h-[50px] w-[50px]"
                          src="images/img_info.svg"
                          alt="info"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-700 flex flex-col items-center justify-end sm:ml-[0] p-[37px] sm:px-5 rounded-[20px] w-full">
                    <div className="flex flex-col gap-[30px] items-center justify-start mt-[117px] w-[93%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[2.40px] uppercase"
                        size="txtOutfitSemiBold24"
                      >
                        President
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[50px] w-[50px]"
                          src="images/img_link.svg"
                          alt="link"
                        />
                        <Img
                          className="h-[50px] w-[50px]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                        <Img
                          className="h-[50px] w-[50px]"
                          src="images/img_info.svg"
                          alt="info"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[101px] grid md:grid-cols-1 grid-cols-2 justify-center w-[70%]"
                orientation="horizontal"
              >
                <div className="bg-green-700 flex flex-col items-center justify-end p-[37px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start mt-[117px] w-[93%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[2.40px] uppercase"
                      size="txtOutfitSemiBold24"
                    >
                      President
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_link.svg"
                        alt="link"
                      />
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-green-700 flex flex-col items-center justify-end p-[37px] sm:px-5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start mt-[117px] w-[93%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[2.40px] uppercase"
                      size="txtOutfitSemiBold24"
                    >
                      President
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_link.svg"
                        alt="link"
                      />
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-gradient2  flex flex-col items-center justify-end mt-[7px] p-[63px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1030px] mt-[237px] mx-auto p-[39px] md:px-5 rounded-[20px] w-full">
            <Text
              className="capitalize mb-[506px] md:text-5xl text-6xl text-black-900 text-center tracking-[3.00px]"
              size="txtOutfitBold60"
            >
              Contact Us
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center justify-start max-w-[1240px] mt-[59px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[72px] items-end justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[90%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[35px] items-start justify-between w-[54%] md:w-full">
                <Text className="text-gray-100 text-xl" size="txtInterBold20">
                  Home
                </Text>
                <Text className="text-gray-100 text-xl" size="txtInterBold20">
                  Events
                </Text>
                <Text className="text-gray-100 text-xl" size="txtInterBold20">
                  Our Team
                </Text>
                <Text className="text-gray-100 text-xl" size="txtInterBold20">
                  Bolgs/Updates
                </Text>
                <Text className="text-gray-100 text-xl" size="txtInterBold20">
                  About Us
                </Text>
              </div>
              <Img
                className="h-[39px]"
                src="images/img_fsocial.svg"
                alt="fsocial"
              />
            </div>
            <div className="flex flex-col gap-7 items-center justify-start w-full">
              <Line className="bg-green-700 h-px w-full" />
              <Text className="text-green-700 text-lg" size="txtInterRegular18">
                Copyright © 2023 GeeksforGeeks Student Chapter JSPM’s RSCOE.
                All rights reserved
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GFGPage;
