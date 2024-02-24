import React, { useEffect, useState } from "react";
import { FaEdit, FaTags, FaWallet } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdSpaceDashboard, MdInsertPageBreak } from "react-icons/md";
import {
  BsFillPersonLinesFill,
  BsFillChatSquareTextFill,
} from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoEyeSharp, IoPersonAdd, IoSettings } from "react-icons/io5";
import { RiPagesFill } from "react-icons/ri";
import { expertDashInfo as expert } from "../../constant";
import {
  ResponsiveContainer,
  ComposedChart,
  BarChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  {
    name: "JAN",
    avgRating: 2,
  },
  {
    name: "FEB",
    avgRating: 4.5,
  },
  {
    name: "MAR",
    avgRating: 5,
  },
  {
    name: "APR",
    avgRating: 4.2,
  },
  {
    name: "MAY",
    avgRating: 3,
  },
  {
    name: "JUN",
    avgRating: 3,
  },
  {
    name: "JUL",
    avgRating: 4.2,
  },
  {
    name: "AUG",
    avgRating: 2,
  },
  {
    name: "SEP",
    avgRating: 4.8,
  },
  {
    name: "OCT",
    avgRating: 5,
  },
  {
    name: "NOV",
    avgRating: 4.2,
  },
  {
    name: "DEC",
    avgRating: 3.6,
  },
];
const dataPie = [
  { name: "Contributions", value: 120 },
  { name: "Meetings", value: 80 },
  { name: "Blogs", value: 240 },
];

