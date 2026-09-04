import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';
import { MENU_ITEMS } from './config';

interface SiteShellProps {
  children: React.ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        backgroundColor: '#ffffff',
        mt: '25px',
        mb: '25px',
        pt: '25px',
        borderRadius: 1,
      }}
    >
      <Header sections={MENU_ITEMS} />
      {children}
      <Footer />
    </Container>
  );
}
