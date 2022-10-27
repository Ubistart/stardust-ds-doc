import React from "react";
import { Table } from "../Table";

const defaultHeaders = ["Nome", "Tipo", "Padrão", "Descrição"];

interface Props {
  title: string;
  rows: string[][];
  headers?: string[];
}

export const TableProps = ({
  rows,
  title,
  headers = defaultHeaders,
}: Props): JSX.Element => {
  if (!rows) throw new Error("Table rows are required");
  if (!title) throw new Error("Table title is required");

  return <Table title={title} rows={rows} headers={headers} />;
};
