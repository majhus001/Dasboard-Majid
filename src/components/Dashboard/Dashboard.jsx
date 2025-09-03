import "./Dashboard.css";

import Summary from "./Summary/Summary";
import PerformRecent from "./PerformRecentAct/PerformRecent";
import QuickActions from "./QuickActions/QuickActions";

function Dashboard() {
  return (
    <div>
      <div className="main-dash">
        <div className="main-dash-header">
          <div className="main-dash-header-content">
            <span className="main-dash-header-title">Dashboard</span>
            <span className="main-dash-header-desc">
              Overview of your collections performance
            </span>
          </div>
          <div className="main-dash-header-btns">
            <div className="main-dash-header-btns-item export-btn">
              Export Report
            </div>
            <div className="main-dash-header-btns-item new-campaign-btn">
              New Campaign
            </div>
          </div>
        </div>

        <Summary />

        <PerformRecent />

        <QuickActions />
        
      </div>
    </div>
  );
}

export default Dashboard;
