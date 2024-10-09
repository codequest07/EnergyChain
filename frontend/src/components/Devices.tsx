"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PencilIcon, PlusIcon } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts'
import DeviceChart from "./Devices/DeviceChart"

const data = [
  { name: 'Sun', value: 4000 },
  { name: 'Mon', value: 3000 },
  { name: 'Tue', value: 2000 },
  { name: 'Wed', value: 2780 },
  { name: 'Thurs', value: 1890 },
  { name: 'Fri', value: 2390 },
  { name: 'Sat', value: 3490 },
]

export default function Devices() {
  return (
    <div className="bg-white text-white min-h-screen p-8">
      {/* <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Hey Nwamaka,</h1>
          <p className="text-green-500">Today is a good day to save the world</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Buy energy
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-black">Sell energy</Button>
        </div>
      </header> */}

      <Card className="bg-white text-black mb-4 max-w-[375px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Solar Panel1</CardTitle>
          <PencilIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-xs font-medium text-rose-500">• 35 kWh surplus</div>
          <div className="text-xs text-muted-foreground">Energy balance</div>
          <div className="text-2xl font-bold">54,758.08 <span className="text-xs font-normal">KWH</span></div>
          <div className="flex items-center text-xs text-muted-foreground">
            <span className="bg-green-500 rounded-full h-2 w-2 mr-1"></span> Home owner
          </div>
        </CardContent>
      </Card>

      <div className="max-w-[375px]">
        <Button variant="outline" className="w-full text-[#CD5334] border-dashed border-[#CD5334] hover:bg-white hover:text-black mb-4">
            <PlusIcon className="mr-2 h-4 w-4" /> Connect device
        </Button>
      </div>

      
      <div>
        <DeviceChart />
      </div>

      <Card className="bg-white text-black mb-4">
        <CardHeader>
          <CardTitle className="text-sm font-medium">24h Energy metrics</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div>
            <div className="text-xs text-muted-foreground">Energy in use (locally)</div>
            <div className="text-2xl font-bold">50,746 <span className="text-xs font-normal">KWH</span></div>
            <div className="w-24 h-24 border-8 border-green-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">20%</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Energy in surplus</div>
            <div className="text-2xl font-bold">50,746 <span className="text-xs font-normal">KWH</span></div>
            <div className="w-24 h-24 border-8 border-rose-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">10%</span>
            </div>
          </div>
        </CardContent>
        <div className="px-6 py-2 bg-gray-100 text-right">
          <span className="font-bold">54,758.08</span> <span className="text-xs text-muted-foreground">KWH total energy produced</span>
        </div>
      </Card>


      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-[#E8F3E8] text-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs mr-2">+</span>
              mgbeke.base.eth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center my-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 18a5 5 0 0 0-10 0"></path>
                <line x1="12" y1="9" x2="12" y2="2"></line>
                <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
                <line x1="1" y1="18" x2="3" y2="18"></line>
                <line x1="21" y1="18" x2="23" y2="18"></line>
                <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
                <line x1="23" y1="22" x2="1" y2="22"></line>
                <polyline points="16 5 12 9 8 5"></polyline>
              </svg>
            </div>
            <div className="text-xs text-muted-foreground">Energy balance</div>
            <div className="text-2xl font-bold">54,758.08 <span className="text-xs font-normal">KWH</span></div>
          </CardContent>
        </Card>
        <Card className="bg-white text-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total energy production (KWH)</CardTitle>
            <div className="space-x-2">
              <Button variant="outline" size="sm" className="text-xs">7 days</Button>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">30 days</Button>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">90 days</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54.6k <span className="text-xs font-normal text-green-500">↑ 24%</span></div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={data}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Area
                    dataKey="value"
                    type="natural"
                    fill="linear-gradient(180deg, rgba(55, 61, 32, 0.38) 17.5%, rgba(255, 255, 255, 0) 100%)"
                    fillOpacity={0.4}
                    stroke="hsla(72, 31%, 18%, 1)"
                    stackId="a"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}