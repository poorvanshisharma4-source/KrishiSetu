// 'use client';

// import { useState } from 'react';
// import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface FormData {
//   crop: string;
//   grade: string;
//   quantity: string;
//   unit: string;
//   targetPrice: string;
//   deliveryDate: string;
//   deliveryLocation: string;
//   additionalTerms: string;
// }

// interface FormErrors {
//   [key: string]: string;
// }

// export default function CropRequirementForm() {
//   const [formData, setFormData] = useState<FormData>({
//     crop: '',
//     grade: '',
//     quantity: '',
//     unit: 'Quintals',
//     targetPrice: '',
//     deliveryDate: '',
//     deliveryLocation: '',
//     additionalTerms: '',
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitted, setSubmitted] = useState(false);

//   const cropOptions = [
//     'Organic Tomatoes',
//     'Basmati Rice',
//     'Red Onions',
//     'Wheat',
//     'Green Chillies',
//     'Potatoes',
//   ];

//   const gradeOptions = [
//     'Grade A (Premium)',
//     'Grade B (Standard)',
//     'Organic Certified',
//   ];

//   const unitOptions = ['Tons', 'Quintals', 'Kilograms'];

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.crop.trim()) newErrors.crop = 'Crop selection is required';
//     if (!formData.grade.trim()) newErrors.grade = 'Grade selection is required';
//     if (!formData.quantity.trim() || parseFloat(formData.quantity) <= 0) {
//       newErrors.quantity = 'Valid quantity is required';
//     }
//     if (!formData.targetPrice.trim() || parseFloat(formData.targetPrice) <= 0) {
//       newErrors.targetPrice = 'Valid target price is required';
//     }
//     if (!formData.deliveryDate) newErrors.deliveryDate = 'Delivery date is required';
//     if (!formData.deliveryLocation.trim()) {
//       newErrors.deliveryLocation = 'Delivery location is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Clear error for this field when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: '',
//       }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setSubmitted(true);
//       console.log('Form submitted:', formData);
//       // Reset form after submission
//       setTimeout(() => {
//         setFormData({
//           crop: '',
//           grade: '',
//           quantity: '',
//           unit: 'Quintals',
//           targetPrice: '',
//           deliveryDate: '',
//           deliveryLocation: '',
//           additionalTerms: '',
//         });
//         setSubmitted(false);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background py-8 px-4 md:py-12 md:px-6">
//       <div className="max-w-2xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <button
//             type="button"
//             onClick={() => window.history.back()}
//             className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-medium"
//           >
//             <ArrowLeft size={20} />
//             Back to Dashboard
//           </button>

//           <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
//             Post New Crop Requirement
//           </h1>
//           <p className="text-base md:text-lg text-muted-foreground">
//             Specify your crop requirements to receive competitive direct supply
//             proposals from verified farmers.
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-card rounded-lg shadow-md border border-border p-6 md:p-8">
//           {submitted && (
//             <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
//               <p className="text-primary font-medium">
//                 ✓ Your procurement requirement has been published successfully!
//               </p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Crop Selection */}
//             <div>
//               <label htmlFor="crop" className="block text-sm font-semibold text-foreground mb-2">
//                 Crop Selection <span className="text-destructive">*</span>
//               </label>
//               <select
//                 id="crop"
//                 name="crop"
//                 value={formData.crop}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//               >
//                 <option value="">Select a crop type...</option>
//                 {cropOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//               {errors.crop && (
//                 <p className="text-destructive text-sm mt-1">{errors.crop}</p>
//               )}
//             </div>

//             {/* Quality/Grade and Quantity - Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Quality/Grade Required */}
//               <div>
//                 <label htmlFor="grade" className="block text-sm font-semibold text-foreground mb-2">
//                   Quality/Grade Required <span className="text-destructive">*</span>
//                 </label>
//                 <select
//                   id="grade"
//                   name="grade"
//                   value={formData.grade}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                 >
//                   <option value="">Select grade...</option>
//                   {gradeOptions.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.grade && (
//                   <p className="text-destructive text-sm mt-1">{errors.grade}</p>
//                 )}
//               </div>

//               {/* Quantity Needed */}
//               <div>
//                 <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">
//                   Quantity Needed <span className="text-destructive">*</span>
//                 </label>
//                 <div className="flex items-center gap-2">
//                   <input
//                     id="quantity"
//                     type="number"
//                     name="quantity"
//                     value={formData.quantity}
//                     onChange={handleChange}
//                     placeholder="Enter quantity"
//                     step="0.01"
//                     min="0"
//                     className="w-[68%] px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   />

