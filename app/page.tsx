'use client';

import { AuthForm } from "@/components/auth-form";
import { Suspense } from "react";
export default function Home() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Suspense>
          <AuthForm />
        </Suspense>
      </div>
    </div>
  );
}
