// 'use client';

// import { Navbar } from "@/components/navbar";
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// // Apne project structure ke hissab se path sahi kar lein
// import { FarmerSidebar } from '@/components/FarmerSidebar'; 

// import {
//   Brain,
//   LineChart,
//   BarChart3,
//   Coins,
//   TrendingUp,
//   AlertCircle,
//   CheckCircle2,
//   Loader2,
//   Leaf,
//   Bell,
//   Award,
//   Target,
//   Zap,
//   ArrowLeft,
// } from 'lucide-react';

// import { Button } from '@/components/ui/button';

// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';

// export default function FarmerAIPage() {
//   const [loading, setLoading] = useState(false);
//   const [activeFeature, setActiveFeature] = useState<string | null>(null);
//   const [result, setResult] = useState<object | null>(null);

//   // Form states
//   const [cropForm, setCropForm] = useState({
//     soil: 'alluvial',
//     season: 'kharif',
//     location: 'Maharashtra',
//   });

//   const [forecastForm, setForecastForm] = useState({
//     crop: 'Tomatoes',
//     location: 'Maharashtra',
//   });

//   const [profitForm, setProfitForm] = useState({
//     crop: 'Tomatoes',
//     quantity: 5,
//     location: 'Maharashtra',
//     budget: 100000,
//   });

//   const aiFeatures = [
//     {
//       id: 'crop-recommendation',
//       icon: Brain,
//       title: 'Crop Recommendation',
//       description: 'AI suggests the most profitable crops based on soil, season and demand.',
//       color: 'bg-purple-100 text-purple-700',
//       glowColor: 'shadow-purple-500/30',
//     },
//     {
//       id: 'demand-forecast',
//       icon: LineChart,
//       title: 'Demand Forecasting',
//       description: 'Predict upcoming market demand so you plant exactly what sells.',
//       color: 'bg-blue-100 text-blue-700',
//       glowColor: 'shadow-blue-500/30',
//     },
//     {
//       id: 'market-analysis',
//       icon: BarChart3,
//       title: 'Market Trend Analysis',
//       description: 'Track price movements and trends across regions in real time.',
//       color: 'bg-green-100 text-green-700',
//       glowColor: 'shadow-green-500/30',
//     },
//     {
//       id: 'profit-estimation',
//       icon: Coins,
//       title: 'Profit Estimation',
//       description: 'Estimate returns before you sow with data-backed projections.',
//       color: 'bg-amber-100 text-amber-700',
//       glowColor: 'shadow-amber-500/30',
//     },
//   ];

//   const callAI = async (type: string, data: object) => {
//     setLoading(true);
//     setActiveFeature(type);
//     setResult(null);

//     try {
//       const response = await fetch(`${SUPABASE_URL}/functions/v1/ai-recommendations`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ type, data }),
//       });

