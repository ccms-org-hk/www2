import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// import BannerHome from './assets/banner-10th.png';
import BannerHome from './assets/ccms-banner-00.jpg';
import BannerNormal from './assets/ccms-banner-01.jpg';

interface BannerProps {
  post: {
    id: number;
    description?: string;
    image?: string;
    imageText?: string;
    linkText?: string;
    title?: string;
  };
}

export default function Banner(props: BannerProps) {
  const { post } = props;
  const backgroundImage = (post.id === 0)
    ? `url(${BannerHome.src})`
    : `url(${BannerNormal.src})`;
  const banner_height = (post.id === 0) ? '330px' : '160px';

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 7,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundImage: `url(${post.image})`,
        backgroundImage: backgroundImage,
        borderRadius: 0,
        height: banner_height,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.1)',
        }}
      />
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 2, md: 4 },
              pr: { md: 0 },
              textAlign: 'left',
            }}
          >
            <Typography variant="subtitle1" color="inherit" gutterBottom sx={{fontStyle: 'italic', textShadow:'2px 2px 4px rgba(0,0,0,0.25), -2px -2px 4px rgba(0,0,0,0.25)'}}>
              {post.title}
            </Typography>
            <Typography component="h1" variant="h4" color="inherit" sx={{fontStyle: 'italic', textShadow:'2px 2px 4px rgba(0,0,0,0.25), -2px -2px 4px rgba(0,0,0,0.25)', mb: 2}}>
              {post.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
