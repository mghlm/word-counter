'use strict';

describe('WordCounter', function() {
  var wordCounter;

  beforeEach(function() {
    wordCounter = new WordCounter("testing one two one two one");
  });

  it('takes a file as argument', function() {
    expect(wordCounter.text).toEqual("testing one two one two one");
  });

  describe('Text', function() {
    it('is split into array', function() {
      expect(wordCounter.createArray()).toEqual(["testing", "one", "two", "one", "two", "one"]);
    });

    it('counts and dedupes array', function() {
      var textArray = wordCounter.createArray();
      expect(wordCounter.countWords(textArray)).toEqual({"testing": 1, "one": 3, "two": 2});
    });

    it('converts words and counts to array', function() {
      var textArray = wordCounter.createArray();
      var countedWordsObj = wordCounter.countWords(textArray);
      expect(wordCounter.convertCountedToArray(countedWordsObj)).toEqual([ [ 'testing', 1 ], [ 'one', 3 ], [ 'two', 2 ] ]);
    });

    it('sorts array in descending order of frequency', function() {
      var textArray = wordCounter.createArray();
      var countedWordsObj = wordCounter.countWords(textArray);
      var countedWordsArr = wordCounter.convertCountedToArray(countedWordsObj);
      expect(wordCounter.sortArray(countedWordsArr)).toEqual([ [ 'one', 3 ], [ 'two', 2 ], [ 'testing', 1 ] ])
    });

    it('runs through all convertion processes and returns final 2d array of counted words', function() {
      expect(wordCounter.returnCountedWords()).toEqual([ [ 'one', 3 ], [ 'two', 2 ], [ 'testing', 1 ] ]);
    });
  });

  // describe('Interface', function() {
  //   it('creates array of words frequency wrapped in html', function() {
  //     var testArray = [["word", 3], ["another", 2]]
  //     expect(printCountedWordsAsList(testArray)).toEqual(["<p> <b> word </b> occures 3 times </p>"]);
  //   });
  // })

  describe('Number', function() {
    it('returns true if passed number is a prime, otherwise it returns false', function() {
      expect(_isNumberPrime(1)).toBeFalsy();
      expect(_isNumberPrime(2)).toBeTruthy();
      expect(_isNumberPrime(3)).toBeTruthy();
      expect(_isNumberPrime(4)).toBeFalsy();
    });
  });
});
