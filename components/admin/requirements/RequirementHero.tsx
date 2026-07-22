interface RequirementHeroProps {
  requirement: {
    id: string;
    crop: string;
    buyer: string;
    quantity: string;
    status: string;
  };
}


export default function RequirementHero({
  requirement,
}: RequirementHeroProps) {

  return (
    <div className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] rounded-xl p-6 text-white shadow-sm">

      <div className="flex flex-col md:flex-row justify-between gap-4">


        <div>

          <h1 className="text-3xl font-bold">
            {requirement.crop} Requirement
          </h1>


          <p className="mt-2 text-green-100">
            Buyer: {requirement.buyer}
          </p>


          <p className="mt-1 text-green-100">
            Requirement ID: {requirement.id}
          </p>

        </div>



        <div>

          <span className="bg-white text-green-700 px-4 py-2 rounded-full font-medium">
            {requirement.status}
          </span>

        </div>


      </div>


    </div>
  );
}