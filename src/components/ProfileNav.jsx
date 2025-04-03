import { useState } from 'react';
import './ProfileNav.css';
import {
  Home,
  Timeline,
  Email,
  Person,
  Notifications,
  LocationOn,
  People,
  Help,
  Settings
} from '@mui/icons-material';

const ProfileNav = () => {
  const [showProfile, setShowProfile] = useState(false);

  // Profile data
  const profile = {
    name: "Dorine Oloo",
    specialty: "Software Developer",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DQ-tp12zlDGEUfulC2NNYwJ7vvskGXip6w&s"
  };

  const navItems = [
    { icon: <Person />, label: 'Personal Data', iconClass: 'icon-personal' },
    { icon: <Email />, label: 'Messages', iconClass: 'icon-messages' },
    { icon: <Notifications />, label: 'Notifications', iconClass: 'icon-notifications' },
    { icon: <LocationOn />, label: 'Location', iconClass: 'icon-location' },
    { icon: <People />, label: 'Community', iconClass: 'icon-community' },
    { divider: true },
    { icon: <Help />, label: 'FAQs', iconClass: 'icon-faqs' },
    { icon: <Settings />, label: 'Settings', iconClass: 'icon-settings' }
  ];

  return (
    <div className="mobile-card">
      {/* Main Card Content */}
      <div className="card-content">
        {showProfile ? (
          <div className="profile-section">
            <div className="profile-header">
              <img 
                src={profile.imageUrl} 
                alt="Profile" 
                className="profile-image"
              />
              <div className="profile-details">
                <h2>{profile.name}</h2>
                <p>{profile.specialty}</p>
              </div>
            </div>
            
            <div className="profile-menu">
              {navItems.map((item, index) => (
                item.divider ? (
                  <div key={`divider-${index}`} className="menu-divider" />
                ) : (
                  <div key={item.label} className="menu-item">
                    <span className={`menu-icon ${item.iconClass}`}>
                      {item.icon}
                    </span>
                    <span className="menu-label">{item.label}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-icon">
          <Home />
        </div>
        <div className="nav-icon">
          <Timeline />
        </div>
        <div className="nav-icon">
          <Email />
        </div>
        <div 
          className={`nav-icon ${showProfile ? 'active' : ''}`}
          onClick={() => setShowProfile(!showProfile)}
        >
          <Person />
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;