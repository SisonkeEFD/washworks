import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Laundry Baskets", "Sneaker & Shoe Care", "Carpet Cleaning", "Extras"];

const Pricing = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="pricing" className="section-padding px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <p className="section-label mb-3">TRANSPARENT PRICING</p>
          <h2 className="font-display text-text-dark tracking-[1.5px] leading-[1.05]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Simple, Flat Rates. No Hidden Costs.
          </h2>
          <p className="mt-4 text-text-muted font-body max-w-2xl mx-auto">
            We believe in honest pricing. Pick your basket, pick your care level, and you'll know exactly what you'll pay before we even collect.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`font-body font-semibold text-[0.85rem] px-5 py-[10px] rounded-full border-[1.5px] transition-all ${
                active === i
                  ? "bg-blue-primary text-white border-blue-primary"
                  : "border-black/[0.12] text-text-muted hover:bg-blue-ice hover:text-blue-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-8"
          >
            {active === 0 && <LaundryTable />}
            {active === 1 && <SneakerTable />}
            {active === 2 && <CarpetTable />}
            {active === 3 && <ExtrasTable />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const TableWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-[20px] overflow-hidden border border-black/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.05)] overflow-x-auto">
    <table className="w-full text-left min-w-[500px]">{children}</table>
  </div>
);

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="bg-navy-dark text-white uppercase text-[0.8rem] tracking-[1.5px] font-body font-bold px-6 py-[18px] text-center first:text-left">
    {children}
  </th>
);

const Td = ({ children, bold }: { children: React.ReactNode; bold?: boolean }) => (
  <td className={`px-6 py-4 font-body text-sm text-center first:text-left ${bold ? "font-bold text-blue-primary" : "text-text-dark"}`}>
    {children}
  </td>
);

const LaundryTable = () => (
  <>
    <TableWrapper>
      <thead>
        <tr><Th>Basket Size</Th><Th>Everyday Care (Wash + Dry)</Th><Th>Premium Care (Wash + Dry + Iron)</Th></tr>
      </thead>
      <tbody>
        {[
          ["XSmall", "R80", "R120"],
          ["Small", "R130", "R180"],
          ["Medium", "R210", "R280"],
          ["Large", "R290", "R380"],
        ].map(([size, ev, prem]) => (
          <tr key={size} className="border-b border-black/[0.05] hover:bg-[rgba(26,58,143,0.04)]">
            <Td>{size}</Td><Td bold>{ev}</Td><Td bold>{prem}</Td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
    <div className="mt-4 bg-[rgba(26,58,143,0.06)] border border-[rgba(26,58,143,0.15)] rounded-[10px] p-[18px_24px] text-left">
      <p className="font-body text-[0.85rem] text-text-muted">
        <strong className="text-text-dark">Not included in baskets:</strong> Bedding, towels and bathroom mats: R45-R50/kg · Blankets and duvets: item-based pricing · Heavy-duty items: quoted separately.
      </p>
    </div>
  </>
);

const SneakerTable = () => (
  <TableWrapper>
    <thead>
      <tr><Th>Item</Th><Th>Price</Th></tr>
    </thead>
    <tbody>
      {[
        ["Adult Sneaker / Takkie Wash", "R100"],
        ["Kids Sneaker / Takkie Wash", "R80"],
        ["Heavily Soiled Shoes (surcharge)", "+R20"],
        ["Leather Shoe Cleaning & Treatment", "R100"],
        ["Leather Bag Cleaning & Treatment", "R100"],
        ["Crocs Wash (Adults)", "R50"],
        ["Crocs Wash (Kids)", "R30"],
      ].map(([item, price]) => (
        <tr key={item} className="border-b border-black/[0.05] hover:bg-[rgba(26,58,143,0.04)]">
          <Td>{item}</Td><Td bold>{price}</Td>
        </tr>
      ))}
    </tbody>
  </TableWrapper>
);

const CarpetTable = () => (
  <>
    <TableWrapper>
      <thead>
        <tr><Th>Service</Th><Th>Rate</Th><Th>Best For</Th></tr>
      </thead>
      <tbody>
        {[
          ["Premium Carpet Wash", "R100/m\u00B2", "Wool, Oriental & delicate rugs"],
          ["Standard Rug Cleaning", "R50/m\u00B2", "Synthetic, machine-made & household rugs"],
        ].map(([srv, rate, best]) => (
          <tr key={srv} className="border-b border-black/[0.05] hover:bg-[rgba(26,58,143,0.04)]">
            <Td>{srv}</Td><Td bold>{rate}</Td><Td>{best}</Td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
    <div className="mt-4 bg-[rgba(26,58,143,0.06)] border border-[rgba(26,58,143,0.15)] rounded-[10px] p-[18px_24px] text-left">
      <p className="font-body text-[0.85rem] text-text-muted">All carpet cleaning uses specialist washing machines for a deep, professional finish.</p>
    </div>
  </>
);

const ExtrasTable = () => (
  <TableWrapper>
    <thead>
      <tr><Th>Item</Th><Th>Rate</Th></tr>
    </thead>
    <tbody>
      {[
        ["Bedding, Towels & Bath Mats", "R45-R50/kg"],
        ["Blankets & Duvets", "Item-based pricing"],
        ["Heavy-duty Items", "Quoted on request"],
        ["Monthly Family Packages", "Custom, contact us"],
      ].map(([item, rate]) => (
        <tr key={item} className="border-b border-black/[0.05] hover:bg-[rgba(26,58,143,0.04)]">
          <Td>{item}</Td><Td bold>{rate}</Td>
        </tr>
      ))}
    </tbody>
  </TableWrapper>
);

export default Pricing;
