import React from 'react'
import { DRAWER_WIDTH } from '../../../constant/constant'
import { Box } from '@mui/material'

function AdminBox({children}) {
  return (
    <Box  component="main" sx={{width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
     ml: { sm: `${DRAWER_WIDTH}px` }, 
     flexGrow: 1, p: 3, mt: 8 }}>
    {children}
    </Box>
  )
}

export default AdminBox
