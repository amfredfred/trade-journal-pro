type PipeStep = {
  icon: JSX.Element;
  name: string;
  desc: string;
  color?: string;
};

type ForkStep = {
  fork: true;
  question: string;
  yes: string;
  no: string;
};

type Step = PipeStep | ForkStep;

// Minimal SVG line icons — no emoji
const IconScope = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="7" />
    <circle cx="10" cy="10" r="2.5" />
    <line x1="10" y1="1" x2="10" y2="3.5" />
    <line x1="10" y1="16.5" x2="10" y2="19" />
    <line x1="1" y1="10" x2="3.5" y2="10" />
    <line x1="16.5" y1="10" x2="19" y2="10" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,11 8,16 17,5" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2L3 5.5v5c0 4 3.5 6.5 7 7.5 3.5-1 7-3.5 7-7.5v-5L10 2z" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="10" x2="16" y2="10" />
    <polyline points="11,5 17,10 11,15" />
  </svg>
);
const IconActivity = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2,10 6,4 10,14 14,7 18,10" />
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="9" width="12" height="9" rx="2" />
    <path d="M7 9V6a3 3 0 0 1 6 0v3" />
  </svg>
);

const steps: Step[] = [
  {
    icon: <IconScope />,
    name: "Market Analysed",
    desc: "The engine scans 20 pairs continuously. Technical analysis runs in real time — 24/7, server-side, no manual trigger required.",
  },
  {
    icon: <IconActivity />,
    name: "Setup Confirmed",
    desc: "When chart-based analysis confirms a valid setup, a signal is generated. Entry, stop loss, TP1, TP2, and R:R are calculated automatically.",
  },
  {
    fork: true,
    question: "Valid setup?",
    yes: "Signal generated →",
    no: "Discarded — no trade",
  },
  {
    icon: <IconShield />,
    name: "Risk Checked",
    desc: "Every signal passes a multi-rule risk gate: open trade limits, daily loss %, drawdown rules, and symbol correlation checks.",
  },
  {
    icon: <IconArrow />,
    name: "Trade Placed",
    desc: "Lot size is calculated from your account balance and configured risk %. The order goes live on your MT4 or MT5 broker — no manual action.",
  },
  {
    icon: <IconActivity />,
    name: "Position Managed",
    desc: "Stop loss moves to breakeven when TP1 is hit. The position closes at TP2 or SL. Every outcome is logged to your journal automatically.",
  },
  {
    icon: <IconLock />,
    name: "Trade Closed",
    desc: "Result recorded in R-multiples, analytics updated, and Loss Guard re-evaluates thresholds. The cycle restarts immediately for all active pairs.",
  },
];

function isFork(s: Step): s is ForkStep {
  return (s as ForkStep).fork === true;
}

export default function HowItWorks() {
  return (
    <section className="bfx-hiw" id="how-it-works">
      <div className="bfx-section-inner">
        <div className="bfx-hiw-header">
          <div className="bfx-label">How It Works</div>
          <h2 className="bfx-h2">From analysis to execution. <span className="dim">Automatically.</span></h2>
          <p className="bfx-sub">
            Bobi's Quote runs the full trade lifecycle — from market analysis to broker execution to position management —
            continuously, server-side, while you focus elsewhere.
          </p>
        </div>

        <div className="bfx-pipe">
          {steps.map((step, i) =>
            isFork(step) ? (
              <div key={i} className="bfx-pipe-fork">
                <div className="bfx-pipe-connector" />
                <div className="bfx-pipe-fork-label">{step.question}</div>
                <div className="bfx-pipe-fork-branches">
                  <div className="bfx-pipe-branch bfx-pipe-branch--no">
                    <div className="bfx-pipe-branch-tick bfx-pipe-branch-tick--no" />
                    <span className="bfx-pipe-branch-dir">No</span>
                    <div className="bfx-pipe-branch-tick bfx-pipe-branch-tick--no" />
                    <div className="bfx-pipe-branch-node bfx-pipe-branch-node--no">{step.no}</div>
                  </div>
                  <div className="bfx-pipe-branch bfx-pipe-branch--yes">
                    <div className="bfx-pipe-branch-tick bfx-pipe-branch-tick--yes" />
                    <span className="bfx-pipe-branch-dir">Yes</span>
                    <div className="bfx-pipe-branch-tick bfx-pipe-branch-tick--yes" />
                    <div className="bfx-pipe-branch-node bfx-pipe-branch-node--yes">{step.yes}</div>
                  </div>
                </div>
                <div className="bfx-pipe-connector" />
              </div>
            ) : (
              <div key={i} className="bfx-pipe-step-wrap">
                {i > 0 && <div className="bfx-pipe-connector" />}
                <div
                  className="bfx-pipe-node"
                >
                  <div className="bfx-pipe-node-icon">
                    {step.icon}
                  </div>
                  <div>
                    <div className="bfx-pipe-node-name">
                      {step.name}
                    </div>
                    <div className="bfx-pipe-node-desc">{step.desc}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <p className="bfx-hiw-footer-note">
          The engine runs 24/7 on our servers. Nothing stops when you close your browser.
        </p>
      </div>

      <style>{`
        .bfx-hiw-footer-note {
          text-align: center;
          font-family: var(--mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: .04em;
          margin-top: 40px;
        }
      `}</style>
    </section>
  );
}
