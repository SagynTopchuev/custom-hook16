import styled from "styled-components";
import { useValid } from "../../custom-hooks/customInput/input";

export const Input = ({ type }) => {
  const { valid, validateInput, handleChange } = useValid("", type);
  console.log(validateInput());
  return (
    <Form>
      {" "}
      <InputStyled
        style={
          validateInput() === false
            ? { color: "red", background: "#001e3c" }
            : { backgroundColor: "#3f9e3f90", color: "#007FFF" }
        }
        type={type}
        placeholder={type}
        value={valid}
        onChange={handleChange}
      />
    </Form>
  );
};
const Form = styled.form`
  margin: 0 auto;

  width: 300px;
  height: 70px;
  /* background-color: ; */
  border: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputStyled = styled.input`
  color: #007fff;
  width: 200px;
  height: 25px;
  background-color: #ffa60060;
  border-radius: 10px;
  /* background-color: #3f9e3f90; */
`;
