import Box from '@mui/material/Box';

const CenteredBox = ({children}) => {
  return (
    <Box sx={{display: "flex",justifyContent: "center", alignItems: "center"}}>

   

    <Box
      sx={{
        mt:10,
        mb:5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#df6d2d',
        fontFamily: 'Albert Sans',
        fontSize: '40px',
        color: '#ffffff',
        fontWeight: 400,
        width: 367,
        height: 56,
      }}
    >
     {children}
    </Box>
    </Box>
  );
};

export default CenteredBox;
