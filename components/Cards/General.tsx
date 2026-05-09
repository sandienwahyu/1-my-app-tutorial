"use client";

import { ResponsiveBump } from "@nivo/bump";
import { generateSeries } from "@nivo/generators";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = generateSeries(
  [
    "France",
    "English",
    "Russian",
    "America",
    "Italy",
    "Spain",
    "Indonesia",
    "Singapore",
    "Malaysia",
    "Thailand",
    "Vietnam",
    "Kambodia",
  ],
  ["Jan", "Feb", "March", "April", "May"],
);

export default function General() {
  return (
    <Card className="ml-4 mt-4">
      <CardHeader>
        <CardTitle>General Chart</CardTitle>
        <CardDescription>This is General Chart</CardDescription>
      </CardHeader>
      <CardContent className="h-100">
        {" "}
        {/* ⚠️ Must have a height */}
        <ResponsiveBump
          data={data}
          margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
          colors={{ scheme: "nivo" }}
          lineWidth={3}
          activeLineWidth={6}
          inactiveLineWidth={3}
          pointSize={10}
          activePointSize={16}
          inactivePointSize={0}
          pointBorderWidth={3}
          activePointBorderWidth={3}
        />
      </CardContent>
    </Card>
  );
}
