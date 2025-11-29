/**
 * Gmail Unsubscribe - Filters Module
 */

window.GmailCleaner = window.GmailCleaner || {};

GmailCleaner.Filters = {
    setup() {
        const clearBtn = document.getElementById('filterClearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clear());
        }
    },

    get() {
        const olderThan = document.getElementById('filterOlderThan')?.value || '';
        const largerThan = document.getElementById('filterLargerThan')?.value || '';
        const category = document.getElementById('filterCategory')?.value || '';
        
        return {
            older_than: olderThan,
            larger_than: largerThan,
            category: category
        };
    },

    clear() {
        const olderThan = document.getElementById('filterOlderThan');
        const largerThan = document.getElementById('filterLargerThan');
        const category = document.getElementById('filterCategory');
        
        if (olderThan) olderThan.value = '';
        if (largerThan) largerThan.value = '';
        if (category) category.value = '';
    },

    showBar(show) {
        const filterBar = document.getElementById('filterBar');
        const mainContent = document.querySelector('.main-content');
        
        if (filterBar) {
            if (show) {
                filterBar.classList.remove('hidden');
            } else {
                filterBar.classList.add('hidden');
            }
        }
        if (mainContent) {
            if (show) {
                mainContent.classList.add('with-filters');
            } else {
                mainContent.classList.remove('with-filters');
            }
        }
    }
};

// Global shortcut
function clearFilters() { GmailCleaner.Filters.clear(); }
