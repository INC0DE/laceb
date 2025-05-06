"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";

const contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c9bbkif", "template_83cfzjb", form.current, {
        publicKey: "zOrFRLhr_LVG9BBET",
      })
      .then(
        () => {
          setSuccess("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="flex flex-col bg-bg">
      <div className="w-full h-44 bg-blue content-center">
        <h1 className="text-white text-5xl md:text-6xl font-medium ml-4 lg:ml-10">
          CONTACTO.
        </h1>
      </div>

      <div className="w-full justify-items-center space-y-10 relative pb-10">
        <Image
          src="/assets/tips.jpg"
          alt="herolaceb"
          layout="fill"
          objectFit="cover"
          className="brightness-50 w-full"
          priority
        />

        <Form
          ref={form}
          onSubmit={sendEmail}
          className="w-64 max-w-80 p-5 bg-white flex flex-col gap-5 rounded-xl md:w-72 md:p-8 lg:w-80 lg:p-10 "
          validationBehavior="native"
        >
          <Input
            isRequired
            color="foreground"
            className="max-w-xs"
            errorMessage="Please enter a valid username"
            label="Nombre."
            labelPlacement="outside"
            name="from_name"
            placeholder="Escribe tu nombre."
            type="text"
          />

          <Input
            isRequired
            color="foreground"
            errorMessage="Please enter a valid email"
            label="Número."
            labelPlacement="outside"
            name="number"
            placeholder="Escribe tu número o correo electronico."
            type="text"
          />

          <Textarea
            isRequired
            color="foreground"
            size="lg"
            errorMessage="Please enter a valid email"
            label="Descripción."
            labelPlacement="outside"
            name="message"
            placeholder="Describe tu negocio y tus intereses."
            type="text"
          />
          <div className="flex gap-2 self-center ">
            <Button className="bg-green" type="submit">
              Enviar
            </Button>
            <Button
              className="bg-orange"
              type="reset"
              variant="flat"
              value="Send"
            >
              Borrar
            </Button>
          </div>
        </Form>
        {success && (
          <p className="text-green justify-self-center mt-5">
            ¡Formulario enviado con éxito!
          </p>
        )}

        <Button className="bg-orange" size="lg">
          Aviso de privacidad
        </Button>
      </div>
    </section>
  );
};

export default contact;
