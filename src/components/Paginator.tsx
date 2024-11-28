import { useState } from 'react'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface PaginatorProps {
  prev: number | null,
  next: number | null,
  last: number,
  pages: number,
  onPageChange: (page: number | null, perPage: number) => void
  onPerPageChange: (perPage: number) => void
}

const perPageOptions = [5, 10, 25, 50]

export function Paginator({
  prev,
  next,
  last,
  pages,
  onPageChange,
  onPerPageChange,
}: PaginatorProps) {
  const [perPage, setPerPage] = useState(perPageOptions[1])

  const pageIndex = prev
    ? prev + 1
    : 1
  function getVisiblePages() {
    if (pages <= 3) {
      return [...Array(pages).keys()].map((n) => n + 1)
    }

    if (pageIndex === 1) {
      return [1, 2, 3]
    } else if (pageIndex === pages) {
      return [pages - 2, pages - 1, pages]
    } else {
      return [pageIndex - 1, pageIndex, pageIndex + 1]
    }
  };

  function handlePerPageChange(value: number) {
    setPerPage(value)
    onPerPageChange(value)
  }

  const visiblePages = getVisiblePages()

  function getLastPaginationItem() {
    return (
      <>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem key={last}>
          <PaginationLink
            onClick={() => onPageChange(last, perPage)}
          >
            {last}
          </PaginationLink>
        </PaginationItem>
      </>
    )
  }

  return (
    <Pagination>
      <PaginationContent>

        <span className="text-sm text-muted-foreground">
          Items per page:
        </span>
        <Select
          defaultValue={perPage.toString()}
          onValueChange={(value) => handlePerPageChange(Number(value))}
        >
          <SelectTrigger className="w-[65px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {perPageOptions.map(option => {
              return (
                <SelectItem key={option} value={option.toString()}>
                  {option}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        <PaginationItem>
          <PaginationPrevious
            disabled={prev === null}
            onClick={() => onPageChange(prev, perPage)}
          />
        </PaginationItem>
        {visiblePages.map(page => {
          return (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => onPageChange(page, perPage)}
                disabled={pageIndex === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        {!visiblePages.includes(pages) && getLastPaginationItem()}

        <PaginationItem>
          <PaginationNext
            disabled={next === null}
            onClick={() => onPageChange(next, perPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

  )
}
