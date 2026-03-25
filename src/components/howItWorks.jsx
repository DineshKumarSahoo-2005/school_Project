export default function HowItWorks() {
  const steps = [
    "Submit Report",
    "System Processes Data",
    "Authorities Review",
    "Action Taken",
  ];

  return (
    <div className="bg-[#0f172a] text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-[#1e293b] px-6 py-4 rounded-lg"
          >
            <p className="text-lg font-semibold">
              {i + 1}. {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}