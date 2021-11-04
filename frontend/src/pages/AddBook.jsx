import styled from "styled-components";
import { Link } from "react-router-dom";
import { AddBookImg } from "../constant";
import { useState } from "react";
import { AddBookInStore } from "../redux/slices/Bookslice";
import { useDispatch } from "react-redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${AddBookImg}) center;
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
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

const AddBook = () => {
  const [name, setname] = useState("");
  const [author, setauthor] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState("");

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
              AddBookInStore({
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
          <Agreement>
            By adding this book, I consent to giving access to this book to all
            the members of this library <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddBook;
