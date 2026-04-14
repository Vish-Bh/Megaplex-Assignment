const API = process.env.NEXT_PUBLIC_API_URL;
export const verifyToken = async () => {
  const token = localStorage.getItem("token");

  if (!token) return false;

  try {
    const res = await fetch(`https://megaplex-assignment-mtl4.onrender.com//api/admin/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return true;
    } else {
      localStorage.removeItem("token");
      return false;
    }
  } catch (err) {
    localStorage.removeItem("token");
    return false;
  }
};