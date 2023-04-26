"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Input, Select, SelectOption, Textarea } from "@/components/";

/* eslint-disable @typescript-eslint/member-ordering */
type Inputs = {
  subject: string;
  firstName: string;
  lastName: string;
  mail: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  message: string;
};
/* eslint-enable @typescript-eslint/member-ordering */

const ERROR_MESSAGE = "Dies ist ein Pflichtfeld";

const Home = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register
  } = useForm<Inputs>({ mode: "onChange", delayError: 500 });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // TODO: Send data
    alert(JSON.stringify(data));
  };

  const testOptions: SelectOption[] = [
    { value: "subject1", label: "Subject 1" },
    { value: "subject2", label: "Subject 2" },
    { value: "subject3", label: "Subject 3" }
  ];

  return (
    <main className="flex min-h-screen flex-col  items-center justify-center p-24">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="container mb-3 grid grid-cols-3 gap-3">
          <Select
            className="col-span-1 "
            control={control}
            error
            label="Subject"
            name="subject"
            options={testOptions}
            placeholder="Please choose a subject"
            rules={{ required: ERROR_MESSAGE }}
            statusMessage={errors.subject?.message}
          />
          <Input
            {...register("firstName", { required: ERROR_MESSAGE })}
            className="col-span-1"
            error={Boolean(errors.firstName)}
            label="First name"
            name="firstName"
            statusMessage={errors.firstName?.message}
          />
          <Input
            {...register("lastName", { required: ERROR_MESSAGE })}
            className="col-span-1"
            error={Boolean(errors.lastName)}
            label="Last name"
            name="lastName"
            statusMessage={errors.lastName?.message}
          />
          <Input
            {...register("mail", { required: ERROR_MESSAGE })}
            className="col-span-1"
            error={Boolean(errors.mail)}
            label="Mail"
            name="mail"
            statusMessage={errors.mail?.message}
          />
          <Input
            {...register("phone", { required: ERROR_MESSAGE })}
            className="col-span-1"
            error={Boolean(errors.phone)}
            label="Phone"
            name="phone"
            statusMessage={errors.phone?.message}
          />
          <Input
            {...register("street", { required: ERROR_MESSAGE })}
            className="col-span-1"
            error={Boolean(errors.street)}
            label="Street"
            name="street"
            statusMessage={errors.street?.message}
          />
          <Input
            {...register("houseNumber", { required: ERROR_MESSAGE })}
            className="col-span-1"
            error={Boolean(errors.houseNumber)}
            label="House number"
            name="houseNumber"
            statusMessage={errors.houseNumber?.message}
          />
          <Input
            {...register("postalCode", { required: ERROR_MESSAGE })}
            className="col-span-1"
            error={Boolean(errors.postalCode)}
            label="Postal code"
            name="postalCode"
            statusMessage={errors.postalCode?.message}
          />
          <Input
            {...register("city", { required: ERROR_MESSAGE })}
            className="col-span-1"
            error={Boolean(errors.city)}
            label="City"
            name="city"
            statusMessage={errors.city?.message}
          />
          <Textarea
            {...register("message", { required: ERROR_MESSAGE })}
            className="col-span-3"
            error={Boolean(errors.message)}
            label="Your message"
            name="message"
            statusMessage={errors.message?.message}
          />
        </div>
        <div className="container flex justify-end">
          <Button type="submit">Absenden</Button>
        </div>
      </form>
    </main>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
