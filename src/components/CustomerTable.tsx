import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Chip } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Users } from 'lucide-react';
import { customerData } from '../data/mockData';

export const CustomerTable: React.FC = () => {
  const columns: GridColDef[] = [
    { 
      field: 'name', 
      headerName: 'Customer Name', 
      width: 250,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1 }}>
          <Avatar sx={{ 
            width: 40, 
            height: 40,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            fontSize: '0.875rem',
            fontWeight: 700
          }}>
            {params.value.split(' ').map((n: string) => n[0]).join('')}
          </Avatar>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 600, color: '#1f2937' }}>
              {params.value}
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7280' }}>
              {params.row.email}
            </Typography>
          </Box>
        </Box>
      )
    },
    { 
      field: 'revenue', 
      headerName: 'Revenue', 
      width: 140,
      renderCell: (params) => (
        <Chip
          label={`$${params.value.toLocaleString()}`}
          sx={{
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            color: '#059669',
            fontWeight: 700,
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}
        />
      )
    },
    { 
      field: 'orders', 
      headerName: 'Orders', 
      width: 120,
      renderCell: (params) => (
        <Typography variant="body1" sx={{ fontWeight: 600, color: '#374151' }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'lastOrder', 
      headerName: 'Last Order', 
      width: 140,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 500 }}>
          {new Date(params.value).toLocaleDateString()}
        </Typography>
      )
    }
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ 
            background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            width: 48,
            height: 48
          }}>
            <Users size={24} color="white" />
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ 
              fontWeight: 700,
              color: '#1f2937',
              letterSpacing: '-0.01em'
            }}>
              Top Customers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Highest value customers by revenue
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ height: 450, width: '100%' }}>
          <DataGrid
            rows={customerData}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[6]}
            disableSelectionOnClick
            sx={{
              border: 'none',
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'rgba(99, 102, 241, 0.05)',
                fontWeight: 700,
                fontSize: '0.875rem',
                color: '#374151',
                borderRadius: '12px 12px 0 0',
                border: 'none'
              },
              '& .MuiDataGrid-row': {
                borderBottom: '1px solid #f1f5f9',
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.02)',
                  transform: 'scale(1.01)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }
              },
              '& .MuiDataGrid-cell': {
                border: 'none',
                fontSize: '0.875rem'
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: '1px solid #f1f5f9',
                backgroundColor: 'rgba(248, 250, 252, 0.5)'
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};