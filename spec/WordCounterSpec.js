describe('WordCounter', function() {
  var wordCounter;

  beforeEach(function() {
    wordCounter = new WordCounter();
  });

  it('takes a file as argument', function() {
    var testWordCounter = new WordCounter("testing one two one two one");
    expect(testWordCounter.text).toEqual("testing one two one two one");
  });
});
