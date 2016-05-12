exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/indexSpec.js'],
  baseUrl: 'http://localhost:8080'
};
