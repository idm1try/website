import BaseHighlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer';

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false;
  }
  const lineNumbers = RE.exec(meta)?.[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)));

  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers?.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
    return inRange;
  };
};

interface HighlightProps {
  codeString: string;
  language: Language;
  theme: PrismTheme;
  metastring?: string;
  showLines?: boolean;
}

const Highlight = ({ codeString, language, metastring, ...props }: HighlightProps) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  return (
    <BaseHighlight {...defaultProps} code={codeString} language={language} {...props}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div data-language={language} className='overflow-x-auto font-mono'>
          <pre className={className} style={{ margin: 0 }}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });

              return (
                <div
                  key={i}
                  className={shouldHighlightLine(i) ? 'bg-mantle-100 px-4' : undefined}
                  {...lineProps}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  );
};

export default Highlight;
