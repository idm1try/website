import { useAuth0 } from '@auth0/auth0-react';
import { Box, HStack, IconButton, Text } from '@chakra-ui/react';
import Image from 'components/Image';
import { Comment } from 'lib/comment/types';
import { TbTrash } from 'react-icons/tb';

interface CommentListProps {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
  isDeleting: boolean;
}

const CommentList = ({ comments, onDelete, isDeleting }: CommentListProps) => {
  const { user } = useAuth0();

  return (
    <Box mt={8}>
      {comments?.map(comment => {
        const isAuthor = user && user.sub === comment.user.sub;
        const isAdmin = user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL;

        return (
          <Box mb={5} key={comment.created_at}>
            <HStack mb={3}>
              <Image
                width={36}
                height={36}
                rounded='full'
                src={comment.user.picture}
                alt={comment.user.name}
              />
              <Box>
                <Text fontSize='sm'>
                  <b>{comment.user.name}</b>
                </Text>
                <Text fontSize='xs' color='gray.500'>
                  {new Date(comment.created_at).toDateString()}
                </Text>
              </Box>
              {(isAdmin || isAuthor) && (
                <IconButton
                  isLoading={isDeleting}
                  icon={<TbTrash />}
                  aria-label='Delete'
                  variant='ghost'
                  colorScheme='red'
                  onClick={() => onDelete(comment)}
                  size='sm'
                  ml={1}
                />
              )}
            </HStack>

            <Box>
              <Box>{comment.text}</Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CommentList;
