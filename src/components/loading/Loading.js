import { Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';

const Loading = ({ lines = 4, circle = false }) => {
  return (
    <Box width="100%" padding="6" boxShadow="lg" bg="white">
      {circle && <SkeletonCircle size="10" />}
      <SkeletonText mt="4" noOfLines={lines} spacing="4" />
    </Box>
  );
};

export default Loading;
