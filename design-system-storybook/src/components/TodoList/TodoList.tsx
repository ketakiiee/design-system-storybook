import React, { useState } from 'react';
import './TodoList.css';

export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  tag?: string;
}

export interface TodoListProps {
  /** List title */
  title?: string;
  /** Initial task items */
  items?: TodoItem[];
  /** Optional task toggle callback */
  onToggleItem?: (id: string, completed: boolean) => void;
  /** Optional delete item callback */
  onDeleteItem?: (id: string) => void;
}

const DEFAULT_ITEMS: TodoItem[] = [
  { id: '1', title: 'Export base color palette to tokens', completed: true, tag: 'Design Tokens' },
  { id: '2', title: 'Bind variables to Figma components', completed: true, tag: 'Figma' },
  { id: '3', title: 'Build React Storybook component specs', completed: false, tag: 'Storybook' },
  { id: '4', title: 'Integrate Google Analytics 4 tracking', completed: false, tag: 'Analytics' },
];

/**
 * **Todo List**
 * 
 * Preserved Layer Name: `Todo List`
 * Figma Node ID: `2105:2654` (FRAME)
 * Page: `Page 3`
 */
export const TodoList: React.FC<TodoListProps> = ({
  title = 'Design System Tasks',
  items: initialItems = DEFAULT_ITEMS,
  onToggleItem,
  onDeleteItem,
}) => {
  const [items, setItems] = useState<TodoItem[]>(initialItems);
  const [newTitle, setNewTitle] = useState('');

  const handleToggle = (id: string) => {
    const next = items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(next);
    const toggled = next.find(i => i.id === id);
    if (toggled) onToggleItem?.(id, toggled.completed);
  };

  const handleDelete = (id: string) => {
    const next = items.filter(item => item.id !== id);
    setItems(next);
    onDeleteItem?.(id);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newItem: TodoItem = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      completed: false,
      tag: 'Task',
    };
    setItems([...items, newItem]);
    setNewTitle('');
  };

  const completedCount = items.filter(i => i.completed).length;

  return (
    <div className="figma-todo-list">
      <div className="figma-todo-list__header">
        <div className="figma-todo-list__title-group">
          <h3 className="figma-todo-list__title">{title}</h3>
          <span className="figma-todo-list__badge">
            {completedCount}/{items.length} completed
          </span>
        </div>
      </div>

      <form onSubmit={handleAdd} className="figma-todo-list__add-form">
        <input
          type="text"
          className="figma-todo-list__input"
          placeholder="Add a new task..."
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <button type="submit" className="figma-todo-list__add-btn" disabled={!newTitle.trim()}>
          Add
        </button>
      </form>

      <div className="figma-todo-list__items">
        {items.length === 0 ? (
          <div className="figma-todo-list__empty">No tasks available</div>
        ) : (
          items.map(item => (
            <div
              key={item.id}
              className={`figma-todo-list__item ${item.completed ? 'figma-todo-list__item--completed' : ''}`}
            >
              <label className="figma-todo-list__label">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleToggle(item.id)}
                  className="figma-todo-list__checkbox"
                />
                <span className="figma-todo-list__checkbox-custom">
                  {item.completed && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </span>
                <span className="figma-todo-list__text">{item.title}</span>
              </label>

              <div className="figma-todo-list__actions">
                {item.tag && <span className="figma-todo-list__tag">{item.tag}</span>}
                <button
                  type="button"
                  className="figma-todo-list__delete-btn"
                  onClick={() => handleDelete(item.id)}
                  aria-label={`Delete task ${item.title}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
