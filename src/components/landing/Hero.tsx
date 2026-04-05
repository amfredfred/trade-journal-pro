import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
const cumR = [14, 65, 163, 240, 305, 411, 588, 751, 934, 1098, 1111];

export default function Hero() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInst = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    chartInst.current?.destroy();
    chartInst.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: months,
        datasets: [{
          data: cumR,
          borderColor: "#00d68f",
          borderWidth: 1.5,
          pointRadius: 0,
          tension: 0.35,
          fill: true,
          backgroundColor: (ctx) => {
            const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
            g.addColorStop(0, "rgba(0,214,143,.14)");
            g.addColorStop(1, "rgba(0,214,143,0)");
            return g;
          },
        }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false }, tooltip: {
            callbacks: { label: (c) => `+${c.parsed.y}R` },
            backgroundColor: "#141414", borderColor: "#252525", borderWidth: 1,
            titleColor: "#555555", bodyColor: "#f0f0f0",
            titleFont: { family: "JetBrains Mono" }, bodyFont: { family: "JetBrains Mono" },
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: "#555", font: { family: "JetBrains Mono", size: 9 } }, border: { display: false } },
          y: { grid: { color: "#1a1a1a", lineWidth: 0.5 }, ticks: { color: "#555", font: { family: "JetBrains Mono", size: 9 }, callback: (v) => v + "R" }, border: { display: false } },
        },
      },
    });
    return () => chartInst.current?.destroy();
  }, []);

  const navItems = ["Dashboard", "Signals", "Analytics", "Trades", "Calendar"];
  const navIcons = [
    <><rect x="1" y="1" width="4" height="4" rx="0.5" /><rect x="7" y="1" width="4" height="4" rx="0.5" /><rect x="1" y="7" width="4" height="4" rx="0.5" /><rect x="7" y="7" width="4" height="4" rx="0.5" /></>,
    <><path d="M6 1v10M1 6h10" /></>,
    <><polyline points="1,9 4,5 7,7 11,2" /></>,
    <><rect x="2" y="3" width="8" height="7" rx="1" /><path d="M5 3V2M7 3V2M2 6h8" /></>,
    <><rect x="1" y="2" width="10" height="9" rx="1" /><path d="M8 1v2M4 1v2M1 5h10" /></>,
  ];

  const signals = [
    { pair: "XAU/USD", dir: "LONG", rr: "2.5R", status: "ACTIVE", sc: "var(--accent)" },
    { pair: "EUR/USD", dir: "SHORT", rr: "1.8R", status: "TP1", sc: "var(--warn)" },
    { pair: "GBP/USD", dir: "LONG", rr: "2.5R", status: "ACTIVE", sc: "var(--accent)" },
    { pair: "USD/JPY", dir: "SHORT", rr: "2.1R", status: "PENDING", sc: "var(--muted)" },
  ];

  return (
    <section className="bfx-hero">
      <div className="bfx-hero-inner">
        <div className="bfx-hero-eyebrow">
          <div className="bfx-pulse" />
          Precision Signal Engine · 20 Pairs · Live
        </div>
        <h1 className="bfx-h1">
          Trade smarter,<br /><em>not harder</em>
        </h1>
        <p className="bfx-hero-sub">
          HTF zone detection, LTF rejection scoring, auto-execution, and deep analytics.
          The full trade lifecycle — running while you focus on what matters.
        </p>
        <div className="bfx-hero-actions">
          <a href="https://app.bobifx.com/login" className="bfx-btn-hero">Start free →</a>
          <a href="#backtest" className="bfx-btn-hero-ghost">▶ View backtest results</a>
        </div>

        <div className="bfx-dash-preview">
          <div className="bfx-dash-topbar">
            <div className="bfx-dash-dot" style={{ background: "#ef4444" }} />
            <div className="bfx-dash-dot" style={{ background: "#f59e0b" }} />
            <div className="bfx-dash-dot" style={{ background: "#00d68f" }} />
            <span className="bfx-dash-topbar-title">BobiFX · Dashboard</span>
            <div className="bfx-dash-live"><div className="bfx-pulse" />Live</div>
          </div>
          <div className="bfx-dash-body">
            <div className="bfx-dash-sidebar">
              <div className="bfx-dash-sidebar-logo">
                <div className="bfx-dash-sidebar-logomark">
                  <img src="/bobi-foreground.png" alt="BobiFX" />
                </div>
                <span className="bfx-dash-sidebar-name">BobiFX</span>
              </div>
              {navItems.map((item, i) => (
                <div key={item} className={`bfx-dash-nav-item${i === 0 ? " active" : ""}`}>
                  <svg className="bfx-dash-nav-icon" viewBox="0 0 12 12">{navIcons[i]}</svg>
                  {item}
                </div>
              ))}
            </div>
            <div className="bfx-dash-main">
              <div className="bfx-kpi-row">
                <div className="bfx-kpi green"><div className="bfx-kpi-lbl">Balance</div><div className="bfx-kpi-val green">$12.4k</div><div className="bfx-kpi-sub">+24.3% all time</div></div>
                <div className="bfx-kpi"><div className="bfx-kpi-lbl">Today P&L</div><div className="bfx-kpi-val green">+$186</div><div className="bfx-kpi-sub">+1.5%</div></div>
                <div className="bfx-kpi"><div className="bfx-kpi-lbl">Win Rate</div><div className="bfx-kpi-val green">41.5%</div><div className="bfx-kpi-sub">1,484 trades</div></div>
                <div className="bfx-kpi gold"><div className="bfx-kpi-lbl">Prof. Factor</div><div className="bfx-kpi-val gold">2.84</div><div className="bfx-kpi-sub">Above target</div></div>
                <div className="bfx-kpi green"><div className="bfx-kpi-lbl">Total RR</div><div className="bfx-kpi-val green">+1,111R</div><div className="bfx-kpi-sub">+0.75R/sig</div></div>
                <div className="bfx-kpi blue"><div className="bfx-kpi-lbl">Streak</div><div className="bfx-kpi-val blue">4 🔥</div><div className="bfx-kpi-sub">win streak</div></div>
              </div>
              <div className="bfx-charts-row">
                <div className="bfx-dash-card">
                  <div className="bfx-dash-card-title">Signal RR Equity</div>
                  <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
                    <canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />
                  </div>
                </div>
                <div className="bfx-dash-card">
                  <div className="bfx-dash-card-title">Open Signals</div>
                  <table className="bfx-sig-mini-table">
                    <tbody>
                      {signals.map((s) => (
                        <tr key={s.pair + s.dir}>
                          <td className="bfx-sig-pair-mini">{s.pair}</td>
                          <td><span className={`bfx-sig-dir bfx-${s.dir.toLowerCase()}`}>{s.dir === "LONG" ? "▲ L" : "▼ S"}</span></td>
                          <td style={{ color: "var(--info)", fontFamily: "var(--mono)", fontSize: 9 }}>{s.rr}</td>
                          <td style={{ color: s.sc, fontFamily: "var(--mono)", fontSize: 9 }}>{s.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}