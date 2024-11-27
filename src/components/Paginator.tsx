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
  onPageChange: (page: number | null) => void
  onPerPageChange: (perPage: number) => void
}

const defaultPerPagesValue = '10'

export function Paginator({
  prev,
  next,
  last,
  pages,
  onPageChange,
  onPerPageChange,
}: PaginatorProps) {
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

  const visiblePages = getVisiblePages()

  function getLastPaginationItem() {
    return (
      <>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem key={last}>
          <PaginationLink
            onClick={() => onPageChange(last)}
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
          defaultValue={defaultPerPagesValue}
          onValueChange={(perPage) => onPerPageChange(Number(perPage))}
        >
          <SelectTrigger className="w-[60px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>

        <PaginationItem>
          <PaginationPrevious
            disabled={prev === null}
            onClick={() => onPageChange(prev)}
          />
        </PaginationItem>
        {visiblePages.map(page => {
          return (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => onPageChange(page)}
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
            onClick={() => onPageChange(next)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

  )
}