//                   <select
//                     name="unit"
//                     aria-label="Select Unit"
//                     value={formData.unit}
//                     onChange={handleChange}
//                     className="w-[32%] px-3 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   >
//                     {unitOptions.map((option) => (
//                       <option key={option} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 {errors.quantity && (
//                   <p className="text-destructive text-sm mt-1">{errors.quantity}</p>
//                 )}
//               </div>
//             </div>

//             {/* Target Price */}
//             <div>
//               <label htmlFor="targetPrice" className="block text-sm font-semibold text-foreground mb-2">
//                 Target Price (per Quintal/kg) <span className="text-destructive">*</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-3.5 text-foreground font-semibold">
//                   ₹
//                 </span>
//                 <input
//                   id="targetPrice"
//                   type="number"
//                   name="targetPrice"
//                   value={formData.targetPrice}
//                   onChange={handleChange}
//                   placeholder="0.00"
//                   step="0.01"
//                   min="0"
//                   className="w-full pl-8 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                 />
//               </div>
//               {errors.targetPrice && (
//                 <p className="text-destructive text-sm mt-1">
//                   {errors.targetPrice}
//                 </p>
//               )}
//             </div>

//             {/* Delivery Deadline */}
//             <div>
//               <label htmlFor="deliveryDate" className="block text-sm font-semibold text-foreground mb-2">
//                 Delivery Deadline <span className="text-destructive">*</span>
//               </label>
//               <input
//                 id="deliveryDate"
//                 type="date"
//                 name="deliveryDate"
//                 value={formData.deliveryDate}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//               />
//               {errors.deliveryDate && (
//                 <p className="text-destructive text-sm mt-1">
//                   {errors.deliveryDate}
//                 </p>
//               )}
//             </div>

//             {/* Delivery Location */}
//             <div>
//               <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-foreground mb-2">
//                 Delivery Location <span className="text-destructive">*</span>
//               </label>
//               <div className="relative">
//                 <MapPin
//                   size={20}
//                   className="absolute left-4 top-3.5 text-secondary pointer-events-none"
//                 />
//                 <input
//                   id="deliveryLocation"
//                   type="text"
//                   name="deliveryLocation"
//                   value={formData.deliveryLocation}
//                   onChange={handleChange}
//                   placeholder="e.g., Delhi Mandi, Bangalore Warehouse"
//                   className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                 />
//               </div>
//               {errors.deliveryLocation && (
//                 <p className="text-destructive text-sm mt-1">
//                   {errors.deliveryLocation}
//                 </p>
//               )}
//             </div>

//             {/* Additional Contract Terms */}
//             <div>
//               <label htmlFor="additionalTerms" className="block text-sm font-semibold text-foreground mb-2">
//                 Additional Contract Terms <span className="text-muted-foreground">(Optional)</span>
//               </label>
//               <textarea
//                 id="additionalTerms"
//                 name="additionalTerms"
//                 value={formData.additionalTerms}
//                 onChange={handleChange}
//                 placeholder="e.g., Moisture levels max 12%, Premium packaging required, Specific seed varieties..."
//                 rows={4}
//                 className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <Button
//                 type="submit"
//                 className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
//               >
//                 Publish Procurement Demand →
//               </Button>
//             </div>
//           </form>

