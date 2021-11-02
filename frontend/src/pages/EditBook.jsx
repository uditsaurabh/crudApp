import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("data:image/jpeg;base64,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")
      center;
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
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const EditBook = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Edit Book</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="Author" />
          <Input placeholder="price" />
          <Input placeholder="published Date" />

          <Button>Submit Changes</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default EditBook;
