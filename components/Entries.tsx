import styles from '@styles/Entries.module.scss'
import { Entry } from '@models'
import useBooks from '@zustand/useBooks'
import EntryTypeIcon from './EntryTypeIcon'
import { formatDistanceToNowStrict } from 'date-fns'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel
} from '@tanstack/react-table'
import EntryOptions from './EntryOptions'
import { useEffect, useState } from 'react'
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs'
import {
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronsRight,
  BiChevronRight
} from 'react-icons/bi'

const columnHelper = createColumnHelper<Entry>()

const columns = [
  columnHelper.accessor('type', {
    header: 'Type',
    cell: (info) => <EntryTypeIcon type={info.getValue()} />
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: (info) => <span>{info.getValue()}</span>
  }),
  columnHelper.accessor('page', {
    header: 'Page',
    cell: (info) => <span>{info.getValue() || '-'}</span>
  }),
  columnHelper.accessor('createdAt', {
    header: 'Created At',
    cell: (info) => (
      <span>
        {formatDistanceToNowStrict(info.getValue(), { addSuffix: true })}
      </span>
    )
  })
]

const Entries = ({ bookId }: { bookId: string }) => {
  const books = useBooks((state) => state.books)
  const book = books.find((b) => b.id === bookId)
  const entries = book?.entries || []
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data: entries,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  useEffect(() => {
    table.setPageSize(11)
  }, [table])

  return (
    <div className={styles.container}>
      {/* table */}
      <div className={styles.tableContainer}>
        <table style={{ height: !!entries.length ? 'auto' : '100%' }}>
          {/* thead */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <span onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          {
                            asc: <BsFillCaretUpFill />,
                            desc: <BsFillCaretDownFill />
                          }[(header.column.getIsSorted() as string) ?? null]
                        }
                      </span>
                    )}
                  </th>
                ))}
                <th></th>
              </tr>
            ))}
          </thead>

          {/* tbody */}
          <tbody>
            {entries.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  <EntryOptions entry={entries[+row.id]} />
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className={styles.noRowsFeedback}>
                  <p>No entries to show</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className={styles.pagination}>
        <div className={styles.pageIndicator}>
          <span>Page </span>
          <strong>
            {table.getPageCount() > 0
              ? `${
                  table.getState().pagination.pageIndex + 1
                } of ${table.getPageCount()}`
              : 0}
          </strong>
        </div>
        <div className={styles.navigationButtons}>
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <BiChevronsLeft />
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <BiChevronRight />
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <BiChevronsRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Entries
