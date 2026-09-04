'use client';

import Grid from '@mui/material/Grid';
import Banner from './Banner';
import DownloadItem from './DownloadItem';
import SiteShell from './SiteShell';
import Banner10th from './assets/CCMS-10th-anniversary-cover.jpg';

const bannerContent = {
  id: 1,
  description: '下載',
};

const downloadItems = [
  {
    title: '基督教芥菜種子堂十週年特刊',
    date: '2022年8月',
    // description: '',
    image: `${Banner10th.src}`,
    link: '/CCMS-10th-anniversary.pdf',
  },
];

export default function Download() {
  return (
    <SiteShell>
        <main>
          <Banner post={bannerContent} />

          <Grid container spacing={4} sx={{px:'30px',}}>
            {downloadItems.map((item) => (
              <DownloadItem 
              key={item.title} 
              item={item} />
            ))}
          </Grid>

        </main>
      </SiteShell>
  );
}
