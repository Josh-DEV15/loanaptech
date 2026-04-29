import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      marginTop: "60px",
      backgroundColor: "#f4f6f8",
      fontFamily: "Arial, sans-serif"
    },

    sidebar: {
      width: "250px",
      backgroundColor: "#111827",
      color: "#fff",
      padding: "20px"
    },

    sidebarTitle: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "30px"
    },

    navItem: {
      marginBottom: "15px",
      cursor: "pointer"
    },

    link: {
      textDecoration: "none",
      color: "#d1d5db",
      fontSize: "16px"
    },

    main: {
      flex: 1,
      padding: "25px"
    },

    topbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "25px"
    },

    heading: {
      fontSize: "28px",
      fontWeight: "600",
      color: "#111827"
    },

    button: {
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "10px 16px",
      borderRadius: "8px",
      cursor: "pointer"
    },

    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    },

    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
    },

    cardTitle: {
      color: "#6b7280",
      marginBottom: "10px"
    },

    cardValue: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#111827"
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/analytics" style={styles.link}>Analytics</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/users" style={styles.link}>Users</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/settings" style={styles.link}>Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        
        {/* Topbar */}
        <div style={styles.topbar}>
          <h1 style={styles.heading}>Overview</h1>
          <button style={styles.button}>Add New</button>
        </div>

        {/* Cards */}
        <div style={styles.cardContainer}>
          
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Users</h3>
            <p style={styles.cardValue}>1,245</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Revenue</h3>
            <p style={styles.cardValue}>$8,430</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Growth</h3>
            <p style={styles.cardValue}>+12%</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;