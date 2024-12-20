export interface IntuiTaskPluginSettings {
    projectsDirectory: string;
    tasksDirectory: string;
    eventsDirectory: string;
    inboxTasksPath: string;
}

export type TaskPriority = 'highest' | 'high' | 'medium' | 'low' | 'lowest' | 'normal';
export type TaskStatus = "todo" | "done" | "inProgress" | "cancelled";