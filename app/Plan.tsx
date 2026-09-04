'use client';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Banner from './Banner';
import Event from './Event';
import SiteShell from './SiteShell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
// import WorkIcon from '@mui/icons-material/Work';
import { LEGENDS } from './config';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#a49f8e',
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 'bold',
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    borderRight: '1px solid rgba(224, 224, 224, 1)',
    paddingLeft: '6px',
    paddingRight: '6px',
  },
}));

const bannerContent = {
  id: 1,
  title: '2026-28 年題',
  description: '默想聖言・凝聚合一・躍動使命',
};

export default function Plan() {
  // Year 2026: A=全體 G=小組 I=兒童/少年 L=堂委/領袖 C=個人 F=社區/親子 S=其他
  return (
    <SiteShell>
        <main>
          <Banner post={bannerContent} />

          <Stack direction='row' sx={{px:'30px',}}>
            <Typography variant='h4'>
              2026-27年 行事曆
            </Typography>
          </Stack>

          <Stack direction='row' sx={{ px: '30px', justifyContent: 'flex-end' }}>
            <Stack direction='row' spacing={2} sx={{ width: '650px', overflowX: 'auto' }}>
              {LEGENDS.map((legend) => (
                <ListItem key={legend.type} disablePadding sx={{ minWidth: 0 }}>
                  <ListItemIcon sx={{ minWidth: '22px' }}>
                    {legend.type === 'A' && <GroupsIcon fontSize='small' htmlColor={legend.color} />}
                    {legend.type === 'G' && <PeopleIcon fontSize='small' htmlColor={legend.color} />}
                    {legend.type === 'I' && <LocalFloristIcon fontSize='small' htmlColor={legend.color} />}
                    {legend.type === 'C' && <FreeBreakfastIcon fontSize='small' htmlColor={legend.color} />}
                    {legend.type === 'F' && <FavoriteIcon fontSize='small' htmlColor={legend.color} />}
                    {legend.type === 'L' && <HomeIcon fontSize='small' htmlColor={legend.color} />}
                    {legend.type === 'S' && <PersonIcon fontSize='small' htmlColor={legend.color} />}
                  </ListItemIcon>
                  <ListItemText
                    primary={legend.name}
                    sx={{
                      '& .MuiListItemText-primary': {
                        whiteSpace: 'nowrap',
                        fontSize: '1rem',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </Stack>
          </Stack>

          <Stack direction='row' sx={{ px: '30px', justifyContent: 'flex-end' }}>
            <Typography sx={{ fontSize: 'small' }}>
              * 適合個人參與
            </Typography>
          </Stack>

            <Stack direction='row' sx={{px:'30px',}}>
              <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
                <Table size="small" aria-label="customized table" sx={{ minWidth: 650 }} >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell component="th" scope="col" rowSpan={2}>&nbsp;</StyledTableCell>
                      <StyledTableCell component="th" scope="col" align='center'>聽神的道</StyledTableCell>
                      <StyledTableCell component="th" scope="col" align='center'>領受神的道</StyledTableCell>
                      <StyledTableCell component="th" scope="colgroup" align='center' colSpan={3}>傳講神的道</StyledTableCell>
                      <StyledTableCell component="th" scope="col" align='center' rowSpan={2}>兒童/少年</StyledTableCell>
                      <StyledTableCell component="th" scope="col" align='center' rowSpan={2}>培訓/其他</StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell component="th" scope="col" align='center'>崇拜聚會</StyledTableCell>
                      <StyledTableCell component="th" scope="col" align='center'>小組聚會</StyledTableCell>
                      <StyledTableCell component="th" scope="col" align='center'>會友家庭</StyledTableCell>
                      <StyledTableCell component="th" scope="col" align='center'>社區家庭/親子</StyledTableCell>
                      <StyledTableCell component="th" scope="col" align='center'>社區探訪/活動</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">26年<br/>3月</StyledTableCell>
                        <StyledTableCell><Event id={1} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={2} /></StyledTableCell>
                        <StyledTableCell><Event id={3} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={4} /><Event id={5} /><Event id={6} /></StyledTableCell>
                        <StyledTableCell><Event id={7} /><Event id={8} /><Event id={9} /></StyledTableCell>
                        {/* <StyledTableCell rowSpan={15} sx={{maxWidth:'120px',}}><Event id={41} /></StyledTableCell> */}
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">4月</StyledTableCell>
                        <StyledTableCell><Event id={10} /><Event id={11} /></StyledTableCell>
                        <StyledTableCell sx={{maxWidth:'110px',}}><Event id={12} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={13} /></StyledTableCell>
                        <StyledTableCell sx={{maxWidth:'110px',}}><Event id={14} /></StyledTableCell>
                        <StyledTableCell><Event id={15} /></StyledTableCell>
                        <StyledTableCell><Event id={16} /><Event id={17} /></StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">5月</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={19} /></StyledTableCell>
                        <StyledTableCell><Event id={20} /></StyledTableCell>
                        <StyledTableCell><Event id={21} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">6月</StyledTableCell>
                        <StyledTableCell><Event id={18} /></StyledTableCell>
                        <StyledTableCell><Event id={22} /><Event id={23} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={24} /></StyledTableCell>
                        <StyledTableCell><Event id={25} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={26} /></StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">7月</StyledTableCell>
                        <StyledTableCell><Event id={27} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={28} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={29} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">8月</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={30} /></StyledTableCell>
                        <StyledTableCell><Event id={31} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={32} /></StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">9月</StyledTableCell>
                        <StyledTableCell><Event id={33} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={34} /></StyledTableCell>
                        <StyledTableCell><Event id={35} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">10月</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={36} /></StyledTableCell>
                        <StyledTableCell><Event id={37} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={38} /></StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">11月</StyledTableCell>
                        <StyledTableCell><Event id={39} /></StyledTableCell>
                        <StyledTableCell><Event id={40} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={41} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">12月</StyledTableCell>
                        <StyledTableCell><Event id={42} /><Event id={43} /><Event id={44} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={45} /></StyledTableCell>
                        <StyledTableCell><Event id={46} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>

                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">27年<br/>1月</StyledTableCell>
                        <StyledTableCell><Event id={47} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={48} /></StyledTableCell>
                        <StyledTableCell><Event id={49} /></StyledTableCell>
                        <StyledTableCell><Event id={50} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={51} /></StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">2月</StyledTableCell>
                        <StyledTableCell><Event id={52} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={53} /></StyledTableCell>
                        <StyledTableCell><Event id={54} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                      </StyledTableRow>  
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">3月</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={55} /></StyledTableCell>
                        <StyledTableCell><Event id={56} /></StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell><Event id={57} /></StyledTableCell>
                      </StyledTableRow>                         
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>

        </main>
      </SiteShell>
  );
}
