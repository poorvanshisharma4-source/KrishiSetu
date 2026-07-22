export default function DashboardHeader() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold text-[#2E7D32]">
            Welcome Admin 👋
          </h1>

          <p className="text-gray-600 mt-2 text-lg">
            Manage Farmers, Buyers, Contracts and the entire KrishiSetu platform from one place.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-[#F5F0E6] px-5 py-3 rounded-2xl">
          <p className="text-sm text-gray-500">
            Today
          </p>

          <h2 className="text-lg font-semibold text-[#2E7D32]">
            {new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h2>
        </div>

      </div>
    </div>
  );
}