import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    await project.update(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    await project.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


