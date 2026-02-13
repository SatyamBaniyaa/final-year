"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Login } from "@/lib/auth.validator";

type LoginPayload = z.infer<typeof Login>;

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginPayload>({
    resolver: zodResolver(Login),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginPayload) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        return;
      }
      window.localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/home");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="text-center text-2xl font-semibold">Login in to Vibe</h2>

        <p className="m-2 text-center text-sm text-neutral-500">
          Welcome! Please login to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border py-3 px-2 text-sm outline-none"
            />
            <div className="m-1 text-blue-500">{errors?.email?.message}</div>
          </div>

          <div className="space-y-2 mt-2">
            <label className="text-sm font-medium">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border py-3 px-2 text-sm outline-none"
            />
            <div className="m-1 text-blue-500">{errors?.password?.message}</div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-800 py-3 text-sm font-medium text-white hover:bg-neutral-700 cursor-pointer"
          >
            {isSubmitting ? "Loading..." : "Continue"}
          </button>

          <Link href="/signup">
            <p className="mt-6 text-center text-sm text-neutral-500">
              Don&apos;t have an account?{" "}
              <span className="font-medium text-neutral-800 hover:underline">
                signup
              </span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