//       const json = await response.json();
//       setResult(json.data);
//     } catch (error) {
//       console.error('AI call failed:', error);
//       const mockResults: Record<string, object> = {
//         'crop-recommendation': {
//           recommendations: [
//             { crop: 'Tomatoes', reason: 'High demand, suitable for kharif season', expectedProfit: '₹80,000 per acre', difficulty: 'medium' },
//             { crop: 'Basmati Rice', reason: 'Premium pricing, export potential', expectedProfit: '₹60,000 per acre', difficulty: 'medium' },
//             { crop: 'Onions', reason: 'Stable demand throughout year', expectedProfit: '₹50,000 per acre', difficulty: 'easy' },
//             { crop: 'Turmeric', reason: 'High value, long shelf life', expectedProfit: '₹1,20,000 per acre', difficulty: 'hard' },
//             { crop: 'Green Chillies', reason: 'Quick harvest, good returns', expectedProfit: '₹45,000 per acre', difficulty: 'easy' },
//           ],
//         },
//         'demand-forecast': {
//           forecast: [
//             { month: 'July', demand: 'high', expectedPrice: '₹25-30/kg', trend: 'upward' },
//             { month: 'August', demand: 'high', expectedPrice: '₹28-35/kg', trend: 'upward' },
//             { month: 'September', demand: 'medium', expectedPrice: '₹22-28/kg', trend: 'stable' },
//             { month: 'October', demand: 'medium', expectedPrice: '₹20-25/kg', trend: 'downward' },
//             { month: 'November', demand: 'low', expectedPrice: '₹18-22/kg', trend: 'downward' },
//             { month: 'December', demand: 'low', expectedPrice: '₹15-20/kg', trend: 'stable' },
//           ],
//           insights: [
//             'Prices expected to peak in August due to festival demand',
//             'Consider harvesting before October for maximum profit',
//             'Storage facilities can help sell during lean season',
//           ],
//         },
//         'market-analysis': {
//           trends: [
//             { crop: 'Tomatoes', currentPrice: '₹27/kg', change30Days: '+12%', volume: '50,000 MT' },
//             { crop: 'Onions', currentPrice: '₹22/kg', change30Days: '-5%', volume: '80,000 MT' },
//             { crop: 'Potatoes', currentPrice: '₹15/kg', change30Days: '+3%', volume: '120,000 MT' },
//             { crop: 'Rice (Basmati)', currentPrice: '₹85/kg', change30Days: '+8%', volume: '25,000 MT' },
//           ],
//           analysis: 'Vegetable prices showing upward trend due to monsoon impact. Rice exports driving premium pricing.',
//           recommendations: [
//             'Hold tomato stocks for better prices in August',
//             'Onion prices may dip further - consider immediate sales',
//             'Basmati rice shows strong export demand - lock in contracts now',
//           ],
//         },
//         'profit-estimation': {
//           estimation: {
//             totalInvestment: `₹${profitForm.budget.toLocaleString()}`,
//             expectedYield: `${profitForm.quantity * 5000} kg`,
//             grossIncome: `₹${(profitForm.quantity * 5000 * 25).toLocaleString()}`,
//             netProfit: `₹${((profitForm.quantity * 5000 * 25) - profitForm.budget) * 0.6}`,
//             profitMargin: '60%',
//             breakEven: '4 months',
//           },
//           factors: [
//             'Weather conditions during growing season',
//             'Market rates at harvest time',
//             'Transportation and storage costs',
//           ],
//           tips: [
//             'Use drip irrigation to reduce water costs by 30%',
//             'Direct contracts with buyers can increase profit by 15-20%',
//             'Consider organic certification for premium pricing',
//           ],
//         },
//       };
//       setResult(mockResults[type] || { message: 'No data available' });
//     } finally {
//       setLoading(false);
//     }
//   };
//   const renderForm = () => {
//     switch (activeFeature) {
//       case 'crop-recommendation':
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Soil Type</label>
//               <select
//                 value={cropForm.soil}
//                 onChange={(e) => setCropForm({ ...cropForm, soil: e.target.value })}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               >
//                 <option value="alluvial">Alluvial</option>
//                 <option value="black">Black (Regur)</option>
//                 <option value="red">Red Soil</option>
//                 <option value="laterite">Laterite</option>
//                 <option value="sandy">Sandy</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
//               <select
//                 value={cropForm.season}
//                 onChange={(e) => setCropForm({ ...cropForm, season: e.target.value })}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               >
//                 <option value="kharif">Kharif (Monsoon)</option>
//                 <option value="rabi">Rabi (Winter)</option>
//                 <option value="zaid">Zaid (Summer)</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//               <input
//                 type="text"
//                 value={cropForm.location}
//                 onChange={(e) => setCropForm({ ...cropForm, location: e.target.value })}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 placeholder="e.g., Maharashtra"
//               />
//             </div>
//             <Button
//               variant="default"
//               size="lg"
//               onClick={() => callAI('crop-recommendation', cropForm)}
//               disabled={loading}
//               className="w-full bg-purple-600 hover:bg-purple-700"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                   Analyzing...
//                 </>
//               ) : (
//                 <>
//                   <Brain className="w-5 h-5 mr-2" />
//                   Get Recommendation
//                 </>
//               )}
//             </Button>
//           </div>
//         );

//       case 'demand-forecast':
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Crop</label>
//               <input
//                 type="text"
//                 value={forecastForm.crop}
//                 onChange={(e) => setForecastForm({ ...forecastForm, crop: e.target.value })}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., Tomatoes"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//               <input
//                 type="text"
//                 value={forecastForm.location}
//                 onChange={(e) => setForecastForm({ ...forecastForm, location: e.target.value })}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="e.g., Maharashtra"
//               />
//             </div>
//             <Button
//               variant="default"
//               size="lg"
//               onClick={() => callAI('demand-forecast', forecastForm)}
//               disabled={loading}
//               className="w-full bg-blue-600 hover:bg-blue-700"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                   Forecasting...
//                 </>
//               ) : (
//                 <>
//                   <LineChart className="w-5 h-5 mr-2" />
//                   Get Forecast
//                 </>
//               )}
//             </Button>
//           </div>
//         );

