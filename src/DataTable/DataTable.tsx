import React, { FC } from "react";
import DataTable from "react-data-table-component";
import { Columns } from "../data/column";
import { data } from "../data/row";
import { conditionalRowStyles } from "../data/conditional-row";
const Table: FC = () => {
  return (
    <DataTable
      columns={Columns}
      data={data}
      conditionalRowStyles={conditionalRowStyles}
      defaultSortAsc
      pagination
    />
  );
};

export default Table;
