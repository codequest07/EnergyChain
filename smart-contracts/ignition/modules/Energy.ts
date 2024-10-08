import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EnergyModule = buildModule("EnergyModule", (m) => {

    const tokenAddress = m.getParameter("_energyToken", "0x2C0457F82B57148e8363b4589bb3294b23AE7625");

    const energy = m.contract("Energy", [tokenAddress]);

    return { energy };
});

export default EnergyModule;
