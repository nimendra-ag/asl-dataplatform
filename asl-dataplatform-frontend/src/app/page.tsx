import EntityRanking from "@/components/EntityRanking";
import FilterArea from "@/components/FilterArea";
import Navbar from "@/components/Navbar";
import { RegionalPieChart } from "@/components/RegionalPieChart";
import Image from "next/image";

const rankingData = [
  { entity: 'Colombo Central', apl: 4321, ppl: 4318 },
  { entity: 'Colombo North', apl: 4033, ppl: 4030 },
  { entity: 'Colombo South', apl: 3128, ppl: 3122 },
  { entity: 'Kandy', apl: 2104, ppl: 2100 },
  { entity: 'NIBM', apl: 2003, ppl: 2000 },
  { entity: 'NSBM', apl: 1894, ppl: 1700 },
  { entity: 'Rajarata', apl: 405, ppl: 400 },
  { entity: 'Ruhuna', apl: 2402, ppl: 2402 },
  { entity: 'SLIIT', apl: 1335, ppl: 1328 },
  { entity: 'USJ', apl: 567, ppl: 560 },
  
];


export default function Home() {
  return (
    <>
    <Navbar/>
    <FilterArea/>
    <RegionalPieChart/>
    <EntityRanking data={rankingData} />
    </>
  );
}
