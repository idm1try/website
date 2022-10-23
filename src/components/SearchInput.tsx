import {
  Box,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useMergeRefs,
} from '@chakra-ui/react';
import useElementState from 'hooks/useElementState';
import useSearchParams from 'hooks/useSearchParams';
import { useRef } from 'react';
import { TbSearch, TbX } from 'react-icons/tb';

interface SearchInputProps {
  placeholder?: string;
  defaultValue?: string;
  onChange?(value: string): void;
}

const SearchInput = (props: SearchInputProps) => {
  const { placeholder = 'Search articles', onChange, defaultValue } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [setInputRef, inputStatus] = useElementState();
  const [setButtonRef, buttonStatus] = useElementState();
  const params = useSearchParams();

  const hasValue = params.searchString.length > 0;
  const isInteracting = ['hover', 'focus'].includes(inputStatus) || buttonStatus === 'hover';
  const showClear = hasValue && isInteracting;

  return (
    <Box>
      <InputGroup>
        <InputLeftElement m={1}>
          <Icon as={TbSearch} fontSize='xl' color='gray.500' />
        </InputLeftElement>
        <Input
          defaultValue={defaultValue}
          placeholder={placeholder}
          aria-label='search-blog'
          onChange={event => {
            onChange(event.target.value);
          }}
          type='text'
          ref={useMergeRefs(setInputRef, ref)}
          id='query'
          name='q'
          variant='filled'
          rounded='lg'
          size='lg'
        />
        <InputRightElement m={1}>
          <IconButton
            aria-label='reset'
            ref={setButtonRef}
            hidden={!showClear}
            color='gray.500'
            fontSize='lg'
            icon={<TbX />}
            variant='ghost'
            size='sm'
            onPointerDown={event => {
              event.preventDefault();
            }}
            onClick={() => {
              const el = ref.current;
              el.value = '';
              onChange?.('');
              setTimeout(() => {
                el.focus();
              });
            }}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
