import './Sidebar.css';
import {
  LayoutDashboard,
  Upload,
  FileText,
  GitBranch,
  BarChart2,
  CreditCard,
  ShieldCheck,
  Settings, 
  User,
  Building
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
          <div className="sidebar-header">
            <div className="side-header-icon"><Building size={20} color="#fff" /></div>
            <div className="side-header-content">
              <span className="side-header-title">CollectPro</span>
              <span className="side-header-desc">Collections Platform</span>
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-content-item">
              <span className="side-cont-icon">
                <LayoutDashboard size={20} color="black" />
              </span>
              <span>Dashboard</span>
            </div>
            <div className="sidebar-content-item">
              <span className="side-cont-icon"><Upload size={20} color="black" />
              </span>
              <span>Data Import</span>
            </div>
            <div className="sidebar-content-item">
              <span className="side-cont-icon"><FileText size={20} color="black" /></span>
              <span>Templates</span>
            </div>
            <div className="sidebar-content-item">
              <span className="side-cont-icon"><GitBranch size={20} color="black" /></span>
              <span>Sequences</span>
            </div>
            <div className="sidebar-content-item">
              <span className="side-cont-icon"><BarChart2 size={20} color="black" /></span>
              <span>Analytics</span>
            </div>
            <div className="sidebar-content-item">
              <span className="side-cont-icon"><CreditCard size={20} color="black" /></span>
              <span>Payment Portal</span>
            </div>
            <div className="sidebar-content-item">
              <span className="side-cont-icon"><ShieldCheck size={20} color="black" /></span>
              <span>Compliance</span>
            </div>
            <div className="sidebar-content-item">
              <span className="side-cont-icon"><Settings size={20} color="black" /></span>
              <span>Settings</span>
            </div>
          </div>
          <div className="sidebar-footer">
            <span><User size={20} color="black" /></span>
            <div className='sidebar-footer-content'>
                <span className='sidebar-footer-name'>Majid</span>
                <span className='sidebar-footer-role'>Admin</span>
            </div>
          </div>
        </aside>
  )
}

export default Sidebar
