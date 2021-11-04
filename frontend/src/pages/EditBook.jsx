import styled from "styled-components";
import { Link } from "react-router-dom";
import { EditBookImg } from "../constant";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditBookInStore } from "../redux/slices/Bookslice";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${EditBookImg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EditBook = (props) => {
  const {
    state: { _id, BookName, Author, Price, Published_Date },
  } = useLocation();

  const [name, setname] = useState(BookName);
  const [author, setauthor] = useState(Author);
  const [price, setprice] = useState(Price);
  const [date, setdate] = useState(Published_Date);

  const dispatch = useDispatch();

  const HandleInput = (e, fn) => fn(e.target.value);

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Add Book</Title>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/"
          >
            Book List
          </Link>
        </TitleContainer>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              EditBookInStore({
                _id,
                BookName: name,
                Author: author,
                Price: price,
                Published_Date: date,
              })
            );
          }}
        >
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => {
              HandleInput(e, setname);
            }}
          />
          <Input
            placeholder="Author"
            value={author}
            onChange={(e) => {
              HandleInput(e, setauthor);
            }}
          />
          <Input
            placeholder="price"
            value={price}
            onChange={(e) => {
              HandleInput(e, setprice);
            }}
          />
          <Input
            placeholder="published Date"
            value={date}
            onChange={(e) => {
              HandleInput(e, setdate);
            }}
          />

          <Button>Submit Changes</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default EditBook;
