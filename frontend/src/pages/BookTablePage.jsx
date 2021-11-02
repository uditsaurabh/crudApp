import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import BookTable from "../components/BookTable";

const BookTablePage = () => {
  const TableContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <div>
      <Navbar></Navbar>
      <TableContainer>
        <BookTable />
      </TableContainer>
    </div>
  );
};

export default BookTablePage;
