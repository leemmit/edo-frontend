'use client'
import { RiEye2Fill } from "react-icons/ri";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useState } from "react";


import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})




export default function LoginPage() {
  const [isPasswordTyping, setIsPasswordTyping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="bg-gradient-to-tl from-[#dfe8ff] to-[#7b96f7] flex min-h-svh w-full justify-between px-20">
      {/* <div className="w-xs flex flex-col gap-6">
        <img src="/" alt="logo" />
        <h3 className="text-[var(--dark-gray)] font-black display-block">
          <span className="text-[var(--dark-blue)]">Авторизация </span><br/>
          в ИС «ЭДО»
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя пользователя</FormLabel>
                  <FormControl>
                    <Input placeholder="anna.podieezzhikh" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <div className="flex flex-row">
                      <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="********" 
                      {...field} 
                      onChange={(e) => {
                        field.onChange(e);
                        setIsPasswordTyping(e.target.value.length > 0);
                      }}/>
                      {isPasswordTyping && (
                        <button type="button" onClick={togglePasswordVisibility} className="ml-4 text-gray-700">
                            {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                        </button>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Войти в систему</Button>
            <Button variant="outline" className="w-full">Выйти из приложения</Button>
          </form>
        </Form>
      </div> */}
      <div className="w-xs flex flex-col gap-6">
        <img src="\mipk.png" alt="mipk_logo" className="w-25"/>
        <h3 className="text-[var(--dark-gray)] font-black display-block">
          <span className="text-[var(--dark-blue)]">Авторизация </span><br/>
          в ИС «ЭДО»
        </h3>
        <div>
          <p className="mb-2">Имя пользователя</p>
          <Input placeholder="anna.podieezzhikh"/>
        </div>
        <div>
          <p className="mb-2">Пароль</p>
          <div className="flex flex-row relative">
            <Input 
            type={showPassword ? "text" : "password"}
            placeholder="********"
            // value={password}
            onChange={(e) => {
                        setIsPasswordTyping(e.target.value.length > 0);
                      }}
            />
            {isPasswordTyping && (
            <button className="text-gray-700 absolute right-5 top-2.5 text-xl cursor-pointer hover:opacity-80" onClick={togglePasswordVisibility}>
              {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>
            )}
          </div>
        </div>
        <Button>Войти в систему</Button>
        <Button variant="outline">Выйти из приложения</Button>
      </div>
      <div className="w-xs my-10 bg-gray-400">
        <img src="/" alt="image" />
      </div>
    </div>
  )
}
