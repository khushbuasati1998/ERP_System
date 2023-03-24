import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import colors from '../constant/colors';

export const detailsList = [
    { id: 1, icon: <LocationOnIcon fontSize="small" />, text: '488, blingum road, JP Street, NJ, California' },
    { id: 2, icon: <CallIcon fontSize="small" />, text: '+01-992856-8535' },
    { id: 3, icon: <MailOutlineOutlinedIcon fontSize="small" />, text: 'bob.builder@jobportal.com' },
];

export const buttonsList = [
    { id: 1, icon: <TwitterIcon fontSize="small" />, color: colors.lightBlue },
    { id: 2, icon: <FacebookIcon fontSize="small" />, color: colors.darkblue },
    { id: 3, icon: <InstagramIcon fontSize="small" />, color: colors.pink },
    { id: 4, icon: <LinkedInIcon fontSize="small" />, color: colors.lightBlue },
];