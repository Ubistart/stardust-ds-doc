import React from "react";
import styles from "./styles.module.css";

interface Props {
  title?: string;
  headers: string[];
  rows: string[][];
}

export const Table = ({ headers, rows, title }: Props) => {
  if (!headers) throw new Error("Table headers are required");
  if (!rows) throw new Error("Table rows are required");

  return (
    <div className={styles.container}>
      {title && <h2>{title}</h2>}

      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={`tr-${index}`}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
