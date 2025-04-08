import { CircleDollarSign } from "lucide-react"
import PerksCard from "./PerksCard"
export default function Perks () { 
    return (
        <div className="max-w-6xl mx-auto pb-20"> 
            <div className="flex gap-2 ml-[35px]  w-fit just text-orange-500"> 
            <CircleDollarSign className=" orbit-spin" />


                    <div className='font-bold'> PERKS </div>
            </div>
            <PerksCard> </PerksCard>


        </div>
    )
}