//           {/* Trust Badges */}
//           <div className="mt-8 pt-8 border-t border-border space-y-4">
//             <div className="flex items-center gap-3">
//               <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
//               <span className="text-sm text-foreground">
//                 100% Verified Farmer Network Match
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
//               <span className="text-sm text-foreground">
//                 Government Mandi Pricing Reference Compliant
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { ArrowLeft, MapPin, CheckCircle2, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface FormData {
//   crop: string;
//   grade: string;
//   quantity: string;
//   unit: string;
//   targetPrice: string;
//   deliveryDate: string;
//   deliveryLocation: string;
//   additionalTerms: string;
// }

// interface FormErrors {
//   [key: string]: string;
// }

// export default function CropRequirementForm() {
//   const [formData, setFormData] = useState<FormData>({
//     crop: '',
//     grade: '',
//     quantity: '',
//     unit: 'Quintals',
//     targetPrice: '',
//     deliveryDate: '',
//     deliveryLocation: '',
//     additionalTerms: '',
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitted, setSubmitted] = useState(false);

//   const cropOptions = [
//     'Organic Tomatoes',
//     'Basmati Rice',
//     'Red Onions',
//     'Wheat',
//     'Green Chillies',
//     'Potatoes',
//   ];

//   const gradeOptions = [
//     'Grade A (Premium)',
//     'Grade B (Standard)',
//     'Organic Certified',
//   ];

//   const unitOptions = ['Tons', 'Quintals', 'Kilograms'];

//   // AI Simulation condition check
//   const isTomatoCase = formData.crop.toLowerCase().trim().includes('tomato');

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!formData.crop.trim()) newErrors.crop = 'Crop selection is required';
//     if (!formData.grade.trim()) newErrors.grade = 'Grade selection is required';
//     if (!formData.quantity.trim() || parseFloat(formData.quantity) <= 0) {
//       newErrors.quantity = 'Valid quantity is required';
//     }
//     if (!formData.targetPrice.trim() || parseFloat(formData.targetPrice) <= 0) {
//       newErrors.targetPrice = 'Valid target price is required';
//     }
//     if (!formData.deliveryDate) newErrors.deliveryDate = 'Delivery date is required';
//     if (!formData.deliveryLocation.trim()) {
//       newErrors.deliveryLocation = 'Delivery location is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: '',
//       }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setSubmitted(true);
//       console.log('Form submitted:', formData);
//       setTimeout(() => {
//         setFormData({
//           crop: '',
//           grade: '',
//           quantity: '',
//           unit: 'Quintals',
//           targetPrice: '',
//           deliveryDate: '',
//           deliveryLocation: '',
//           additionalTerms: '',
//         });
//         setSubmitted(false);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background py-8 px-4 md:py-12 md:px-6">
//       {/* Container max-w-5xl kiya taaki AI panel adjust ho sake */}
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <button
//             type="button"
//             onClick={() => window.history.back()}
//             className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-medium"
//           >
//             <ArrowLeft size={20} />
//             Back to Dashboard
//           </button>

//           <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
//             Post New Crop Requirement
//           </h1>
//           <p className="text-base md:text-lg text-muted-foreground">
//             Specify your crop requirements to receive competitive direct supply
//             proposals from verified farmers.
//           </p>
//         </div>

//         {/* Responsive Grid Setup */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
//           {/* Left Side: Original Form */}
//           <div className="lg:col-span-2 bg-card rounded-lg shadow-md border border-border p-6 md:p-8">
//             {submitted && (
//               <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
//                 <p className="text-primary font-medium">
//                   ✓ Your procurement requirement has been published successfully!
//                 </p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Crop Selection */}
//               <div>
//                 <label htmlFor="crop" className="block text-sm font-semibold text-foreground mb-2">
//                   Crop Name <span className="text-destructive">*</span>
//                 </label>
//                 <input
//                   id="crop"
//                   type="text"
//                   name="crop"
//                   value={formData.crop}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   placeholder="Enter crop name..."
//                 />
//                 {errors.crop && (
//                   <p className="text-destructive text-sm mt-1">{errors.crop}</p>
//                 )}
//               </div>

//               {/* Quality/Grade and Quantity - Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="grade" className="block text-sm font-semibold text-foreground mb-2">
//                     Quality/Grade Required <span className="text-destructive">*</span>
//                   </label>
//                   <select
//                     id="grade"
//                     name="grade"
//                     value={formData.grade}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   >
//                     <option value="">Select grade...</option>
//                     {gradeOptions.map((option) => (
//                       <option key={option} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.grade && (
//                     <p className="text-destructive text-sm mt-1">{errors.grade}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">
//                     Quantity Needed <span className="text-destructive">*</span>
//                   </label>
//                   <div className="flex items-center gap-2">
//                     <input
//                       id="quantity"
//                       type="number"
//                       name="quantity"
//                       value={formData.quantity}
//                       onChange={handleChange}
//                       placeholder="Enter quantity"
//                       step="0.01"
//                       min="0"
//                       className="w-[68%] px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                     />

