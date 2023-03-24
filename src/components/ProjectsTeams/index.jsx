import React from 'react';
import { Box, Chip, CssBaseline } from '@mui/material';
import ProjectsDetails from './projectDetails';
import CardTitle from '../../commonComponents/cardTitle';
import members from '../../data/teamMembers';
import PaperRoot from '../../commonComponents/paper';
import colors from '../../constant/colors';

export default function ProjectsAndTeams() {
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <PaperRoot styles={{ padding: '1rem 1.5rem' }}>
                <CardTitle title='Projects and teams' />
                <ProjectsDetails
                    title="Development"
                    subTitle="New UI design for project jumbo."
                    progress={70}
                    members={members}
                    chipStyle={{ background: colors.purple }}
                />
                <ProjectsDetails
                    title="Designing"
                    subTitle="Promo graphics design for wieldy"
                    progress={60}
                    members={members}
                    chipStyle={{ background: colors.green }}
                />
                <Chip label="Marketing" size="small" sx={{ background: colors.pink, color: colors.white }} />
            </PaperRoot>
        </Box>
    );
}