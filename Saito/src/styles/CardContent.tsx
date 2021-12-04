import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

export default styled(CardContent)({
    background: '#152232',
    borderRadius: 0,
    ":last-child": {
        paddingBottom: 5,
        borderRadius: 0,
    }
})