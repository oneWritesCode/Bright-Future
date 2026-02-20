import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FoundersStory from "./pages/FoundersStory";
import OurTeam from "./pages/OurTeam";
import OurSupporters from "./pages/OurSupporter";
import Mission from "./pages/Mission";
import Advisory from "./pages/Advisory";
import Report from "./pages/Report";
import Publications from "./pages/Publications";
import LivehoodProgramme from "./pages/LivehoodProgramme";
import BulandiProgramme from "./pages/BulandiProgramme";
import BadiSochProgramme from "./pages/BadiSochProgramme";
import OutreachMissions from "./pages/OutreachMissions";
import StoriesOfChange from "./pages/StoriesOfChange";
import AnnualReports from "./pages/AnnualReports";
import Volunteer from "./pages/Volunteer";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs"
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founders-story" element={<FoundersStory />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-supporters" element={<OurSupporters />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/report" element={<Report />} />
        <Route path="/publication" element={<Publications />} />
        <Route path="/livehood-programme" element={<LivehoodProgramme />} />
        <Route path="/bulandi" element={<BulandiProgramme />} />
        <Route path="/badi-soch" element={<BadiSochProgramme />} />
        <Route path="/outreach-missions" element={<OutreachMissions />} />
        <Route path="/stories-of-change" element={<StoriesOfChange/>} />
        <Route path="/annual-reports" element={<AnnualReports/>} />
        <Route path="/volunteer" element={<Volunteer/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/donate" element={<Donate/>} />
        
        
        

      </Routes>
    </Router>
  );
}

export default App;
