"use client";

import React from "react";
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

const ContactPage = () => {
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
            <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
              <h3 className="text-4xl text-accent"> Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                doloremque ab quam voluptate alias officia, qui laudantium cum
                tempora maiores eum fugit perspiciatis nesciunt inventore porro
                quos veritatis temporibus illum?
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input id="firstName" type="text" placeholder="First Name" />
                <Input id="lastName" type="text" placeholder="Last Name" />
                <Input id="email" type="text" placeholder="Email address" />
                <Input id="phone" type="text" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="mb-8 flex flex-1 items-center xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="xl-h-[72px] flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:w-[72px]">
                    <div className="text-[28px]">{item?.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item?.title}</p>
                    <p className="text-xl">{item?.description}</p>
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
