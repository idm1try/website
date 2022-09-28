import { Box, IconButton } from '@chakra-ui/react';
import { useWindowScroll } from '@mantine/hooks';
import { TbArrowUp } from 'react-icons/tb';

const GoToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Box>
      {scroll.y > 100 && (
        <IconButton
          aria-label='Scroll to top'
          icon={<TbArrowUp />}
          colorScheme='teal'
          onClick={() => scrollTo({ y: 0 })}
          position='fixed'
          bottom='24px'
          right='24px'
          pr={0}
          zIndex={100}
          tabIndex={0}
        />
      )}
    </Box>
  );
};

export default GoToTopButton;
