import { AnimatePresence, motion } from "framer-motion";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

import { Heading } from "./index";
import { Wrapper } from "./Utils";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>();
  const [showResult, setIsShowingResult] = useState<{
    type?: boolean;
    text?: string;
    isActive: boolean;
  }>({
    isActive: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResult = (type: boolean, text: string) => {
    setIsShowingResult({ type: type, text: text, isActive: true });
    setTimeout(() => {
      setIsShowingResult({ isActive: false });
    }, 4000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData?.name && formData?.email && formData?.message)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-me",
          ...formData,
        }),
      })
        .then((response) => {
          if (response.status === 200)
            handleResult(
              true,
              "Ho ricevuto il messaggio. Ti risponderò il prima possibile!"
            );
          else
            handleResult(
              false,
              'Qualcosa è andato storto... Scrivimi <a style="color: #fff;" href="mailto:info@demic.dev">qui</a>.'
            );
        })
        .catch(() =>
          handleResult(
            false,
            'Qualcosa è andato storto... Scrivimi <a style="color: #fff;" href="mailto:info@demic.dev">qui</a>.'
          )
        );
  };

  return (
    <RelativeWrapper id="contact-me">
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
      <AnimatePresence>
        {showResult.isActive && (
          <SubmissionResult
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            type={showResult.type}
          >
            <div dangerouslySetInnerHTML={{ __html: showResult.text }} />
            <SubmissionLine
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              exit={{ opacity: 0 }}
            />
          </SubmissionResult>
        )}
      </AnimatePresence>
    </RelativeWrapper>
  );
};

export default ContactMe;

const RelativeWrapper = styled(Wrapper)`
  position: relative;
`;

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

const SubmissionResult = styled(motion.div)<{ type: boolean }>`
  position: absolute;
  bottom: -4rem;

  width: 100%;
  padding: 1rem 1.2rem calc(1rem + 6px) 1.2rem;

  border-radius: 4px;
  background-color: ${({ type }) => (type ? "#0d8050" : "#DB3737")};

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 110%;
  text-align: center;
  font-weight: bold;
  color: #fff;

  overflow: hidden;
`;

const SubmissionLine = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;

  height: 6px;

  background-color: #fff;
`;
