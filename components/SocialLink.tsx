import { VisuallyHidden, Icon, useColorModeValue, Link } from '@chakra-ui/react';
import { ElementType } from 'react';

function SocialLink({ icon, href, label }: { icon: ElementType; href: string; label: string }) {
  return (
    <Link
      display='inline-flex'
      alignItems='center'
      justifyContent='center'
      rounded='full'
      href={href}
      isExternal
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon as={icon} fontSize='xl' color={useColorModeValue('teal.500', 'teal.200')} />
    </Link>
  );
}

export default SocialLink;
