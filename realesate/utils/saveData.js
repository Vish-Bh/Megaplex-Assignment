const API = process.env.NEXT_PUBLIC_API_URL;
export const handleSaveToBackend = async (updatedContent) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`https://megaplex-assignment-mtl4.onrender.com/api/content/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: updatedContent }),
    });

    const data = await res.json();

    console.log("SAVE RESPONSE:", data);

    return data; 
  } catch (err) {
    console.log(err);
    return { success: false };
  }
};