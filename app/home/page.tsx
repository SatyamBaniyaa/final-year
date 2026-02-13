"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { home } from "@/lib/auth.validator";
import { z } from "zod";

type HomePayload = z.infer<typeof home>;

interface HistoryItem {
  userPrompt: string;
  systemResult: string;
}

export default function Home() {
  const { register, handleSubmit, reset } = useForm<HomePayload>({
    defaultValues: { prompt: "" },
  });

  const [results, setResults] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // 🔹 Fetch history
  const fetchHistory = async () => {
    try {
      const user = window.localStorage.getItem("user");
      if (!user) return;

      const userId = JSON.parse(user)._id;

      const response = await fetch(`/api/recent-history?userId=${userId}`);

      const data = await response.json();

      if (!response.ok) return;

      setHistory(data.messages || []);
    } catch (error) {
      console.log("Fetch history error:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // 🔹 Submit Prompt
  const onSubmit = async (values: HomePayload) => {
    if (!values.prompt.trim()) return;

    try {
      const user = window.localStorage.getItem("user");
      if (!user) return;

      const userId = JSON.parse(user)._id;

      const response = await fetch("/api/prompt-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          prompt: values.prompt,
        }),
      });

      const data = await response.json();

      if (!response.ok) return;

      setResults(data.result);
      reset();

      fetchHistory(); // refresh grid
    } catch (error) {
      console.log("Submission error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Image
            src="/Image.png"
            alt="Vibe logo"
            width={24}
            height={24}
            className="rounded-full bg-orange-400"
          />
          Vibe
        </div>

        <div className="flex gap-3">
          <Link href="/signup">
            <button className="rounded-md border px-4 py-2 text-sm">
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button className="rounded-md bg-orange-500 text-white px-4 py-2 text-sm">
              Log in
            </button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-24">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Image.png"
            alt="logo"
            width={56}
            height={56}
            className="mb-6 rounded-full bg-orange-400"
          />

          <h1 className="text-4xl font-semibold">Build Something With Vibe</h1>
          <p className="mt-3 text-neutral-500">
            Create apps and websites by chatting with AI
          </p>

          {/* Textarea */}
          <div className="relative w-full max-w-2xl mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                {...register("prompt", {
                  required: true,
                  minLength: 10,
                })}
                className="w-full resize-none rounded-lg border p-4 pr-28 outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="What would you like to build?"
                rows={4}
              />

              <button
                type="submit"
                className="absolute bottom-3 right-3 rounded-md bg-orange-500 px-4 py-1 text-sm text-white hover:bg-orange-600"
              >
                Enter
              </button>
            </form>
          </div>

          {/* Result */}
          {results && (
            <div className="mt-8 w-full max-w-2xl rounded-lg border p-4 text-left whitespace-pre-wrap">
              {results}
            </div>
          )}

          {/* Recent History */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 w-full max-w-2xl">
            {history.length === 0 ? (
              <p className="text-sm text-neutral-500 col-span-full text-center">
                No recent history
              </p>
            ) : (
              history
                .slice()
                .reverse()
                .slice(0, 6)
                .map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setResults(item.systemResult)}
                    className="flex items-center justify-between rounded-lg border px-4 py-3 hover:bg-orange-50 cursor-pointer transition"
                  >
                    <span className="text-sm font-medium truncate">
                      {item.userPrompt}
                    </span>
                    <DynamicIcon name="clock" size={18} />
                  </div>
                ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
