import { TableOfContents } from '@/lib/toc'
import { useEffect, useMemo, useState } from 'react'

interface TocProps {
  toc: TableOfContents
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds = useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap(item => [item.url, item?.items?.map(item => item.url)])
            .flat()
            .filter(Boolean)
            .map(id => id.split('#')[1])
        : [],
    [toc]
  )
  const activeHeading = useActiveItem(itemIds)
  if (!toc?.items) {
    return null
  }

  return (
    <div className='space-y-2'>
      <p className='font-medium'>On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

interface TreeProps {
  tree: TableOfContents
  level?: number
  activeItem?: string
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className={`m-0 ${level !== 1 && 'pl-4'}`}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className='mt-0 pt-2'>
            <a
              href={item.url}
              className={`inline-block transition-all duration-300 line-clamp-1 ${
                item.url === `#${activeItem}`
                  ? 'font-bold text-pink-200 hover:text-flamingo-200 dark:text-pink-100 dark:hover:text-flamingo-100'
                  : 'text-surface2-200 hover:text-text-200 dark:text-surface2-100 dark:hover:text-text-100'
              }`}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
