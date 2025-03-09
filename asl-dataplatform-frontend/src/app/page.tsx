import FilterArea from "@/components/FilterArea";
import Navbar from "@/components/Navbar";
import { RegionalPieChart } from "@/components/RegionalPieChart";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <FilterArea/>
    <RegionalPieChart/>
    </>
  );
}
