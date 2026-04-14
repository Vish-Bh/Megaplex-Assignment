export const handleSaveToBackend = async (updatedContent) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/content/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: updatedContent }),
    });

    const data = await res.json();

    console.log("SAVE RESPONSE:", data);

    return data; // ✅ VERY IMPORTANT
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};