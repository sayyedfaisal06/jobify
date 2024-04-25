import Image from "next/image";
import Link from "next/link";
import React from "react";
import { JOBIFY } from "@/definitions/constants";

const Logo = () => {
  return (
    <Link
      href={"/site"}
      className="text-xl font-semibold text-green-600 flex items-center gap-2"
    >
      <Image width={24} height={24} src={"/jobify.png"} alt="" />
      <span>{JOBIFY}</span>
    </Link>
  );
};

export default Logo;
