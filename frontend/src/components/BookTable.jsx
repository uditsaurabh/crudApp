import styled from "styled-components";
import { BooktableBackgroundImage } from "../constant";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DeleteBookInStore } from "../redux/slices/Bookslice";
import { useEffect } from "react";
import { GetBooksInStore } from "../redux/slices/Bookslice";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${BooktableBackgroundImage}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  background-color: white;
`;
const TableHeader = styled.h1`
  font-size: 20px;
  font-weight: 400;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Column = styled.div``;
const TableData = styled.div`
  margin-top: 10px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin: 10px 0;
`;
const RowData = styled.div`
  text-align: center;
  width: 100px;
`;
const Btngrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  margin: 0 3px;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 25%;
  background-color: ${(props) => {
    if (props.update) return "darkgreen";
    else if (props.delete) return "darkred";
  }};
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;

function BookTable() {
  const dispatch = useDispatch();
  const history = useHistory();
  const books = useSelector((state) => state.BookReducer);

  useEffect(() => {
    dispatch(GetBooksInStore());
  }, []);

  return (
    <Container>
      <Wrapper>
        <TableHeader>
          <Column>BookName</Column>
          <Column>Author</Column>
          <Column>Price</Column>
          <Column>Published Date</Column>
          <Column>Action</Column>
        </TableHeader>
        <TableData>
          {books.length ? (
            books.map(
              ({ _id, BookName, Author, Price, Published_Date }, index) => {
                return (
                  <Row key={index}>
                    <RowData>{BookName}</RowData>
                    <RowData>{Author}</RowData>
                    <RowData>{Price}</RowData>
                    <RowData>{Published_Date}</RowData>
                    <Btngrp>
                      <Button
                        update
                        onClick={() => {
                          history.push({
                            pathname: "/edit",
                            state: {
                              _id,
                              BookName,
                              Author,
                              Price,
                              Published_Date,
                            },
                          });
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        delete
                        onClick={(e) => {
                          dispatch(DeleteBookInStore(_id));
                        }}
                      >
                        Delete
                      </Button>
                    </Btngrp>
                  </Row>
                );
              }
            )
          ) : (
            <h2 style={{ textAlign: "center" }}>No Books found</h2>
          )}
        </TableData>
      </Wrapper>
    </Container>
  );
}
export default BookTable;
