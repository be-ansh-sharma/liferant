import { useMediaQuery } from '@chakra-ui/react';

const useMobileComponent = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return isMobile;
};

export default useMobileComponent;
