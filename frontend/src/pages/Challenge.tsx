import { ChallengeList } from "src/components/challenge/challengeList";
import { Navbar } from "src/components/navbar";


export const ChallPage = () => (
    
 <div>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
            <ChallengeList/>
        </div>
    </div>
 </div>
);
