import { BoxProps, ListItem, OrderedList, chakra, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { useScrollSpy } from 'hooks/useScrollSpy';
import TocNav from './TocNav';

interface TableOfContentProps extends BoxProps {
  headings: FrontmatterHeading[];
}

export interface FrontmatterHeading {
  level: string | number;
  text: string;
  id: string;
}

function TableOfContent(props: TableOfContentProps) {
  const { headings, ...rest } = props;
  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -24% 0%',
    }
  );
  const linkColor = useColorModeValue('gray.600', 'gray.400');
  const linkHoverColor = useColorModeValue('gray.900', 'gray.600');
  return (
    <TocNav title='On This Page' {...rest}>
      <OrderedList spacing={1} ml='0' mt='4' styleType='none'>
        {headings.map(({ id, text, level }) => (
          <ListItem key={id} title={text} ml={level === 'h3' ? '4' : undefined}>
            <chakra.a
              py='1'
              display='block'
              fontWeight={id === activeId ? 'bold' : 'medium'}
              href={`#${id}`}
              aria-current={id === activeId ? 'location' : undefined}
              color={linkColor}
              _hover={{
                color: linkHoverColor,
              }}
            >
              {text}
            </chakra.a>
          </ListItem>
        ))}
      </OrderedList>
    </TocNav>
  );
}

export default TableOfContent;
