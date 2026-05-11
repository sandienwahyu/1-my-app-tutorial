"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Revenue",
    data: [
      { x: "Jan", y: 30 },
      { x: "Feb", y: 55 },
      { x: "Mar", y: 40 },
      { x: "Apr", y: 70 },
      { x: "May", y: 60 },
      { x: "Jun", y: 90 },
      { x: "Jul", y: 75 },
    ],
  },
];

export default function Lines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>This is Line Chart</CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        {" "}
        {/* ⚠️ Must have a height */}
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: "auto", max: "auto" }}
          axisBottom={{ legend: "Month", legendOffset: 36 }}
          axisLeft={{ legend: "Value", legendOffset: -40 }}
          pointSize={8}
          pointBorderWidth={2}
          useMesh={true}
        />
      </CardContent>
    </Card>
  );
}