//       case 'market-analysis':
//         return (
//           <div className="space-y-4">
//             <Button
//               variant="default"
//               size="lg"
//               onClick={() => callAI('market-analysis', {})}
//               disabled={loading}
//               className="w-full bg-green-600 hover:bg-green-700"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                   Analyzing...
//                 </>
//               ) : (
//                 <>
//                   <BarChart3 className="w-5 h-5 mr-2" />
//                   Analyze Market Trends
//                 </>
//               )}
//             </Button>
//           </div>
//         );

//       case 'profit-estimation':
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Crop</label>
//               <input
//                 type="text"
//                 value={profitForm.crop}
//                 onChange={(e) => setProfitForm({ ...profitForm, crop: e.target.value })}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Area (Acres)</label>
//                 <input
//                   type="number"
//                   value={profitForm.quantity}
//                   onChange={(e) => setProfitForm({ ...profitForm, quantity: parseInt(e.target.value) || 0 })}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Budget (₹)</label>
//                 <input
//                   type="number"
//                   value={profitForm.budget}
//                   onChange={(e) => setProfitForm({ ...profitForm, budget: parseInt(e.target.value) || 0 })}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//               <input
//                 type="text"
//                 value={profitForm.location}
//                 onChange={(e) => setProfitForm({ ...profitForm, location: e.target.value })}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//               />
//             </div>
//             <Button
//               variant="default"
//               size="lg"
//               onClick={() => callAI('profit-estimation', profitForm)}
//               disabled={loading}
//               className="w-full bg-amber-600 hover:bg-amber-700"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                   Calculating...
//                 </>
//               ) : (
//                 <>
//                   <Coins className="w-5 h-5 mr-2" />
//                   Estimate Profit
//                 </>
//               )}
//             </Button>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   const renderResult = () => {
//     if (!result) return null;

