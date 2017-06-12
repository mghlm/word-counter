'use strict';

describe('CountWords', function() {
  var countWords;

  beforeEach(function() {
    countWords = new CountWords("testing one two one two one");
  });

  it('takes a file as argument', function() {
    expect(countWords.text).toEqual("testing one two one two one");
  });

  describe('Text', function() {
    it('is split into array', function() {
      expect(countWords.createArray()).toEqual(["testing", "one", "two", "one", "two", "one"]);
    });

    it('counts and dedupes array', function() {
      var textArray = countWords.createArray();
      expect(countWords.countWords(textArray)).toEqual({"testing": 1, "one": 3, "two": 2});
    });

    it('converts words and counts to array', function() {
      var textArray = countWords.createArray();
      var countedWordsObj = countWords.countWords(textArray);
      expect(countWords.convertCountedToArray(countedWordsObj)).toEqual([ [ 'testing', 1 ], [ 'one', 3 ], [ 'two', 2 ] ]);
    });

    it('sorts array in descending order of frequency', function() {
      var textArray = countWords.createArray();
      var countedWordsObj = countWords.countWords(textArray);
      var countedWordsArr = countWords.convertCountedToArray(countedWordsObj);
      expect(countWords.sortArray(countedWordsArr)).toEqual([ [ 'one', 3 ], [ 'two', 2 ], [ 'testing', 1 ] ])
    });

    it('runs through all convertion processes and returns final 2d array of counted words', function() {
      expect(countWords.returnCountedWords()).toEqual([ [ 'one', 3 ], [ 'two', 2 ], [ 'testing', 1 ] ]);
    });
  });
});
