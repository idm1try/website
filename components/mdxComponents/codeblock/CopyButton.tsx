import { Button, ButtonProps, useClipboard } from '@chakra-ui/react';

interface CopyButtonProps extends ButtonProps {
  code: string;
}

const CopyButton = ({ code, ...props }: CopyButtonProps) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Button
      size='sm'
      position='absolute'
      textTransform='uppercase'
      colorScheme='teal'
      fontSize='xs'
      height='24px'
      top={0}
      zIndex='1'
      right='1.25em'
      {...props}
      onClick={onCopy}
    >
      {hasCopied ? 'copied' : 'copy'}
    </Button>
  );
};

export default CopyButton;
