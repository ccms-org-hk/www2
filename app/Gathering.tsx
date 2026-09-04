'use client';

import Grid from '@mui/material/Grid';
import Banner from './Banner';
import SiteShell from './SiteShell';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#d9edf7',
    // color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  col1: string,
  col2: string,
  col3: string,
  col4: string,
) {
  return { col1, col2, col3, col4};
}

const rows = [
  createData("每月第１週","星期日 10:30am – 12:00pm","基督教芥菜種子堂","聖餐主日"),
  createData("每月第２週","星期日 10:30am – 12:00pm","基督教芥菜種子堂",""),
  createData("每月第３週","星期日 3:00pm – 4:30pm","基督教芥菜種子堂",""),
  createData("每月第４週","星期日 10:30am – 12:00pm","基督教會恩澤堂",""),
  createData("每月第５週","星期日 10:30am – 12:00pm","基督教會恩澤堂",""),
];

const bannerContent = {
  id: 1,
  description: '聚會時間',
};

export default function Gathering() {
  return (
    <SiteShell>
        <main>
          <Banner post={bannerContent} />

          <Stack direction='row' sx={{px:'30px',}}>
            <Typography variant='h4'>
            崇拜
            </Typography>
          </Stack>

          <Grid container spacing={4} sx={{pl:'30px',mt:'30px',}}>
            <TableContainer component={Paper} sx={{mx:'30px',}}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>主日崇拜</StyledTableCell>
                    <StyledTableCell>時間</StyledTableCell>
                    <StyledTableCell>地點</StyledTableCell>
                    <StyledTableCell>備註</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.col1}>
                      {/* <StyledTableCell component="th" scope="row">
                        {row.date}
                      </StyledTableCell> */}
                      <StyledTableCell>{row.col1}</StyledTableCell>
                      <StyledTableCell>{row.col2}</StyledTableCell>
                      <StyledTableCell>{row.col3}</StyledTableCell>
                      <StyledTableCell>{row.col4}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Stack direction='row' sx={{px:'30px', mt:'60px'}}>
            <Typography variant='h4'>
            團契小組
            </Typography>
          </Stack>

          <Grid container spacing={4} sx={{pl:'30px',mt:'30px'}}>
            <TableContainer component={Paper} sx={{mx:'30px', mb:'60px'}}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>對象</StyledTableCell>
                    <StyledTableCell>團契／小組名稱</StyledTableCell>
                    <StyledTableCell>聚會時間</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow key="adult-group">
                    <StyledTableCell>成人至退休</StyledTableCell>
                    <StyledTableCell>成人組</StyledTableCell>
                    <StyledTableCell>逢第2及第4週之星期六</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key="family-group">
                    <StyledTableCell>年輕夫婦</StyledTableCell>
                    <StyledTableCell>有孩家庭</StyledTableCell>
                    <StyledTableCell>每3個月2次聚會</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key="sunshine-mustard-family">
                    <StyledTableCell>職青</StyledTableCell>
                    <StyledTableCell>陽光芥菜家族</StyledTableCell>
                    <StyledTableCell>逢星期六下午（單週）<br/>逢星期六晚上（雙週）</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key="mountain-children">
                    <StyledTableCell>初職</StyledTableCell>
                    <StyledTableCell>山頂兒女</StyledTableCell>
                    <StyledTableCell>每月1次聚會</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key="galaxy-together">
                    <StyledTableCell>大專及初職</StyledTableCell>
                    <StyledTableCell>星河同行</StyledTableCell>
                    <StyledTableCell>逢星期日晚上</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow key="youth-fellowship">
                    <StyledTableCell>初中</StyledTableCell>
                    <StyledTableCell>少年團契</StyledTableCell>
                    <StyledTableCell>逢星期日中午</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

        </main>
      </SiteShell>
  );
}
