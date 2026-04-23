import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CheckCircle, Clock, MapPin, MessageCircle, Mail, Phone } from "lucide-react";

const serviceOptions = [
  "Wash & Dry", "Wash, Dry & Iron", "Sneaker Cleaning", "Carpet Cleaning",
  "Multiple Services", "Monthly Package Enquiry", "Corporate Enquiry",
];
const basketOptions = ["XSmall", "Small", "Medium", "Large", "Not Sure"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
};

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const [form, setForm] = useState({
    name: "", phone: "", address: "", service: "", basket: "", notes: "",
  });

  const now = new Date();
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const [viewYear, setViewYear] = useState(now.getFullYear());

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return d < today;
  };
  const isSunday = (day: number) => new Date(viewYear, viewMonth, day).getDay() === 0;
  const isToday = (day: number) => {
    const t = new Date(); return day === t.getDate() && viewMonth === t.getMonth() && viewYear === t.getFullYear();
  };
  const isSelected = (day: number) =>
    selectedDate?.getDate() === day && selectedDate?.getMonth() === viewMonth && selectedDate?.getFullYear() === viewYear;

  const isSaturday = selectedDate?.getDay() === 6;
  const timeSlots = isSaturday
    ? ["09:00", "10:00", "11:00", "12:00", "13:00"]
    : ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const formatDate = (d: Date) => `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;

  const handleSubmit = () => {
    const errs: Record<string, boolean> = {};
    if (!form.name) errs.name = true;
    if (!form.phone) errs.phone = true;
    if (!form.address) errs.address = true;
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const msg = `Hi! I'd like to confirm my laundry pickup booking. Name: ${form.name} | Date: ${selectedDate ? formatDate(selectedDate) : ""} | Time: ${selectedTime} | Address: ${form.address} | Service: ${form.service} | Basket: ${form.basket} | Notes: ${form.notes}`;
    window.open(`https://wa.me/27796388572?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const reset = () => {
    setStep(1); setSelectedDate(null); setSelectedTime(""); setSubmitted(false);
    setForm({ name: "", phone: "", address: "", service: "", basket: "", notes: "" });
    setErrors({});
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const inputClass = (field?: string) =>
    `w-full bg-white/[0.07] border ${field && errors[field] ? "border-red-500" : "border-white/[0.12]"} rounded-lg px-4 py-[14px] text-white font-body text-sm focus:outline-none focus:border-blue-bright placeholder:text-white/30`;
  const labelClass = "block font-body font-bold text-[0.78rem] uppercase tracking-[1px] text-white/50 mb-2";

  return (
    <section
      id="booking"
      className="section-padding px-4"
      style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0a2540 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="section-label mb-3 !text-blue-light">BOOK A PICKUP</p>
          <h2 className="font-display text-white tracking-[1.5px] leading-[1.05]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Schedule Your Laundry Pickup in Centurion
          </h2>
          <p className="mt-4 text-white/[0.45] font-body max-w-2xl mx-auto">
            Fill in your details below and we'll confirm your booking via WhatsApp within the hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left - Booking Widget */}
          <div className="lg:col-span-3 bg-white/[0.05] backdrop-blur-[16px] border border-white/[0.1] rounded-[20px] p-8 sm:p-10">
            {/* Step indicator */}
            <div className="flex items-center justify-center gap-0 mb-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-body font-bold ${
                    step > s ? "bg-blue-primary text-white" : step === s ? "bg-blue-bright text-white" : "border-2 border-white/[0.2] text-white/30"
                  }`}>
                    {step > s ? <Check size={16} /> : s}
                  </div>
                  {s < 3 && <div className={`w-12 h-[2px] ${step > s ? "bg-blue-primary" : "bg-white/20"}`} />}
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-green-wa mx-auto mb-4" />
                <h3 className="font-display text-white text-2xl tracking-[1px]">Booking Requested!</h3>
                <p className="text-white/50 font-body mt-3">
                  We'll WhatsApp you shortly on {form.phone} to confirm your pickup. Thank you!
                </p>
                <button onClick={reset} className="text-blue-bright font-body font-medium mt-4 hover:underline">
                  Book Another
                </button>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div>
                    <p className="text-white font-body font-semibold text-[0.9rem] mb-4">Step 1: Choose a Pickup Date</p>
                    <div className="max-w-sm mx-auto">
                      <div className="flex items-center justify-between mb-4">
                        <button onClick={prevMonth} className="text-white text-xl px-2 hover:opacity-70">‹</button>
                        <span className="font-display text-white text-[1.1rem] tracking-[1px]">{months[viewMonth]} {viewYear}</span>
                        <button onClick={nextMonth} className="text-white text-xl px-2 hover:opacity-70">›</button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {dayNames.map((d, i) => (
                          <div key={d} className={`text-center font-body font-medium text-xs py-1 ${i === 6 ? "text-red-400/60" : "text-white/50"}`}>{d}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const disabled = isPast(day) || isSunday(day);
                          const sel = isSelected(day);
                          const today = isToday(day);
                          return (
                            <button
                              key={day}
                              disabled={disabled}
                              onClick={() => setSelectedDate(new Date(viewYear, viewMonth, day))}
                              className={`w-10 h-10 max-sm:w-9 max-sm:h-9 rounded-lg font-body font-semibold text-sm flex items-center justify-center transition-all ${
                                sel ? "bg-blue-bright text-white" :
                                disabled ? "text-white/20 cursor-not-allowed" :
                                "text-white/70 hover:bg-[rgba(37,99,235,0.3)] cursor-pointer"
                              } ${today && !sel ? "border border-[rgba(37,99,235,0.5)]" : ""}`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {selectedDate && (
                      <button onClick={() => setStep(2)} className="mt-6 bg-blue-bright text-white font-body font-bold px-6 py-3 rounded-lg w-full hover:bg-[#1d4ed8] hover:-translate-y-[2px] transition-all">
                        Next
                      </button>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <p className="text-white font-body font-semibold text-[0.9rem] mb-1">Step 2: Choose a Time Slot</p>
                    <p className="text-blue-light font-body text-sm mb-6">{selectedDate && formatDate(selectedDate)}</p>
                    <div className="flex flex-wrap gap-3">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`px-[18px] py-[10px] rounded-full font-body font-semibold text-sm border transition-all ${
                            selectedTime === t
                              ? "bg-blue-bright border-blue-bright text-white shadow-[0_4px_12px_rgba(37,99,235,0.4)]"
                              : "border-white/20 text-white hover:border-white/40"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button onClick={() => setStep(1)} className="border border-white/20 text-white font-body font-bold px-6 py-3 rounded-lg flex-1">Back</button>
                      <button
                        onClick={() => selectedTime && setStep(3)}
                        disabled={!selectedTime}
                        className="bg-blue-bright text-white font-body font-bold px-6 py-3 rounded-lg flex-1 disabled:opacity-40 hover:bg-[#1d4ed8] hover:-translate-y-[2px] transition-all"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <p className="text-white font-body font-semibold text-[0.9rem] mb-6">Step 3: Your Details</p>
                    <div className="space-y-4">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input className={inputClass("name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                        {errors.name && <p className="text-red-400 text-xs mt-1 font-body">Required</p>}
                      </div>
                      <div>
                        <label className={labelClass}>WhatsApp Number *</label>
                        <input type="tel" className={inputClass("phone")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="079 000 0000" />
                        {errors.phone && <p className="text-red-400 text-xs mt-1 font-body">Required</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Pickup Date</label>
                          <input className={inputClass()} value={selectedDate ? formatDate(selectedDate) : ""} readOnly />
                        </div>
                        <div>
                          <label className={labelClass}>Pickup Time</label>
                          <input className={inputClass()} value={selectedTime} readOnly />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Collection Address *</label>
                        <input className={inputClass("address")} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your address in Centurion" />
                        {errors.address && <p className="text-red-400 text-xs mt-1 font-body">Required</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Service Required</label>
                          <select className={`${inputClass()} bg-navy-dark`} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                            <option value="">Select...</option>
                            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Basket Size</label>
                          <select className={`${inputClass()} bg-navy-dark`} value={form.basket} onChange={(e) => setForm({ ...form, basket: e.target.value })}>
                            <option value="">Select...</option>
                            {basketOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Special Instructions (Optional)</label>
                        <textarea className={`${inputClass()} min-h-[100px]`} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any special requests?" />
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button onClick={() => setStep(2)} className="border border-white/20 text-white font-body font-bold px-6 py-3 rounded-lg">Back</button>
                      <button onClick={handleSubmit} className="inline-flex items-center justify-center gap-2 bg-blue-bright text-white font-body font-bold py-4 rounded-lg flex-1 hover:bg-[#1d4ed8] hover:-translate-y-[2px] transition-all text-base">
                        <CheckCircle size={18} /> Confirm My Pickup
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right - Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-white text-[1.5rem] mb-8 tracking-[1px]">We Make it Easy to Get Started</h3>

            <div className="space-y-6">
              {[
                { icon: Clock, title: "Operating Hours", desc: "Monday to Friday: 8am to 6pm | Saturday: 9am to 2pm | Sunday: Closed" },
                { icon: MapPin, title: "Collection Area", desc: "Centurion and surrounding suburbs including Riversands, Riverside View, Raslouw, Laudium, Christoburg, Laezonia, Doornrandje, Copperleaf and Eldoraigne." },
                { icon: MessageCircle, title: "WhatsApp", desc: "Message us directly on 079 638 8572 to book or ask any questions." },
                { icon: Mail, title: "Email", desc: "thewashworkslaundry@gmail.com" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 bg-[rgba(37,99,235,0.15)] rounded-[10px] flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-blue-light" />
                    </div>
                    <div>
                      <p className="font-body font-bold text-white text-sm">{item.title}</p>
                      <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/27796388572?text=Hi!%20I'd%20like%20to%20book%20a%20laundry%20pickup%20in%20Centurion."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-green-wa text-white font-body font-bold py-4 px-7 rounded-lg shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:-translate-y-[2px] transition-transform"
            >
              <MessageCircle size={18} /> Book via WhatsApp
            </a>
            <a href="tel:+27796388572" className="block text-center text-white/[0.35] font-body text-sm mt-3 hover:text-white/50">
              Or call us on 079 638 8572
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
