const dropDownLocators = {
    userManagementDropdown: 'text=User Management',
    jobDropdown: 'text=Job',
    organizationDropdown: 'text=Organization',
    qualificationsDropdown: 'text=Qualifications',
    configurationDropdown: 'text=Configuration',
    entitlementsDropdown: 'text=Entitlements',
    leaveMenu: page => page.getByRole('link', { name: 'Leave' }),
    reportsDropdown: page => page.getByRole('listitem').filter({ hasText: 'Reports' }),
    configureDropdown: page => page.getByRole('listitem').filter({ hasText: 'Configure' }),
    timesheetsDropdown: page => page.getByRole('listitem').filter({ hasText: 'Timesheets' }),
    attendanceDropdown: page => page.getByRole('listitem').filter({ hasText: 'Attendance' }),
    reportsDropdown: page => page.getByRole('listitem').filter({ hasText: 'Reports' }),
    projectInfoDropdown: page => page.getByRole('listitem').filter({ hasText: 'Project Info' }),
    configureDropdown: page => page.getByRole('listitem').filter({ hasText:'Configure' }),
    manageReviewsDropdown: page => page.getByRole('listitem').filter({ hasText:'Manage Reviews' })
};

module.exports = dropDownLocators;