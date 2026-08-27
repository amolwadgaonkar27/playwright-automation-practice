const claimLocators = {
    submitClaimButton: 'text=Submit Claim',
    myClaimsButton: 'text=My Claims',
    claimMenu: page => page.getByRole('link', { name: 'Claim' })
};

module.exports = claimLocators;