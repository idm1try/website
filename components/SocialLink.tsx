import { VisuallyHidden, Icon, Link } from '@chakra-ui/react';
import { ElementType } from 'react';

const SocialLink = ({ icon, href, label }: { icon: ElementType; href: string; label: string }) => (
  <Link
    display='inline-flex'
    alignItems='center'
    justifyContent='center'
    rounded='full'
    href={href}
    isExternal
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    <Icon as={icon} fontSize='xl' color='accent' />
  </Link>
);

export default SocialLink;