//                     <select
//                       name="unit"
//                       aria-label="Select Unit"
//                       value={formData.unit}
//                       onChange={handleChange}
//                       className="w-[32%] px-3 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                     >
//                       {unitOptions.map((option) => (
//                         <option key={option} value={option}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {errors.quantity && (
//                     <p className="text-destructive text-sm mt-1">{errors.quantity}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Target Price */}
//               <div>
//                 <label htmlFor="targetPrice" className="block text-sm font-semibold text-foreground mb-2">
//                   Target Price (per Quintal/kg) <span className="text-destructive">*</span>
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-3.5 text-foreground font-semibold">
//                     ₹
//                   </span>
//                   <input
//                     id="targetPrice"
//                     type="number"
//                     name="targetPrice"
//                     value={formData.targetPrice}
//                     onChange={handleChange}
//                     placeholder="0.00"
//                     step="0.01"
//                     min="0"
//                     className="w-full pl-8 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   />
//                 </div>
//                 {errors.targetPrice && (
//                   <p className="text-destructive text-sm mt-1">{errors.targetPrice}</p>
//                 )}
//               </div>

//               {/* Delivery Deadline */}
//               <div>
//                 <label htmlFor="deliveryDate" className="block text-sm font-semibold text-foreground mb-2">
//                   Delivery Deadline <span className="text-destructive">*</span>
//                 </label>
//                 <input
//                   id="deliveryDate"
//                   type="date"
//                   name="deliveryDate"
//                   value={formData.deliveryDate}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                 />
//                 {errors.deliveryDate && (
//                   <p className="text-destructive text-sm mt-1">{errors.deliveryDate}</p>
//                 )}
//               </div>

//               {/* Delivery Location */}
//               <div>
//                 <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-foreground mb-2">
//                   Delivery Location <span className="text-destructive">*</span>
//                 </label>
//                 <div className="relative">
//                   <MapPin
//                     size={20}
//                     className="absolute left-4 top-3.5 text-secondary pointer-events-none"
//                   />
//                   <input
//                     id="deliveryLocation"
//                     type="text"
//                     name="deliveryLocation"
//                     value={formData.deliveryLocation}
//                     onChange={handleChange}
//                     placeholder="e.g., Delhi Mandi, Bangalore Warehouse"
//                     className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   />
//                 </div>
//                 {errors.deliveryLocation && (
//                   <p className="text-destructive text-sm mt-1">{errors.deliveryLocation}</p>
//                 )}
//               </div>

//               {/* Additional Terms */}
//               <div>
//                 <label htmlFor="additionalTerms" className="block text-sm font-semibold text-foreground mb-2">
//                   Additional Contract Terms <span className="text-muted-foreground">(Optional)</span>
//                 </label>
//                 <textarea
//                   id="additionalTerms"
//                   name="additionalTerms"
//                   value={formData.additionalTerms}
//                   onChange={handleChange}
//                   placeholder="e.g., Moisture levels max 12%, Premium packaging required..."
//                   rows={4}
//                   className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
//                 />
//               </div>

//               <div className="pt-4">
//                 <Button
//                   type="submit"
//                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
//                 >
//                   Publish Procurement Demand →
//                 </Button>
//               </div>
//             </form>

//             {/* Trust Badges */}
//             <div className="mt-8 pt-8 border-t border-border space-y-4">
//               <div className="flex items-center gap-3">
//                 <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
//                 <span className="text-sm text-foreground">100% Verified Farmer Network Match</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
//                 <span className="text-sm text-foreground">Government Mandi Pricing Reference Compliant</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: 🤖 Live AI Procurement Assistant */}
//           <div className="bg-amber-50/60 dark:bg-amber-950/20 p-5 rounded-lg border border-amber-200/60 shadow-sm flex flex-col justify-between min-h-[420px] sticky top-6">
//             <div className="space-y-4">
//               <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
//                 <Sparkles className="w-4 h-4 fill-amber-500 text-amber-600 animate-pulse" />
//                 <span>KrishiSetu Predictor AI</span>
//               </div>

//               {isTomatoCase ? (
//                 <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
//                   {/* Demand Score */}
//                   <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-100 dark:border-amber-900/40 shadow-sm space-y-1">
//                     <span className="text-[10px] uppercase font-bold text-gray-400 block">Demand Score</span>
//                     <div className="text-sm font-extrabold text-green-700 dark:text-green-400 flex items-center gap-1">
//                       High Market Demand <TrendingUp className="w-3.5 h-3.5" />
//                     </div>
//                   </div>

//                   {/* Clusters Metric Rows */}
//                   <div className="grid grid-cols-2 gap-2">
//                     <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-100 dark:border-amber-900/40 text-center">
//                       <span className="text-[9px] text-gray-400 font-bold block uppercase">Available Farmers</span>
//                       <span className="text-base font-extrabold text-gray-900 dark:text-gray-100">26</span>
//                     </div>
//                     <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-100 dark:border-amber-900/40 text-center">
//                       <span className="text-[9px] text-gray-400 font-bold block uppercase">Est. Responses</span>
//                       <span className="text-base font-extrabold text-gray-900 dark:text-gray-100">12</span>
//                     </div>
//                   </div>

