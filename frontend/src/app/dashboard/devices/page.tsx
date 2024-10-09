import React from 'react'
import { DashboardLayout } from '@/components/Dashboard'
import DeviceChart from '@/components/Devices/DeviceChart'
import Devices from '@/components/Devices'

const DevicesPage = () => {
  return (
    <DashboardLayout>
        <Devices />
        {/* <DeviceChart /> */}
    </DashboardLayout>
  )
}

export default DevicesPage
