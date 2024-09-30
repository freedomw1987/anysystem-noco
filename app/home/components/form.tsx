"use client";
import React from "react";
import {
  AppProvider,
  FormComponent,
  Container,
  Text,
  Modal,
  Button,
  ModalHandler,
} from "anysystem-design";
import "anysystem-design/dist/index.css";

type HomePageFormValues = {
  username: string;
  phonenumber: string;
  password: string;
  date?: number;
  checkbox?: boolean;
  radio?: string;
};
export default function Form() {
  const modalRef = React.useRef<ModalHandler>(null);
  return (
    <AppProvider appName="anysystem-noco">
      <Container className="flex flex-col gap-2">
        <Text tag="h1">Sign in</Text>
        <Text tag="p">to continue to anysystem.</Text>
        <FormComponent<HomePageFormValues>
          fields={[
            [
              {
                name: "username",
                dataType: "string",
                value: "davidaasm@gmail.com",
                validation: [
                  { type: "required", message: "Required" },
                  { type: "email", message: "Invalid email" },
                ],
                componentProps: {
                  type: "text",
                  labelProps: { label: "Username" },
                  placeholder: "Username",
                  variant: "sm",
                },
              },
              {
                name: "password",
                dataType: "string",
                value: "123123",
                validation: [{ type: "required", message: "Required" }],
                componentProps: {
                  type: "password",
                  labelProps: { label: "Password" },
                  placeholder: "Password",
                  variant: "sm",
                },
              },
            ],
            {
              name: "phonenumber",
              dataType: "string",
              value: "852-66297530",
              validation: [
                { type: "required", message: "Required" },
                { type: "max", value: 12, message: "Invalid phone number" },
              ],
              componentProps: {
                variant: "sm",
                type: "tel",
                placeholder: "Phone number",
                phonePrefix: "853",
                phonePrefixOptions: [
                  {
                    id: "1",
                    label: "Macau +853",
                    value: "853",
                    enable: true,
                  },
                  {
                    id: "2",
                    label: "Hong Kong +852",
                    value: "852",
                    enable: true,
                  },
                  {
                    id: "3",
                    label: "China +86",
                    value: "86",
                    enable: true,
                  },
                ],
                labelProps: { label: "Phone number" },
              },
            },
            {
              name: "birthOfDate",
              dataType: "string",
              value: Math.round(new Date().getTime() / 1000) + "",
              componentProps: {
                variant: "sm",
                type: "datetime",
                labelProps: { label: "Birth of date" },
              },
            },
            {
              name: "gender",
              dataType: "string",
              value: "M",
              componentProps: {
                variant: "sm",
                type: "radio",
                labelProps: { label: "Gender" },
                options: [
                  {
                    id: "M",
                    label: "Male",
                    value: "M",
                    enable: true,
                  },
                  {
                    id: "F",
                    label: "Female",
                    value: "F",
                    enable: true,
                  },
                ],
              },
            },
            {
              name: "country",
              dataType: "string[]",
              value: ["Macau"],
              componentProps: {
                variant: "sm",
                type: "autocomplete",
                multiple: true,
                labelProps: { label: "Country" },
                options: [
                  {
                    id: "1",
                    label: "Macau",
                    value: "Macau",
                    enable: true,
                  },
                  {
                    id: "2",
                    label: "Hong Kong",
                    value: "Hong Kong",
                    enable: true,
                  },
                  {
                    id: "3",
                    label: "China",
                    value: "China",
                    enable: true,
                  },
                ],
              },
            },
            {
              name: "confirm",
              dataType: "string",
              value: false,
              componentProps: {
                type: "confirm",
                labelProps: { label: "Checkbox" },
              },
            },
            {
              name: "Switch",
              dataType: "string",
              value: false,
              componentProps: {
                variant: "sm",
                type: "switch",
                labelProps: { label: "Checkbox" },
              },
            },
          ]}
          onSubmit={(values: HomePageFormValues) => console.log(values)}
          className="space-y-2"
        >
          <Button
            variant="primary"
            type="submit"
            onClick={() => modalRef.current?.show()}
          >
            Button
          </Button>
        </FormComponent>
      </Container>
    </AppProvider>
  );
}
