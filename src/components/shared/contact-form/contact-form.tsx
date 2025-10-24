"use client";

import React, { FC } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Icon from "@/components/shared/icon";
import { Input, InputVariant } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";

import { ContactFormProps, FormData } from "./interfaces";
import { ElProps } from "@/types/common";

const ContactForm: FC<ContactFormProps> = ({ v2 }) => {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
      nda: false,
      attachment: undefined,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-6 xs:space-y-8")}
      >
        <div className="space-y-6 xs:space-y-8 md:flex md:gap-12 md:space-y-0 lg:grid lg:gap-0 lg:space-y-8">
          <FormField
            name="name"
            render={() => (
              <FormItem className="md:basis-1/2">
                <FormLabel className="font-bold">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    variant={v2 ? InputVariant.asDivider : InputVariant.asDark}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {v2 ? null : (
            <FormField
              name="company"
              render={() => (
                <FormItem className="md:basis-1/2">
                  <FormLabel className="font-bold">Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company"
                      variant={
                        v2 ? InputVariant.asDivider : InputVariant.asDark
                      }
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            name="email"
            render={() => (
              <FormItem className="md:basis-1/2">
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="E.g. johndoe@email.com"
                    variant={v2 ? InputVariant.asDivider : InputVariant.asDark}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="message"
          render={() => (
            <FormItem>
              <FormLabel className="font-bold">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type it out here..."
                  rows={1}
                  variant={v2 ? InputVariant.asDivider : InputVariant.asDark}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid md:gap-8 space-y-6 md:space-y-0">
          <div
            className={cn(
              "whitespace-nowrap md:flex md:justify-between items-center space-y-6 md:space-y-0 lg:gap-7",
              {
                "text-mid-gray": !v2,
              }
            )}
          >
            <FormField
              name="nda"
              render={() => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox />
                  </FormControl>
                  <FormLabel>I’d like to sign an NDA</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem className="flex items-center gap-2 md:gap-3">
              <Icon className="text-2xl" icon="link" />
              <FormLabel>Add an attachment</FormLabel>
              <FormControl>
                <input type="file" className="hidden" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>
          <div className="md:flex md:justify-between items-center space-y-6 md:space-y-0 lg:gap-7">
            <div className="whitespace-pre-line text-[10px] max-w-60.5 md:max-w-52 lg:max-w-35 xl:max-w-fit">
              By sending this form, I confirm that I have read and accept the
              <Link
                href="/privacy-policy"
                target="_blank"
                className={cn("underline ml-1", {
                  "text-accent-primary": !v2,
                })}
              >
                Privacy Policy
              </Link>
              .
            </div>
            <Button
              className={cn("w-full tracking-[0.9px] md:w-fit", {
                "text-blue-marguerite": v2,
              })}
              variant={v2 ? "secondary" : "destructive"}
              type="submit"
              size="lg"
            >
              Send a Message
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