//     if (activeFeature === 'crop-recommendation' && 'recommendations' in result) {
//       const data = result as { recommendations: Array<{ crop: string; reason: string; expectedProfit: string; difficulty: string }> };
//       return (
//         <div className="space-y-3">
//           <h4 className="font-semibold text-gray-900 flex items-center gap-2">
//             <Target className="w-5 h-5 text-purple-600" />
//             Recommended Crops
//           </h4>
//           {data.recommendations.map((rec, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="p-4 bg-purple-50 rounded-xl"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <span className="font-semibold text-gray-900">{rec.crop}</span>
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-medium ${
//                     rec.difficulty === 'easy'
//                       ? 'bg-green-100 text-green-700'
//                       : rec.difficulty === 'medium'
//                       ? 'bg-amber-100 text-amber-700'
//                       : 'bg-red-100 text-red-700'
//                   }`}
//                 >
//                   {rec.difficulty}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-600 mb-1">{rec.reason}</p>
//               <p className="text-sm font-medium text-purple-700">{rec.expectedProfit}</p>
//             </motion.div>
//           ))}
//         </div>
//       );
//     }

//     if (activeFeature === 'demand-forecast' && 'forecast' in result) {
//       const data = result as { forecast: Array<{ month: string; demand: string; expectedPrice: string; trend: string }>; insights: string[] };
//       return (
//         <div className="space-y-4">
//           <h4 className="font-semibold text-gray-900 flex items-center gap-2">
//             <LineChart className="w-5 h-5 text-blue-600" />
//             6-Month Demand Forecast
//           </h4>
//           <div className="space-y-2">
//             {data.forecast.map((item, index) => (
//               <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
//                 <span className="font-medium text-gray-900">{item.month}</span>
//                 <div className="flex items-center gap-3">
//                   <span className={`px-2 py-0.5 rounded text-xs font-medium ${item.demand === 'high' ? 'bg-green-100 text-green-700' : item.demand === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'}`}>
//                     {item.demand}
//                   </span>
//                   <span className="text-sm text-gray-600">{item.expectedPrice}</span>
//                   <TrendingUp className={`w-4 h-4 ${item.trend === 'upward' ? 'text-green-500' : item.trend === 'downward' ? 'text-red-500 rotate-180' : 'text-gray-400'}`} />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="p-4 bg-blue-100 rounded-xl">
//             <h5 className="font-semibold text-blue-900 mb-2">Key Insights</h5>
//             <ul className="space-y-1">
//               {data.insights.map((insight, i) => (
//                 <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
//                   <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                   {insight}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       );
//     }

//     if (activeFeature === 'market-analysis' && 'trends' in result) {
//       const data = result as { trends: Array<{ crop: string; currentPrice: string; change30Days: string; volume: string }>; analysis: string; recommendations: string[] };
//       return (
//         <div className="space-y-4">
//           <h4 className="font-semibold text-gray-900 flex items-center gap-2">
//             <BarChart3 className="w-5 h-5 text-green-600" />
//             Current Market Trends
//           </h4>
//           <div className="space-y-2">
//             {data.trends.map((trend, index) => (
//               <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
//                 <div>
//                   <span className="font-medium text-gray-900">{trend.crop}</span>
//                   <p className="text-xs text-gray-500">Volume: {trend.volume}</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="font-semibold text-gray-900">{trend.currentPrice}</span>
//                   <span className={`text-sm font-medium ${trend.change30Days.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
//                     {trend.change30Days}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="p-4 bg-green-100 rounded-xl">
//             <h5 className="font-semibold text-green-900 mb-2">Analysis</h5>
//             <p className="text-sm text-green-800 mb-3">{data.analysis}</p>
//             <h5 className="font-semibold text-green-900 mb-2">Recommendations</h5>
//             <ul className="space-y-1">
//               {data.recommendations.map((rec, i) => (
//                 <li key={i} className="text-sm text-green-800 flex items-start gap-2">
//                   <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                   {rec}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       );
//     }

//     if (activeFeature === 'profit-estimation' && 'estimation' in result) {
//       const data = result as { estimation: Record<string, string>; factors: string[]; tips: string[] };
//       return (
//         <div className="space-y-4">
//           <h4 className="font-semibold text-gray-900 flex items-center gap-2">
//             <Coins className="w-5 h-5 text-amber-600" />
//             Profit Estimation
//           </h4>
//           <div className="grid grid-cols-2 gap-3">
//             {Object.entries(data.estimation).map(([key, value]) => (
//               <div key={key} className="p-3 bg-amber-50 rounded-lg">
//                 <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
//                 <p className="text-lg font-bold text-amber-700">{value}</p>
//               </div>
//             ))}
//           </div>
//           <div className="p-4 bg-amber-100 rounded-xl">
//             <h5 className="font-semibold text-amber-900 mb-2">Factors to Consider</h5>
//             <ul className="space-y-1 mb-3">
//               {data.factors.map((factor, i) => (
//                 <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
//                   <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                   {factor}
//                 </li>
//               ))}
//             </ul>
//             <h5 className="font-semibold text-amber-900 mb-2">Pro Tips</h5>
//             <ul className="space-y-1">
//               {data.tips.map((tip, i) => (
//                 <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
//                   <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                   {tip}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       );
//     }

//     return null;
//   };

//   return (
//   <>
//     <Navbar />

//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex flex-col lg:flex-row gap-6">
          
//           {/* Naya FarmerSidebar component */}
//           <div className="lg:w-64 flex-shrink-0">
//             <FarmerSidebar />
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 space-y-6">
//             {/* Header */}
//             <div className="rounded-3xl bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 p-10 shadow-2xl text-white">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h1 className="text-2xl md:text-3xl font-display font-bold mb-2 flex items-center gap-3">
//                     <Brain className="w-8 h-8" />
//                     AI Intelligence Center
//                   </h1>
//                   <p className="text-purple-100">
//                     Leverage AI-powered insights to make smarter farming decisions.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Back Button */}
//             <Link href="/farmer/dashboard" className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Dashboard
//             </Link>

//             {/* AI Feature Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//               {aiFeatures.map((feature, index) => (
//                 <motion.div
//                   key={feature.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <div
//                     className={`bg-white rounded-3xl p-6 border border-green-100 shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
//                       activeFeature === feature.id ? `ring-2 ring-primary-500 ${feature.glowColor}` : ''
//                     }`}
//                     onClick={() => {
//                       setActiveFeature(feature.id);
//                       setResult(null);
//                     }}
//                   >
//                     <div className={`w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center ${feature.color} mb-4`}>
//                       <feature.icon className="w-6 h-6" />
//                     </div>
//                     <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
//                     <p className="text-xs text-gray-500">{feature.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Interactive Section */}
//             {activeFeature && (
//               <div className="grid lg:grid-cols-2 gap-8">
//                 {/* Input Form */}
//                 <div>
//                   <h3 className="text-lg font-display font-bold text-gray-900 mb-4">
//                     {aiFeatures.find((f) => f.id === activeFeature)?.title}
//                   </h3>
//                   {renderForm()}
//                 </div>

//                 {/* Results */}
//                 <div>
//                   <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Results</h3>
//                   {loading ? (
//                     <div className="bg-white rounded-3xl shadow-xl border border-green-100 flex flex-col items-center justify-center h-80">
//                       <Loader2 className="w-12 h-12 animate-spin text-primary-700 mb-4" />
//                       <p>AI is analyzing your request...</p>
//                     </div>
//                   ) : result ? (
//                     renderResult()
//                   ) : (
//                     <div className="flex flex-col items-center justify-center h-64 text-gray-400">
//                       <Brain className="w-16 h-16 mb-4 opacity-30" />
//                       <p>Configure parameters and run analysis</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}

//             {/* Info Cards */}
//             {!activeFeature && (
//               <div>
//                 <div className="text-center py-12">
//                   <Brain className="w-20 h-20 text-purple-300 mx-auto mb-6" />
//                   <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Select an AI Feature</h3>
//                   <p className="text-gray-500 max-w-md mx-auto">
//                     Click on any of the AI features above to get started. Each feature provides
//                     data-driven insights to help you make better farming decisions.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//        </div>
//   </>
// );
// }

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Brain,
  LineChart,
  BarChart3,
  Coins,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Target,
  Zap,
  ArrowLeft,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';

export default function FarmerAIPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [result, setResult] = useState<object | null>(null);

  // Form states
  const [cropForm, setCropForm] = useState({
    soil: 'alluvial',
    season: 'kharif',
    location: 'Maharashtra',
  });

  const [forecastForm, setForecastForm] = useState({
    crop: 'Tomatoes',
    location: 'Maharashtra',
  });

  const [profitForm, setProfitForm] = useState({
    crop: 'Tomatoes',
    quantity: 5,
    location: 'Maharashtra',
    budget: 100000,
  });

  const aiFeatures = [
    {
      id: 'crop-recommendation',
      icon: Brain,
      title: 'Crop Recommendation',
      description: 'AI suggests the most profitable crops based on soil, season and demand.',
      color: 'bg-purple-100 text-purple-700',
      glowColor: 'shadow-purple-500/30',
    },
    {
      id: 'demand-forecast',
      icon: LineChart,
      title: 'Demand Forecasting',
      description: 'Predict upcoming market demand so you plant exactly what sells.',
      color: 'bg-blue-100 text-blue-700',
      glowColor: 'shadow-blue-500/30',
    },
    {
      id: 'market-analysis',
      icon: BarChart3,
      title: 'Market Trend Analysis',
      description: 'Track price movements and trends across regions in real time.',
      color: 'bg-green-100 text-green-700',
      glowColor: 'shadow-green-500/30',
    },
    {
      id: 'profit-estimation',
      icon: Coins,
      title: 'Profit Estimation',
      description: 'Estimate returns before you sow with data-backed projections.',
      color: 'bg-amber-100 text-amber-700',
      glowColor: 'shadow-amber-500/30',
    },
  ];

  const callAI = async (type: string, data: object) => {
    setLoading(true);
    setActiveFeature(type);
    setResult(null);

    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/ai-recommendations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data }),
      });

      const json = await response.json();
      setResult(json.data);
    } catch (error) {
      console.error('AI call failed:', error);
      const mockResults: Record<string, object> = {
        'crop-recommendation': {
          recommendations: [
            { crop: 'Tomatoes', reason: 'High demand, suitable for kharif season', expectedProfit: '₹80,000 per acre', difficulty: 'medium' },
            { crop: 'Basmati Rice', reason: 'Premium pricing, export potential', expectedProfit: '₹60,000 per acre', difficulty: 'medium' },
            { crop: 'Onions', reason: 'Stable demand throughout year', expectedProfit: '₹50,000 per acre', difficulty: 'easy' },
            { crop: 'Turmeric', reason: 'High value, long shelf life', expectedProfit: '₹1,20,000 per acre', difficulty: 'hard' },
            { crop: 'Green Chillies', reason: 'Quick harvest, good returns', expectedProfit: '₹45,000 per acre', difficulty: 'easy' },
          ],
        },
        'demand-forecast': {
          forecast: [
            { month: 'July', demand: 'high', expectedPrice: '₹25-30/kg', trend: 'upward' },
            { month: 'August', demand: 'high', expectedPrice: '₹28-35/kg', trend: 'upward' },
            { month: 'September', demand: 'medium', expectedPrice: '₹22-28/kg', trend: 'stable' },
            { month: 'October', demand: 'medium', expectedPrice: '₹20-25/kg', trend: 'downward' },
            { month: 'November', demand: 'low', expectedPrice: '₹18-22/kg', trend: 'downward' },
            { month: 'December', demand: 'low', expectedPrice: '₹15-20/kg', trend: 'stable' },
          ],
          insights: [
            'Prices expected to peak in August due to festival demand',
            'Consider harvesting before October for maximum profit',
            'Storage facilities can help sell during lean season',
          ],
        },
        'market-analysis': {
          trends: [
            { crop: 'Tomatoes', currentPrice: '₹27/kg', change30Days: '+12%', volume: '50,000 MT' },
            { crop: 'Onions', currentPrice: '₹22/kg', change30Days: '-5%', volume: '80,000 MT' },
            { crop: 'Potatoes', currentPrice: '₹15/kg', change30Days: '+3%', volume: '120,000 MT' },
            { crop: 'Rice (Basmati)', currentPrice: '₹85/kg', change30Days: '+8%', volume: '25,000 MT' },
          ],
          analysis: 'Vegetable prices showing upward trend due to monsoon impact. Rice exports driving premium pricing.',
          recommendations: [
            'Hold tomato stocks for better prices in August',
            'Onion prices may dip further - consider immediate sales',
            'Basmati rice shows strong export demand - lock in contracts now',
          ],
        },
        'profit-estimation': {
          estimation: {
            totalInvestment: `₹${profitForm.budget.toLocaleString()}`,
            expectedYield: `${profitForm.quantity * 5000} kg`,
            grossIncome: `₹${(profitForm.quantity * 5000 * 25).toLocaleString()}`,
            netProfit: `₹${((profitForm.quantity * 5000 * 25) - profitForm.budget) * 0.6}`,
            profitMargin: '60%',
            breakEven: '4 months',
          },
          factors: [
            'Weather conditions during growing season',
            'Market rates at harvest time',
            'Transportation and storage costs',
          ],
          tips: [
            'Use drip irrigation to reduce water costs by 30%',
            'Direct contracts with buyers can increase profit by 15-20%',
            'Consider organic certification for premium pricing',
          ],
        },
      };
      setResult(mockResults[type] || { message: 'No data available' });
    } finally {
      loading && setLoading(false);
    }
  };

  const renderForm = () => {
    switch (activeFeature) {
      case 'crop-recommendation':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Soil Type</label>
              <select
                value={cropForm.soil}
                onChange={(e) => setCropForm({ ...cropForm, soil: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
              >
                <option value="alluvial">Alluvial</option>
                <option value="black">Black (Regur)</option>
                <option value="red">Red Soil</option>
                <option value="laterite">Laterite</option>
                <option value="sandy">Sandy</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Season</label>
              <select
                value={cropForm.season}
                onChange={(e) => setCropForm({ ...cropForm, season: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
              >
                <option value="kharif">Kharif (Monsoon)</option>
                <option value="rabi">Rabi (Winter)</option>
                <option value="zaid">Zaid (Summer)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={cropForm.location}
                onChange={(e) => setCropForm({ ...cropForm, location: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
                placeholder="e.g., Maharashtra"
              />
            </div>
            <Button
              onClick={() => callAI('crop-recommendation', cropForm)}
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 font-bold text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="w-4 h-4 mr-2" />
                  Get Recommendation
                </>
              )}
            </Button>
          </div>
        );

      case 'demand-forecast':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Crop</label>
              <input
                type="text"
                value={forecastForm.crop}
                onChange={(e) => setForecastForm({ ...forecastForm, crop: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
                placeholder="e.g., Tomatoes"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={forecastForm.location}
                onChange={(e) => setForecastForm({ ...forecastForm, location: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
                placeholder="e.g., Maharashtra"
              />
            </div>
            <Button
              onClick={() => callAI('demand-forecast', forecastForm)}
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 font-bold text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Forecasting...
                </>
              ) : (
                <>
                  <LineChart className="w-4 h-4 mr-2" />
                  Get Forecast
                </>
              )}
            </Button>
          </div>
        );

      case 'market-analysis':
        return (
          <div className="space-y-4">
            <Button
              onClick={() => callAI('market-analysis', {})}
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 font-bold text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analyze Market Trends
                </>
              )}
            </Button>
          </div>
        );

      case 'profit-estimation':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Crop</label>
              <input
                type="text"
                value={profitForm.crop}
                onChange={(e) => setProfitForm({ ...profitForm, crop: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Area (Acres)</label>
                <input
                  type="number"
                  value={profitForm.quantity}
                  onChange={(e) => setProfitForm({ ...profitForm, quantity: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget (₹)</label>
                <input
                  type="number"
                  value={profitForm.budget}
                  onChange={(e) => setProfitForm({ ...profitForm, budget: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={profitForm.location}
                onChange={(e) => setProfitForm({ ...profitForm, location: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-sm"
              />
            </div>
            <Button
              onClick={() => callAI('profit-estimation', profitForm)}
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 font-bold text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Coins className="w-4 h-4 mr-2" />
                  Estimate Profit
                </>
              )}
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  const renderResult = () => {
    if (!result) return null;

    if (activeFeature === 'crop-recommendation' && 'recommendations' in result) {
      const data = result as { recommendations: Array<{ crop: string; reason: string; expectedProfit: string; difficulty: string }> };
      return (
        <div className="space-y-3">
          <h4 className="font-bold text-gray-900 flex items-center gap-2 text-base">
            <Target className="w-5 h-5 text-purple-600" />
            Recommended Crops
          </h4>
          {data.recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-purple-50/60 rounded-xl border border-purple-100"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">{rec.crop}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                    rec.difficulty === 'easy'
                      ? 'bg-green-50 text-green-700 border-green-200'
                      : rec.difficulty === 'medium'
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-red-50 text-red-700 border-red-200'
                  }`}
                >
                  {rec.difficulty}
                </span>
              </div>
              <p className="text-xs text-gray-600 font-medium mb-1">{rec.reason}</p>
              <p className="text-sm font-bold text-purple-700">{rec.expectedProfit}</p>
            </motion.div>
          ))}
        </div>
      );
    }

    if (activeFeature === 'demand-forecast' && 'forecast' in result) {
      const data = result as { forecast: Array<{ month: string; demand: string; expectedPrice: string; trend: string }>; insights: string[] };
      return (
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 flex items-center gap-2 text-base">
            <LineChart className="w-5 h-5 text-blue-600" />
            6-Month Demand Forecast
          </h4>
          <div className="space-y-2">
            {data.forecast.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-blue-50/50 border border-blue-100/60 rounded-xl">
                <span className="font-bold text-gray-900 text-sm">{item.month}</span>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.demand === 'high' ? 'bg-green-100 text-green-700' : item.demand === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'}`}>
                    {item.demand}
                  </span>
                  <span className="text-xs font-semibold text-gray-600">{item.expectedPrice}</span>
                  <TrendingUp className={`w-4 h-4 ${item.trend === 'upward' ? 'text-green-500' : item.trend === 'downward' ? 'text-red-500 rotate-180' : 'text-gray-400'}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <h5 className="font-bold text-blue-900 mb-2 text-sm">Key Insights</h5>
            <ul className="space-y-1.5">
              {data.insights.map((insight, i) => (
                <li key={i} className="text-xs font-semibold text-blue-800 flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (activeFeature === 'market-analysis' && 'trends' in result) {
      const data = result as { trends: Array<{ crop: string; currentPrice: string; change30Days: string; volume: string }>; analysis: string; recommendations: string[] };
      return (
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 flex items-center gap-2 text-base">
            <BarChart3 className="w-5 h-5 text-green-600" />
            Current Market Trends
          </h4>
          <div className="space-y-2">
            {data.trends.map((trend, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50/50 border border-green-100/60 rounded-xl">
                <div>
                  <span className="font-bold text-gray-900 text-sm">{trend.crop}</span>
                  <p className="text-[11px] text-gray-400 font-medium">Volume: {trend.volume}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900 text-sm">{trend.currentPrice}</span>
                  <span className={`text-xs font-bold ${trend.change30Days.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {trend.change30Days}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
            <h5 className="font-bold text-green-900 mb-1.5 text-sm">Analysis</h5>
            <p className="text-xs text-green-800 mb-3 font-semibold leading-relaxed">{data.analysis}</p>
            <h5 className="font-bold text-green-900 mb-2 text-sm">Recommendations</h5>
            <ul className="space-y-1.5">
              {data.recommendations.map((rec, i) => (
                <li key={i} className="text-xs font-semibold text-green-800 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    if (activeFeature === 'profit-estimation' && 'estimation' in result) {
      const data = result as { estimation: Record<string, string>; factors: string[]; tips: string[] };
      return (
        <div className="space-y-4">
          <h4 className="font-bold text-gray-900 flex items-center gap-2 text-base">
            <Coins className="w-5 h-5 text-amber-600" />
            Profit Estimation
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(data.estimation).map(([key, value]) => (
              <div key={key} className="p-3 bg-amber-50/60 border border-amber-100/60 rounded-xl">
                <p className="text-[11px] text-gray-400 font-semibold capitalize tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="text-base font-black text-amber-700 mt-0.5">{value}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
            <h5 className="font-bold text-amber-900 mb-1.5 text-sm">Factors to Consider</h5>
            <ul className="space-y-1.5 mb-3">
              {data.factors.map((factor, i) => (
                <li key={i} className="text-xs font-semibold text-amber-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                  {factor}
                </li>
              ))}
            </ul>
            <h5 className="font-bold text-amber-900 mb-2 text-sm">Pro Tips</h5>
            <ul className="space-y-1.5">
              {data.tips.map((tip, i) => (
                <li key={i} className="text-xs font-semibold text-amber-800 flex items-start gap-2">
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="space-y-6">
      

      {/* Header Context Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 p-8 shadow-sm text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight mb-1 flex items-center gap-3">
              <Brain className="w-8 h-8" />
              AI Intelligence Center
            </h1>
            <p className="text-sm font-medium text-emerald-100/90">
              Leverage AI-powered insights to make smarter farming decisions.
            </p>
          </div>
        </div>
      </div>

      {/* AI Feature Operational Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {aiFeatures.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div
              className={`bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between h-full ${
                activeFeature === feature.id ? `ring-2 ring-emerald-600 ${feature.glowColor}` : ''
              }`}
              onClick={() => {
                setActiveFeature(feature.id);
                setResult(null);
              }}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} mb-4`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-black text-gray-900 tracking-tight text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contextual Interactive Workbench */}
      {activeFeature ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-2xl border border-gray-200/60 p-6 shadow-sm">
          {/* Input Form Workbench Column */}
          <div className="border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-6">
            <h3 className="text-base font-black text-gray-900 tracking-tight mb-4">
              Configure Parameters: {aiFeatures.find((f) => f.id === activeFeature)?.title}
            </h3>
            {renderForm()}
          </div>

          {/* Real-time Dynamic Results Matrix Column */}
          <div className="lg:pl-2">
            <h3 className="text-base font-black text-gray-900 tracking-tight mb-4">Analysis Streams</h3>
            {loading ? (
              <div className="bg-gray-50/50 rounded-xl border border-gray-200/50 flex flex-col items-center justify-center h-72">
                <Loader2 className="w-10 h-10 animate-spin text-emerald-600 mb-3" />
                <p className="text-xs font-bold text-gray-500">AI Engine is compiling operational matrices...</p>
              </div>
            ) : result ? (
              renderResult()
            ) : (
              <div className="flex flex-col items-center justify-center h-72 text-gray-400 bg-gray-50/40 rounded-xl border border-dashed border-gray-200">
                <Brain className="w-12 h-12 mb-3 opacity-25 text-emerald-700" />
                <p className="text-xs font-bold text-gray-400">Configure parameters and run optimization routine</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Empty Welcoming State */
        <div className="text-center py-16 bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm">
          <Brain className="w-16 h-16 text-emerald-600/30 mx-auto mb-4" />
          <h3 className="text-lg font-black text-gray-900 tracking-tight mb-1">Select an AI Analytics Module</h3>
          <p className="text-xs font-semibold text-gray-400 max-w-sm mx-auto leading-relaxed">
            Choose any operational vector above to launch localized trend predictive charts and pricing matrix models.
          </p>
        </div>
      )}
    </div>
  );
}