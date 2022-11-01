import { Box } from '@chakra-ui/react';
import useComments from 'hooks/useComment';
import CommentForm from './Form';
import CommentList from './List';

const Comment = () => {
  const { text, setText, comments, onSubmit, isSending, isDeleting, onDelete } = useComments();

  return (
    <Box mt={10}>
      <CommentForm isSending={isSending} onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList isDeleting={isDeleting} comments={comments} onDelete={onDelete} />
    </Box>
  );
};

export default Comment;
