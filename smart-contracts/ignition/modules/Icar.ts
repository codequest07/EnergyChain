import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ICARModule = buildModule("ICARModule", (m) => {

    const erc20 = m.contract("ICAR");

    return { erc20 };
});

export default ICARModule;
