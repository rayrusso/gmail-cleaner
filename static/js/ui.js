/**
 * Gmail Unsubscribe - UI Utilities Module
 */

window.GmailCleaner = window.GmailCleaner || {};

GmailCleaner.UI = {
    setupNavigation() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.dataset.view;
                this.showView(view);
            });
        });
    },

    showView(viewName) {
        GmailCleaner.currentView = viewName;
        
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.add('hidden');
        });
        
        // Show requested view
        const viewId = viewName + 'View';
        const view = document.getElementById(viewId);
        if (view) {
            view.classList.remove('hidden');
        }
        
        // Update nav active state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.view === viewName) {
                item.classList.add('active');
            }
        });
        
        // Special handling for unsubscribe view
        if (viewName === 'unsubscribe') {
            if (GmailCleaner.results.length === 0) {
                document.getElementById('noResults').classList.remove('hidden');
                document.getElementById('resultsSection').classList.add('hidden');
            } else {
                document.getElementById('noResults').classList.add('hidden');
                document.getElementById('resultsSection').classList.remove('hidden');
            }
        }
        
        // Refresh unread count when switching to Mark Read view
        if (viewName === 'markread') {
            GmailCleaner.MarkRead.refreshUnreadCount();
        }
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text || '';
        return div.innerHTML;
    },

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
};

// Global shortcuts
function showView(viewName) { GmailCleaner.UI.showView(viewName); }
function toggleSidebar() { GmailCleaner.UI.toggleSidebar(); }
