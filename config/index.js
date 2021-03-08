module.exports = {
  [true]: 'http://ec2-34-207-73-14.compute-1.amazonaws.com:3006',
  [env.production === true]: 'http://ec2-34-207-73-14.compute-1.amazonaws.com:3006',
}.true

export default config;
