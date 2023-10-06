import WidgetWrapper from "@/components/WidgetWrapper.jsx";
import { Box, Typography, Divider, Skeleton } from "@mui/material";
import FlexBetween from "@/components/FlexBetween.jsx";

const UserWidgetSkeleton = () => (
  <WidgetWrapper>
    {/* FIRST ROW */}
    <FlexBetween gap="0.5rem">
      <FlexBetween gap="1rem">
        <Skeleton  variant="circular" width={40} height={40} />
        <Box>
          <Skeleton width="100%"></Skeleton>
          <Skeleton width="100%"></Skeleton>
        </Box>
      </FlexBetween>
      <Divider />
    </FlexBetween>
    {/* SECOND ROW */}
    <Box p="1rem 0">
      <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
        <Skeleton width="100%"></Skeleton>
      </Box>
      <Box display="flex" alignItems="center" gap="1rem">
        <Skeleton width="100%"></Skeleton>
      </Box>
    </Box>
    {/* THIRD ROW */}
    <Box p="1rem 0">
      <FlexBetween mb="0.5rem">
        <Skeleton width="100%"></Skeleton>
      </FlexBetween>
      <FlexBetween>
        <Skeleton width="100%"></Skeleton>
      </FlexBetween>
    </Box>
    {/* FOURTH ROW */}
    <Box p="1rem 0">
      <Skeleton width="100%" >
        
      </Skeleton>
      <FlexBetween gap="1rem" mb="0.5rem">
        <FlexBetween gap="1rem">
          <Skeleton
            
            variant="circular"
            width={20}
            height={20}
          />
          <Box>
            <Skeleton width="100%">
            </Skeleton>
            <Skeleton width="100%" >
            </Skeleton>
          </Box>
        </FlexBetween>
      </FlexBetween>
      <FlexBetween gap="1rem">
        <FlexBetween gap="1rem">
          <Skeleton
            
            variant="circular"
            width={20}
            height={20}
          />
          <Box>
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </Box>
  </WidgetWrapper>
);

export default UserWidgetSkeleton;
