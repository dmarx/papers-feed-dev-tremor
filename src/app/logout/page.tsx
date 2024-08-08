"use client"

import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Logo } from "@/components/ui/Logo";
import { RiGithubFill, RiGoogleFill } from '@remixicon/react';

export default function Login() {
  return (
    <>
      <div className="flex min-h-dvh items-center justify-center p-4 sm:p-6">
        <div className="flex w-full sm:max-w-sm flex-col items-start">
          <div className=" bg-white ring-1 ring-black/5 shadow-lg relative flex items-center justify-center rounded-lg p-3">
            <Logo className="size-8 text-blue-500 dark:text-blue-500" aria-hidden="true" />
          </div>
          <div className="mt-6 flex flex-col">
            <h1 className="font-semibold text-lg text-gray-900 dark:text-gray-50">Log in to Insights</h1>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              Don&rsquo;t have an account?{" "}
              <a className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-400" href="#">
                Sign up
              </a>
            </p>
          </div>
          <div className="mt-10 w-full">
            <div className="sm:flex sm:flex-row sm:items-center gap-2">
              <Button asChild variant="secondary" className="w-full">
                <a href="#" className="inline-flex items-center gap-2">
                  <RiGithubFill className="size-5 shrink-0" aria-hidden="true" />
                  Login with GitHub
                </a>
              </Button>
              <Button asChild variant="secondary" className="mt-2 w-full sm:mt-0">
                <a href="#" className="inline-flex items-center gap-2">
                  <RiGoogleFill className="size-4" aria-hidden="true" />
                  Login with Google
                </a>
              </Button>
            </div>
            <Divider className="my-6">or</Divider>
            <form className="flex w-full flex-col gap-y-6">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col space-y-2">
                  <Label id="email-form-item-label" htmlFor="email-form-item" className="font-medium">
                    Email
                  </Label>
                  <Input
                    autoComplete="email"
                    name="email"
                    id="email-form-item"
                    aria-describedby="email-form-item-description"
                    aria-invalid="false"
                    aria-labelledby="email-form-item-label"
                    placeholder="emily.ross@acme.ch"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label
                    id="password-form-item-label"
                    htmlFor="password-form-item"
                    className="font-medium"
                  >
                    Password
                  </Label>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    id="password-form-item"
                    aria-describedby="password-form-item-description"
                    aria-invalid="false"
                    aria-labelledby="password-form-item-label"
                    placeholder="Password"
                  />
                </div>
              </div>
              <Button type="submit">Continue</Button>
            </form>
          </div>
          <Divider />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Forgot your password?{" "}
            <a className="text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-400" href="#">
              Reset password
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