const COLORS = ["#629BF0", "#FF5E18", "#9747FF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const ContributionGraph = () => {
  const [data, setData] = useState([]); // Replace with your data source and structure
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Replace with your data fetching logic
        // For example, if using an API:
        // const response = await fetch('https://api.example.com/contributions');
        // const contributionData = await response.json();
        // setData(contributionData);
        // Or, if using manual input:
        // setData(userContributions);
      } catch (err) {
        console.error(err);
        setError("Error fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};
const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="w-full bg-[#ececec] rounded-full">
      <div
        className={` h-[0.6vw] rounded-full ${color}`}
        style={{
          width: `${percentage}%`,
          transition: "width 1.2s ease-in-out",
        }}
      ></div>
    </div>
  );
};
const Contributioncard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="flex items-center justify-between px-3 py-4 my-3 rounded-md bg-[#ececec]"
        onClick={() => (open ? setOpen(false) : setOpen(true))}
      >
        <div>ServiceName</div>
        <div className="flex items-center gap-6">
          <div>Date given</div>
          <div>{!open ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
        </div>
      </div>
      {open && (
        <div className=" px-3 py-4 border border-[#c7c7c7] border-solid rounded-md flex justify-between">
          <div className="text-sm">
            <div>Customer Name: XYZ </div>
            <div className="my-2">Duration: x hours </div>
            <div>Service price: XYZ </div>
          </div>
          <div className="text-sm">
            <div>Service Provider: XYZ </div>
            <div className="my-2">Service Title: x hours </div>
            <div>Service Details: XYZ </div>
          </div>
        </div>
      )}
    </div>
  );
};
const ExpertDashboard = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      seta(
        (dataPie[0].value /
          (dataPie[0].value + dataPie[1].value + dataPie[2].value)) *
          110
      );
      setb(
        (dataPie[1].value /
          (dataPie[1].value + dataPie[1].value + dataPie[2].value)) *
          110
      );
      setc(
        (dataPie[2].value /
          (dataPie[2].value + dataPie[1].value + dataPie[2].value)) *
          110
      );
    }, 500);
  }, [a, b, c]);

  const [contributions, setContributions] = useState(true);
  const [meetings, setMeetings] = useState(false);
  const [blogs, setBlogs] = useState(false);

  const HandleContributions = () => {
    setContributions(true);
    setMeetings(false);
    setBlogs(false);
  };
  const HandleMeetings = () => {
    setContributions(false);
    setMeetings(true);
    setBlogs(false);
  };
  const HandleBlogs = () => {
    setContributions(false);
    setMeetings(false);
    setBlogs(true);
  };
  return (
    <div className="mt-[85px] px-[7vw] w-full h-full flex gap-[1vw]">
      <section className="w-[32%] h-fit border border-[#c7c7c7] border-solid flex flex-col rounded-lg">
        <div className="w-full h-auto px-[0.8vw] py-[2vw] border-b-[0.01px] border-[#dcdcdc] border-solid">
          <div className="flex justify-between">
            <div className="flex gap-[0.75vw]">
              <img
                src={expert.profile}
                className="w-[6.5vw] h-[6.5vw] rounded-lg"
                alt="profileImg"
              />
              <div className="flex flex-col justify-between py-[0.2vw]">
                <div className=" flex flex-col gap-[0.5vw] ">
                  <div className="font-bold text-[1.4vw]">{expert?.name}</div>
                  <div className="font-medium text-[1vw] text-[#8F8F8F]">
                    @{expert?.username}
                  </div>
                </div>
                <div className="font-semibold text-[1.3vw] text-black/60">
                  {expert?.designation}
                </div>
              </div>
            </div>
            <div className="py-[0.4vw] text-[1.25vw]">
              <FaEdit />
            </div>
          </div>
          <div className=" mt-[1.6vw] w-full text-[1vw] text-[#525252]">
            {expert.title}
          </div>
          <div className="mt-[1.25vw] flex flex-col gap-[1vw]">
            <div className="flex gap-[1.25vw] items-center text-[1.25vw] text-[#515151]">
              <FaLocationDot />
              {expert?.location}
            </div>
            <div className="flex gap-[1.25vw] items-center text-[1.25vw] text-[#515151]">
              <FaTags />
              <div className="flex">
                {expert?.topSkills.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="px-[2.65vw] xs:px-[2.2vw] sm:px-[1.8vw] lg:px-[1vw] py-[0.8vw] xs:py-[0.4vw] sm:py-[0.2vw] text-[2.85vw] xs:text-[2.25vw] sm:text-[1.45vw] lg:text-[1vw] border border-[#cdcdcd] border-solid"
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="p-0 mt-0 mb-0">
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <MdSpaceDashboard className="text-[1.65vw]" />
              Dashboard
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <FaWallet className="text-[1.55vw]" />
              Wallet
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <BsFillChatSquareTextFill className="text-[1.55vw]" />
              Chat
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <BsFillPersonLinesFill className="text-[1.55vw]" />
              Go to Experts
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <MdInsertPageBreak className="text-[1.55vw]" />
              My Blogs
            </li>
            <li className="flex gap-[1.25vw] items-center border-b-[0.01px] border-[#dcdcdc] border-solid font-semibold text-[1.25vw] text-[#575757] py-[1.8vw] pl-[1vw]">
              <IoSettings className="text-[1.55vw]" />
              Settings
            </li>
          </ul>
        </div>
      </section>
      <section className="w-[68%] h-full flex flex-col gap-[2vw]">
        <div className="w-full flex   border border-[#c7c7c7] border-solid rounded-lg py-[1vw] shadow-md">
          <div className="w-[70%] overflow-hidden">
            <div className="text-[1.35vw] font-bold px-[2vw]">
              Average Ratings
            </div>
            <div className="w-full h-[180px] ml-[-2.6vw] mt-[0.8vw] mb-[-1vw] text-[1vw]">
              <ResponsiveContainer>
                <ComposedChart data={data} className="overflow-hidden">
                  <CartesianGrid stroke="#629BF0" />
                  <XAxis
                    className="text-[0.8vw]"
                    dataKey="name"
                    interval={"preserveStartEnd"}
                  />
                  <YAxis
                    className="text-[0.8vw]"
                    dataKey={"avgRating"}
                    interval={"preserveStartEnd"}
                  />
                  <Tooltip />
                  <Area dataKey="avgRating" fill="#ececec" />
                  <Bar dataKey="avgRating" barSize={22} fill="#629BF0" />
                  <Line dataKey="avgRating" stroke="#5950C9" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-[30%] border-l border-solid px-[2vw]">
            <div className="text-[1.35vw] font-bold">Statistics</div>
            <div className="flex flex-col justify-evenly h-[80%]">
              <div className="flex items-center gap-[1.2vw] text-[#575757] text-[1vw]">
                <IoEyeSharp className="text-[#FF5E18] text-[1.45vw]" /> Views{" "}
                <span>{expert.viewCount}</span>
              </div>
              <div className="flex items-center gap-[1.2vw] text-[#575757] text-[1vw]">
                <IoPersonAdd className="text-[#5900C9] text-[1.45vw]" />{" "}
                Followers <span>{expert.viewCount}</span>
              </div>
              <div className="flex items-center gap-[1.2vw] text-[#575757] text-[1vw]">
                <RiPagesFill className="text-[#EF0064] text-[1.45vw]" /> Blogs{" "}
                <span>{expert.viewCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[1vw] border border-[#c7c7c7] border-solid rounded-lg px-[1.8vw] py-[1.25vw]">
          <div className="font-bold text-[1.45vw]">Skills</div>
          <div className="flex flex-wrap gap-[1vw]">
            {expert.allskils.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-[1.6vw] py-[0.6vw] rounded bg-[#ececec] text-[1vw]"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex gap-[1.5vw]">
          <div className="relative w-[60%] border border-[#c7c7c7] border-solid rounded-lg px-[1.8vw] py-[1vw]">
            <div className="text-[1.35vw] font-bold">Stats</div>
            <div className="flex w-full justify-between items-center">
              <ResponsiveContainer
                width={170}
                height={200}
                className={"text-[0.85vw]"}
              >
                <PieChart className="overflow-hidden">
                  <Pie
                    data={dataPie}
                    cx="45%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={75}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataPie.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <div className="w-1/2 z-30 text-[1.08vw]">
                <div className=" flex flex-col gap-[1vw]">
                  <div className="flex flex-col gap-[0.4vw]">
                    <div className="">Successful Contributions</div>

                    <ProgressBar percentage={a} color="bg-blue-500" />
                  </div>
                  <div className="flex flex-col gap-[0.4vw]">
                    <div className="">Sucessful Meetings</div>
                    <ProgressBar percentage={b} color="bg-green-500" />
                  </div>
                  <div className="flex flex-col gap-[0.4vw]">
                    <div className="">Blogs</div>
                    <ProgressBar percentage={c} color="bg-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%]  border border-[#c7c7c7] border-solid rounded-lg overflow-hidden">
            {/* <div className="text-[1.35] font-bold">Badges</div>
            <div className="text-[1vw] text-[#989898]">{expert.badgecount}</div> */}
            <img
              src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29taW5nJTIwc29vbnxlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-full object-center"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-[16vw] rounded-lg border border-[#c7c7c7] border-solid ">
          contribution graph
        </div>
        <div className="border border-[#c7c7c7] border-solid rounded-lg px-5 py-4">
          <div className="flex justify-around border-b border-solid border-[#c7c7c7] pb-2">
            <div
              className={`px-3 py-2 cursor-pointer font-semibold ${
                contributions && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleContributions()}
            >
              Recent Contributions
            </div>
            <div
              className={`px-3 py-2 cursor-pointer font-semibold ${
                meetings && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleMeetings()}
            >
              Recent Meetings
            </div>
            <div
              className={`px-3 py-2 cursor-pointer font-semibold ${
                blogs && `bg-[#ececec] rounded-sm`
              }`}
              onClick={() => HandleBlogs()}
            >
              Recent Blogs
            </div>
          </div>
          {contributions && (
            <div>
              {[...Array(5)].map((temp, idx) => (
                <Contributioncard />
              ))}
            </div>
          )}
          {meetings && (
            <div>
              {[...Array(5)].map((temp, idx) => (
                <div
                  className={`px-3 py-4 my-3 rounded-md ${
                    idx % 2 === 0
                      ? `bg-[#ececec]`
                      : `border border-[#c7c7c7] border-solid`
                  }`}
                >
                  <div className="text-base">Meeting Id: 11XXXXXXXXX</div>
                  <div className="flex justify-between mt-3">
                    <div className="text-sm">
                      <div>Customer Name: XYZ</div>
                      <div className="my-2">Service Price: XYZ</div>
                      <div>Service Details: XYZ</div>
                    </div>
                    <div className="text-sm">
                      <div>Time Stamp: X hours</div>
                      <div className="my-2">Service Title: XYZ</div>
                      <div>Date of Meeting: XYZ</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExpertDashboard;
