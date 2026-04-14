const Content = require("../models/ContentSchema");

const CONTENT_ID = "GLOBAL_CONTENT";

exports.saveContent = async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "No data provided",
      });
    }

    const updated = await Content.findOneAndUpdate(
      { _id: CONTENT_ID },
      { data },
      {
       returnDocument: "after",
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    return res.json({
      success: true,
      message: "Content saved successfully",
      updated,
    });
  } catch (err) {
    console.error("SAVE ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
// GET content
exports.getContent = async (req, res) => {
  try {
    const content = await Content.findOne({ _id: "GLOBAL_CONTENT" });
    res.json({
  success: true,
  data: content?.data || null,
});
  } catch (err) {
    res.status(500).json({ message: "Error fetching content" });
  }
};