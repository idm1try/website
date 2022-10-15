import { Box, useColorModeValue } from '@chakra-ui/react';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import CodeContainer from './CodeContainer';
import CopyButton from './CopyButton';
import Highlight from './Highlight';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeBlock = (props: any) => {
  const { className, children, viewlines, ln } = props.children.props;

  const language = className?.replace(/language-/, '');
  const rawCode = children.trim();

  return (
    <Box position='relative' zIndex='0'>
      <CodeContainer px='0' overflow='hidden'>
        <Highlight
          codeString={rawCode}
          language={language}
          theme={useColorModeValue(lightTheme, darkTheme)}
          metastring={ln}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton top='4' code={rawCode} />
    </Box>
  );
};

export default CodeBlock;
