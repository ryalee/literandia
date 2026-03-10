"use client"

import { useEffect, useState } from "react";
import FirstTimeHome from "@/components/FirstTimeHome";
import HomeDashboard from "@/components/HomeDashboard";

export default function Home() {
  const [books, setBooks] = useState([]);

  if(books.length === 0) {
    return <FirstTimeHome />
  }

  return <HomeDashboard books={books}/>
}