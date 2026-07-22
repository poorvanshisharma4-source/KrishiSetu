type ContractHeroProps = {
  contractId: string;
};

export default function ContractHero({
  contractId,
}: ContractHeroProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Contract {contractId}
          </h1>

          <p className="text-gray-600 mt-2">
            Wheat Supply Agreement
          </p>
        </div>

        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
          Active
        </span>
      </div>
    </div>
  );
}