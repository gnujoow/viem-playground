"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useBlockNumber } from "./queries";

export default function Home() {
  const { data } = useBlockNumber();

  if (data === null) {
    return null;
  }
  return <main>{data?.toString()}</main>;
}
