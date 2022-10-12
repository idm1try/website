import { Stack, Text } from '@chakra-ui/react';
import { TbBrandGithub, TbBrandTwitter, TbWorld } from 'react-icons/tb';
import Avatar from './Avatar';
import SocialLink from './SocialLink';

export interface MemberProps {
  name: string;
  url?: string;
  bio?: string;
  avatarUrl?: string;
  twitterUsername?: string;
}

const Member = ({ member }: { member: MemberProps }) => {
  const { avatarUrl, bio, name, url, twitterUsername } = member;

  return (
    <Stack direction='row' spacing={6} align='flex-start'>
      <Avatar src={avatarUrl} size={89} alt={name} />
      <Stack spacing={3} maxW='320px'>
        <Text fontWeight='bold'>{name}</Text>

        <Stack isInline align='center' spacing={2}>
          <SocialLink
            href={`https://github.com/${name}`}
            icon={TbBrandGithub}
            label={`View ${name}'s Github`}
          />
          {url && <SocialLink href={url} icon={TbWorld} label={`View ${name}'s website`} />}
          {twitterUsername && (
            <SocialLink
              href={`https://twitter.com/${twitterUsername}`}
              icon={TbBrandTwitter}
              label={`View ${name}'s Twitter`}
            />
          )}
        </Stack>
        <Text fontSize='sm' color='gray.500'>
          {bio}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Member;
