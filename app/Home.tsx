'use client';

import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
//
import Banner from './Banner';
import FeaturedPost from './FeaturedPost';
import Collaboration from './Collaboration';
import SiteShell from './SiteShell';
import Gathering from './Gathering';
import Sermon from './Sermon';
import Plan from './Plan';
import Download from './Download';
import Contact from './Contact';
//
import ccmsName from './assets/mustard-seed.jpg';
import ccmsMission from './assets/spirituality-religion-hands-folded-prayer-holy-bible-church-concept-faith.jpg';
import ccmsModel from './assets/four-unrecognizable-people-sitting-around-table-holding-each-other-s-hands-middle.jpg';
import logoChurch from './assets/logo-140-ccc.png';
import logoSbhk from './assets/logo-140-sbhk.png';
import logoHkcnp from './assets/logo-128-hkcnp.png';
import logoHkief from './assets/logo-128-hkief.png';
import logoHtc from './assets/logo-128-htc.png';
// import logoWse from './assets/logo-128-wse.png';
import logoCityServe from './assets/logo-128-cityserve.png';
import logoSWCF from './assets/logo-128-shihwingchingfoundation.png';

const bannerContent = {
  id: 0,
  title: '2026-28 年題',
  description: '默想聖言・凝聚合一・躍動使命',
  // image: 'banner-10th.png',
  image: 'ccms-banner-00.jpg',
  // imageText: '基督教芥菜種子堂十週年特刊',
  // linkText: '歡迎下載',
};

const featuredPosts = [
  {
    title: '名稱由來',
    date: '',
    description:
      '源於《馬太福音十三31-32》的啟發。耶穌以「芥菜種」比作「天國」，道出了「天國」由小而大的成長法則；另外，「種子」在聖經中又比作「神的道」這正突顯我們從神所領受的使命。基督教芥菜種子堂之命名，也就代表我們願意靠著神的恩典，致力活出使命，並盼望成為傳揚及擴展天國的教會群體。',
    image: `${ccmsName.src}`,
    imageLabel: '名稱由來',
  },
  {
    title: '教會使命',
    date: '',
    description:
      '我們是一間聽神的道、領受神的道、傳講神的道的教會！（參考：帖前 2:13）我們的期望，就是要塑造弟兄姊妹成為一個聽道而行道的基督徒，從認識、領受、以至傳講神的道為生命追求的方向，作一個知行合一的事奉者。（參考：太 7:24）',
    image: `${ccmsMission.src}`,
    imageLabel: '教會使命',
  },
  {
    title: '教會理念',
    date: '',
    description:
      '本教會採納了艾力•蓋格《簡約教會》一書的理念來制定教會的事工。其重點在於設計一個簡單的培育門徒流程，它必須清晰，必須推動人們邁向成熟，必須與教會上下完全結合，並且必須清除周圍阻塞它的雜物。',
    image: `${ccmsModel.src}`,
    imageLabel: '教會理念',
  },
];

const collaborators = [
  {
    name: '基督教會恩澤堂',
    logo: `${logoChurch.src}`,
  },
  {
    name: '教會關懷貧窮網絡',
    logo: `${logoHkcnp.src}`,
    link: 'https://www.hkcnp.org.hk',
  },
  {
    name: '工業福音團契',
    logo: `${logoHkief.src}`,
    link: 'https://www.hkief.org.hk',
  },
  {
    name: '馬鞍峰教會',
    logo: `${logoSbhk.src}`,
    link: 'https://sbhk.teachable.com',
  },
  {
    name: 'CityServe Hong Kong',
    logo: `${logoCityServe.src}`,
    link: 'https://cityservehk.org',
  },
  {
    name: '城市的盼望',
    logo: `${logoHtc.src}`,
    link: 'https://www.hopeofthecity.com',
  },
  {
    name: '施永青基金',
    logo: `${logoSWCF.src}`,
    link: 'https://www.shihwingchingfoundation.org',
  },
  // {
  //   name: '和富社會企業',
  //   logo: `${logoWse.src}`,
  //   link: 'https://wse.hk',
  // },
];

function HomeContent() {
  return (
      <SiteShell>
        <main>
          <Banner post={bannerContent} />

          <Grid container spacing={4} sx={{px:'30px',}}>
            {featuredPosts.map((post) => (
              <FeaturedPost 
              key={post.title} 
              post={post} />
            ))}
          </Grid>

          <Stack spacing={2} sx={{ m: '50px', mt: '80px' }}>
            <Typography align="center" component="h2" variant="h5" sx={{ mb: 1 }}>
              合作夥伴
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 0 }}>
              本堂透過與下列機構及教會緊密合作，為社區內的基層家庭提供及籌辦兒童補習、家庭探訪、認識香港、戶外旅行、童樂家庭主日、各式工作坊等活動，歡迎致電查詢。
            </Typography>
          </Stack>

          <Grid container sx={{ p: '30px', mb: '150px', alignItems: 'center' }}>
            {collaborators.map((collaborator) => (
              <Collaboration
                key={collaborator.name}
                collaborator={collaborator}
              />
            ))}
          </Grid>
        </main>        
      </SiteShell>
  );
}

export default function Home() {
  const [route, setRoute] = useState('');

  useEffect(() => {
    const updateRoute = () => {
      setRoute(window.location.hash.slice(1));
      window.scrollTo(0, 0);
    };

    updateRoute();
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  switch (route) {
    case 'gathering':
      return <Gathering />;
    case 'sermon':
      return <Sermon />;
    case 'plan':
      return <Plan />;
    case 'download':
      return <Download />;
    case 'contact':
      return <Contact />;
    default:
      return <HomeContent />;
  }
}
