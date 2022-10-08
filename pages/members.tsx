import { Avatar, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { getMembers } from 'allMembers';
import Layout from 'components/layouts/Article';
import SocialLink from 'components/SocialLink';
import { TbBrandGithub, TbWorld } from 'react-icons/tb';

interface IMember {
  name: string;
  url?: string;
  bio?: string;
  avatarUrl?: string;
}

function Member(props: { member: IMember }) {
  const { avatarUrl, bio, name, url } = props.member;

  return (
    <Stack direction='row' spacing={6} align='flex-start'>
      <Avatar src={avatarUrl} size='xl' />
      <Stack spacing={3} maxW='320px'>
        <Text fontWeight='bold'>{name}</Text>

        <Stack isInline align='center' spacing={2}>
          <SocialLink
            href={`https://github.com/${name}`}
            icon={TbBrandGithub}
            label={`View ${name}'s Github`}
          />
          {url && url != `https://github.com/${name}` && (
            <SocialLink href={url} icon={TbWorld} label={`View ${name}'s website`} />
          )}
        </Stack>
        <Text fontSize='sm' color='gray.500'>
          {bio}
        </Text>
      </Stack>
    </Stack>
  );
}

function Team() {
  const members: IMember[] = getMembers();

  return (
    <Layout title='Members'>
      <Stack spacing={8} mt={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing='40px' pt='3'>
          {members.map(member => (
            <Member key={member.name} member={member} />
          ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
}

export default Team;
