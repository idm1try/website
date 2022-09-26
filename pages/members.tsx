import { Avatar, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Layout from 'components/layouts/Article';
import SocialLink from 'components/SocialLink';
import fs from 'fs';
import { TbBrandGithub, TbGlobe } from 'react-icons/tb';

interface IMember {
  avatar_url: string;
  bio: string;
  blog: string;
  location: string;
  login: string;
  name: string;
  twitter_username: string;
  url: string;
}

function Member(props: { member: IMember }) {
  const { avatar_url: avatarUrl, bio, name, url } = props.member;
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
            <SocialLink href={url} icon={TbGlobe} label={`View ${name}'s website`} />
          )}
        </Stack>
        <Text fontSize='sm' color='gray.500'>
          {bio}
        </Text>
      </Stack>
    </Stack>
  );
}

function Team({ members }: { members: IMember[] }) {
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

export async function getStaticProps() {
  const { members } = JSON.parse(fs.readFileSync('.all-membersrc.json', 'utf-8'));

  return {
    props: {
      members,
    },
  };
}

export default Team;
