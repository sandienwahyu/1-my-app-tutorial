"use client";

import { ResponsiveCalendar } from "@nivo/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const generateDummyData = () => {
  const data = [];
  const start = new Date("2024-01-01");
  const end = new Date("2024-12-31");

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    // Only add data for ~60% of days to simulate real sparse data
    if (Math.random() > 0.4) {
      data.push({
        day: d.toISOString().split("T")[0], // "YYYY-MM-DD"
        value: Math.floor(Math.random() * 50) + 1, // Random value 1–50
      });
    }
  }

  return data;
};

const data = generateDummyData();

export default function Calendar() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>This is Calendar Chart</CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        {" "}
        {/* ⚠️ Must have a height */}
        <ResponsiveCalendar
          data={data}
          from="2024-01-01"
          to="2024-12-31"
          emptyColor="#eeeeee"
          colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          dayBorderWidth={2}
          dayBorderColor="#ffffff" // Match your background color
          monthBorderColor="#ffffff"
        />
      </CardContent>
    </Card>
  );
}
