const items = "Laundromat in Centurion  ·  Sneaker Cleaning Centurion  ·  Carpet Cleaning Centurion  ·  Laundry Collection & Delivery  ·  Wash & Fold Centurion  ·  Corporate Laundry Services  ·  ";

const TickerStrip = () => (
  <div className="bg-blue-primary py-[14px] overflow-hidden whitespace-nowrap">
    <div className="animate-marquee inline-block">
      <span className="font-body font-bold text-[0.78rem] tracking-[2px] uppercase text-white/90">
        {items}{items}
      </span>
    </div>
  </div>
);

export default TickerStrip;