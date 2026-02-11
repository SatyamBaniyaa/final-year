"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Login } from "@/lib/auth.validator";

type LoginPlayload = z.infer<typeof Login>;

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(Login),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onsubmit = (values: LoginPlayload) => {
    console.log(values);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold">Login in to Vibe</h2>
        <p className="m-2 text-center text-sm text-neutral-500">
          Welcome! Please Login in to continue
        </p>

        <form onSubmit={handleSubmit(onsubmit)}>
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Email address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border py-3 px-2 text-sm outline-none "
            />
            <div className="m-1 text-blue-500 ">{errors?.email?.message}</div>
          </div>
          {/* Password */}

          <div className="space-y-2 mt-2">
            <label className="text-sm font-medium">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border py-3 px-2 text-sm outline-none "
            />

            <div className="m-1 text-blue-500 ">{errors?.password?.message}</div>
          </div>

          {/* continue */}
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-800 py-3 text-sm font-medium text-white hover:bg-neutral-700 cursor-pointer">
            Continue
            <span>▶</span>
          </button>

          {/* footer */}
          <Link href="\signin">
            <p className="mt-6 text-center text-sm text-neutral-500">
              Don&apos;t have an account?{" "}
              <span className="cursor-pointer font-medium text-neutral-800 hover:underline">
                Sign up
              </span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
