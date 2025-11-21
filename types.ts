import React from 'react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export interface ModelFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: number;
  role: 'user' | 'model';
  text: string;
  delay: number; // Animation delay in ms
}

export interface TaskCategory {
  title: string;
  tasks: string[];
}

export enum AnalysisState {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  ANALYZING = 'ANALYZING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}