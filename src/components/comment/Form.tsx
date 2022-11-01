import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, HStack, Textarea } from '@chakra-ui/react';

interface CommentFormProps {
  text: string;
  setText: (event: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isSending: boolean;
}

const CommentForm = ({ text, setText, onSubmit, isSending }: CommentFormProps) => {
  const { isLoading, isAuthenticated, logout, loginWithPopup } = useAuth0();

  return (
    <form onSubmit={onSubmit}>
      <Textarea
        placeholder={isAuthenticated ? 'Comment' : 'Please login to leave a comment'}
        onChange={e => setText(e.target.value)}
        value={text}
        isDisabled={!isAuthenticated || isSending}
        variant='filled'
        rounded='lg'
      />

      <Box mt={3}>
        {isAuthenticated ? (
          <HStack spacing={3}>
            <Button isLoading={isSending} colorScheme='teal' type='submit'>
              Send
            </Button>
            <Button onClick={() => logout()} variant='ghost' colorScheme='red'>
              Log out
            </Button>
          </HStack>
        ) : (
          <Button isLoading={isLoading} onClick={() => loginWithPopup()} colorScheme='teal'>
            Log In
          </Button>
        )}
      </Box>
    </form>
  );
};

export default CommentForm;
