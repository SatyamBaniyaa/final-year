import Image from "next/image";

export default function SignIn(){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* close */}

        <button className="absolute right-4 top-4 text-netural-400 hover:text-netural-600">
          x
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold">
          SigIn in to Vibe
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-500">
          Welcome back! Please sign in to continue
        </p>

        {/* google */}
        <button className="mt-6 flex w-full items-center justify-centepointerr gap-3 rounded-lg border px-4 py-3 text-sm font-medium hover:bg-orange-100 cursor-" >
          <Image
          src="/google.svg"
          alt="logo"
          width={18}
          height={18}
          />
          Continue with Google
        </button>
        <div className="my-6 flex items-center gap-3 text-xs text-neutral-400">
        <div className="h-1px flex-1 bg-neutral-200"/>
        or
        <div className="h-1px flex-1 bg-neutral-200"/>
        </div>
        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Email address</label>
          <input
          type="email"
          placeholder="Enter your email address"
          className="w-full rounded-lg border py-3 px-2 text-sm outline-none "
           />
        </div>

        {/* continue */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-800 py-3 text-sm font-medium text-white hover:bg-neutral-700 cursor-pointer">
          Continue
          <span>▶</span>
        </button>

        {/* footer */}
        <p className="mt-6 text-center text-sm text-neutral-500">
          Don&apos;t have an account?{" "}
          <span className="cursor-pointer font-medium text-neutral-800 hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>

  );
}
