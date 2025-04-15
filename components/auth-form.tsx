import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

export function AuthForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [isSignup, setIsSignup] = useState(false)

  const toggleMode = () => setIsSignup(!isSignup)

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {isSignup ? "Create an Account" : "Login"}
          </CardTitle>
          <CardDescription>
            {isSignup
              ? "Join the magic. Enter your details below."
              : "Welcome back. Enter your credentials."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <motion.div
              layout
              className="flex flex-col gap-6 transition-all duration-500"
            >
              <AnimatePresence>
                {isSignup && (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-2"
                  >
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required={isSignup}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {!isSignup && (
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder={isSignup ? "At least 8 characters" : "••••••••"}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                {isSignup ? "Sign Up" : "Login"}
              </Button>
              <Button variant="outline" className="w-full">
                {isSignup ? "Sign up with Google" : "Login with Google"}
              </Button>

              <motion.div
                layout
                className="mt-4 text-center text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="underline underline-offset-4"
                    >
                      Login
                    </button>
                  </>
                ) : (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="underline underline-offset-4"
                    >
                      Create one
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
