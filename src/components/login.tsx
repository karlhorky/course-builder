'use client'
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DBRH42mJKXr
 */
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {signIn} from "next-auth/react";
import { Icon } from "./icons";

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Log In</h1>
      <Button
        data-button=""
        variant="outline"
        onClick={() =>
          signIn('github', {
            callbackUrl: '/',
          })
        }
      >
        <Icon
          className="mr-2 flex items-center justify-center"
          name="Github"
          size="20"
        />
        Log in with Github
      </Button>
    </div>
  )
}
