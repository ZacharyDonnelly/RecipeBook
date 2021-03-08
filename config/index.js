export default {
  [true]: 'http://ec2-18-188-224-237.us-east-2.compute.amazonaws.com:3006',
  [env.production === true]: 'http://ec2-18-188-224-237.us-east-2.compute.amazonaws.com:3006',
}.true

export { config };
