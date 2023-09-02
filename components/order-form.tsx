"use client"

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email"
  }),
});

const OrderForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium text-lg">Email</FormLabel>
              <FormControl className="font-medium text-lg">
                <Input
                  className="font-medium text-md"
                  placeholder="your-email@example.com" {...field} />
              </FormControl>
              <FormMessage className="font-medium text-lg"/>
            </FormItem>
          )}
        />
        <Button type="submit">Make order</Button>
      </form>
    </Form>
  )
}

export default OrderForm;