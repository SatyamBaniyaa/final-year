"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { SignUp } from "@/lib/auth.validator";

type SignupPayload = z.infer<typeof SignUp>;

export default function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupPayload>({
    resolver: zodResolver(SignUp),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignupPayload) => {
    try {
      const response = await fetch("/api/register", {
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

      router.push("/login");
    } catch (error) {
      console.log("Registration error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="text-center text-2xl font-semibold">Sign up to Vibe</h2>

        <p className="mt-2 text-center text-sm text-neutral-500">
          Create your account to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Google Button */}
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-orange-100"
          >
            <Image src="/google.svg" alt="logo" width={18} height={18} />
            Continue with Google
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-neutral-400">
            <div className="h-px flex-1 bg-neutral-200" />
            or
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">User Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border py-3 px-2 text-sm outline-none"
            />
            <div className="text-red-500 text-sm">{errors.name?.message}</div>
          </div>

          {/* Email */}
          <div className="space-y-2 mt-2">
            <label className="text-sm font-medium">Email address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border py-3 px-2 text-sm outline-none"
            />
            <div className="text-red-500 text-sm">{errors.email?.message}</div>
          </div>

          {/* Password */}
          <div className="space-y-2 mt-2">
            <label className="text-sm font-medium">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border py-3 px-2 text-sm outline-none"
            />
            <div className="text-red-500 text-sm">
              {errors.password?.message}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-800 py-3 text-sm font-medium text-white hover:bg-neutral-700"
          >
            {isSubmitting ? "Creating..." : "Continue"}
          </button>

          <Link href="/login">
            <p className="mt-6 text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <span className="font-medium text-neutral-800 hover:underline">
                Log in
              </span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
