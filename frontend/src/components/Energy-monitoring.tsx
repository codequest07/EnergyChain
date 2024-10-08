"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Zap, Battery, TrendingUp } from "lucide-react";
import { useState } from "react";
/* eslint-disable react/no-unescaped-entities */


// Mock data for demonstration
const energyData = [
  { time: "00:00", production: 2, consumption: 3 },
  { time: "04:00", production: 1, consumption: 2 },
  { time: "08:00", production: 4, consumption: 3 },
  { time: "12:00", production: 6, consumption: 4 },
  { time: "16:00", production: 4, consumption: 5 },
  { time: "20:00", production: 3, consumption: 4 },
];

const forecastData = [
  { time: "Now", production: 3 },
  { time: "+1h", production: 4 },
  { time: "+2h", production: 5 },
  { time: "+3h", production: 4 },
  { time: "+4h", production: 3 },
  { time: "+5h", production: 2 },
];

export default function EnergyMonitoring() {
  const [timeRange, setTimeRange] = useState("24h");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Energy Monitoring</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Production
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 kWh</div>
            <p className="text-xs text-muted-foreground">+20% from average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Consumption
            </CardTitle>
            <Battery className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8 kWh</div>
            <p className="text-xs text-muted-foreground">-5% from average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Energy</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+0.4 kWh</div>
            <p className="text-xs text-muted-foreground">
              Producing more than consuming
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="graphs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="graphs">Energy Graphs</TabsTrigger>
          <TabsTrigger value="smartMeter">Smart Meter</TabsTrigger>
          <TabsTrigger value="forecast">Energy Forecast</TabsTrigger>
        </TabsList>

        <TabsContent value="graphs">
          <Card>
            <CardHeader>
              <CardTitle>Energy Production & Consumption</CardTitle>
              <CardDescription>
                View your energy patterns over time
              </CardDescription>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24 Hours</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="production"
                      stroke="#8884d8"
                      name="Production"
                    />
                    <Line
                      type="monotone"
                      dataKey="consumption"
                      stroke="#82ca9d"
                      name="Consumption"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="smartMeter">
          <Card>
            <CardHeader>
              <CardTitle>Smart Meter Data</CardTitle>
              <CardDescription>
                Real-time energy data from your smart meter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Current Power Draw:</span>
                  <span className="font-bold">3.8 kW</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Today's Consumption:</span>
                  <span className="font-bold">28.5 kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Today's Production:</span>
                  <span className="font-bold">32.1 kWh</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Peak Demand Today:</span>
                  <span className="font-bold">5.2 kW at 19:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Grid Feed-in:</span>
                  <span className="font-bold">3.6 kWh</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast">
          <Card>
            <CardHeader>
              <CardTitle>Energy Production Forecast</CardTitle>
              <CardDescription>
                Predicted energy production based on weather and historical data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forecastData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="production"
                      stroke="#8884d8"
                      name="Forecasted Production"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
