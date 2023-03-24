import React from 'react';
import { Chip, Avatar, AvatarGroup, Grid } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import CardTitle from '../../commonComponents/cardTitle';
import colors from '../../constant/colors';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    marginBottom: '0.5rem',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: colors.green,
    },
}));

const ProjectsDetails = ({ title, subTitle, progress, members, chipStyle }) => {
    return (
        <Grid sx={{margin: '1rem auto'}}>
            <Chip label={title} size="small" sx={{marginBottom: '0.5rem', color: colors.white, ...chipStyle}} />
            <CardTitle title={subTitle} style={{fontWeight: '500'}} />
            <CardTitle title={`${progress}% completed`} style={{color: colors.grey2, fontWeight: '400', margin: '0.5rem auto'}} />
            <BorderLinearProgress variant="determinate" value={progress} />
            <AvatarGroup max={6} sx={{ justifyContent: 'flex-end' }}>
                {
                    members?.map((item) => (<Avatar key={item.id} alt={item.alt} src={item.src} />))
                }
            </AvatarGroup>
        </Grid>
    );
}

export default ProjectsDetails;