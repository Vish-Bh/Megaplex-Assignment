'use client'
import { useEffect, useState } from "react";
const API = process.env.NEXT_PUBLIC_API_URL;
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ConnectivitySection from "@/components/ConnectivitySection";
import AmenitiesSection from "@/components/AmenitiesSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import ConstructionSection from "@/components/ConstructionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

import { verifyToken } from "@/utils/auth";
import { handleSaveToBackend } from "@/utils/saveData";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";
import { defaultContent } from "@/data/content";


export default function Page() {
  const [view, setView] = useState("website");
  const [content, setContent] = useState(defaultContent);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadContent = async () => {
      try {
        const res = await fetch(`${API}/api/content`);
        const data = await res.json();

        // backend returns empty object OR null → fallback
        if (data && data.data) {
          setContent(data.data);
        } else {
          setContent(defaultContent);
        }
      } catch (err) {
        setContent(defaultContent);
      }
    };

    loadContent();
  }, []);


  // ✅ Handle login properly
  const handleLogin = async (email:any, password:any) => {
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        setView("admin");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Login failed");
    }
  };

  // ✅ Admin Login View
  if (view === "adminLogin") {
    return (
      <AdminLogin
        onLogin={handleLogin}
        error={error}
        onBack={() => setView("website")}
      />
    );
  }

  // ✅ Admin Dashboard
  if (view === "admin") {
    return (
      <AdminDashboard
        content={content}
        onLogout={() =>
          localStorage.removeItem("token")}
        onBack={() => setView("website")}
        backToDefault={async () => {
          try {
            const res = await handleSaveToBackend(defaultContent);

            if (res?.success) {
              setContent(defaultContent);
              setView("website");
            } else {
              alert(res?.message || "Reset failed");
            }
          } catch (err) {
            alert("Reset failed");
          }
        }}
        onSave={async (updatedContent:any) => {
          try {
            const res = await handleSaveToBackend(updatedContent);

            if (res?.success) {
              setContent(updatedContent);
              setView("website");
            }

            return res; // 🔥 THIS IS THE MISSING PIECE
          } catch (err) {
            return { success: false, message: "Save failed" };
          }
        }}
      />
    );
  }

  // ✅ Website View
  return (
    <>
      <Navbar
        onAdminClick={async () => {
          const isValid = await verifyToken();
          setView(isValid ? "admin" : "adminLogin");
        }}
      />

      <HeroSection data={content.hero} />
      <OverviewSection data={content.overview} />
      <ConnectivitySection data={content.connectivity} />
      <AmenitiesSection data={content.amenities} />
      <FloorPlansSection data={content.floorPlans} />
      <VideoSection />
      <AboutSection data={content.about} />
      <ConstructionSection data={content.construction} />
      <FAQSection data={content.faq} />
      <Footer />
    </>
  );
}