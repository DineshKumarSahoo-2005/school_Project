export default function Features() {
  const features = [
    {
      title: "Anonymous Reporting",
      desc: "Report crimes without revealing your identity.",
    },
    {
      title: "Real-Time Alerts",
      desc: "Authorities get instant updates on critical cases.",
    },
    {
      title: "Secure Data",
      desc: "All data is encrypted and protected.",
    },
  ];

  return (
    <div className="bg-[#020617] text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Key Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-6 rounded-xl text-center hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}