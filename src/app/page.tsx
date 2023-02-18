import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { Dashboard } from "@/views/dashboard";

export default function Home() {
  return <Dashboard></Dashboard>;
}
