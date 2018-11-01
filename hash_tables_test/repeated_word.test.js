let repeated = require('../hash_tables/repeated_word.js');

describe('Repeated Word Module', () => {

  xit('INSERT: should return word: word', () => {
    let str = 'this is word word';
    const word = repeated(str);
    expect(word).toEqual('word');
  });

  it('INSERT: should return word: a', () => {
    // make regex to split on punctuation and spaces
    let str = 'Once upon a time, there was a brave princess who...';
    const word = repeated(str);
    expect(word).toEqual('a');
  });

  it('INSERT: should return word: summer', () => {
    // make regex to split on punctuation and spaces
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    const word = repeated(str);
    expect(word).toEqual('summer');
  });

  it('INSERT: should return word: it', () => {
    // make regex to split on punctuation and spaces

    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    const word = repeated(str);
    expect(word).toEqual('it');
  });

});