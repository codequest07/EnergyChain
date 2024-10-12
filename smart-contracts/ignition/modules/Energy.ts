import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EnergyModule = buildModule("EnergyModule", (m) => {

    const tokenAddress = m.getParameter("_energyToken", "0x9f3eB17a20a4E57Ed126F34061b0E40dF3a4f5C2");

    const energy = m.contract("Energy", [tokenAddress]);

    return { energy };
});

export default EnergyModule;
