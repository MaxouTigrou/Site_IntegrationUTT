import { Navbar } from "src/components/navbar";
import { TeamRegistration } from "../components/shotgun/preregisterSection";
import { Shotgun } from "../components/shotgun/shotgunSection";

export const ShotgunPage = () => (
    
 <div>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">


        {/* Ajout d'un espacement entre les composants */}
        <TeamRegistration />
        <Shotgun />
        </div>
    </div>
 </div>
);
