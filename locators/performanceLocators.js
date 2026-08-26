const performanceLocators = {
    performanceMenu: page => page.getByRole('link', { name: 'Performance' }),
}

module.exports = performanceLocators;