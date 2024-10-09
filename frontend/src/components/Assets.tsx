// Assets Component
export const Assets = () => {
    const assets = [
      { name: "EnergyChain", type: "ENRG", amount: "56,789.90", value: "≈ $356.00" },
      { name: "EnergyChain", type: "ENRG", amount: "56,789.90", value: "≈ $356.00" },
      { name: "EnergyChain", type: "ENRG", amount: "56,789.90", value: "≈ $356.00" },
    ]
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-light">Assets</h2>
          <span className="text-base font-medium">$56,000.90</span>
        </div>
        <div className="flex space-x-2 mb-4">
          <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">Withdraw</button>
          <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">Deposit</button>
        </div>
        <div className="space-y-4">
          {assets.map((asset, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full"></div>
                <div>
                  <div className="font-light">{asset.name}</div>
                  <div className="text-gray-500 text-sm">{asset.type}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{asset.amount}</div>
                <div className="text-gray-500 text-sm">{asset.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }