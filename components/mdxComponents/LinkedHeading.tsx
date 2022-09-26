import { HTMLChakraProps, chakra, Heading } from '@chakra-ui/react';

export const LinkedHeading = (props: HTMLChakraProps<'h2'>) => (
  <Heading data-group='' css={{ scrollMarginBlock: '6.875rem' }} my={8} {...props}>
    <span className='content'>{props.children}</span>
    {props.id && (
      <chakra.a
        aria-label='anchor'
        color='teal.500'
        fontWeight='normal'
        lineHeight={1.2}
        outline='none'
        _focus={{ opacity: 1, boxShadow: 'outline' }}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        ml='0.375rem'
        href={`#${props.id}`}
      >
        #
      </chakra.a>
    )}
  </Heading>
);
