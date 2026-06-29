// pages/api/flowState.js - Fixed version with better error handling

import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'public', 'flowState.json');

// Ensure file exists with default content
function ensureFlowStateFile() {
  const DEFAULT_STATE = {
    positions: {},
    expanded: ['0'],
    selectedNode: null,
    lastUpdated: new Date().toISOString(),
  };

  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(DEFAULT_STATE, null, 2), 'utf-8');
      console.log('[FlowState] Created default file:', DATA_FILE);
    }
  } catch (error) {
    console.error('[FlowState] Error creating file:', error);
  }
}

// Load state from file
function loadFlowState() {
  try {
    ensureFlowStateFile();
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsed = JSON.parse(data);
      console.log('[FlowState] Loaded from disk:', Object.keys(parsed.positions).length, 'positions');
      return parsed;
    }
  } catch (error) {
    console.error('[FlowState] Error loading:', error.message);
  }
  
  return {
    positions: {},
    expanded: ['0'],
    selectedNode: null,
    lastUpdated: new Date().toISOString(),
  };
}

// Save state to file
function saveFlowState(state) {
  try {
    ensureFlowStateFile();
    const dataToWrite = {
      ...state,
      lastUpdated: new Date().toISOString(),
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(dataToWrite, null, 2), 'utf-8');
    console.log('[FlowState] Saved to disk:', Object.keys(state.positions).length, 'positions');
    return { success: true, message: 'Saved to disk' };
  } catch (error) {
    console.error('[FlowState] Error saving:', error.message);
    return { success: false, error: error.message };
  }
}

export default function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const state = loadFlowState();
      return res.status(200).json(state);
    }
    
    if (req.method === 'POST') {
      const { positions, expanded, selectedNode } = req.body;
      
      if (!positions || !expanded) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const result = saveFlowState({ positions, expanded, selectedNode });
      return res.status(200).json(result);
    }
    
    if (req.method === 'DELETE') {
      const defaultState = { positions: {}, expanded: ['0'], selectedNode: null };
      saveFlowState(defaultState);
      return res.status(200).json({ success: true, message: 'Reset to defaults' });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('[FlowState] Unhandled error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}