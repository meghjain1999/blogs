const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// Create a blog
router.post("/", async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a blog
router.put("/:id", async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if (!blog) return res.status(404).json({ error: "Blog not found" });

        await blog.update(req.body);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a blog
router.delete("/:id", async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if (!blog) return res.status(404).json({ error: "Blog not found" });

        await blog.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
