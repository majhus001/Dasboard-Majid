import "./Dashboard.css";
import {
  DollarSign,
  Users,
  TrendingUp,
  TrendingDown,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Upload,
  FileText,
  BarChart2,
  ArrowRight
} from "lucide-react";

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
        <div className="main-dash-content-perf-reca">
          <div className="main-dash-content-performance">
            <span className="main-dash-performance-title">
              Channel Performance
            </span>
            <div className="main-dash-performance-content">
              <div className="main-dash-performance-content-item">
                <div className="performance-item-content">
                  <span className="pf-icon mail-icon"><Mail size={18} color="#fff"/></span>
                  <div className="performance-item-content-message">
                    <span className="performance-item-content-message-title">
                      Email
                    </span>
                    <span className="performance-item-content-message-desc">
                      1250 sent
                    </span>
                  </div>
                </div>
                <div className="performance-item-content-message pf-item-res-rate">
                  <span className="performance-item-content-message-title">
                    18.7%
                  </span>
                  <span className="performance-item-content-message-desc">
                    response rate
                  </span>
                </div>
              </div>
              <div className="main-dash-performance-content-item">
                <div className="performance-item-content">
                  <span className="pf-icon sms-icon"> <MessageSquare size={18} color="#fff"/></span>
                  <div className="performance-item-content-message">
                    <span className="performance-item-content-message-title">
                      SMS
                    </span>
                    <span className="performance-item-content-message-desc">
                      650 sent
                    </span>
                  </div>
                </div>
                <div className="performance-item-content-message pf-item-res-rate">
                  <span className="performance-item-content-message-title">
                    22.4%
                  </span>
                  <span className="performance-item-content-message-desc">
                    response rate
                  </span>
                </div>
              </div>
              <div className="main-dash-performance-content-item">
                <div className="performance-item-content">
                  <span className="pf-icon phone-icon"><Phone size={20} color="#fff"/></span>
                  <div className="performance-item-content-message">
                    <span className="performance-item-content-message-title">
                      Voice
                    </span>
                    <span className="performance-item-content-message-desc">
                      320 sent
                    </span>
                  </div>
                </div>
                <div className="performance-item-content-message pf-item-res-rate">
                  <span className="performance-item-content-message-title">
                    16.2%
                  </span>
                  <span className="performance-item-content-message-desc">
                    response rate
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-dash-content-recent-activity">
            <div className="recent-activity-header">
              <span>Recent Activity</span>
              <span className="rc-act-view-all-btn"><span>View All</span> <ArrowRight size={15}  /></span>
            </div>
            <div className="recent-activity-content">
              <div className="recent-activity-content-item">
                <div className="recent-activity-content-item-header">
                  <span className="rec-act-item-header-title">
                    Payment Recieved
                  </span>
                  <span className="rec-act-item-header-desc">Smith Corp</span>
                </div>
                <div className="recent-activity-content-item-header">
                  <span className="rec-act-item-revenue ">$1290</span>
                  <span className="rec-act-item-header-desc">2m ago</span>
                </div>
              </div>
              <div className="recent-activity-content-item">
                <div className="recent-activity-content-item-header">
                  <span className="rec-act-item-header-title">
                    Email sequence completed
                  </span>
                  <span className="rec-act-item-header-desc">Johnson LLC</span>
                </div>
                <div className="recent-activity-content-item-header">
                  <span className="rec-act-item-header-desc">15m ago</span>
                </div>
              </div>
              <div className="recent-activity-content-item">
                <div className="recent-activity-content-item-header">
                  <span className="rec-act-item-header-title">
                    New import processed
                  </span>
                  <span className="rec-act-item-header-desc">450 records</span>
                </div>
                <div className="recent-activity-content-item-header">
                  <span className="rec-act-item-header-desc">1h ago</span>
                </div>
              </div>
              <div className="recent-activity-content-item">
                <div className="recent-activity-content-item-header">
                  <span className="rec-act-item-header-title">
                    Campaign started
                  </span>
                  <span className="rec-act-item-header-desc">Anderson Inc</span>
                </div>
                <div className="recent-activity-content-item-header">
                  <span className="rec-act-item-header-desc">2h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-dash-content-quick-actions">
          <span className="main-dash-performance-title">Quick Actions</span>
          <div className="quick-actions-content">
            <div className="quick-actions-content-item">
              <span><Upload size={18} /></span>
              <span className="quick-actions-content-item-title">
                Import Data
              </span>
            </div>
            <div className="quick-actions-content-item">
              <span><FileText size={18} /></span>
              <span className="quick-actions-content-item-title">
                New Template
              </span>
            </div>
            <div className="quick-actions-content-item">
              <span><Users size={18} /></span>
              <span className="quick-actions-content-item-title">
                Create Campaign
              </span>
            </div>
            <div className="quick-actions-content-item">
              <span><BarChart2 size={18} /></span>
              <span className="quick-actions-content-item-title">
                View Reports
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
