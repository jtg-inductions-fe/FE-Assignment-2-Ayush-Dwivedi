import { Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme: { spacing, shape } }) => ({
    paddingInline: spacing(8),
    paddingBlock: spacing(12),
    borderRadius: shape.borderRadius * 3,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: spacing(8),
})) as typeof Paper;
