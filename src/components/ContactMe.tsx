import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

import { Wrapper, Heading } from "./index";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<object>();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact-me",
        ...formData,
      }),
    })
      .then(() => alert("ok!"))
      .catch((error) => alert(error));
  };

  return (
    <Wrapper id="contact-me">
      <Heading title="Contattami" />
      <Description>
        Vuoi discutere di un nuovo progetto? Ecc... Scrivimi, ecc.
      </Description>
      <FormContainer
        name="contact-me"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" onChange={handleChange} />
        <InputContainer>
          <InputLabel htmlFor="name">Nome</InputLabel>
          <Input type="text" name="name" onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input type="email" name="email" onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="message">Messaggio</InputLabel>
          <Input name="message" as="textarea" onChange={handleChange} />
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
