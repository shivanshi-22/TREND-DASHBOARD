import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Globe } from 'lucide-react';
import { regionData } from '../data/mockData';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export const RegionChart: React.FC = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ 
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            width: 48,
            height: 48
          }}>
            <Globe size={24} color="white" />
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ 
              fontWeight: 700,
              color: '#1f2937',
              letterSpacing: '-0.01em'
            }}>
              Revenue by Region
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Geographic distribution of sales
            </Typography>
          </Box>
        </Box>
        
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <defs>
              {COLORS.map((color, index) => (
                <linearGradient key={index} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={1}/>
                  <stop offset="100%" stopColor={color} stopOpacity={0.8}/>
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={regionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percentage }) => `${name} ${percentage}%`}
              outerRadius={90}
              innerRadius={30}
              fill="#8884d8"
              dataKey="revenue"
              stroke="none"
            >
              {regionData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={`url(#gradient-${index})`}
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => `$${value.toLocaleString()}`}
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        <Box sx={{ mt: 3 }}>
          {regionData.map((region, index) => (
            <Box key={region.region} sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              py: 2,
              px: 2,
              borderRadius: 2,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(99, 102, 241, 0.05)',
                transform: 'translateX(4px)'
              },
              borderBottom: index < regionData.length - 1 ? '1px solid #f1f5f9' : 'none'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  background: `linear-gradient(135deg, ${COLORS[index % COLORS.length]}, ${COLORS[index % COLORS.length]}dd)`,
                  borderRadius: '50%',
                  boxShadow: `0 2px 8px ${COLORS[index % COLORS.length]}40`
                }} />
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#374151' }}>
                  {region.region}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
                ${region.revenue.toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};