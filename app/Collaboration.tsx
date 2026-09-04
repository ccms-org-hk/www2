import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface CollaborationProps {
  collaborator: {
    name: string;
    logo: string;
    link?: string;
  };
}

export default function Collaboration(props: CollaborationProps) {
  const { collaborator } = props;

  return (
    <Grid size={{ xs: 6, md: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {collaborator.link ? (
          <a href={collaborator.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={collaborator.logo}
              alt={collaborator.name}
              title={collaborator.name}
              width={140}
              height={140}
              loading="lazy"
              style={{ objectFit: 'contain' }}
            />
          </a>
        ) : (
          <Image
            src={collaborator.logo}
            alt={collaborator.name}
            title={collaborator.name}
            width={140}
            height={140}
            loading="lazy"
            style={{ objectFit: 'contain' }}
          />
        )}
      </Box>
    </Grid>
  );
}
