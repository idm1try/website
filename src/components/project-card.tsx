import cn from '@/lib/classNames'
import { Project } from '@/lib/project'
import Image from 'next/image'

const ProjectCard = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => {
  const { name, url, desc, image, tags } = project

  return (
    <div className='group mb-6'>
      <a href={url}>
        <div
          className={cn(
            'mb-4 rounded-lg ring-mauve-200 ring-offset-4',
            'dark:ring-mauve-100 dark:ring-offset-base-100',
            'ring-offset-base-200 duration-300 group-hover:ring-2'
          )}
        >
          {image && (
            <Image
              src={`/assets/projects/${image}`}
              alt={`${name} Image`}
              className='rounded-lg bg-mantle-200 dark:bg-mantle-100'
              width={700}
              height={400}
              priority={index <= 1}
            />
          )}
        </div>
        <div>
          <span
            className={cn(
              'text-2xl font-bold transition-colors duration-300',
              'dark:active:text-pink-100/80 dark:group-hover:text-pink-100',
              'line-clamp-2 active:text-pink-200/80 group-hover:text-pink-200'
            )}
          >
            {name}
          </span>
        </div>
        <div className='mt-2 text-subtext0-200 line-clamp-2 dark:text-subtext0-100'>
          {desc}
        </div>
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
      </a>
    </div>
  )
}

export default ProjectCard
