import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Chip, Avatar } from '@mui/material';
import { TrendingUp, TrendingDown, Package } from 'lucide-react';
import { productData } from '../data/mockData';

export const ProductPerformance: React.FC = () => {
  const maxRevenue = Math.max(...productData.map(p => p.revenue));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ 
            background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
            width: 48,
            height: 48
          }}>
            <Package size={24} color="white" />
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ 
              fontWeight: 700,
              color: '#1f2937',
              letterSpacing: '-0.01em'
            }}>
              Product Performance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Top performing products by revenue
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {productData.map((product, index) => (
            <Box key={product.name} sx={{ 
              p: 3, 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
              borderRadius: 3,
              border: '1px solid rgba(226, 232, 240, 0.8)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateX(8px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                borderColor: product.growth > 0 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: product.growth > 0 
                  ? 'linear-gradient(180deg, #10b981 0%, #34d399 100%)'
                  : 'linear-gradient(180deg, #ef4444 0%, #f87171 100%)',
              }
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700,
                  color: '#1f2937',
                  fontSize: '1.1rem'
                }}>
                  {product.name}
                </Typography>
                <Chip
                  icon={product.growth > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  label={`${product.growth > 0 ? '+' : ''}${product.growth}%`}
                  size="small"
                  sx={{
                    backgroundColor: product.growth > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: product.growth > 0 ? '#059669' : '#dc2626',
                    fontWeight: 700,
                    border: `1px solid ${product.growth > 0 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                    '& .MuiChip-icon': {
                      color: product.growth > 0 ? '#059669' : '#dc2626'
                    }
                  }}
                />
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="body1" sx={{ 
                  color: '#374151',
                  fontWeight: 600
                }}>
                  ${product.revenue.toLocaleString()} • {product.orders} orders
                </Typography>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700,
                  color: '#6366f1'
                }}>
                  {Math.round((product.revenue / maxRevenue) * 100)}%
                </Typography>
              </Box>
              
              <LinearProgress 
                variant="determinate" 
                value={(product.revenue / maxRevenue) * 100}
                sx={{ 
                  height: 10, 
                  borderRadius: 5,
                  backgroundColor: '#e5e7eb',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 5,
                    background: product.growth > 0 
                      ? 'linear-gradient(90deg, #10b981 0%, #34d399 100%)'
                      : 'linear-gradient(90deg, #ef4444 0%, #f87171 100%)',
                    boxShadow: `0 2px 8px ${product.growth > 0 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};