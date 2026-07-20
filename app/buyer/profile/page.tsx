import BuyerHero from "./components/BuyerHero";
import BuyerStats from "./components/BuyerStats";
import BuyerCompanyDetails from "./components/BuyerCompanyDetails";
import BuyerRequirements from "./components/BuyerRequirements";
import BuyerPurchaseHistory from "./components/BuyerPurchaseHistory";
import BuyerReviews from "./components/BuyerReviews";
import BuyerAIInsights from "./components/BuyerAIInsights";

export default function BuyerProfilePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F0]">
      <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
        <BuyerHero />
        <BuyerStats />
        <BuyerCompanyDetails />
        <BuyerRequirements />
        <BuyerPurchaseHistory />
        <BuyerReviews />
        <BuyerAIInsights/>
      </div>
    </main>
  );
}