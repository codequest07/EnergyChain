import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

// MarketplaceActivity Component
export const MarketplaceActivity = () => {
  const activities = [
    { type: "Spent", amount: "567.90", unit: "ENRG", kwh: "567.90", date: "23 Sept, 2024 • 12:00 PM" },
    { type: "Received", amount: "567.90", unit: "ENRG", kwh: "567.90", date: "23 Sept, 2024 • 12:00 PM" },
    { type: "Received", amount: "567.90", unit: "ENRG", kwh: "567.90", date: "23 Sept, 2024 • 12:00 PM" },
    { type: "Received", amount: "567.90", unit: "ENRG", kwh: "567.90", date: "23 Sept, 2024 • 12:00 PM" },
    { type: "Received", amount: "567.90", unit: "ENRG", kwh: "567.90", date: "23 Sept, 2024 • 12:00 PM" },
    { type: "Received", amount: "567.90", unit: "ENRG", kwh: "567.90", date: "23 Sept, 2024 • 12:00 PM" },
    { type: "Received", amount: "567.90", unit: "ENRG", kwh: "567.90", date: "23 Sept, 2024 • 12:00 PM" },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-light">Marketplace activity</h2>
        <a href="#" className="text-red-500 text-sm">See all</a>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-3">
              {activity.type === "Spent" ? (
                <ArrowUpIcon className="text-red-500" size={16} />
              ) : (
                <ArrowDownIcon className="text-green-500" size={16} />
              )}
              <span>{activity.type} ENRG</span>
            </div>
            <div className="flex space-x-4">
              <div>
                <div className="font-semibold">{activity.amount} {activity.unit}</div>
                <div className="text-gray-500 text-xs">≈ $356.00</div>
              </div>
              <div>
                <div className="font-semibold">{activity.kwh} KWH</div>
                <div className="text-gray-500 text-xs">1 KWH = 2.89 KWH</div>
              </div>
              <div className="text-right">
                <div>{activity.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// // Assets Component
// const Assets = () => {
//   const assets = [
//     { name: "EnergyChain", type: "ENRG", amount: "56,789.90", value: "≈ $356.00" },
//     { name: "EnergyChain", type: "ENRG", amount: "56,789.90", value: "≈ $356.00" },
//     { name: "EnergyChain", type: "ENRG", amount: "56,789.90", value: "≈ $356.00" },
//   ]

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Assets</h2>
//         <span className="text-2xl font-bold">$56,000.90</span>
//       </div>
//       <div className="flex space-x-2 mb-4">
//         <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">Withdraw</button>
//         <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">Deposit</button>
//       </div>
//       <div className="space-y-4">
//         {assets.map((asset, index) => (
//           <div key={index} className="flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full"></div>
//               <div>
//                 <div className="font-semibold">{asset.name}</div>
//                 <div className="text-gray-500 text-sm">{asset.type}</div>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="font-semibold">{asset.amount}</div>
//               <div className="text-gray-500 text-sm">{asset.value}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// Main Component
// export default function Component() {
//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <MarketplaceActivity />
//         <Assets />
//       </div>
//     </div>
//   )
// }