import { useAuth0 } from '@auth0/auth0-react';
import { Comment } from 'lib/comment/types';
import { FormEvent, useEffect, useState } from 'react';
import useSWR from 'swr';

async function fetcher(url: string) {
  return await fetch(url).then(res => res.json());
}

export default function useComments() {
  const { getAccessTokenSilently } = useAuth0();
  const [text, setText] = useState('');
  const [url, setUrl] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const url = window.location.origin + window.location.pathname;
    setUrl(url);
  }, []);

  const { data: comments, mutate } = useSWR<Comment[]>(`/api/comment?url=${url}`, fetcher, {
    fallbackData: [],
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();

    try {
      setIsSending(true);
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ url, text }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
      setText('');
      await mutate();
      setIsSending(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (comment: Comment) => {
    const token = await getAccessTokenSilently();

    try {
      setIsDeleting(true);
      await fetch('/api/comment', {
        method: 'DELETE',
        body: JSON.stringify({ url, comment }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
      await mutate();
      setIsDeleting(false);
    } catch (err) {
      console.log(err);
    }
  };

  return { text, setText, comments, onSubmit, isSending, isDeleting, onDelete };
}
