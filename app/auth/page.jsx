"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import upload from "@/lib/upload";

export default function Register() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);

      if (res.user && res.user.uid) {
        const userData = {
          username,
          email,
          avatar: imgUrl,
          uid: res.user.uid,
          blocked: [],
        };

        await setDoc(doc(db, "users", res.user.uid), userData);
        await setDoc(doc(db, "userchats", res.user.uid), {
          chats: [],
        });
      } else {
        console.error("Gagal mendapatkan nilai res.user atau res.user.uid");
      }
    } catch (err) {
      console.error("Error saat registrasi:", err);
    } finally {
      setLoading(false);
    }
  };

  const { toast } = useToast();
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Daftar Akun</CardTitle>
          <CardDescription>
            Masukan informasi kamu untuk daftar akun
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister}>
            <div className="grid gap-4">
              <div className="flex gap-2">
                <Label htmlFor="email">
                  <Image
                    src={avatar.url || "/avatar.png"}
                    width={50}
                    height={50}
                    alt="image"
                  />
                </Label>
                <Input id="file" type="file" onChange={handleAvatar} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="first-name">Username</Label>
                <Input id="username" placeholder="Username" name="username" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <Button
                disabled={loading}
                type="submit"
                className="w-full"
                onClick={() => {
                  toast({
                    description: "Akun sudah dibuat, kamu bisa masuk now!",
                  });
                }}
              >
                {loading ? "Loading" : "Daftar"}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
