// src/pages/Analytics.jsx
import styles from "../../styles/admin/Analytics.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
} from "chart.js";
import Sidebar from "../../components/Sidebar";
import CircleProgress from "../../components/CircleProgress";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

export default function Analytics() {
  /* ---------------- CUSTOM TOOLTIP ---------------- */
  function customTooltip(context) {
    const tooltipModel = context.tooltip;

    let tooltipEl = document.getElementById("chartjs-tooltip");
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.id = "chartjs-tooltip";
      tooltipEl.style.position = "absolute";
      tooltipEl.style.background = "#000";
      tooltipEl.style.color = "#fff";
      tooltipEl.style.padding = "10px 14px";
      tooltipEl.style.borderRadius = "10px";
      tooltipEl.style.textAlign = "center";
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.fontSize = "14px";
      tooltipEl.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
      tooltipEl.style.zIndex = 99999;

      tooltipEl.innerHTML = `
        <div style="font-size:12px; opacity:0.75;">Chats</div>
        <div id="tooltip-value" style="font-size:18px; font-weight:600;"></div>
        <div style="
          width: 0; height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #000;
          margin: 6px auto 0;
        "></div>
      `;

      document.body.appendChild(tooltipEl);
    }

    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }

    const value = tooltipModel.dataPoints[0].parsed.y;
    tooltipEl.querySelector("#tooltip-value").innerHTML = value;

    const chartRect = context.chart.canvas.getBoundingClientRect();
    tooltipEl.style.left = chartRect.left + tooltipModel.caretX + "px";
    tooltipEl.style.top = chartRect.top + tooltipModel.caretY - 55 + "px";
    tooltipEl.style.opacity = 1;
  }

  /* ---------------- LINE CHART DATA ---------------- */
  const lineData = {
    labels: [
      "Week 1", "Week 2", "Week 3", "Week 4",
      "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10"
    ],
    datasets: [
      {
        data: [12, 15, 9, 8, 14, 13, 7, 10, 16, 18],
        borderColor: "#00D907",
        borderWidth: 4,
        pointBorderColor: "#000",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 7,
        tension: 0.4
      }
    ]
  };

  /* ---------------- LINE OPTIONS ---------------- */
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: customTooltip
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5 },
        grid: { color: "#eee" }
      },
      x: { grid: { display: false } }
    }
  };

  /* ---------------- MAIN RENDER ---------------- */
  return (
    <div className={styles.layout}>
      
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className={styles.wrapper}>

            <h1 className={styles.pageTitle}>Analytics</h1>

            <h2 className={styles.sectionTitle}>Missed Chats</h2>

            <div className={styles.chartCard}>
            <Line data={lineData} options={lineOptions} height={120} />
            </div>

            {/* Average Reply Time */}
            <div className={styles.metricRow}>
            <div>
                <h3 className={styles.metricTitle}>Average Reply time</h3>
                <p className={styles.metricDesc}>
                For highest customer satisfaction rates you should aim to reply 
                to an incoming customer's message in 15 seconds or less. Quick 
                responses will get you more conversations, help you earn customers 
                trust and make more sales.            </p>
            </div>
            <h3 className={styles.metricValue}>0 secs</h3>
            </div>
            {/* Resolved Tickets */}
            <div className={styles.metricRow}>
            <div>
                <h3 className={styles.metricTitle}>Resolved Tickets</h3>
                <p className={styles.metricDesc}>
                    A callback system on a website, as well as proactive invitations, 
                    help to attract even more customers. A separate round button for 
                    ordering a call with a small animation helps to motivate more customers to make calls.
                </p>
            </div>
            {/* Circle progress */}
                <CircleProgress value={80} size={120} />

            </div>

            {/* Total Chats */}
            <div className={styles.metricRow}>
            <div>
                <h3 className={styles.metricTitle}>Total Chats</h3>
                <p className={styles.metricDesc}>
                This metric Shows the total number of chats for all 
                Channels for the selected the selected period 
                </p>
            </div>
                <h3 className={styles.totalChats}>122 Chats</h3>
            </div>

        </div>
    </div>
);
}
