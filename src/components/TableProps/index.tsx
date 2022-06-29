import React from "react";
import { Table } from "../Table";

const headers = ["Nome", "Tipo", "Padrão", "Descrição"];

interface Props {
  title: string;
  rows: string[][];
}

export const TableProps = ({ rows, title }: Props): JSX.Element => {
  if (!rows) throw new Error("Table rows are required");
  if (!title) throw new Error("Table title is required");

  return <Table title={title} rows={rows} headers={headers} />;
};
