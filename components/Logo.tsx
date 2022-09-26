import { Icon, Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { TbRadar } from 'react-icons/tb';

const LogoBox = styled.span`
  display: inline-flex;

  svg {
    transition: 200ms ease;
  }

  &:hover svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href='/' scroll={false}>
      <a>
        <LogoBox>
          <Icon as={TbRadar} mt={1} />
          <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontWeight='bold'>
            Blog
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
