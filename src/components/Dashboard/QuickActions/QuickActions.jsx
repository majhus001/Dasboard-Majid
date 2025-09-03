import "./QuickActions.css";
import { Users, Upload, FileText, BarChart2 } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="main-dash-content-quick-actions">
      <span className="main-dash-performance-title">Quick Actions</span>
      <div className="quick-actions-content">
        <div className="quick-actions-content-item">
          <span>
            <Upload size={18} />
          </span>
          <span className="quick-actions-content-item-title">Import Data</span>
        </div>
        <div className="quick-actions-content-item">
          <span>
            <FileText size={18} />
          </span>
          <span className="quick-actions-content-item-title">New Template</span>
        </div>
        <div className="quick-actions-content-item">
          <span>
            <Users size={18} />
          </span>
          <span className="quick-actions-content-item-title">
            Create Campaign
          </span>
        </div>
        <div className="quick-actions-content-item">
          <span>
            <BarChart2 size={18} />
          </span>
          <span className="quick-actions-content-item-title">View Reports</span>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;