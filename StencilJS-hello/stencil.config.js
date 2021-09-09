exports.config = {
  namespace: 'mycomponent',
  outputTargets:[
    { type: 'dist' },
    { type: 'www' }
  ],
  namespace: 'hello-world',
  generateDistribution: true,
  generateWWW: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
