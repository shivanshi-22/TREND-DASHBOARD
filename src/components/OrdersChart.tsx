import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Chip } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ShoppingCart, Users } from 'lucide-react';
import { monthlyData } from '../data/mockData';

export const OrdersChart: React.FC = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
              width: 48,
              height: 48
            }}>
              <ShoppingCart size={24} color="white" />
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ 
                fontWeight: 700,
                color: '#1f2937',
                letterSpacing: '-0.01em'
              }}>
                Orders & Customer Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Daily orders and customer acquisition trends
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip
              icon={<ShoppingCart size={14} />}
              label="8,245 Orders"
              size="small"
              sx={{
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                color: '#7c3aed',
                fontWeight: 600,
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}
            />
            <Chip
              icon={<Users size={14} />}
              label="2,156 Customers"
              size="small"
              sx={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: '#059669',
                fontWeight: 600,
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}
            />
          </Box>
        </Box>
        
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.6}/>
              </linearGradient>
              <linearGradient id="customersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.6}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" strokeWidth={1} />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '20px',
                fontSize: '14px',
                fontWeight: 600
              }}
            />
            <Bar 
              dataKey="orders" 
              fill="url(#ordersGradient)"
              name="Orders"
              radius={[6, 6, 0, 0]}
              maxBarSize={40}
            />
            <Bar 
              dataKey="customers" 
              fill="url(#customersGradient)"
              name="New Customers"
              radius={[6, 6, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};