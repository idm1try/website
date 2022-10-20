import { HTMLChakraProps, Heading, Link } from '@chakra-ui/react';

export const LinkedHeading = (props: HTMLChakraProps<'h2'>) => (
  <Heading data-group='' css={{ scrollMarginBlock: '6.875rem' }} my={8} {...props}>
    <span className='content'>{props.children}</span>
    {props.id && (
      <Link
        aria-label='anchor'
        lineHeight={1.2}
        outline='none'
        _focus={{ opacity: 1 }}
        _groupHover={{ opacity: 1 }}
        opacity={0}
        textUnderlineOffset={3}
        ml='0.375rem'
        href={`#${props.id}`}
      >
        #
      </Link>
    )}
  </Heading>
);
