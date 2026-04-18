const brokers = [
  { short: "MT5", name: "MetaTrader 5" },
  { short: "MT4", name: "MetaTrader 4" },
];
export default function BrokerStrip() {
  return (
    <div className="bfx-broker-strip">
      <span className="bfx-broker-lbl">Auto-trade supported brokers</span>
      <div className="bfx-broker-pills">
        {brokers.map(b => (
          <div key={b.name} className="bfx-broker-pill">
            <span className="bfx-broker-short">{b.short}</span>
            <span className="bfx-broker-name">{b.name}</span>
          </div>
        ))}
      </div>
      <span className="bfx-broker-lbl">powered by MetaAPI</span>
    </div>
  );
}
