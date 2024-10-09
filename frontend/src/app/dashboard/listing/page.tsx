import { DashboardLayout } from "@/components/Dashboard";
import ListingOfferCards from "@/components/Listings/Listing-offer-cards";

const page = () => {
  return (
    <DashboardLayout>
      <ListingOfferCards />
    </DashboardLayout>
  );
};

export default page;
