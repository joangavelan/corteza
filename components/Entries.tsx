import styles from '@styles/Entries.module.scss'
import { Entry } from '@models'
import useBooks from '@zustand/useBooks'
import EntryIcon from './EntryIcon'
import { formatDistanceToNowStrict } from 'date-fns'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnDef
} from '@tanstack/react-table'
import EntryOptions from './EntryOptions'
import { useState } from 'react'
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs'

const columnHelper = createColumnHelper<Entry>()

const columns = [
  columnHelper.accessor('type', {
    header: 'Type',
    cell: (info) => <EntryIcon type={info.getValue()} />
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('page', {
    header: 'Page',
    cell: (info) => info.getValue() || '-'
  }),
  columnHelper.accessor('createdAt', {
    header: 'Created At',
    cell: (info) =>
      formatDistanceToNowStrict(info.getValue(), { addSuffix: true })
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
    getSortedRowModel: getSortedRowModel()
  })

  return (
    <div className={styles.container}>
      <table
        className={styles.table}
        //
        style={{ height: !!entries.length ? 'auto' : '100%' }}
      >
        {/* INIT THEAD */}
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      onClick={header.column.getToggleSortingHandler()}
                      className={styles.header}
                    >
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
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* END THEAD */}

        {/* INIT TBODY */}
        <tbody className={styles.tbody}>
          {entries.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <EntryOptions entry={entries[+row.id]} />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className={styles.noRowsMessage}>
                <p>No entries to show</p>
              </td>
            </tr>
          )}
        </tbody>
        {/* END TBODY */}
      </table>
    </div>
  )
}

export default Entries
