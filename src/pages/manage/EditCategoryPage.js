import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field, FieldCheckboxes } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import Heading from "components/layout/Heading";
import { db } from "config/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import FormContainer from "layout/FormContainer";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useSearchParams } from "react-router-dom";
import slugify from "slugify";
import { categoryStatus } from "utils/constants";

const EditCategoryPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });
  const [params] = useSearchParams();
  const id = params.get("id");
  const handleUpdateCategory = (values) => {
    console.log(values);
    const colRef = doc(db, "category", id);
    updateDoc(colRef, {
      ...values,
      slug: slugify(values.slug || values.name, { lower: true }),
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const colRef = doc(db, "categories", id);
      const singleDoc = await getDoc(colRef);
      reset({ ...singleDoc.data() });
    };
    fetchData();
  }, []);

  return (
    <FormContainer>
      <Heading>Add new category</Heading>
      <form onSubmit={handleSubmit(handleUpdateCategory)}>
        <div className="field-format">
          <Field>
            <Label>Name</Label>
            <Input name="name" control={control} placeholder=""></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input name="slug" control={control} placeholder=""></Input>
          </Field>
        </div>
        <Field>
          <Label>Status</Label>
          <FieldCheckboxes>
            <Radio
              name="status"
              control={control}
              checked={Number(watch("status")) === categoryStatus.UNAPPROVED}
              value={categoryStatus.UNAPPROVED}
            >
              Unapproved
            </Radio>
            <Radio
              name="status"
              control={control}
              checked={Number(watch("status")) === categoryStatus.APPROVED}
              value={categoryStatus.APPROVED.toString()}
            >
              Approved
            </Radio>
          </FieldCheckboxes>
        </Field>
        <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
          Create
        </Button>
      </form>
    </FormContainer>
  );
};

export default EditCategoryPage;
