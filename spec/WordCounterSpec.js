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
      expect(wordCounter.convertCountedToArray(countedWordsObj)).toEqual( [ [ 'testing', 1 ], [ 'one', 3 ], [ 'two', 2 ] ]);
    });
  });
});
