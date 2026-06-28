export type Crop = {
  id: string
  name: string
  category: string
  quantity: string
  pricePerUnit: string
  status: 'Available' | 'Reserved' | 'Sold'
  harvestDate: string
  location: string
  image: string
}

export type Contract = {
  id: string
  crop: string
  party: string
  quantity: string
  value: string
  status: 'Active' | 'Pending' | 'Completed' | 'Cancelled'
  startDate: string
  endDate: string
}

export type Requirement = {
  id: string
  title: string
  category: string
  quantity: string
  budget: string
  location: string
  postedBy: string
  deadline: string
  status: 'Open' | 'Matched' | 'Closed'
}

export type FarmerProfile = {
  id: string
  name: string
  location: string
  crops: string[]
  rating: number
  experience: string
  verified: boolean
  image: string
}

export type Order = {
  id: string
  product: string
  farmer: string
  quantity: string
  amount: string
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
  date: string
}

export const crops: Crop[] = [
  {
    id: 'CR-1001',
    name: 'Organic Wheat',
    category: 'Grains',
    quantity: '12 tonnes',
    pricePerUnit: '₹2,400 / quintal',
    status: 'Available',
    harvestDate: '2026-03-15',
    location: 'Nashik, Maharashtra',
    image: '/crop-wheat.png',
  },
  {
    id: 'CR-1002',
    name: 'Alphonso Mangoes',
    category: 'Fruits',
    quantity: '3 tonnes',
    pricePerUnit: '₹8,500 / quintal',
    status: 'Reserved',
    harvestDate: '2026-04-20',
    location: 'Ratnagiri, Maharashtra',
    image: '/crop-mango.png',
  },
  {
    id: 'CR-1003',
    name: 'Marigold Flowers',
    category: 'Flowers',
    quantity: '800 kg',
    pricePerUnit: '₹90 / kg',
    status: 'Available',
    harvestDate: '2026-02-28',
    location: 'Pune, Maharashtra',
    image: '/crop-marigold.png',
  },
  {
    id: 'CR-1004',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    quantity: '5 tonnes',
    pricePerUnit: '₹1,800 / quintal',
    status: 'Sold',
    harvestDate: '2026-01-30',
    location: 'Nashik, Maharashtra',
    image: '/crop-tomato.png',
  },
]

export const contracts: Contract[] = [
  {
    id: 'CT-2001',
    crop: 'Organic Wheat',
    party: 'AgriFresh Foods Pvt Ltd',
    quantity: '10 tonnes',
    value: '₹2,40,000',
    status: 'Active',
    startDate: '2026-01-10',
    endDate: '2026-03-30',
  },
  {
    id: 'CT-2002',
    crop: 'Alphonso Mangoes',
    party: 'Green Basket Retail',
    quantity: '2 tonnes',
    value: '₹1,70,000',
    status: 'Pending',
    startDate: '2026-04-01',
    endDate: '2026-05-15',
  },
  {
    id: 'CT-2003',
    crop: 'Fresh Tomatoes',
    party: 'DailyMandi Exports',
    quantity: '5 tonnes',
    value: '₹90,000',
    status: 'Completed',
    startDate: '2025-12-01',
    endDate: '2026-01-25',
  },
]

export const requirements: Requirement[] = [
  {
    id: 'RQ-3001',
    title: 'Bulk Organic Wheat Supply',
    category: 'Grains',
    quantity: '50 tonnes',
    budget: '₹12,00,000',
    location: 'Mumbai, Maharashtra',
    postedBy: 'AgriFresh Foods Pvt Ltd',
    deadline: '2026-03-31',
    status: 'Open',
  },
  {
    id: 'RQ-3002',
    title: 'Premium Mangoes for Export',
    category: 'Fruits',
    quantity: '15 tonnes',
    budget: '₹12,75,000',
    location: 'Delhi NCR',
    postedBy: 'Global Fruits Export',
    deadline: '2026-04-30',
    status: 'Matched',
  },
  {
    id: 'RQ-3003',
    title: 'Fresh Vegetables - Weekly',
    category: 'Vegetables',
    quantity: '2 tonnes / week',
    budget: '₹36,000 / week',
    location: 'Pune, Maharashtra',
    postedBy: 'City Kitchen Chain',
    deadline: '2026-02-28',
    status: 'Open',
  },
]

export const farmers: FarmerProfile[] = [
  {
    id: 'FM-4001',
    name: 'Ramesh Patil',
    location: 'Nashik, Maharashtra',
    crops: ['Wheat', 'Onion', 'Grapes'],
    rating: 4.8,
    experience: '15 years',
    verified: true,
    image: '/farmer-1.png',
  },
  {
    id: 'FM-4002',
    name: 'Sunita Devi',
    location: 'Ratnagiri, Maharashtra',
    crops: ['Mango', 'Cashew', 'Coconut'],
    rating: 4.9,
    experience: '12 years',
    verified: true,
    image: '/farmer-2.png',
  },
  {
    id: 'FM-4003',
    name: 'Arjun Singh',
    location: 'Ludhiana, Punjab',
    crops: ['Wheat', 'Rice', 'Maize'],
    rating: 4.6,
    experience: '20 years',
    verified: true,
    image: '/farmer-3.png',
  },
  {
    id: 'FM-4004',
    name: 'Lakshmi Reddy',
    location: 'Guntur, Andhra Pradesh',
    crops: ['Chilli', 'Cotton', 'Turmeric'],
    rating: 4.7,
    experience: '10 years',
    verified: false,
    image: '/farmer-4.png',
  },
]

export const orders: Order[] = [
  {
    id: 'OR-5001',
    product: 'Organic Wheat',
    farmer: 'Ramesh Patil',
    quantity: '10 tonnes',
    amount: '₹2,40,000',
    status: 'Shipped',
    date: '2026-02-12',
  },
  {
    id: 'OR-5002',
    product: 'Alphonso Mangoes',
    farmer: 'Sunita Devi',
    quantity: '2 tonnes',
    amount: '₹1,70,000',
    status: 'Processing',
    date: '2026-02-18',
  },
  {
    id: 'OR-5003',
    product: 'Fresh Tomatoes',
    farmer: 'Arjun Singh',
    quantity: '5 tonnes',
    amount: '₹90,000',
    status: 'Delivered',
    date: '2026-01-25',
  },
]

export const cropCategories = ['Grains', 'Fruits', 'Vegetables', 'Flowers', 'Pulses', 'Spices']
