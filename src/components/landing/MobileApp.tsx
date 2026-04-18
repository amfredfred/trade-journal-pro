const Pulse = () => <div className="bfx-pulse" />;

export default function MobileApp() {
  return (
    <section className="bfx-mobile" id="mobile">
      <div className="bfx-mobile-inner">
        {/* ── LEFT ── */}
        <div>
          <div className="bfx-label">Mobile App</div>
          <h2 className="bfx-h2">Signals in your<br />pocket.</h2>
          <p className="bfx-mobile-desc">Bobi's Quote is the Android companion to the dashboard. Push notifications for every signal event — so you never miss an entry while away from your desk.</p>
          <div className="bfx-mobile-feats">
            {[
              { icon:"🔔", title:"Instant push alerts",         desc:"Signal triggered, TP1 hit, breakeven moved, trade closed — every event, the moment it happens." },
              { icon:"📓", title:"Trade journal on mobile",     desc:"Log, tag, and review trades anywhere. Fully synced with your web dashboard in real time." },
              { icon:"📊", title:"Live performance dashboard",  desc:"Equity curve, win rate, and session stats — always up to date with your connected accounts." },
            ].map(f => (
              <div key={f.title} className="bfx-mf-item">
                <div className="bfx-mf-icon">{f.icon}</div>
                <div>
                  <div className="bfx-mf-title">{f.title}</div>
                  <div className="bfx-mf-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bfx-app-badges">
            <a href="https://play.google.com/store/apps/details?id=com.devfred.bobitradesapp" className="bfx-badge" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3.18 23.76a2 2 0 0 1-.68-1.54V1.78a2 2 0 0 1 .68-1.54l.1-.08 12.04 12.04v.28L3.28 23.84l-.1-.08z" fill="#EA4335"/>
                <path d="M19.34 16.28l-4.02-4.02v-.28l4.02-4.03.09.05 4.76 2.71c1.36.77 1.36 2.04 0 2.81l-4.76 2.71-.09.05z" fill="#FBBC04"/>
                <path d="M19.43 16.23L15.32 12.1 3.18 24.24c.45.47 1.19.53 2.01.06l14.24-8.07z" fill="#34A853"/>
                <path d="M19.43 7.97L5.19.1c-.82-.47-1.56-.41-2.01.06l12.14 12.14 4.11-4.23z" fill="#4285F4"/>
              </svg>
              <div><span className="bfx-badge-sub">GET IT ON</span><span className="bfx-badge-name">Google Play</span></div>
            </a>
            <div className="bfx-badge" style={{ opacity:.45, cursor:"default" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--muted)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div><span className="bfx-badge-sub">COMING SOON</span><span className="bfx-badge-name">App Store</span></div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Phone mockup ── */}
        <div style={{ display:"flex", justifyContent:"center" }}>
          <div className="bfx-phone">
            <div className="bfx-phone-notch" />
            <div className="bfx-phone-screen">
              <div className="bfx-ps-header">
                <div className="bfx-ps-title">Bobi's Quote</div>
                <div className="bfx-ps-live"><Pulse />LIVE</div>
              </div>
              {/* Signal 1 */}
              <div className="bfx-ps-sig">
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:7 }}>
                  <div>
                    <div style={{ fontWeight:800, fontSize:13, color:"var(--text)" }}>XAU/USD</div>
                    <div style={{ fontFamily:"var(--mono)", fontSize:9, color:"var(--muted)" }}>LONG · 1H/5M · London</div>
                  </div>
                  <div style={{ fontFamily:"var(--mono)", fontWeight:800, fontSize:15, color:"var(--gold)" }}>3.0R</div>
                </div>
                <div style={{ height:3, borderRadius:2, background:"linear-gradient(90deg,var(--green),rgba(30,204,122,.15))", width:"40%" }} />
              </div>
              {/* Signal 2 */}
              <div className="bfx-ps-sig">
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:7 }}>
                  <div>
                    <div style={{ fontWeight:800, fontSize:13, color:"var(--text)" }}>EUR/USD</div>
                    <div style={{ fontFamily:"var(--mono)", fontSize:9, color:"var(--muted)" }}>SHORT · 30M/5M · NY</div>
                  </div>
                  <div style={{ fontFamily:"var(--mono)", fontWeight:800, fontSize:15, color:"var(--green)" }}>✓ WIN</div>
                </div>
                <div style={{ height:3, borderRadius:2, background:"linear-gradient(90deg,var(--green),rgba(30,204,122,.15))", width:"100%" }} />
              </div>
              {/* Notification */}
              <div style={{ marginTop:10, background:"var(--gold-bg)", border:"1px solid var(--gold-brd)", borderRadius:8, padding:9, display:"flex", gap:9, alignItems:"center" }}>
                <span style={{ fontSize:14 }}>🔔</span>
                <div style={{ fontFamily:"var(--mono)", fontSize:9, color:"var(--gold)", lineHeight:1.5 }}>USD/JPY LONG triggered<br/>Entry 149.820 · SL 149.520</div>
              </div>
              {/* Today's P&L */}
              <div style={{ marginTop:10, padding:9, background:"var(--surface)", borderRadius:8, border:"1px solid var(--border)" }}>
                <div style={{ fontFamily:"var(--mono)", fontSize:9, color:"var(--muted)", marginBottom:4, letterSpacing:"0.06em" }}>TODAY</div>
                <div style={{ fontFamily:"var(--mono)", fontSize:18, fontWeight:900, color:"var(--gold)" }}>+4.2R</div>
                <div style={{ fontFamily:"var(--mono)", fontSize:9, color:"var(--muted)" }}>3 closed · 1 open</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
