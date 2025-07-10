import React, { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { RevenueChart } from './components/RevenueChart';
import { ProductPerformance } from './components/ProductPerformance';
import { RegionChart } from './components/RegionChart';
import { CustomerTable } from './components/CustomerTable';
import { OrdersChart } from './components/OrdersChart';
import { metricsData } from './data/mockData';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
      
      {/* Header */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Analytics Dashboard
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metricsData.map((metric, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <MetricCard {...metric} />
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart - spans 2 columns */}
            <div
              className={`lg:col-span-2 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <RevenueChart />
            </div>

            {/* Region Chart */}
            <div
              className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <RegionChart />
            </div>
          </div>

          {/* Second row of charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Orders Chart - spans 2 columns */}
            <div
              className={`lg:col-span-2 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '700ms' }}
            >
              <OrdersChart />
            </div>

            {/* Product Performance */}
            <div
              className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <ProductPerformance />
            </div>
          </div>

          {/* Customer Table */}
          <div
            className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '900ms' }}
          >
            <CustomerTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;