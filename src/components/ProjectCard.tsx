import { Project } from '@/types/projects';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
}

interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticRequire | StaticImageData;

const ProjectCard = ({ project }: { project: Project }) => {
  const { name, url, desc, image, tags } = project;
  const [imageImport, setImage] = useState<StaticImport>();

  const loadImage = (img: string) => {
    import(`../../public/assets/projects/${img}`).then(image => {
      setImage(image);
    });
  };

  useEffect(() => {
    if (image) {
      loadImage(image);
    }
  }, [image]);

  return (
    <div className='group mb-6'>
      <div className='mb-4 rounded-lg ring-mauve-200 ring-offset-4 ring-offset-base-200 duration-300 group-hover:ring-2 dark:ring-mauve-100 dark:ring-offset-base-100'>
        {!imageImport ? (
          <div className='rounded-lg bg-mantle-200 py-14 dark:bg-mantle-100'>
            <Spinner className='mx-auto' size={50} />
          </div>
        ) : (
          <a href={url}>
            <Image
              src={imageImport}
              alt={`${name} Image`}
              placeholder='blur'
              className='rounded-lg object-cover'
            />
          </a>
        )}
      </div>
      <div>
        {url && (
          <a
            href={url}
            className='text-2xl font-bold transition-colors duration-300 line-clamp-2 active:text-pink-200/80 group-hover:text-pink-200 dark:active:text-pink-100/80 dark:group-hover:text-pink-100'
          >
            {name}
          </a>
        )}
      </div>
      <div className='mt-2 text-subtext0-200 line-clamp-2 dark:text-subtext0-100'>{desc}</div>
      <div className='mt-2'>
        {tags.map(tag => (
          <span
            key={tag}
            className='mt-2 mr-2 inline-block rounded-lg bg-mantle-200 px-4 py-2 text-sm font-medium text-pink-200 dark:bg-mantle-100 dark:text-pink-100'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
