"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="w-full max-w-sm h-[440px]">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Masukan email kamu untuk login ke akun kamu
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form onSubmit={handleLogin}>
          <div className="grid gap-2 mt-[10px]">
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="text" placeholder="Email" />
          </div>
          <div className="grid gap-2 mt-[20px]">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          disabled={loading}
          className="w-full"
          onClick={() => {
            toast({
              title: "Kamu sudah login",
            });
          }}
        >
          {loading ? "Loading" : "Masuk"}
        </Button>
      </CardFooter>
      <div className="flex text-[12px] ml-[25px] mt-[-15px]">
        <p>Belum punya akun?</p>
        <Link href="/auth/" className="ml-2 hover:text-gray-300">
          Daftar Akun
        </Link>
      </div>
    </Card>
  );
}
