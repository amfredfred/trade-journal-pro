type PipeStep = {
  icon: string;
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

const steps: Step[] = [
  {
    icon: "🔍",
    name: "Zone Detected",
    desc: "A key price level is identified and confirmed.",
  },
  {
    icon: "📋",
    name: "Added to Watchlist",
    desc: "The zone is monitored continuously for price interaction.",
  },
  {
    fork: true,
    question: "Converts to Signal?",
    yes: "Signal generated →",
    no: "Invalidated & removed",
  },
  {
    icon: "🛡️",
    name: "Risk Check",
    desc: "Loss limits, drawdown rules, and R:R thresholds validated.",
  },
  {
    icon: "📐",
    name: "Trade Planned",
    desc: "Entry, stop loss, TP1, and TP2 levels set automatically.",
  },
  {
    icon: "✓",
    name: "Executed on Broker",
    desc: "Order placed on your MT4 or MT5 account. No manual action needed.",
    color: "var(--accent)",
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
          <h2 className="bfx-h2">From zone to trade. <span className="dim">Automatically.</span></h2>
          <p className="bfx-sub">Bobi's Quote runs the full pipeline — from detecting a setup to executing on your broker — without you lifting a finger.</p>
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
                  style={step.color ? { borderColor: `color-mix(in srgb, ${step.color} 30%, var(--border2))` } : undefined}
                >
                  <div
                    className="bfx-pipe-node-icon"
                    style={step.color ? { color: step.color, borderColor: `color-mix(in srgb, ${step.color} 30%, var(--border2))` } : undefined}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div
                      className="bfx-pipe-node-name"
                      style={step.color ? { color: step.color } : undefined}
                    >
                      {step.name}
                    </div>
                    <div className="bfx-pipe-node-desc">{step.desc}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
