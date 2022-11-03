import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Textarea } from '@chakra-ui/react';

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
          <Box>
            {text.trim().length !== 0 && (
              <Button isLoading={isSending} mr={3} colorScheme='teal' type='submit'>
                Send
              </Button>
            )}
            <Button onClick={() => logout()} variant='outline' colorScheme='red'>
              Log out
            </Button>
          </Box>
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
