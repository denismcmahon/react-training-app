import type {
    ClientId,
    ProjectId,
    TaskId,
    UserId,
    ISODateString
} from './common';

// enums / string unions
export type ProjectStatus = 'planned' | 'active' | 'onHold' | 'completed';

export type TaskStatus = 'todo' | 'inProgress' | 'blocked' | 'done';

export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

// core domain models
export interface Client {
    id: ClientId;
    name: string;
    contactName?: string;
    contactEmail?: string;
    companySize?: 'solo' | 'small' | 'medium' | 'enterprise';
    createdAt: ISODateString;
    updatedAt: ISODateString;
    notes?: string;
}

export interface Project {
    id: ProjectId;
    name: string;
    clientId: ClientId;
    status: ProjectStatus;
    budget?: number;
    startDate?: ISODateString;
    endDate?: ISODateString;
    createdAt: ISODateString;
    updatedAt: ISODateString;
    isArchived: boolean;
}

export interface Task {
    id: TaskId;
    projectId: ProjectId;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    assigneeId?: UserId;
    dueDate?: ISODateString;
    createdAt: ISODateString;
    updatedAt: ISODateString;
}

export interface User {
    id: UserId;
    name: string;
    email: string;
    avatarUrl?: string;
    createdAt: ISODateString;
    updatedAt: ISODateString;
}