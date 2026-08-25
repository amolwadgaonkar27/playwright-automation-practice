const leaveLocators = {
    leaveHeader: 'h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module',
    leaveMenu: page => page.getByRole('link', { name: 'Leave' }),
    leaveList: 'a[href*="/leave/viewLeaveList"]',
    applyLeave: 'a[href*="/leave/applyLeave"]'
};

module.exports = leaveLocators;
