"use client";
import { Session, User } from "next-auth";
import Image from "next/image";

export default function UserInfo(user: User) {
  return (
    <div className={`h-3/4 600 rounded-t-2xl px-10`}>
      {/*<div className={`rounded-full h-20 w-20 overflow-hidden relative`}>
        <Image
          className="object-cover"
          src={user.image!}
          quality={100}
          alt={user.name!}
          priority={true}
          fill={true}
        />
      </div>*/}
      <div className={`h-2/5`}>
        <p className={`text-slate-900 text-6xl font-bold`}>{user.name}</p>
      </div>
    </div>
  );
}
