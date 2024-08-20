"use client";

import * as React from "react";
import dayjs from "dayjs";
import {
  Box,
  Card,
  Checkbox,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelection } from "../../hooks/useSelection";
import { useMemo, useState } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  createdAt: string;
  author: string;
}

interface CustomersTableProps {
  customers: UserData[];
}

export const CustomersTable: React.FC<CustomersTableProps> = ({
  customers,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rowIds = useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } =
    useSelection(rowIds);

  const selectedSome =
    (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < customers.length;
  const selectedAll =
    customers.length > 0 && selected?.size === customers.length;

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
              <TableCell sx={{ fontWeight: "bold" }}>Author</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
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
                        direction="row"
                        spacing={2}
                      >
                        <Typography variant="subtitle2">{item.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>
                      {dayjs(item.createdAt).format("MMM D, YYYY")}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          height: "30px",
                          width: "60px",
                          bgcolor:
                            item.author.toLowerCase() === "user"
                              ? "#1976d2"
                              : "red",
                          color: "white",
                          padding: "5px",
                          justifyContent: "center",
                          textAlign: "center",
                          borderRadius: "10px",
                        }}
                      >
                        {item.author}
                      </Box>
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
        count={customers.length}
        onPageChange={(_event, newPage) => setPage(newPage)}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(Number(event.target.value));
          setPage(0);
        }}
      />
    </Card>
  );
};
