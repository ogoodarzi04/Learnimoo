import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import TabsChart from "../TabsChart/TabsChart";
//
// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

//
export default function Charts(props) {
   const chartConfig = {
      type: props.type,
      height: 240,
      series: [
         {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 510],
         },
      ],
      options: {
         plotOptions: {
            bar: {
               columnWidth: "54%",
               borderRadius: 2,
            },
         },
         chart: {
            toolbar: {
               show: false,
            },
         },
         title: {
            show: "",
         },
         dataLabels: {
            enabled: false,
         },

         colors: ["#92fe9d"],
         // gradient: "linear-gradient(to right,#92fe9d,#00c9ff)",
         stroke: {
            lineCap: "round",
            curve: "smooth",
         },
         markers: {
            size: 0,
         },
         xaxis: {
            axisTicks: {
               show: false,
            },
            axisBorder: {
               show: false,
            },
            labels: {
               style: {
                  colors: "#616161",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  fontWeight: 400,
               },
            },
            categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         },
         yaxis: {
            labels: {
               style: {
                  colors: "#616161",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  fontWeight: 400,
               },
            },
         },
         grid: {
            show: true,
            borderColor: "#424242",
            strokeDashArray: 10,
            xaxis: {
               lines: {
                  show: false,
               },
            },
            padding: {
               top: 5,
               right: 20,
            },
         },
         fill: {
            opacity: 0.8,
         },
         tooltip: {
            theme: "dark",
         },
      },
   };
   //
   return (
      <>
         <div className="chart ">
            {/* <Card className=""> */}
            <CardHeader floated={false} shadow={false} color="transparent" className="flex flex-col gap-4 rounded-none md:flex-row md:items-center">
               <div className=" pt-9 flex justify-between w-full">
                  <div>
                     <Typography className=" danaMedium text-4xl" color="white">
                        {props.title}
                     </Typography>
                  </div>
                  <div>{props.tabs}</div>
               </div>
            </CardHeader>
            <CardBody className=" ">
               <Chart {...chartConfig} />
            </CardBody>
            {/* </Card> */}
         </div>
      </>
   );
}
