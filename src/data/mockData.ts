import { format, subDays, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
  customers: number;
}

export interface ProductData {
  name: string;
  revenue: number;
  orders: number;
  growth: number;
}

export interface RegionData {
  region: string;
  revenue: number;
  percentage: number;
}

export interface CustomerData {
  id: number;
  name: string;
  email: string;
  revenue: number;
  orders: number;
  lastOrder: string;
}

export interface MetricData {
  title: string;
  value: string;
  change: number;
  icon: string;
}

// Generate sales data for the last 30 days
export const salesData: SalesData[] = eachDayOfInterval({
  start: subDays(new Date(), 29),
  end: new Date()
}).map(date => ({
  date: format(date, 'MMM dd'),
  revenue: Math.floor(Math.random() * 50000) + 20000,
  orders: Math.floor(Math.random() * 200) + 50,
  customers: Math.floor(Math.random() * 150) + 30
}));

export const productData: ProductData[] = [
  { name: 'Premium Headphones', revenue: 245000, orders: 1250, growth: 12.5 },
  { name: 'Wireless Speakers', revenue: 180000, orders: 920, growth: 8.3 },
  { name: 'Smart Watch', revenue: 320000, orders: 1600, growth: 15.7 },
  { name: 'Laptop Stand', revenue: 95000, orders: 480, growth: -2.1 },
  { name: 'USB Hub', revenue: 65000, orders: 350, growth: 5.2 },
  { name: 'Webcam HD', revenue: 125000, orders: 625, growth: 18.9 }
];

export const regionData: RegionData[] = [
  { region: 'North America', revenue: 450000, percentage: 35 },
  { region: 'Europe', revenue: 320000, percentage: 25 },
  { region: 'Asia Pacific', revenue: 280000, percentage: 22 },
  { region: 'Latin America', revenue: 150000, percentage: 12 },
  { region: 'Middle East', revenue: 80000, percentage: 6 }
];

export const customerData: CustomerData[] = [
  { id: 1, name: 'John Anderson', email: 'john.anderson@email.com', revenue: 15420, orders: 12, lastOrder: '2024-01-15' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah.johnson@email.com', revenue: 22300, orders: 18, lastOrder: '2024-01-14' },
  { id: 3, name: 'Michael Chen', email: 'michael.chen@email.com', revenue: 8750, orders: 7, lastOrder: '2024-01-13' },
  { id: 4, name: 'Emma Wilson', email: 'emma.wilson@email.com', revenue: 31200, orders: 25, lastOrder: '2024-01-12' },
  { id: 5, name: 'David Brown', email: 'david.brown@email.com', revenue: 19800, orders: 16, lastOrder: '2024-01-11' },
  { id: 6, name: 'Lisa Davis', email: 'lisa.davis@email.com', revenue: 12600, orders: 9, lastOrder: '2024-01-10' },
  { id: 7, name: 'James Miller', email: 'james.miller@email.com', revenue: 27400, orders: 21, lastOrder: '2024-01-09' },
  { id: 8, name: 'Anna Garcia', email: 'anna.garcia@email.com', revenue: 16800, orders: 14, lastOrder: '2024-01-08' }
];

export const metricsData: MetricData[] = [
  { title: 'Total Revenue', value: '$1.28M', change: 12.5, icon: 'TrendingUp' },
  { title: 'Total Orders', value: '8,245', change: 8.7, icon: 'ShoppingCart' },
  { title: 'Active Customers', value: '2,156', change: 15.2, icon: 'Users' },
  { title: 'Avg Order Value', value: '$155', change: -2.4, icon: 'DollarSign' }
];

export const monthlyData = salesData.map(item => ({
  ...item,
  profit: Math.floor(item.revenue * 0.3),
  expenses: Math.floor(item.revenue * 0.7)
}));