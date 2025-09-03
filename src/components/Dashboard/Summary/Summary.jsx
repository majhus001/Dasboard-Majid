import "./Summary.css";
import {
  DollarSign,
  Users,
  TrendingUp,
  TrendingDown,
  Clock,
} from "lucide-react";


const Summary = () => {
  return (
    <div className="main-dash-content-summary">
      <div className="main-dash-content-summary-item">
        <div className="main-dash-content-summary-item-header">
          <span>Total Outstanding</span>
          <span>
            <DollarSign size={15} color="#aaa" />
          </span>
        </div>
        <div className="main-dash-content-summary-item-content">
          <span className="summary-item-number">$4,534,632</span>
          <span className="summary-item-desc">
            <TrendingUp size={12} /> +12.5% from last month
          </span>
        </div>
      </div>
      <div className="main-dash-content-summary-item">
        <div className="main-dash-content-summary-item-header">
          <span>Active Campaigns</span>
          <span>
            <Users size={15} color="#aaa" />
          </span>
        </div>
        <div className="main-dash-content-summary-item-content">
          <span className="summary-item-number">24</span>
          <span className="summary-item-desc">
            <TrendingUp size={12} /> +12.5% from last month
          </span>
        </div>
      </div>
      <div className="main-dash-content-summary-item">
        <div className="main-dash-content-summary-item-header">
          <span>Collection Rate</span>
          <span>
            <TrendingUp size={15} color="#aaa" />
          </span>
        </div>
        <div className="main-dash-content-summary-item-content">
          <span className="summary-item-number">68%</span>
          <span className="summary-item-desc">
            <TrendingUp size={12} /> +12.5% from last month
          </span>
        </div>
      </div>
      <div className="main-dash-content-summary-item">
        <div className="main-dash-content-summary-item-header">
          <span>Avg. Days to Pay</span>
          <span>
            <Clock size={15} color="#aaa" />
          </span>
        </div>
        <div className="main-dash-content-summary-item-content">
          <span className="summary-item-number">12.3</span>
          <span className="summary-item-desc-down ">
            <TrendingDown size={12} /> -2.5% from last month
          </span>
        </div>
      </div>
    </div>
  );
}

export default Summary;
