import { useState } from 'react'
import styles from '@styles/Entries.module.scss'
import { Entry } from '@models'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

interface EntriesProps {
  entries: Entry[]
}

const columnHelper = createColumnHelper<Entry>()

const columns = [
  columnHelper.accessor((row) => row.type, {
    id: 'type',
    header: () => <span>Type</span>,
    cell: (info) => <i>{info.getValue()}</i>
  }),
  columnHelper.accessor((row) => row.description, {
    id: 'description',
    header: () => <span>Description</span>,
    cell: (info) => <i>{info.getValue()}</i>
  }),
  columnHelper.accessor((row) => row.page, {
    id: 'page',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Page</span>
  }),
  columnHelper.accessor((row) => row.createdAt, {
    id: 'createdAt',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Created At</span>
  })
]

const Entries = ({ entries }: EntriesProps) => {
  const [data, setData] = useState(() => [...entries])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        {/* INIT THEAD */}
        <thead className={styles.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className={styles.noRowsMessage}>
                <p>No rows to show</p>
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
