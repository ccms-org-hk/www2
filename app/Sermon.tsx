'use client';

import Grid from '@mui/material/Grid';
import Banner from './Banner';
import SiteShell from './SiteShell';

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
  date: string,
  topic: string,
  speaker: string,
  bible: string,
) {
  return { date, topic, speaker, bible};
}

const rows = [
  createData("2026-08-30","事奉者的孤獨與榮耀","錢國偉 牧師","林後 2:14-16, 3:1-18"),
  createData("2026-08-23","愛弟兄","賀文亮 傳道","林後 1:1-24, 2:1-11"),
  createData("2026-08-16","棄驕傲，學謙卑","錢國偉 牧師","箴 15:31-33, 16:18-19, 18:11-12"),
  createData("2026-08-09","活出敬拜的生命","賴康儀 姊妹","羅 12:1-2"),
  createData("2026-08-02","人生選擇","賀文亮 傳道","箴 14:29-30, 16:32-33, 19:11"),
  createData("2026-07-19","同歸於基督，以他為首","關浩然 牧師","弗 1:8-10, 2:13-22"),
  createData("2026-07-12","邁向新里程","麥漢勳 牧師","書 5:1-15"),  
  createData("2026-07-05","要認識主耶穌更真更深，聽從祂的話來為人","李潤洪 牧師","可 9:1-13"),
  createData("2026-06-28","家庭蒙福之路–孕育才德的婦人","錢國偉 牧師","箴 31:10-31"),
  createData("2026-06-21","你們就是我們的榮耀和喜樂","樊樂軒 宣教士","帖前 5:8-11"),
  createData("2026-06-14","活水江河","孫國鈞 牧師","約 7:37-44"),
  createData("2026-06-07","祢的慈愛","趙竹子 師母","詩 63:3-8"),
  createData("2026-05-31","放下、得着","賀文亮 傳道","箴 11:24-28, 19:17, 23:4-5"),
  createData("2026-05-24","困境中 — 神的突破","黃曜恆 先生","民 11:24-30"),
  createData("2026-05-17","黑暗中的微光","歐偉民 博士","詩 88"),
  createData("2026-05-10","母親的決擇 - 尊主為大","趙敏華 女士","路 1:46-48"),
  createData("2026-05-03","信靠主耶穌，活出活好祂所應許豐盛的生命","李潤洪 牧師","約 10:1-10"),
];

const bannerContent = {
  id: 1,
  description: '崇拜講道',
};

export default function Sermon() {
  return (
    <SiteShell>
        <main>
          <Banner post={bannerContent} />

          <Grid container spacing={4} sx={{pl:'30px',mt:'30px',}}>
            <TableContainer component={Paper} sx={{mx:'30px',}}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>日期</StyledTableCell>
                    <StyledTableCell>講題</StyledTableCell>
                    <StyledTableCell>講員</StyledTableCell>
                    <StyledTableCell>經文</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.date}>
                      <StyledTableCell component="th" scope="row">
                        {row.date}
                      </StyledTableCell>
                      <StyledTableCell>{row.topic}</StyledTableCell>
                      <StyledTableCell>{row.speaker}</StyledTableCell>
                      <StyledTableCell>{row.bible}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </main>
      </SiteShell>
  );
}
