"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { info } from "@/lib/constants";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { messageFormSchema } from "@/lib/models/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const ContactPage = () => {
  const [submitError, setSubmitError] = useState("");
  const { toast } = useToast();
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (value) => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(value),
      });
      if (!response.ok) {
        setSubmitError("😓Error sending message.");
        // form.reset();
        return;
      }
      toast({ description: "Message sent successsfully" });
      form.reset();
    } catch (err) {
      console.log(err);
      setSubmitError("😓Error sending message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:h-[54%]">
            <Form {...form}>
              <form
                onChange={() => {
                  if (submitError) setSubmitError("");
                }}
                className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <h3 className="text-4xl text-accent"> Let's work together</h3>
                <p className="text-white/60">
                  Interested in working together? I'm available for freelance
                  work. Get in touch.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="*First Name"
                            {...field}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Last Name"
                            {...field}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="*Email"
                            {...field}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Phone Number"
                            {...field}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select a service</SelectLabel>
                            <SelectItem value="fullstack">
                              Full Stack
                            </SelectItem>
                            <SelectItem value="frontend">
                              Frontend Development
                            </SelectItem>
                            <SelectItem value="backend">
                              Backend Development
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="h-[200px]"
                          placeholder="*Type your message here."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  disabled={isLoading}
                  size="md"
                  className="max-w-40"
                  type="submit"
                >
                  {isLoading ? <Loader2 /> : "Send message"}
                </Button>
                {submitError && <FormMessage>{submitError}</FormMessage>}
              </form>
            </Form>
          </div>
          {/* info */}
          <div className="mb-8 flex flex-1 items-center xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="xl-h-[72px] flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:w-[72px]">
                    {item?.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="text-[28px]"
                      >
                        {item?.icon}
                      </Link>
                    ) : (
                      <div className="text-[28px]">{item?.icon}</div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item?.title}</p>
                    <p className="text-base md:text-xl">{item?.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
