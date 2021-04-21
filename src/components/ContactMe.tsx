import React from "react";
import styled from "styled-components";

import { Wrapper, Heading } from "./index";

const ContactMe: React.FC = () => {
  return (
    <Wrapper id="contact-me">
      <Heading title="Contattami" />
      <Description>
        Vuoi discutere di un nuovo progetto? Ecc... Scrivimi, ecc.
      </Description>
      <FormContainer>
        <InputContainer>
          <InputLabel htmlFor="name">Nome</InputLabel>
          <Input type="text" name="name" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input type="email" name="email" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="message">Messaggio</InputLabel>
          <Input name="message" as="textarea" />
        </InputContainer>
        <SendButton type="submit" value="Invia" />
      </FormContainer>
    </Wrapper>
  );
};

export default ContactMe;

const Description = styled.div`
  font-size: 1rem;
  color: #fff;
`;

const FormContainer = styled.form.attrs({
  "aria-label": "Form per contattarmi",
  "data-netlify": "true",
})`
  display: grid;
  gap: 1rem;
`;

const InputContainer = styled.div`
  display: grid;
  gap: 0.4rem;
`;

const InputLabel = styled.label`
  color: #ccd6f6;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  outline: none;

  font-size: 1rem;

  color: #fff;

  transition: 0.5s ease;

  padding: 0.6rem 0.4rem;

  border: none;
  border-radius: 4px;
  border-bottom: 4px #fff solid;

  box-sizing: border-box;

  resize: vertical;

  font-family: "Poppins";

  :focus {
    border-bottom: 4px orange solid;
  }
`;

const SendButton = styled.input.attrs({
  "aria-label": "Inviami un messaggio",
})`
  width: 100%;
  border: none;
  border-radius: 0px;

  margin-top: 1rem;
  padding: 0.8rem 0 calc(0.8rem - 6px) 0;

  font-size: 1.3rem;
  font-weight: 800;

  background-color: orange;
  color: #fff;

  cursor: pointer;

  transition: 0.3s ease-in-out;

  border-radius: 4px;
  border-bottom: 6px orange solid;

  :hover {
    border-bottom-color: #fff;
  }
`;
