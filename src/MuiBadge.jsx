import MailIcon from   "@mui/icons-material/Mail";
import { Badge } from "@mui/material";

const MuiBadge = () => {
    return <Badge badgeContent={4} color="primary">
        <MailIcon color="primary"></MailIcon>
    </Badge>;
};

export default MuiBadge;