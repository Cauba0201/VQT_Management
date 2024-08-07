"use client";

import * as React from "react";
// import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

import { useSelection } from "../../hooks/useSelection";

function noop(): void {
  // do nothing
}

export interface Customer {
  id: string;
  avatar: string;
  name: string;
  email: string;
  address: { city: string; state: string; country: string; street: string };
  phone: string;
  createdAt: Date;
}

interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: Customer[];
  rowsPerPage?: number;
}

const data = [
  {
    id: 1,
    name: 'Nguyen Van A',
    email: 'abc@gmail.com',
    location: 'Cau Giay, Ha Noi',
    phone: '0912345678',
    status: true,
  },
  {
    id: 2,
    name: 'Nguyen Van B',
    email: 'abc@gmail.com',
    location: 'Cau Giay, Ha Noi',
    phone: '0912345678',
    status: false,
  },
];

export function CustomersTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: CustomersTableProps): React.JSX.Element {
  const rowIds = React.useMemo(() => {
    return rows.map((customer) => customer.id);
  }, [rows]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } =
    useSelection(rowIds);

  const selectedSome =
    (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < rows.length;
  const selectedAll = rows.length > 0 && selected?.size === rows.length;

  return (
    <Card sx={{ borderRadius: "10px" }}>
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      selectAll();
                    } else {
                      deselectAll();
                    }
                  }}
                />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              const isSelected = selected?.has(item.id);

              return (
                <TableRow hover key={item.id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          selectOne(item.id);
                        } else {
                          deselectOne(item.id);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack
                      sx={{ alignItems: "center" }}
                      direction="item"
                      spacing={2}
                    >
                      {/* <Avatar src={item.avatar} /> */}
                      <Typography variant="subtitle2">{item.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    {/* {item.address.city}, {item.address.state},{" "}
                    {item.address.country} */}
                    {item.location}
                  </TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>
                    {dayjs(item.createdAt).format("MMM D, YYYY")}
                    
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
