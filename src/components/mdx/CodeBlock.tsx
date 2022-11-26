import { useClipboard } from '@/hooks/useClipboard';
import prismTheme from '@/lib/mdx/prismCatppuccin';
import { TbClipboard, TbClipboardCheck } from 'react-icons/tb';
import Highlight from './Highlight';

const CodeBlock = (props: any) => {
  const { className, children, ln } = props.children.props;
  const clipboard = useClipboard({ timeout: 1000 });
  const language = className?.replace(/language-/, '');
  const rawCode = children.trim();

  return (
    <div className='relative rounded-lg bg-mantle-100 p-1.5'>
      <Highlight codeString={rawCode} language={language} theme={prismTheme} metastring={ln} />
      <button
        className='absolute top-4 right-4 rounded-lg bg-crust-100 p-2 text-pink-100 transition-all duration-300 hover:bg-surface0-100 active:bg-surface1-100'
        onClick={() => clipboard.copy(rawCode)}
        aria-label='Copy'
      >
        {clipboard.copied ? <TbClipboardCheck size={14} /> : <TbClipboard size={14} />}
      </button>
    </div>
  );
};

export default CodeBlock;
