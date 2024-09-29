"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Sliders } from "lucide-react";

export default function EnergyMarketplace() {
  const [energyListings, setEnergyListings] = React.useState([
    {
      id: 1,
      seller: "Green Energy Co.",
      location: "California",
      amount: 100,
      price: 0.12,
    },
    {
      id: 2,
      seller: "SolarPower Ltd.",
      location: "Arizona",
      amount: 75,
      price: 0.11,
    },
    {
      id: 3,
      seller: "WindForce Energy",
      location: "Texas",
      amount: 150,
      price: 0.13,
    },
    {
      id: 4,
      seller: "BioEnergy Systems",
      location: "Oregon",
      amount: 50,
      price: 0.1,
    },
    {
      id: 5,
      seller: "HydroElectric Inc.",
      location: "Washington",
      amount: 200,
      price: 0.14,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceSort, setPriceSort] = useState("asc");

  const filteredAndSortedListings = energyListings
    .filter(
      (listing) =>
        listing.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((listing) =>
      locationFilter ? listing.location === locationFilter : true
    )
    .sort((a, b) =>
      priceSort === "asc" ? a.price - b.price : b.price - a.price
    );

  const handleBuy = (listingId: number) => {
    console.log(`Buying energy from listing ${listingId}`);
    // Here you would typically initiate a blockchain transaction
  };

  const handleSell = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const amount = Number(formData.get("amount"));
    const price = Number(formData.get("price"));
    console.log(`Selling ${amount} kWh at ${price} ENRG/kWh`);
    // Here you would typically initiate a blockchain transaction to create a new listing
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Energy Marketplace</h1>

      <Tabs defaultValue="buy" className="space-y-4">
        <TabsList>
          <TabsTrigger value="buy">Buy Energy</TabsTrigger>
          <TabsTrigger value="sell">Sell Energy</TabsTrigger>
        </TabsList>

        <TabsContent value="buy">
          <Card>
            <CardHeader>
              <CardTitle>Available Energy Listings</CardTitle>
              <CardDescription>
                Browse and purchase energy from other users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-2">
                <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by seller or location"
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select
                  value={locationFilter}
                  onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full md:w-1/4">
                    <SelectValue placeholder="Filter by location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="California">California</SelectItem>
                    <SelectItem value="Arizona">Arizona</SelectItem>
                    <SelectItem value="Texas">Texas</SelectItem>
                    <SelectItem value="Oregon">Oregon</SelectItem>
                    <SelectItem value="Washington">Washington</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={priceSort} onValueChange={setPriceSort}>
                  <SelectTrigger className="w-full md:w-1/4">
                    <SelectValue placeholder="Sort by price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">Price: Low to High</SelectItem>
                    <SelectItem value="desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Seller</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Amount (kWh)</TableHead>
                      <TableHead>Price (ENRG/kWh)</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAndSortedListings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell>{listing.seller}</TableCell>
                        <TableCell>{listing.location}</TableCell>
                        <TableCell>{listing.amount}</TableCell>
                        <TableCell>{listing.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <Button onClick={() => handleBuy(listing.id)}>
                            Buy
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sell">
          <Card>
            <CardHeader>
              <CardTitle>Sell Your Energy</CardTitle>
              <CardDescription>
                List your excess energy for sale on the marketplace
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSell} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount to sell (kWh)</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="Enter amount in kWh"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price per kWh (ENRG)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    placeholder="Enter price in ENRG"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  List Energy for Sale
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
