import { SimpleGrid, Stack } from '@chakra-ui/react';
import { getMembers } from 'allMembers';
import Layout from 'components/layouts/Article';
import Member, { MemberProps } from 'components/Member';

const Members = () => {
  const members: MemberProps[] = getMembers();

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
};

export default Members;
