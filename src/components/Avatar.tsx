import { Box } from '@chakra-ui/react';
import { TbUser } from 'react-icons/tb';
import Image from './Image';

interface AvatarProps {
  src: string;
  size: number;
  alt: string;
}

const Avatar = ({ src, size, alt }: AvatarProps) => (
  <Box>
    {src ? (
      <Image src={src} width={size} height={size} rounded='full' alt={alt} />
    ) : (
      <Box as={TbUser} size={size} bgColor='gray.500' color='white' rounded='full' p='10px' />
    )}
  </Box>
);

export default Avatar;
