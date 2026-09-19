import type { Table } from '../content/post'
import './DataTable.css'

interface DataTableProps {
  table: Table
}

/** Renders a results table as a real <table>, scrollable on narrow screens. */
export function DataTable({ table }: DataTableProps) {
  return (
    <figure className="data-table">
      <div className="data-table__scroll">
        <table>
          <thead>
            <tr>
              {table.columns.map((column, index) => (
                <th key={column} scope="col" className={index === 0 ? '' : 'num'}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.cells.join('|')}>
                {row.cells.map((cell, index) => {
                  const strong = row.strong?.includes(index)
                  const content = strong ? <strong>{cell}</strong> : cell
                  return index === 0 ? (
                    <th key={index} scope="row">{content}</th>
                  ) : (
                    <td key={index} className="num">{content}</td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.caption && <figcaption>({table.caption})</figcaption>}
    </figure>
  )
}
