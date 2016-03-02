'use strict';

const adjectives = require('./adjectives');
const nouns = require('./nouns');
const verbs = require('./verbs');

exports.generate = function () {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const noun2 = nouns[Math.floor(Math.random() * nouns.length)];

  return [noun, verb, adjective, noun2];
}