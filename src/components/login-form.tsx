'use client'
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
import  {useState}  from "react";
import { client } from "../supabase/client"

export function LoginForm({


  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [email, setEmail] = useState ("");

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault();

    try{
      const result = await client.auth.signInWithOtp({
        email,
      });
      console.log(result)

    }
    catch(error){

    }

   

  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
               
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
             
            </div>
          
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
