import Aboutus from "@/components/Aboutus";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";




export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Page loader


  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (loggedIn) {
      router.replace("/dashboard");
    } else {
      setLoading(false);
    }
  }, [router]);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }


  return (
    <div className="bg-gray-50 w-full md:w-full">
      <Navbar />
      <HomePage />
      <Aboutus />
      <Skills />
      <Projects />
      <Contactus />
      <Footer />
    </div>
  )
}