//                   {/* Dynamic Price Calculations */}
//                   <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-100 dark:border-amber-900/40 shadow-sm">
//                     <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Suggested Price</span>
//                     <div className="text-base font-extrabold text-amber-700 dark:text-amber-400">
//                       ₹24 / kg
//                     </div>
//                     <p className="text-[10px] text-gray-500 mt-1 leading-normal">
//                       Your current input of <strong className="text-gray-700 dark:text-gray-300">₹{formData.targetPrice || '0.00'}</strong> is below the current micro-cluster average. Adjusting to ₹24 will increase response velocity by 84%.
//                     </p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-xs text-gray-400 text-center py-20 flex flex-col items-center justify-center gap-2">
//                   <HelpCircle className="w-8 h-8 text-amber-200" />
//                   <p className="max-w-[190px] leading-relaxed">
//                     Select <strong className="text-gray-600 dark:text-gray-300">"Organic Tomatoes"</strong> from the dropdown menu to simulate live AI procurement response matching.
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="text-[10px] text-amber-700 dark:text-amber-400 font-semibold text-center border-t border-amber-200/40 pt-3 mt-4">
//               💡 Procurement Decisions Support Module Active
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { ArrowLeft, MapPin, CheckCircle2, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormData {
  crop: string;
  grade: string;
  quantity: string;
  unit: string;
  targetPrice: string;
  deliveryDate: string;
  deliveryLocation: string;
  additionalTerms: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function CropRequirementForm() {
  const [formData, setFormData] = useState<FormData>({
    crop: '',
    grade: '',
    quantity: '',
    unit: 'Quintals',
    targetPrice: '',
    deliveryDate: '',
    deliveryLocation: '',
    additionalTerms: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const gradeOptions = [
    'Grade A (Premium)',
    'Grade B (Standard)',
    'Organic Certified',
  ];

  const unitOptions = ['Tons', 'Quintals', 'Kilograms'];

  // AI Simulation condition check
  const isTomatoCase = formData.crop.toLowerCase().trim().includes('tomato');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.crop.trim()) newErrors.crop = 'Crop selection is required';
    if (!formData.grade.trim()) newErrors.grade = 'Grade selection is required';
    if (!formData.quantity.trim() || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = 'Valid quantity is required';
    }
    if (!formData.targetPrice.trim() || parseFloat(formData.targetPrice) <= 0) {
      newErrors.targetPrice = 'Valid target price is required';
    }
    if (!formData.deliveryDate) newErrors.deliveryDate = 'Delivery date is required';
    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
      setTimeout(() => {
        setFormData({
          crop: '',
          grade: '',
          quantity: '',
          unit: 'Quintals',
          targetPrice: '',
          deliveryDate: '',
          deliveryLocation: '',
          additionalTerms: '',
        });
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full text-gray-900 pb-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Post New Crop Requirement
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Specify your crop requirements to receive competitive direct supply
            proposals from verified farmers.
          </p>
        </div>

        {/* Responsive Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side: Original Form */}
          <div className="lg:col-span-2 bg-card rounded-lg shadow-md border border-border p-6 md:p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
                <p className="text-primary font-medium">
                  ✓ Your procurement requirement has been published successfully!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Crop Selection */}
              <div>
                <label htmlFor="crop" className="block text-sm font-semibold text-foreground mb-2">
                  Crop Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="crop"
                  type="text"
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter crop name..."
                />
                {errors.crop && (
                  <p className="text-destructive text-sm mt-1">{errors.crop}</p>
                )}
              </div>

              {/* Quality/Grade and Quantity - Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="grade" className="block text-sm font-semibold text-foreground mb-2">
                    Quality/Grade Required <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select grade...</option>
                    {gradeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.grade && (
                    <p className="text-destructive text-sm mt-1">{errors.grade}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-foreground mb-2">
                    Quantity Needed <span className="text-destructive">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="quantity"
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Enter quantity"
                      step="0.01"
                      min="0"
                      className="w-[68%] px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />

                    <select
                      name="unit"
                      aria-label="Select Unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-[32%] px-3 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      {unitOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.quantity && (
                    <p className="text-destructive text-sm mt-1">{errors.quantity}</p>
                  )}
                </div>
              </div>

              {/* Target Price */}
              <div>
                <label htmlFor="targetPrice" className="block text-sm font-semibold text-foreground mb-2">
                  Target Price (per Quintal/kg) <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-foreground font-semibold">
                    ₹
                  </span>
                  <input
                    id="targetPrice"
                    type="number"
                    name="targetPrice"
                    value={formData.targetPrice}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full pl-8 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                {errors.targetPrice && (
                  <p className="text-destructive text-sm mt-1">{errors.targetPrice}</p>
                )}
              </div>

              {/* Delivery Deadline */}
              <div>
                <label htmlFor="deliveryDate" className="block text-sm font-semibold text-foreground mb-2">
                  Delivery Deadline <span className="text-destructive">*</span>
                </label>
                <input
                  id="deliveryDate"
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {errors.deliveryDate && (
                  <p className="text-destructive text-sm mt-1">{errors.deliveryDate}</p>
                )}
              </div>

              {/* Delivery Location */}
              <div>
                <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-foreground mb-2">
                  Delivery Location <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <MapPin
                    size={20}
                    className="absolute left-4 top-3.5 text-secondary pointer-events-none"
                  />
                  <input
                    id="deliveryLocation"
                    type="text"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="e.g., Delhi Mandi, Bangalore Warehouse"
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                {errors.deliveryLocation && (
                  <p className="text-destructive text-sm mt-1">{errors.deliveryLocation}</p>
                )}
              </div>

              {/* Additional Terms */}
              <div>
                <label htmlFor="additionalTerms" className="block text-sm font-semibold text-foreground mb-2">
                  Additional Contract Terms <span className="text-muted-foreground">(Optional)</span>
                </label>
                <textarea
                  id="additionalTerms"
                  name="additionalTerms"
                  value={formData.additionalTerms}
                  onChange={handleChange}
                  placeholder="e.g., Moisture levels max 12%, Premium packaging required..."
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Publish Procurement Demand →
                </Button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">100% Verified Farmer Network Match</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">Government Mandi Pricing Reference Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Side: Live AI Procurement Assistant */}
          <div className="bg-amber-50/60 dark:bg-amber-950/20 p-5 rounded-lg border border-amber-200/60 shadow-sm flex flex-col justify-between min-h-[420px] sticky top-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 fill-amber-500 text-amber-600 animate-pulse" />
                <span>KrishiSetu Predictor AI</span>
              </div>

              {isTomatoCase ? (
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  {/* Demand Score */}
                  <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-100 dark:border-amber-900/40 shadow-sm space-y-1">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Demand Score</span>
                    <div className="text-sm font-extrabold text-green-700 dark:text-green-400 flex items-center gap-1">
                      High Market Demand <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Clusters Metric Rows */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-100 dark:border-amber-900/40 text-center">
                      <span className="text-[9px] text-gray-400 font-bold block uppercase">Available Farmers</span>
                      <span className="text-base font-extrabold text-gray-900 dark:text-gray-100">26</span>
                    </div>
                    <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-100 dark:border-amber-900/40 text-center">
                      <span className="text-[9px] text-gray-400 font-bold block uppercase">Est. Responses</span>
                      <span className="text-base font-extrabold text-gray-900 dark:text-gray-100">12</span>
                    </div>
                  </div>

                  {/* Dynamic Price Calculations */}
                  <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl border border-amber-100 dark:border-amber-900/40 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-0.5">Suggested Price</span>
                    <div className="text-base font-extrabold text-amber-700 dark:text-amber-400">
                      ₹24 / kg
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1 leading-normal">
                      Your current input of <strong className="text-gray-700 dark:text-gray-300">₹{formData.targetPrice || '0.00'}</strong> is below the current micro-cluster average. Adjusting to ₹24 will increase response velocity by 84%.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-gray-400 text-center py-20 flex flex-col items-center justify-center gap-2">
                  <HelpCircle className="w-8 h-8 text-amber-200" />
                  <p className="max-w-[190px] leading-relaxed">
                    Select <strong className="text-gray-600 dark:text-gray-300">"Organic Tomatoes"</strong> from the dropdown menu to simulate live AI procurement response matching.
                  </p>
                </div>
              )}
            </div>

            <div className="text-[10px] text-amber-700 dark:text-amber-400 font-semibold text-center border-t border-amber-200/40 pt-3 mt-4">
              💡 Procurement Decisions Support Module Active
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}