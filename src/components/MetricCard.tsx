import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Avatar } from '@mui/material';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Sparkles } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: string;
}

const iconMap = {
  TrendingUp: TrendingUp,
  DollarSign: DollarSign,
  ShoppingCart: ShoppingCart,
  Users: Users
};

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || TrendingUp;
  const isPositive = change > 0;

  return (
    <Card 
      sx={{ 
        height: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(90deg, ${isPositive ? '#10b981' : '#ef4444'}, ${isPositive ? '#34d399' : '#f87171'})`,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: -50,
          right: -50,
          width: 100,
          height: 100,
          background: `radial-gradient(circle, ${isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'} 0%, transparent 70%)`,
          borderRadius: '50%',
        }
      }}
    >
      <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 600, 
            color: '#6b7280',
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {title}
          </Typography>
          <Avatar sx={{ 
            width: 48,
            height: 48,
            background: `linear-gradient(135deg, ${isPositive ? '#10b981' : '#6366f1'}, ${isPositive ? '#34d399' : '#8b5cf6'})`,
            boxShadow: `0 8px 16px ${isPositive ? 'rgba(16, 185, 129, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
          }}>
            <IconComponent size={24} color="white" />
          </Avatar>
        </Box>
        
        <Typography variant="h3" sx={{ 
          fontWeight: 800, 
          mb: 2, 
          fontSize: '2.5rem',
          color: '#1f2937',
          lineHeight: 1,
          letterSpacing: '-0.02em'
        }}>
          {value}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip
            icon={isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            label={`${isPositive ? '+' : ''}${change}%`}
            size="small"
            sx={{
              backgroundColor: isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              color: isPositive ? '#059669' : '#dc2626',
              fontWeight: 700,
              border: `1px solid ${isPositive ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
              '& .MuiChip-icon': {
                color: isPositive ? '#059669' : '#dc2626'
              }
            }}
          />
          <Typography variant="body2" sx={{ 
            color: '#9ca3af',
            fontWeight: 500,
            fontSize: '0.75rem'
          }}>
            vs last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};