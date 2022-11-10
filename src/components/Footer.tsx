import { Icon, Stack, StackProps, Text, VStack } from '@chakra-ui/react';
import { TbBrandGithub, TbBrandTwitter, TbHeart, TbMail, TbWorld } from 'react-icons/tb';
import SocialLink from './SocialLink';

export const Footer = (props: StackProps) => (
  <VStack as='footer' gap={2} my={12} textAlign='center' {...props}>
    <Text fontSize='sm'>
      Build with <Icon as={TbHeart} color='red.400' h={3} w={3} /> by idm1try
    </Text>

    <Stack isInline spacing='12px' pb={2}>
      <SocialLink icon={TbBrandGithub} href='https://github.com/idm1try' label='Github' />
      <SocialLink icon={TbWorld} href='https://idm1try.ru' label='Website' />
      <SocialLink icon={TbBrandTwitter} href='https://twitter.com/idm1try' label='Twitter' />
      <SocialLink icon={TbMail} href='mailto:admin@idm1try.ru' label='Mail' />
    </Stack>
  </VStack>
);

export default Footer;
