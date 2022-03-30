import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import Screen from "../component/Screen";
import { AppForm, AppFormField, SubmitButton } from "../component/forms";
import FormImagePicker from "../component/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Email"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image "),
});

const category = [
  { label: "l", value: 1 },
  { label: "e", value: 2 },
];
export default function ListEditScreen() {
  const location = useLocation();

  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(value) => console.log(location)}
        validationSchema={validationSchema}
      />
      <AppFormField maxLength={225} name="title" placeholder="Title" />
      <AppFormField
        keyboardType="numeric"
        maxLength={8}
        name="price"
        placeholder="Price"
      />
      <FormImagePicker name="Images" />
      <AppFormField items={category} name="Category" placeholder="Category" />
      <AppFormField
        maxLength={225}
        multiline
        name="description"
        numberOfLines={3}
        placeholder="Description"
      />
      <SubmitButton title="Post" />
    </Screen>
  );
}

const styles = StyleSheet.create({});
